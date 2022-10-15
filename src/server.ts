import cors from "cors";
import express from "express";
import morgan from "morgan";
import { errors } from "./middlewares/errors";
import { headers } from "./middlewares/headers";
import { router } from "./routes/main.router";

export const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(morgan("dev"));
server.use(headers);

server.use("/", router);
server.use(errors);
