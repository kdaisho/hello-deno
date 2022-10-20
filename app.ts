import { serve } from "https://deno.land/std@0.117.0/http/server.ts";
import { respond } from "https://deno.land/x/gentle_rpc@v3.4/mod.ts";
import { SayHello } from "./services/home.ts";
import { GetProductById, GetProducts } from "./services/products.ts";
import { GetRecipe, Sum } from "./services/about.ts";

const port = 3009;

const rpcMethods = {
  SayHello,
  GetProducts,
  GetProductById,
  GetRecipe,
  Sum,
};

serve(
  (req) => {
    return respond(rpcMethods, req);
  },
  { addr: `:${port}` },
);
console.log(`Listening on ${port}`);
