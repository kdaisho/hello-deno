import { Router } from "../deps.ts";
import products from "../data/products.json" assert { type: "json" };

export function use(path: string, router: Router) {
  router.get(path, ({ response }) => {
    response.body = products;
  });

  router.get(
    `${path}/:id`,
    ({ response, params }) => {
      response.body = products[+params.id];
    },
  );
}
