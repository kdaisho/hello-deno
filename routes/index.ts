import { Router } from "../deps.ts";

export function use(path: string, router: Router) {
  router.get(path, ({ response }) => {
    response.body = { message: "Home 🦕" };
  });
}
