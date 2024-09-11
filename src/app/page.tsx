/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/medify-logo.svg" // Replace with your actual logo
          alt="Medify logo"
          width={180}
          height={38}
          priority
        /> */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Medify
        </h1>
        <p className="text-xl text-gray-700 mb-6 text-center sm:text-left">
          Your trusted companion for drug verification and health insights.
        </p>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Verify your medications with our{" "}
            <span className="text-blue-600 font-semibold">
              advanced drug database
            </span>
            .
          </li>
          <li className="mb-2">
            Get personalized{" "}
            <span className="text-blue-600 font-semibold">
              health recommendations
            </span>{" "}
            based on your profile.
          </li>
          <li>
            Stay informed about your medications and health with{" "}
            <span className="text-blue-600 font-semibold">AI-powered insights</span>.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row mt-8">
          <RegisterLink
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Get Started <ArrowRight className="ml-1.5 h-5 w-5" />
          </RegisterLink>
          <LoginLink
            className="rounded-full border border-solid border-blue-200 transition-colors flex items-center justify-center hover:bg-blue-50 text-blue-600 hover:text-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            Sign In
          </LoginLink>
          <Link
            className="rounded-full border border-solid border-blue-200 transition-colors flex items-center justify-center hover:bg-blue-50 text-blue-600 hover:text-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="/about"
          >
            Learn More
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-sm text-gray-600">
        <Link
          className="flex items-center gap-2 hover:text-blue-600"
          href="/privacy"
        >
          Privacy Policy
        </Link>
        <Link
          className="flex items-center gap-2 hover:text-blue-600"
          href="/terms"
        >
          Terms of Service
        </Link>
        <Link
          className="flex items-center gap-2 hover:text-blue-600"
          href="/contact"
        >
          Contact Us
        </Link>
      </footer>
    </div>
  );
}