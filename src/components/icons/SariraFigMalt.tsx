import Image from "next/image";
import * as React from "react";
import { SVGProps } from "react";

const SariraFigMalt = (props: SVGProps<SVGSVGElement>) => (
  <Image
    {...props}
    priority
    src="https://storage.googleapis.com/gcs-proxy/fstudio/v1/assets/948a313c_9b65_4487_98c1_823a0ff46d61/63345155_722a_49ed_a9bd_84f938a164c4"
    width={500}
    height={500}
    alt="Sarira Fig Malt"
  />
);

export default SariraFigMalt;
