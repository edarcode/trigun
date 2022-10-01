import { Error } from "../../ts/interfaces/controllers/Error";

export const errors: Error = (error, _req, res, _next) => {
	console.log(error);
	const status = error.status || 500;
	const message = error.message || error;
	res.status(status).json({ msg: message });
};
