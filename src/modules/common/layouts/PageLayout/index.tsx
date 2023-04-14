import { IPageLayoutProps } from "./types";

const PageLayout = ({ children, ...props }: IPageLayoutProps) => {
  return (
    <div className="flex items-stretch h-screen">
      <aside className="flex-1 bg-blue-200 w-full">asd</aside>
      <main className="flex-1 flex items-center justify-center bg-red-200">
        {children}
      </main>
    </div>
  );
};

export { PageLayout };
