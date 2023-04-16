import { Product } from "@/product/types/Product";
import Image from "next/image";

const ProductCard = ({ title, image }: Product) => {
  return (
    <div className="bg-red-200">
      <div className="relative w-[230px] h-[310px]">
        <Image src={`/images/products/${image}`} fill alt={`${title} image`} />
      </div>
      <div>asd</div>
    </div>
  );
};

export { ProductCard };
