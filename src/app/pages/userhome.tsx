import Image from 'next/image';
import Link from 'next/link';

export default function VerifyDrug() {
  return (
    <div className="flex flex-col min-h-screen p-8 font-[family-name:var(--font-geist-sans)] justify-between">
      {/* Top Navigation */}
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-lg font-bold text-gray-800">Home</h1>
        <button>
          <Image src="/search-icon.svg" alt="Search" width={24} height={24} />
        </button>
      </header>

      {/* Tab Navigation */}
      <nav className="flex items-center justify-center space-x-4 mb-8">
        <Link href="/doc-bot">
          <a className="px-4 py-2 text-sm rounded-full bg-gray-100">Doc Bot</a>
        </Link>
        <Link href="/verify">
          <a className="px-4 py-2 text-sm rounded-full bg-gray-200 font-semibold">Verify</a>
        </Link>
        <Link href="/prescribe">
          <a className="px-4 py-2 text-sm rounded-full bg-gray-100">Prescribe</a>
        </Link>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center text-center">
        <div className="bg-gray-200 p-6 rounded-lg mb-8">
          <Image src="/placeholder-image-icon.svg" alt="Verify Drug" width={64} height={64} />
        </div>
        <h2 className="text-xl font-semibold mb-4">Verify Drug</h2>
        <p className="text-sm text-gray-500 mb-8">
          Scan the bar code, QR code or simply take a picture of the drug you want to verify.
        </p>
        <button className="px-6 py-2 bg-black text-white rounded-lg">Scan</button>
      </main>

      {/* Bottom Navigation */}
      <footer className="flex justify-around items-center py-4 bg-gray-100">
        <Link href="/find-pharmacy">
          <a className="flex flex-col items-center text-gray-600">
            <Image src="/pharmacy-icon.svg" alt="Find A Pharmacy" width={24} height={24} />
            <span className="text-xs">Find A Pharmacy</span>
          </a>
        </Link>
        <Link href="/alerts">
          <a className="flex flex-col items-center text-gray-600">
            <Image src="/alerts-icon.svg" alt="Alerts" width={24} height={24} />
            <span className="text-xs">Alerts</span>
          </a>
        </Link>
        <Link href="/settings">
          <a className="flex flex-col items-center text-gray-600">
            <Image src="/settings-icon.svg" alt="Settings" width={24} height={24} />
            <span className="text-xs">Settings</span>
          </a>
        </Link>
      </footer>
    </div>
  );
}
