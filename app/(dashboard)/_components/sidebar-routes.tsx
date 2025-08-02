"use client";
import React from 'react'
import { Compass, Home, Layout } from 'lucide-react';
import SidebarItem from './sidebar-item';

const guestRoutes = [
    {
        icon: Home,
        label: 'Home',
        href: '/',
    },
    {
        icon: Layout,
        label: 'Dashboard',
        href: '/dashboard',
    },
    {
        icon: Compass,
        label: 'Browes',
        href: '/search',
    }
]

const SidebarRoutes = () => {
    const routes = guestRoutes;

    return (
        <div className='flex flex-col w-full'>
            {routes.map((route) => (
                <SidebarItem
                    key={route.label}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
    )
}

export default SidebarRoutes