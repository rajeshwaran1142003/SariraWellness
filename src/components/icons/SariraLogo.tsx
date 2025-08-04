import Image from "next/image";
import * as React from "react";
import { SVGProps } from "react";
import { cn } from "@/lib/utils";

export const SariraLogo = (props: SVGProps<SVGSVGElement>) => (
    <Image
        {...props}
        src="https://storage.googleapis.com/stedi-dev-images/sarira-logo-updated.png"
        alt="SARIRA Logo"
        width={120}
        height={45}
        className={cn("w-auto", props.className)}
    />
);