import products from "../data/products.json" assert { type: "json" };

export function GetProducts() {
  return products;
}

export function GetProductById({ id }: { id: number }) {
  return products[id];
}
