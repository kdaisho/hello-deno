import { Router } from "../deps.ts";

export function use(path: string, router: Router) {
  router.get(`${path}/recipe`, ({ response }) => {
    response.body = {
      title: "Curry",
      ingredients: "Red Peppers",
      description: "Yummy.",
    };
  });
}
