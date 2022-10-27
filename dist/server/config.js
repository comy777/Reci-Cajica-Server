"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../database/config"));
const routes_1 = __importDefault(require("../routes/routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.start = () => {
            this.app.listen(this.port, () => {
                console.log(`Server is running on port ${this.port}`);
            });
        };
        this.db = () => __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.default)();
        });
        this.middlewares = () => {
            this.app.use(express_1.default.json());
            this.app.use((0, cors_1.default)());
            this.app.use((0, morgan_1.default)("dev"));
            this.publicFolder();
        };
        this.routes = () => {
            this.app.use(this.path.home, routes_1.default);
        };
        this.db();
        this.app = this.app;
        this.port = process.env.PORT || 1337;
        this.middlewares();
        this.path = {
            home: "/",
        };
        this.routes();
    }
    publicFolder() {
        const publicPath = path_1.default.resolve(__dirname, "../public");
        this.app.use(express_1.default.static(publicPath));
    }
}
exports.default = Server;
