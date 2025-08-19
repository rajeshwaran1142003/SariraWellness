import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

interface SariraLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    isFooter?: boolean;
}

export const SariraLogo = React.forwardRef<HTMLDivElement, SariraLogoProps>(({ className, isFooter, ...props }, ref) => (
    <div ref={ref} className={cn("relative", className)} {...props}>
        <Image
            src="https://storage.googleapis.com/stedi-dev-images/sarira_logo_black.png"
            alt="SARIRA Logo"
            width={120}
            height={45}
            className={cn("w-auto h-full", { 'brightness-[10] invert': isFooter })}
        />
    </div>
));

SariraLogo.displayName = "SariraLogo";
