'use client'

import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface SidebarItemProps {
  icon: LucideIcon
  label: string
  href: string
  isExpanded: boolean
}

const SidebarItem = ({ icon: Icon, label, href, isExpanded }: SidebarItemProps) => {
  const pathname = usePathname()
  const router = useRouter()

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`)

  const onClick = () => {
    router.push(href)
  }

  const content = (
    <button
      onClick={onClick}
      type="button"
      aria-label={label}
      title={!isExpanded ? label : undefined}
      className={cn(
        "flex items-center text-white text-sm font-medium py-3 transition-all duration-200 w-full cursor-pointer",
        isExpanded ? "pl-6 pr-3 gap-x-1" : "px-1 justify-center",
        "hover:bg-white/10 hover:text-white/90",
        isActive && "bg-white/10 text-white/90 hover:bg-white/20"
      )}
    >
      <Icon
        size={20}
        className={cn("text-white/70", isActive && "text-white/90")}
      />
      {isExpanded && <span>{label}</span>}
    </button>
  )

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {content}
        </TooltipTrigger>
        {!isExpanded && (
          <TooltipContent
            side="right"
            sideOffset={8}
            className="bg-white/10 text-white text-sm px-3 py-1 rounded-md backdrop-blur-md border border-white/20"
          >
            {label}
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  )
}

export default SidebarItem
