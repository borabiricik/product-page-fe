import { classNames } from "@/utils/classnames";
import { ITyphographyProps } from "./types";

const Typhography = ({
  as = "p",
  children,
  className = "",
  type = "primary",
  font = "avenir",
  ...props
}: ITyphographyProps) => {
  const Tag = as;
  return (
    <Tag
      className={classNames(
        "asd",
        font === "avant" ? "font-avant" : "font-avenir",
        type === "primary" ? "text-black" : "text-secondaryGray",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export { Typhography };
