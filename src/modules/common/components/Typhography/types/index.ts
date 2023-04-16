import { HTMLAttributes } from "react";

export interface ITyphographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  as?: keyof JSX.IntrinsicElements;
  font?: "avant" | "avenir";
  type?: "primary" | "secondary";
}
