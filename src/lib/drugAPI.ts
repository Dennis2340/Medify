/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const baseUrl = 'https://dailymed.nlm.nih.gov/dailymed/services/v2';

export interface DrugInfo {
    id: string;
    name: string;
    activeIngredients: string[];
    usage: string;
    sideEffects: string[];
    contraindications: string[];
}

interface DrugSearchResult {
    product_id: string;
    drug_name: string;
}

export const searchDrugs = async (searchTerm: string, limit = 10): Promise<DrugSearchResult[]> => {
    try {
        const response = await axios.get(`${baseUrl}/drugnames.json`, {
            params: {
                drug_name: searchTerm,
                pagesize: limit
            }
        });

        if (response.data.data && response.data.data.length > 0) {
            return response.data.data.map((drug: any) => ({
                product_id: drug.product_id,
                drug_name: drug.drug_name
            }));
        }

        return [];
    } catch (error) {
        console.error('Error searching drugs:', error);
        throw error;
    }
};

export const getDrugDetails = async (setId: string): Promise<DrugInfo> => {
    try {
        const [splResponse] = await Promise.all([
            axios.get(`${baseUrl}/spls/${setId}.json`),
            axios.get(`${baseUrl}/spls/${setId}/packaging.json`)
        ]);

        const splData = splResponse.data.data[0];
        // const packagingData = packagingResponse.data.data;

        const activeIngredients = splData.active_ingredient_name
            ? splData.active_ingredient_name.split(';').map((ingredient: string) => ingredient.trim())
            : [];

        return {
            id: setId,
            name: splData.title || '',
            activeIngredients,
            usage: splData.indications_and_usage || '',
            sideEffects: splData.adverse_reactions ? [splData.adverse_reactions] : [],
            contraindications: splData.contraindications ? [splData.contraindications] : []
        };
    } catch (error) {
        console.error('Error fetching drug details:', error);
        throw error;
    }
};

export const getDrugPDF = (setId: string): string => {
    return `https://dailymed.nlm.nih.gov/dailymed/getFile.cfm?setid=${setId}&type=pdf`;
};