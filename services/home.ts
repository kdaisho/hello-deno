export function SayHello(req: { greeting: string }) {
  return `${req.greeting} from JSON RPC on 🦕`;
}
