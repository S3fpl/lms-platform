'use client'

import { useEffect, useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from '@clerk/nextjs'

import { useUser } from '@clerk/nextjs';
import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

const ResponsiveNav = () => {
    const [isMobile, setIsMobile] = useState(false)
    const { user, isLoaded } = useUser();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <header className="relative w-full h-[12vh] px-4 md:px-12 flex items-center justify-between z-50">
            {/* Nav center */}
            {!isMobile && (
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Nav />
                </div>
            )}

            {/* Right - Auth buttons or MobileNav */}
            <div className="ml-auto flex items-center gap-4">
                {isMobile ? (
                    <MobileNav />
                ) : (
                    <>
                        {/* Dashboard button for admin only */}
                        {isLoaded && user?.publicMetadata?.role === 'admin' && (
                            <Link
                                href="/dashboard"
                                className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/30 transition-all duration-300 cursor-pointer px-4 py-2 text-sm"
                                style={{ textDecoration: 'none' }}
                            >
                                <LayoutDashboard size={18} />
                                Dashboard
                            </Link>
                        )}
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button className="text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/30 transition-all duration-300 cursor-pointer px-4 py-2 text-sm">
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton mode="modal">
                                <button className="text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/30 transition-all duration-300 cursor-pointer px-4 py-2 text-sm">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>

                        <SignedIn>
                            <UserButton
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: 'h-10 w-10',
                                    },
                                }}
                            />
                        </SignedIn>
                    </>
                )}
            </div>
        </header>
    )
}

export default ResponsiveNav
