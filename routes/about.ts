import { Router } from "../deps.ts";

export function use(path: string, router: Router) {
  router.post(`${path}/add`, async ({ request, response }) => {
    const { a, b } = await request.body().value;
    response.body = a + b;
  });

  router.get(`${path}/recipe`, ({ response }) => {
    response.body = {
      title: "Curry",
      ingredients: "Red Peppers",
      description: "Yummy.",
    };
  });
}
