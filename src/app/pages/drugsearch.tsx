import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './search.module.css';

const DrugSearch: NextPage = () => {
  return (
    <div className={styles.drugSearch}>
      {/* Header */}
      <header className="p-4 border-b border-gray-200">
        <h1 className="text-2xl font-bold">Drug Search</h1>
      </header>

      {/* Search Bar */}
      <div className="flex items-center justify-center my-6">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search for drugs"
            className="w-full px-4 py-2 border rounded-full shadow-sm focus:outline-none focus:border-blue-500"
          />
          <Image
            src="/Search.svg" // Replace with your actual search icon
            alt="Search Icon"
            width={20}
            height={20}
            className="absolute top-2 right-4"
          />
        </div>
      </div>

      {/* Recent Searches */}
      <div className="px-4">
        <h2 className="text-xl font-semibold mb-4">Recent Searches</h2>
        <div className="space-y-4">
          {/* List Item */}
          <div className="flex justify-between items-center py-2 px-4 border rounded-lg shadow-sm">
            <span className="text-lg font-medium">Panadol</span>
            <Image
              src="/Right Button.png" // Replace with actual right arrow icon
              alt="Right Arrow"
              width={24}
              height={24}
            />
          </div>
          <div className="flex justify-between items-center py-2 px-4 border rounded-lg shadow-sm">
            <span className="text-lg font-medium">Paracetamol</span>
            <Image
              src="/Right Button.png"
              alt="Right Arrow"
              width={24}
              height={24}
            />
          </div>
          <div className="flex justify-between items-center py-2 px-4 border rounded-lg shadow-sm">
            <span className="text-lg font-medium">Tramadol</span>
            <Image
              src="/Right Button.png"
              alt="Right Arrow"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full p-4 bg-gray-100 border-t border-gray-200 flex items-center justify-around">
        <button className="text-gray-600 hover:text-black">Find a Pharmacy</button>
        <button className="text-gray-600 hover:text-black">Alerts</button>
        <button className="text-gray-600 hover:text-black">Settings</button>
      </footer>
    </div>
  );
};

export default DrugSearch;
