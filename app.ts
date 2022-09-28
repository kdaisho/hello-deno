import { Application, Router } from "./deps.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import * as indexRouter from "./routes/index.ts";
import * as productsRouter from "./routes/products.ts";

const app = new Application();
const router = new Router();
const port = 3000;

app.use(oakCors({
  origin: /^.+localhost:(5173|5174)/,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}));
app.use(router.routes());
app.use(router.allowedMethods());

indexRouter.use("/", router);
productsRouter.use("/products", router);

console.log(`server listening on ${port}`);
app.listen({ port });
