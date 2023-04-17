import { useWindowSize } from "@/core/hooks/useWindowSize";
import { Variant, motion } from "framer-motion";
import Image from "next/image";
import { IPageLayoutProps } from "./types";

const asideAnimationVariants: { [key: string]: Variant } = {
  initialMobile: { y: "-20%" },
  animateMobile: { y: 0 },
  initial: { x: "-10%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const mainAnimationVariants: { [key: string]: Variant } = {
  initialMobile: { y: "-9", opacity: 0 },
  animateMobile: { y: "-11.25rem", opacity: 1 },
};

const PageLayout = ({ children }: IPageLayoutProps) => {
  const animationDurations = 0.7;
  const easings = [0.075, 0.82, 0.165, 1];
  const { width } = useWindowSize();
  if (width > 0) {
    return (
      <div className="flex flex-col lg:flex-row items-stretch relative">
        <motion.aside
          variants={asideAnimationVariants}
          initial={width >= 1024 ? "initial" : "initialMobile"}
          animate={width >= 1024 ? "animate" : "animateMobile"}
          transition={{ duration: animationDurations, easings }}
          className="shrink-0 lg:sticky lg:top-0 lg:w-1/2 lg:h-screen relative z-0"
        >
          <Image
            width={998}
            height={1198}
            src={"/images/bg.png"}
            alt="Layout left image"
            className="object-cover w-full h-full"
            quality={100}
            priority
          />
          <div
            className="lg:hidden bg-gradient-to-b from-transparent to-black z-10 absolute 
          top-1/2 bottom-0 left-0 right-0 to-78% from-0% opacity-50"
          />
        </motion.aside>
        <motion.main
          transition={{
            delay: animationDurations + 0.2,
            duration: animationDurations,
            easings,
          }}
          variants={mainAnimationVariants}
          initial={width >= 1024 ? { y: "-10%", opacity: 0 } : "initialMobile"}
          animate={width >= 1024 ? { y: 0, opacity: 1 } : "animateMobile"}
          className="lg:w-1/2 lg:my-auto"
        >
          {children}
        </motion.main>
      </div>
    );
  }
  return null;
};

export { PageLayout };
