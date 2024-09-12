/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export interface DrugInfo {
    id: string;
    name: string;
    genericName: string;
    manufacturer: string;
    activeIngredients: string[];
    usage: string;
    sideEffects: string[];
    contraindications: string[];
}

const baseUrl = 'https://api.fda.gov/drug/drugsfda.json';

export const searchDrugs = async (searchTerm: string, limit = 10): Promise<DrugInfo[]> => {
    try {
        const response = await axios.get(baseUrl, {
            params: {
                search: `(products.brand_name:"${searchTerm}" OR products.generic_name:"${searchTerm}" OR openfda.manufacturer_name:"${searchTerm}")`,
                limit: limit
            }
        });

        if (response.data.results && response.data.results.length > 0) {
            return response.data.results.flatMap((drug: any) => 
                drug.products.map((product: any) => ({
                    id: `${drug.application_number}-${product.product_number}`,
                    name: product.brand_name,
                    genericName: product.generic_name,
                    manufacturer: drug.sponsor_name,
                    activeIngredients: product.active_ingredients.map((ai: any) => ai.name),
                    usage: product.dosage_form,
                    sideEffects: [], // Not available in this API
                    contraindications: [] // Not available in this API
                }))
            );
        }

        return [];
    } catch (error) {
        console.error('Error searching drugs:', error);
        return [];
    }
};

export const queryDrugAPI = async (drugId: string): Promise<DrugInfo | null> => {
    try {
        const [applicationNumber, productNumber] = drugId.split('-');
        const response = await axios.get(baseUrl, {
            params: {
                search: `application_number:"${applicationNumber}"`,
                limit: 1
            }
        });

        if (response.data.results && response.data.results.length > 0) {
            const drug = response.data.results[0];
            const product = drug.products.find((p: any) => p.product_number === productNumber);

            if (product) {
                return {
                    id: drugId,
                    name: product.brand_name,
                    genericName: product.generic_name,
                    manufacturer: drug.sponsor_name,
                    activeIngredients: product.active_ingredients.map((ai: any) => ai.name),
                    usage: product.dosage_form,
                    sideEffects: [], // Not available in this API
                    contraindications: [] // Not available in this API
                };
            }
        }

        return null;
    } catch (error) {
        console.error('Error querying drug API:', error);
        return null;
    }
};