"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

const SidebarItem = ({
    icon: Icon,
    label,
    href,
}: SidebarItemProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive =
        (pathname === "/" && href === "/") ||
        pathname === href ||
        pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    };

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-white text-sm font-medium pl-6 pr-3 py-3 transition-all duration-200",
                "hover:bg-white/10 hover:text-white/90",
                isActive &&
                "bg-white/10 text-white/90 hover:bg-white/20"
            )}
        >
            <div className="flex items-center gap-x-2">
                <Icon
                    size={20}
                    className={cn(
                        "text-white/70",
                        isActive && "text-white/90"
                    )}
                />
                {label}
            </div>
            <div
                className={cn(
                    "ml-auto  border-2 border-white rounded-full h-full transition-all",
                    isActive ? "opacity-100" : "opacity-0"
                )}
            />
        </button>
    );
};

export default SidebarItem;
