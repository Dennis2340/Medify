import type { NextPage } from 'next';
import styles from './confirmation.module.css';

const ConfirmationCode: NextPage = () => {
  return (
    <div className={styles.confirmationCode}>
      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Title */}
        <div>
          <h2 className="text-xl font-semibold">Enter confirmation code</h2>
          <p className="text-gray-600">A 4-digit code was sent to:</p>
          <p className="font-medium text-gray-900">lucasscott3@email.com</p>
        </div>

        {/* Code Input */}
        <div className="flex gap-4 justify-center">
          <input
            type="text"
            maxLength={1}
            className="w-12 h-12 text-xl text-center border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-12 h-12 text-xl text-center border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-12 h-12 text-xl text-center border rounded-lg focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            maxLength={1}
            className="w-12 h-12 text-xl text-center border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-6">
          <button className="text-blue-600 font-medium hover:underline">
            Resend code
          </button>
          <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-500">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationCode;
