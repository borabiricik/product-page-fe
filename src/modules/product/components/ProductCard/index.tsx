import { Typhography } from "@/components/Typhography";
import { ColorOptions } from "@/product/components/ProductCard/sub-components/ColorOptions";
import { Product } from "@/product/types/Product";
import Image from "next/image";

const ProductCard = ({ title, image, price, color_options }: Product) => {
  return (
    <div>
      <Image
        width={400}
        height={537}
        className="object-contain w-full mb-3"
        src={`/images/products/${image}`}
        alt={`${title} image`}
        quality={100}
      />

      <div>
        <Typhography className="text-xs">{title}</Typhography>
        <div className="flex justify-between items-center text-xs">
          €{price}
          <ColorOptions colorOptions={color_options} />
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
