import Image from 'next/image';
import Link from 'next/link';

export default function DrugPage() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Top Section */}
      <header className="relative">
        <button className="absolute top-4 left-4">
          <Image src="/close-icon.svg" alt="Close" width={24} height={24} />
        </button>
        <Image
          src="/drug-image.jpg" // Placeholder for the drug image
          alt="Drug Image"
          width={500}
          height={300}
          className="w-full h-64 object-cover"
        />
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Drug Info */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Fluconazole</h1>
          <span className="px-3 py-1 bg-red-500 text-white text-xs rounded-full">
            Disapproved
          </span>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6">
          <button className="px-4 py-2 bg-gray-200 text-sm rounded-full">Composition</button>
          <button className="px-4 py-2 bg-black text-white text-sm rounded-full">Details</button>
          <button className="px-4 py-2 bg-gray-200 text-sm rounded-full">Dosage</button>
          <button className="px-4 py-2 bg-gray-200 text-sm rounded-full">EXP</button>
        </div>

        {/* Drug Details */}
        <p className="text-sm text-gray-600 mb-4">
          This drug is disapproved. It doesnt contain the correct packaging, nor does its barcode or ISO align with the original manufacturers certification. Youre not advised to consume it as it isn’t registered in any approved drugs databases.
        </p>

        {/* Risk Level */}
        <div className="flex flex-col mb-6">
          <h3 className="text-lg font-semibold mb-2">Risk Level</h3>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-gray-200 rounded-full">Mild</span>
            <span className="px-3 py-1 bg-yellow-500 text-white rounded-full">Moderate</span>
            <span className="px-3 py-1 bg-gray-200 rounded-full">Severe</span>
          </div>
        </div>

        {/* Report Button */}
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 bg-gray-200 rounded-full">+</button>
          <button className="flex-1 px-6 py-2 bg-black text-white rounded-full">
            Report
          </button>
        </div>
      </main>
    </div>
  );
}
