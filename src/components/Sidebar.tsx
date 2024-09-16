"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Pill, ShieldCheck, User, FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

const Sidebar = () => {
  const pathname = usePathname()
  
  return (
    <div className="w-64 bg-white shadow-sm h-full flex flex-col">
      <nav className="flex-1 overflow-y-auto py-4">
        <SidebarLink href="/dashboard" icon={<Home />} label="Home" active={pathname === '/dashboard'} />
        <SidebarLink href="/dashboard/drug-search" icon={<Pill />} label="Drug Search" active={pathname === '/dashboard/drug-search'} />
        <SidebarLink href="/dashboard/drug-verify" icon={<ShieldCheck />} label="Drug Verification" active={pathname === '/dashboard/drug-verify'} />
        <SidebarLink href="/dashboard/health-profile" icon={<User />} label="Health Profile" active={pathname === '/dashboard/health-profile'} />
        <SidebarLink href="/dashboard/drug-info" icon={<FileText />} label="Drug Information" active={pathname === '/dashboard/drug-info'} />
      </nav>
    </div>
  )
}

interface SidebarLinkProps {
  href: string
  icon: React.ReactNode
  label: string
  active: boolean
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, icon, label, active }) => (
  <Link 
    href={href} 
    className={cn(
      "flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200",
      active 
        ? "text-blue-600 bg-blue-50" 
        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
    )}
  >
    <span className={cn("mr-3", active ? "text-blue-500" : "text-gray-400")}>{icon}</span>
    <span>{label}</span>
  </Link>
)

export default Sidebar