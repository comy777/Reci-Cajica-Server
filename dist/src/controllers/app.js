"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appGetRequestUser = void 0;
const appGetRequestUser = ({ req, res }) => {
    const data = req.body;
    const { title, email } = data;
    console.log(title);
    return res.status(400).send({ msg: "App request" });
};
exports.appGetRequestUser = appGetRequestUser;
