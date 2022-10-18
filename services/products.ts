import products from "../data/products.json" assert { type: "json" };

export function GetProducts() {
  return {
    products,
  };
}
