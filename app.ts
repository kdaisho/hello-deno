import { Application, Router } from "./deps.ts";
import * as indexRouter from "./routes/index.ts";

const app = new Application();
const router = new Router();
const port = 3000;

app.use(router.routes());
app.use(router.allowedMethods());

indexRouter.use("/", router);

console.log(`server listening on ${port}`);
app.listen({ port });
