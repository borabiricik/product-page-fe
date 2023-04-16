import Image from "next/image";
import { IPageLayoutProps } from "./types";

const PageLayout = ({ children, ...props }: IPageLayoutProps) => {
  return (
    <div className="flex items-stretch relative">
      <aside className="shrink-0 sticky top-0 w-1/2 h-screen">
        <Image
          width={998}
          height={1198}
          src={"/images/bg.png"}
          alt="Layout left image"
          className="object-cover w-full h-full"
          quality={100}
          priority
        />
      </aside>
      <main className="w-1/2 my-auto">{children}</main>
    </div>
  );
};

export { PageLayout };
