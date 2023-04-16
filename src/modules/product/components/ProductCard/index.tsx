import { Typhography } from "@/components/Typhography";
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
          <div className="flex items-center gap-x-2">
            {color_options.map((color, index) => (
              <button
                key={index}
                className={"rounded-full w-3 h-3"}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
