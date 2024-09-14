import type { NextPage } from 'next';
import styles from './prescribe.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Prescribe: NextPage = () => {
  return (
    <div className={styles.prescribe}>
      {/* Header */}
      <header className="p-4 border-b border-gray-200 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/Left Button.svg" // Replace with the actual back button icon
            alt="Back"
            width={24}
            height={24}
          />
        </Link>
        <h1 className="text-2xl font-bold">Prescribe</h1>
      </header>

      {/* Main Content */}
      <div className="p-4 space-y-6">
        {/* Section Heading */}
        <div>
          <h2 className="text-xl font-semibold">Let’s prescribe drugs for you...</h2>
          <p className="text-gray-600">Kindly help us with the following information:</p>
        </div>

        {/* Symptoms */}
        <div>
          <b className="text-lg">Symptoms?</b>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">HeadACHE</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">FEVER</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">NAUSEA</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">STOOLING</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">COUGHING</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">APPETITE LOSS</div>
          </div>
        </div>

        {/* Improvement Suggestions */}
        <div>
          <b className="text-lg">What could be improved?</b>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">More components</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Complex</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Not interactive</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Only English</div>
          </div>
        </div>

        {/* Symptoms Timing */}
        <div>
          <b className="text-lg">When did your symptoms first appear?</b>
          <div className="flex flex-wrap gap-2 mt-2">
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Could have more components</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Complex</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Not interactive</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Only English</div>
          </div>
        </div>

        {/* Previous Medication */}
        <div>
          <b className="text-lg">Have you had some drugs already?</b>
          <div className="flex gap-2 mt-2">
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Yes</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">No</div>
          </div>
        </div>

        {/* Pregnancy/Breastfeeding */}
        <div>
          <b className="text-lg">Are you breastfeeding or pregnant?</b>
          <div className="flex gap-2 mt-2">
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">Yes</div>
            <div className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">No</div>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <b className="text-lg">Anything else?</b>
          <textarea
            className="w-full p-4 mt-2 border rounded-lg"
            placeholder="Tell us everything."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-4">
          <button className="w-full py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-500">
            Submit
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full p-4 bg-gray-100 border-t border-gray-200 flex items-center justify-around">
        <Link href="/find-pharmacy">
          <a className="text-gray-600 hover:text-black">Find a Pharmacy</a>
        </Link>
        <Link href="/alerts">
          <a className="text-gray-600 hover:text-black">Alerts</a>
        </Link>
        <Link href="/settings">
          <a className="text-gray-600 hover:text-black">Settings</a>
        </Link>
      </footer>
    </div>
  );
};

export default Prescribe;
