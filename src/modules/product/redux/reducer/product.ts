import { Product } from "@/product/types/Product";
import { createSlice } from "@reduxjs/toolkit";
import products from "../../mock/products.json";

interface IProductState {
  products: Product[];
}

const initialState: IProductState = {
  products: products.products,
};

const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productReducer.reducer;
