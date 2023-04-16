import { Dispatch, SetStateAction } from "react";

export interface IColorOptionProps {
  color: string;
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}
