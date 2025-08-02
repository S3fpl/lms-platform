'use client'

import React from 'react'
import { Compass, Home } from 'lucide-react'
import SidebarItem from './sidebar-item'

const guestRoutes = [
    {
        icon: Home,
        label: 'Home',
        href: '/',
    },
    {
        icon: Compass,
        label: 'Browse',
        href: '/search',
    },
]

const SidebarRoutes = ({ isExpanded }: { isExpanded: boolean }) => {
    return (
        <div className="flex flex-col w-full">
            {guestRoutes.map((route) => (
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
