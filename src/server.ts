import cors from "cors";
import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import { router } from "./routes/main.router";

export const server = express();

server.use(cors());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(express.json({ limit: "50mb" }));
server.use(morgan("dev"));

server.use((_, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
});

server.use("/", router);

server.use((error: any, _req: Request, res: Response, _next: NextFunction) => {
	console.log(error);
	const status = error.status || 500;
	const message = error.message || error;
	res.status(status).json({ msg: message });
});
