/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import { Shield, User, Search, Info } from 'lucide-react';
import axios from 'axios';

const MainDashboard = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any>([]);
  const [selectedDrug, setSelectedDrug] = useState<any>(null);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [drugInfo, setDrugInfo] = useState<any>(null);

  const handleSearch = async () => {
    try {
      const response = await axios.post('/api/drug-search', { term: searchTerm });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching drugs:', error);
    }
  };

  const handleDrugSelect = async (drug:any) => {
    setSelectedDrug(drug);
    try {
      const infoResponse = await axios.post('/api/drug-info', { drugName: drug.name });
      setDrugInfo(infoResponse.data);
    } catch (error) {
      console.error('Error fetching drug info:', error);
    }
  };

  const handleVerification = async () => {
    try {
      const response = await axios.post('/api/drug-verification', { 
        drugInfo: selectedDrug,
        useCase: 'General use' // You might want to add a field for users to specify this
      });
      setVerificationResult(response.data);
    } catch (error) {
      console.error('Error verifying drug:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Medify Dashboard</h1>
      
      <div className="flex flex-wrap mb-6">
        <TabButton icon={<Search />} label="Search" active={activeTab === 'search'} onClick={() => setActiveTab('search')} />
        <TabButton icon={<Shield />} label="Verify" active={activeTab === 'verify'} onClick={() => setActiveTab('verify')} />
        <TabButton icon={<Info />} label="Drug Info" active={activeTab === 'info'} onClick={() => setActiveTab('info')} />
        <TabButton icon={<User />} label="Health Profile" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
      </div>

      <div className="bg-white shadow-md rounded-lg p-6">
        {activeTab === 'search' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Search Drugs</h2>
            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-grow border rounded-md p-2"
                placeholder="Enter drug name"
              />
              <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
            </div>
            {searchResults.length > 0 && (
              <ul className="divide-y">
                {searchResults.map((drug:any) => (
                  <li key={drug.id} className="py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleDrugSelect(drug)}>
                    {drug.name} ({drug.genericName})
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {activeTab === 'verify' && selectedDrug && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Verify Drug</h2>
            <p className="mb-4">Selected Drug: {selectedDrug.name}</p>
            <button onClick={handleVerification} className="bg-green-500 text-white px-4 py-2 rounded-md">Verify</button>
            {verificationResult && (
              <div className="mt-4">
                <h3 className="font-semibold">Verification Result:</h3>
                <p>Suitability: <span style={{color: verificationResult.suitabilityColor}}>{verificationResult.suitability}</span></p>
                <p>Reasoning: {verificationResult.reasoning}</p>
                <h4 className="font-semibold mt-2">Warnings:</h4>
                <ul className="list-disc pl-5">
                  {verificationResult.warnings.map((warning:string, index:number) => (
                    <li key={index}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'info' && drugInfo && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Drug Information: {drugInfo.name}</h2>
            <p className="mb-2">{drugInfo.summary}</p>
            <h3 className="font-semibold mt-4">Usages:</h3>
            <ul className="list-disc pl-5">
              {drugInfo.usages.map((usage:string, index:number) => (
                <li key={index}>{usage}</li>
              ))}
            </ul>
            <h3 className="font-semibold mt-4">Side Effects:</h3>
            <ul className="list-disc pl-5">
              {drugInfo.sideEffects.map((effect:string, index:number) => (
                <li key={index}>{effect}</li>
              ))}
            </ul>
            <h3 className="font-semibold mt-4">Precautions:</h3>
            <ul className="list-disc pl-5">
              {drugInfo.precautions.map((precaution:string, index:number) => (
                <li key={index}>{precaution}</li>
              ))}
            </ul>
            <p className="mt-4"><strong>Additional Info:</strong> {drugInfo.additionalInfo}</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Health Profile</h2>
            <p>Health profile management interface goes here.</p>
            {/* Add form for updating health profile */}
          </div>
        )}
      </div>
    </div>
  );
};

const TabButton = ({ icon, label, active, onClick }:any) => (
  <button
    className={`flex items-center px-4 py-2 rounded-t-lg ${
      active ? 'bg-white text-blue-600 border-t border-l border-r' : 'bg-gray-200 text-gray-600'
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </button>
);

export default MainDashboard;