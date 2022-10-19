import { GrpcServer } from "https://deno.land/x/grpc_basic@0.4.6/server.ts";
import { SayHello } from "./services/home.ts";
import { GetProducts } from "./services/products.ts";
import { HelloService } from "./hello.d.ts";

const port = 3009;
const server = new GrpcServer();

const protoPath = new URL("proto/hello.proto", import.meta.url);
const protoFile = await Deno.readTextFile(protoPath);

server.addService<HelloService>(protoFile, {
  SayHello,
  GetProducts,
});

console.log(`Listening on ${port}`);

for await (const conn of Deno.listen({ port })) {
  server.handle(conn);
}
