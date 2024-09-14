// pages/login.tsx
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8 bg-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">Welcome!</h1>

      {/* Email Input */}
      <div className="w-full max-w-md">
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 border rounded-lg text-gray-800"
        />

        {/* Password Input with Toggle Visibility */}
        <div className="relative w-full mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 border rounded-lg text-gray-800"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-4 flex items-center"
          >
            {/* Toggle visibility icon (you can replace this with an actual icon) */}
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {/* Forgot Password Link */}
        <Link href="/forgot-password" className="text-sm text-gray-600 mb-6">
          Forgot password?
        </Link>

        {/* Login Button */}
        <button className="w-full p-3 bg-gray-900 text-white rounded-lg mb-6 hover:bg-gray-800">
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-sm">
          Not a member?{" "}
          <Link href="/register" className="text-blue-600">
            Register now
          </Link>
        </p>

        {/* Divider */}
        <div className="text-center text-gray-500 my-4">Or continue with</div>

        {/* Social Login Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-red-500 text-white p-3 rounded-full">G</button>
          <button className="bg-black text-white p-3 rounded-full"></button>
          <button className="bg-blue-700 text-white p-3 rounded-full">f</button>
        </div>
      </div>
    </div>
  );
}
