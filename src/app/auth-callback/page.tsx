"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

const Page = () => {
    const router = useRouter();
    const [error, setError] = useState<boolean>(false);
    const searchParams = useSearchParams();
    const origin = searchParams.get('origin');

    useEffect(() => {
        const authenticateUser = async () => {
            try {
                const response = await fetch('/api/authCallback');
                const data = await response.json();

                if (data.success) {
                    router.push(origin ? `/${origin}` : "/dashboard");
                } else {
                    setError(true);
                }
            } catch (error) {
                setError(true);
            }
        };

        authenticateUser();
    }, [origin, router]);

    return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600'>
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full flex flex-col items-center gap-4">
                {error ? null : <Loader2 className='h-12 w-12 animate-spin text-blue-600' />}
                <h3 className='font-semibold text-2xl text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
                    {error ? "Session Expired" : "Setting up your MediVerify Account..."}
                </h3>
                <p className='text-gray-600 text-center'>
                    {error ? "Your session has ended. Please sign in again." : "You will be redirected to your dashboard shortly."}
                </p>
                {error ? (
                    <Link href="/sign-in" className={buttonVariants({ 
                        size: "lg", 
                        className: 'mt-4 bg-blue-600 text-white hover:bg-blue-700'
                    })}>
                        Sign in <ArrowRight className='ml-2 h-5 w-5' />
                    </Link>
                ) : null}
            </div>
        </div>
    );
};

export default Page;