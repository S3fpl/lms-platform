"use client";
import React, { useEffect, useState } from 'react';
import Sidebar from './_components/sidebar';
import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav';

const SIDEBAR_EXPANDED_WIDTH = 256; // 64 * 4 px
const SIDEBAR_COLLAPSED_WIDTH = 80; // 20 * 4 px

const Dashboardlayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        const storedState = localStorage.getItem('sidebar-expanded');
        if (storedState === 'true') setIsExpanded(true);
    }, []);

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', isExpanded.toString());
    }, [isExpanded]);

    const handleToggle = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div className="h-full">
            <div
                className={`h-[80px] fixed inset-y-0 w-full transition-all duration-300 md:pl-[${isExpanded ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH}px]`}
            >
                <ResponsiveNav />
            </div>
            <div
                className="hidden md:flex h-full flex-col fixed inset-y-0 z-50 "
                style={{ width: isExpanded ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH }}
            >
                <Sidebar isExpanded={isExpanded} onToggle={handleToggle} />
            </div>
            <main
                className=" h-full transition-all duration-300 pt-[80px] pl-2 "
                style={{ marginLeft: isExpanded ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH }}
            >
                {children}
            </main>
        </div>
    );
};

export default Dashboardlayout;


