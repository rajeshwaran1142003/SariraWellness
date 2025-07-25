import Image from "next/image";
import * as React from "react";
import { SVGProps } from "react";

const SariraFigMalt = (props: SVGProps<SVGSVGElement>) => (
  <Image
    {...props}
    priority
    src="https://storage.googleapis.com/stedi-dev-images/sarira-fig-malt.png"
    width={500}
    height={500}
  />
);

export default SariraFigMalt;
