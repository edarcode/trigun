import { Route } from "../../../types/controllers/Route";

export const updateUserController: Route = (_, res, next) => {
	try {
		res.status(200).json({ msg: "update user" });
	} catch (error) {
		next(error);
	}
};
