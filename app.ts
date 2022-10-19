import grpc from "npm:@grpc/grpc-js";
import protoLoader from "npm:@grpc/proto-loader";
import products from "./data/products.json" assert { type: "json" };
import type { HelloPackage, Product } from "./hello.d.ts";

const packageDef = protoLoader.loadSync("hello.proto", {});
const grpcObject = grpc.loadPackageDefinition(packageDef);
const helloPackage = grpcObject.helloPackage as HelloPackage;

const port = 3009;
const server = new grpc.Server();

server.bindAsync(
  `0.0.0.0:${port}`,
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log(`Server running at ${port}`);
    server.start();
  },
);

server.addService(helloPackage.HelloService.service, {
  SayHello,
  GetProducts,
});

function SayHello(
  _: null,
  callback: (arg0: null, arg1: { message: string }) => void,
) {
  callback(null, { message: "Hello from npm:gRPC 🦕" });
}

function GetProducts(
  _: null,
  callback: (arg0: null, arg1: { products: Product[] }) => void,
) {
  callback(null, { products });
}
