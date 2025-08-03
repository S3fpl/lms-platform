import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const backgroundVariants = cva(
    "rounded-full flex items-center justify-center border backdrop-blur-md shadow-sm transition",
    {
        variants: {
            variant: {
                default: "bg-white/10 border-white/20 text-white",
                success: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
            },
            size: {
                default: "p-2",
                sm: "p-1",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const iconVariants = cva(
    "",
    {
        variants: {
            variant: {
                default: "text-white",
                success: "text-emerald-300",
            },
            size: {
                default: "h-5 w-5",
                sm: "h-4 w-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

type BackgroundVariantsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends BackgroundVariantsProps, IconVariantsProps {
    icon: LucideIcon;
}

export const IconBadge = ({
    icon: Icon,
    variant,
    size,
}: IconBadgeProps) => {
    return (
        <div className={cn(backgroundVariants({ variant, size }))}>
            <Icon className={cn(iconVariants({ variant, size }))} />
        </div>
    );
};
