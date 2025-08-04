import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

interface SariraLogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SariraLogo = React.forwardRef<HTMLDivElement, SariraLogoProps>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("relative", className)} {...props}>
        <Image
            src="https://storage.googleapis.com/stedi-dev-images/sarira-logo-updated.png"
            alt="SARIRA Logo"
            width={120}
            height={45}
            className="w-auto h-full"
        />
    </div>
));

SariraLogo.displayName = "SariraLogo";
