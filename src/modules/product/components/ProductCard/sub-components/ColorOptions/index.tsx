import { ColorOption } from "@/product/components/ProductCard/sub-components/ColorOption";
import { IColorOptionsProps } from "@/product/components/ProductCard/sub-components/ColorOptions/types";
import { useState } from "react";

const ColorOptions = ({ colorOptions }: IColorOptionsProps) => {
  const [selectedColor, setselectedColor] = useState(colorOptions[0]);
  return (
    <div className="flex items-center gap-x-2">
      {colorOptions.map((color) => (
        <ColorOption
          selectedColor={selectedColor}
          setSelectedColor={setselectedColor}
          color={color}
          key={color}
        />
      ))}
    </div>
  );
};

export { ColorOptions };
