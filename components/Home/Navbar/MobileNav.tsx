'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'



export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

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
                <div className="absolute right-0 top-12 bg-zinc-900 rounded-md shadow-lg p-4 flex flex-col gap-3 w-40 z-50">
                    <Link
                        href="/"
                        className="text-sm text-white hover:text-purple-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        href="/courses"
                        className="text-sm text-white hover:text-purple-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Courses
                    </Link>
                    <Link
                        href="/about"
                        className="text-sm text-white hover:text-purple-400"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="text-sm text-white hover:text-purple-400"
                        onClick={() => setIsOpen(false)}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </div>
    )
}
