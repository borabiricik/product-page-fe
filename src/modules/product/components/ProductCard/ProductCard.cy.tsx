import { ProductCard } from "@/product/components/ProductCard";
import dummyProducts from "../../mock/products.json";

// We'll test <ProductCard /> component here. Didn't have time to do it but that's the aim.

describe("ProductCard Test", () => {
  const dummyProduct = dummyProducts.products[0];
  it("should be mounted", () => {
    cy.mount(<ProductCard {...dummyProduct} />);
  });
});
