'use client'

import Link from 'next/link'
import { Navlinks } from '@/constant/consant'

const Nav = () => {
    return (
        <nav className="flex items-center justify-between h-[12vh] px-6 md:px-12 w-full top-0 z-50 relative bg-transparent transition-all duration-300">
            <div className="flex items-center space-x-8">
                <div className="hidden lg:flex items-center space-x-6 bg-white/10 backdrop-blur-lg shadow-xl px-6 py-3 rounded-xl border border-white/30 transition-all duration-300">
                    {Navlinks.map((link) => (
                        <Link
                            key={link.id}
                            href={link.url}
                            className="text-sm text-white hover:text-purple-400 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Nav;
