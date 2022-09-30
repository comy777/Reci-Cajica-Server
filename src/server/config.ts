import express, { Express } from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import databaseConnection from "../database/config";
import appRoutes from "../routes/routes";

class Server {
  app: Express = express();
  port: string;
  path: {
    home: string;
  };

  constructor() {
    this.db();
    this.app = this.app;
    this.port = process.env.PORT!;
    this.middlewares();
    this.path = {
      home: "/",
    };
    this.routes();
  }

  start = () => {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  };

  db = async () => {
    await databaseConnection();
  };

  publicFolder() {
    const publicPath = path.resolve(__dirname, "../public");
    this.app.use(express.static(publicPath));
  }

  middlewares = () => {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.publicFolder();
  };

  routes = () => {
    this.app.use(this.path.home, appRoutes);
  };
}

export default Server;
