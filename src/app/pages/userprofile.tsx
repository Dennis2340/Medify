import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HealthProfile() {
  const [sex, setSex] = useState('Male');
  const [age, setAge] = useState(12);
  const [weight, setWeight] = useState(60);
  const [allergies, setAllergies] = useState('');
  const [healthConditions, setHealthConditions] = useState('');
  const [lifestyle, setLifestyle] = useState('');

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Setup Health Profile
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center sm:text-left">
          Your health profile helps guide our AI prescriptions.
        </p>

        <div className="w-full flex justify-center">
          <div className="rounded-full bg-gray-200 h-20 w-20 flex items-center justify-center">
            {/* Placeholder for user image */}
            <Image src="/default-avatar.svg" alt="Profile Avatar" width={40} height={40} />
          </div>
        </div>

        {/* Sex Dropdown */}
        <label className="w-full">
          <span className="block text-sm font-medium text-gray-700 mb-2">Sex</span>
          <select
            className="w-full p-3 rounded-lg border border-gray-300"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>

        {/* Age and Weight Controls */}
        <div className="w-full flex gap-4">
          <div className="flex flex-col w-1/2">
            <span className="block text-sm font-medium text-gray-700 mb-2">Age</span>
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-200 rounded-full p-2"
                onClick={() => setAge(age > 0 ? age - 1 : 0)}
              >
                -
              </button>
              <span>{age}</span>
              <button
                className="bg-gray-200 rounded-full p-2" 
                onClick={() => setAge(age + 1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-col w-1/2">
            <span className="block text-sm font-medium text-gray-700 mb-2">Weight (KG)</span>
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-200 rounded-full p-2"
                onClick={() => setWeight(weight > 0 ? weight - 1 : 0)}
              >
                -
              </button>
              <span>{weight}</span>
              <button
                className="bg-gray-200 rounded-full p-2"
                onClick={() => setWeight(weight + 1)}
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Allergies */}
        <label className="w-full">
          <span className="block text-sm font-medium text-gray-700 mb-2">Allergies</span>
          <input
            className="w-full p-3 rounded-lg border border-gray-300"
            type="text"
            value={allergies}
            onChange={(e) => setAllergies(e.target.value)}
            placeholder="e.g., Penicillin, Nuts"
          />
        </label>

        {/* Health Conditions */}
        <label className="w-full">
          <span className="block text-sm font-medium text-gray-700 mb-2">Health Conditions</span>
          <input
            className="w-full p-3 rounded-lg border border-gray-300"
            type="text"
            value={healthConditions}
            onChange={(e) => setHealthConditions(e.target.value)}
            placeholder="e.g., Diabetes, Hypertension"
          />
        </label>

        {/* Lifestyle */}
        <label className="w-full">
          <span className="block text-sm font-medium text-gray-700 mb-2">Lifestyle (Exercise, Alcohol Intake, etc.)</span>
          <input
            className="w-full p-3 rounded-lg border border-gray-300"
            type="text"
            value={lifestyle}
            onChange={(e) => setLifestyle(e.target.value)}
            placeholder="e.g., Regular exercise, Non-smoker"
          />
        </label>

        {/* Upload Medical Record */}
        <div className="w-full mt-6 flex items-center justify-between bg-gray-100 rounded-lg p-3 border border-gray-300">
          <div className="flex items-center gap-2">
            <Image src="/medical-record-icon.svg" alt="Medical Record" width={24} height={24} />
            <span className="text-sm font-medium text-gray-700">Medical Record</span>
          </div>
          <button className="px-4 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50">
            Upload
          </button>
        </div>
      </main>
    </div>
  );
}
