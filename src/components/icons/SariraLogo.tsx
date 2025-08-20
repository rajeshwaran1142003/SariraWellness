
import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

interface SariraLogoProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'className'> {
    className?: string;
    isFooter?: boolean;
    width?: number;
    height?: number;
}

export const SariraLogo = React.forwardRef<HTMLDivElement, SariraLogoProps>(({ className, isFooter = false, width = 120, height = 45, ...props }, ref) => (
    <div ref={ref} className={cn("relative", className)} {...props}>
        <Image
            src="https://storage.googleapis.com/stedi-dev-images/sarira_logo_black.png"
            alt="SARIRA Logo"
            width={width}
            height={height}
            className={cn("w-auto h-full", { 'brightness-[10] invert': isFooter })}
        />
    </div>
));

SariraLogo.displayName = "SariraLogo";
