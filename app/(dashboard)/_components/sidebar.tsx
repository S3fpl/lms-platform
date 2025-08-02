import React from 'react'
import Logo from './logo'
import SidebarRoutes from './sidebar-routes'

const Sidebar = () => {
    return (
        <div className='h-full border-r flex flex-col overflow-y-auto bg-white/10 backdrop-blur-lg
        border border-white/30 shadow-sm'>
            <div className="flex justify-center">
                <Logo />
            </div>
            <div className="flex flex-col w-full ">
                <SidebarRoutes />
            </div>
        </div>
    )
}

export default Sidebar