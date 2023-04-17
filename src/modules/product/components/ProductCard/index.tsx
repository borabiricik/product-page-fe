import { Typhography } from "@/components/Typhography";
import { useWindowSize } from "@/core/hooks/useWindowSize";
import { ColorOptions } from "@/product/components/ProductCard/sub-components/ColorOptions";
import { Product } from "@/product/types/Product";
import { Variant, motion } from "framer-motion";
import Image from "next/image";

const animationVariants: { [key: string]: Variant } = {
  initial: { opacity: 0, y: "-10%" },
  animate: { opacity: 1, y: 0 },
};

const ProductCard = ({ title, image, price, color_options }: Product) => {
  const { width } = useWindowSize();
  if (width > 0) {
    return (
      <motion.div
        variants={width >= 1024 ? undefined : animationVariants}
        initial={"initial"}
        whileInView={"animate"}
        viewport={{ amount: 0.07, once: true }}
      >
        <Image
          width={400}
          height={537}
          className="object-contain w-full mb-3"
          src={`/images/products/${image}`}
          alt={`${title} image`}
          quality={100}
        />

        <div>
          <Typhography className="text-xs mb-1">{title}</Typhography>
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-xs gap-y-2">
            €{price}
            <ColorOptions colorOptions={color_options} />
          </div>
        </div>
      </motion.div>
    );
  }
  return null;
};

export { ProductCard };
