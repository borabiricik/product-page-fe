import { IPageLayoutProps } from "./types";

const PageLayout = ({ children, ...props }: IPageLayoutProps) => {
  return (
    <div className="flex items-stretch h-screen overflow-y-scroll">
      <aside className="flex-1 bg-blue-200 w-full sticky top-0">asd</aside>
      <main className="flex-1 flex items-center justify-center bg-red-200 h-[1000px]">
        {children}
      </main>
    </div>
  );
};

export { PageLayout };
