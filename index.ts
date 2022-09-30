import "dotenv/config";
import Server from "./src/server/config";

const server = new Server();

server.start();
