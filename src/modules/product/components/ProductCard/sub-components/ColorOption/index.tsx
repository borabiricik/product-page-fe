import { IColorOptionProps } from "@/product/components/ProductCard/sub-components/ColorOption/types";
import { motion } from "framer-motion";

const ColorOption = ({
  color,
  selectedColor,
  setSelectedColor,
}: IColorOptionProps) => {
  const isSelected = selectedColor === color;
  const handleSelect = () => {
    setSelectedColor(color);
  };
  return (
    <motion.span
      animate={{
        borderWidth: isSelected ? 1 : 0,
        padding: isSelected ? "2px" : "0px",
      }}
      transition={{
        duration: 0.1,
      }}
      className="rounded-full border-black w-3 h-3"
    >
      <div
        onClick={handleSelect}
        className={"rounded-full w-full h-full m-0 p-0 cursor-pointer"}
        style={{ backgroundColor: color }}
      />
    </motion.span>
  );
};

export { ColorOption };
