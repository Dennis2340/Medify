import React from 'react'

import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { LoginLink, RegisterLink, getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'

const Navbar = async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <nav className='sticky h-16 inset-x-0 top-0 z-30 w-full bg-white border-b border-gray-200 shadow-sm'>
      <div className='h-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 text-transparent bg-clip-text">
              Medify
            </span>
          </Link>
        </div>

        <div className='flex items-center space-x-4'>
          <Link href="/about" 
            className={buttonVariants({ 
              variant: "ghost", 
              size: "sm", 
              className: 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            })}>
            About
          </Link>
          {!user ? (
            <>
              <LoginLink className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className: 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              })}>
                Sign in
              </LoginLink>
              <RegisterLink className={buttonVariants({
                size: "sm",
                className: 'bg-blue-600 text-white hover:bg-blue-700'
              })}>
                Register <ArrowRight className='ml-1.5 h-5 w-5'/>
              </RegisterLink>
            </>
          ) : (
            <>
              <Link href="/dashboard" className={buttonVariants({
                variant: "ghost",
                size: "sm",
                className: 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              })}>
                Dashboard
              </Link>
              
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
