'use client'

import React from 'react'
import Logo from './logo'
import SidebarRoutes from './sidebar-routes'

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const Sidebar = ({ isExpanded, onToggle }: SidebarProps) => {
  return (
    <div
      className={`h-full border-r flex flex-col overflow-y-auto bg-white/10 backdrop-blur-lg border-white/30 shadow-sm transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}
    >
      <div
        className="flex justify-center py-4 cursor-pointer transition-all"
        onClick={onToggle}
      >
        <Logo isExpanded={isExpanded} />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes isExpanded={isExpanded} />
      </div>
    </div>
  );
};

export default Sidebar;
