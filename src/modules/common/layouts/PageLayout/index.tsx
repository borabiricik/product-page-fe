import Image from "next/image";
import { IPageLayoutProps } from "./types";

const PageLayout = ({ children, ...props }: IPageLayoutProps) => {
  return (
    <div className="flex items-stretch h-screen overflow-y-scroll">
      <aside className="flex-1 bg-blue-200 w-full sticky top-0">
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
      <main className="flex-1 flex items-center justify-center bg-red-200 h-[1000px]">
        {children}
      </main>
    </div>
  );
};

export { PageLayout };
