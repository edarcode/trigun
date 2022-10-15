import { Headers } from "../types/controllers/Headers";

export const headers: Headers = (_, res, next) => {
	res.header("Access-Control-Allow-Origin", "*"); // actualizar para que coincida con el dominio desde el que realizará la solicitud
	res.header("Access-Control-Allow-Credentials", "true");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
	next();
};
