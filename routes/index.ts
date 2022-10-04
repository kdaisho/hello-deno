import { Router } from "../deps.ts";

export function use(path: string, router: Router) {
  console.log('======================== 0', { path, router })
  router.get(path, ({ response }) => {
    console.log('======================== 1', { response })
    response.body = { message: "Home 🦕" };
  });
}
