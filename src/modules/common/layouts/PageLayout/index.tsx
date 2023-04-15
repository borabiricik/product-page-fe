import Image from "next/image";
import { IPageLayoutProps } from "./types";

const PageLayout = ({ children, ...props }: IPageLayoutProps) => {
  return (
    <div className="flex items-stretch h-screen overflow-y-scroll">
      <aside className="flex-1 w-full sticky top-0 flex-shrink-0">
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
      <main className="flex-1 flex items-center justify-center  min-h-screen">
        {children}
      </main>
    </div>
  );
};

export { PageLayout };
