'use client'

import { useUser } from '@clerk/nextjs'
import { ReactNode } from 'react'

interface AdminOnlyProps {
    children: ReactNode
}

const AdminOnly = ({ children }: AdminOnlyProps) => {
    const { user, isLoaded } = useUser()

    if (!isLoaded) return null

    const role = user?.publicMetadata?.role

    if (role !== 'admin') return null

    return <>{children}</>
}

export default AdminOnly
