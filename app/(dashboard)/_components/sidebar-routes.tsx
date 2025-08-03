'use client'

import React from 'react'
import { BarChart, Compass, Home, List } from 'lucide-react'
import SidebarItem from './sidebar-item'
import { usePathname } from 'next/navigation'

const guestRoutes = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Compass, label: 'Browse', href: '/search' },
]

const dashboardRoutes = [
  { icon: List, label: 'Courses', href: '/dashboard/courses' },
  { icon: BarChart, label: 'Analytics', href: '/dashboard/analytics' },
]

const SidebarRoutes = ({ isExpanded }: { isExpanded: boolean }) => {
  const pathname = usePathname()
  const isDashboard = pathname?.startsWith('/dashboard')
  const routes = isDashboard ? dashboardRoutes : guestRoutes

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.label}
          icon={route.icon}
          label={route.label}
          href={route.href}
          isExpanded={isExpanded}
        />
      ))}
    </div>
  )
}

export default SidebarRoutes
