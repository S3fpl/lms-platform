'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    Menu,
    X,
    LayoutDashboard,
    ArrowLeft,
    ChevronDown,
    ChevronUp,
    Home,
    BookOpen,
    Info,
    Mail,
} from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import SidebarRoutes from '@/app/(dashboard)/_components/sidebar-routes'

const navLinks = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Courses', href: '/courses', icon: BookOpen },
    { label: 'About', href: '/about', icon: Info },
    { label: 'Contact', href: '/contact', icon: Mail },
]

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeCollapse, setActiveCollapse] = useState<string | null>(null)

    const pathname = usePathname()
    const { user, isLoaded } = useUser()
    const isDashboardPage = pathname?.startsWith('/dashboard')

    useEffect(() => {
        const handleRouteChange = () => setIsOpen(false)
        window.addEventListener('popstate', handleRouteChange)
        return () => window.removeEventListener('popstate', handleRouteChange)
    }, [])

    const handleLinkClick = () => {
        setIsOpen(false)
        setActiveCollapse(null)
    }

    const toggleCollapse = (key: string) => {
        setActiveCollapse((prev) => (prev === key ? null : key))
    }

    return (
        <div className="relative">
            <button
                className="text-white"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isOpen && (
                <div className="absolute right-0 top-12 w-72 max-h-[90vh] overflow-hidden z-50 p-4 rounded-2xl border border-white/20 shadow-2xl bg-white/10 backdrop-blur-md transition-all duration-500 flex flex-col gap-4">

                    {/* 🧑‍💼 Profile */}
                    {isLoaded && user && (
                        <div className="flex flex-col items-center gap-2 border-b border-white/20 pb-4">
                            <Image
                                src={user.imageUrl}
                                alt="Profile"
                                width={64}
                                height={64}
                                className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
                                priority
                            />
                            <span className="text-white text-sm font-semibold">
                                {user.firstName || 'User'}
                            </span>
                        </div>
                    )}

                    {/* 🔗 Navigation Section */}
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={() => toggleCollapse('nav')}
                            className="flex items-center justify-between text-white text-sm font-semibold py-1 cursor-pointer"
                        >
                            Navigation
                            {activeCollapse === 'nav' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        <div
                            className={`flex flex-col gap-2 overflow-hidden transition-all duration-500 ${activeCollapse === 'nav' ? 'max-h-[500px]' : 'max-h-0'
                                }`}
                        >
                            {navLinks.map(({ label, href, icon: Icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={handleLinkClick}
                                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-purple-400 hover:bg-white/10 transition-all duration-200"
                                >
                                    <Icon size={18} className="text-purple-400" />
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-white/20 my-2" />

                    {/* 🧭 Dashboard Section */}
                    <div className="flex flex-col gap-2  rounded-lg">
                        <button
                            onClick={() => toggleCollapse('dashboard')}
                            className="flex items-center justify-between text-white text-sm font-semibold py-1  cursor-pointer "
                        >
                            Dashboard
                            {activeCollapse === 'dashboard' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-500  ${activeCollapse === 'dashboard' ? 'max-h-[500px]' : 'max-h-0'
                                }`}
                        >
                            <SidebarRoutes isExpanded={true} />
                        </div>
                    </div>

                    {/* 🛠 Dashboard Button */}
                    {isLoaded && user?.publicMetadata?.role === 'admin' && (
                        <Link
                            href={isDashboardPage ? '/' : '/dashboard'}
                            onClick={handleLinkClick}
                            className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 rounded-xl border border-white/30 transition-all duration-500 cursor-pointer px-3 py-2 text-sm mt-2"
                        >
                            {isDashboardPage ? (
                                <>
                                    <ArrowLeft size={18} />
                                    Exit
                                </>
                            ) : (
                                <>
                                    <LayoutDashboard size={18} />
                                    Dashboard
                                </>
                            )}
                        </Link>
                    )}
                </div>
            )}
        </div>
    )
}
