import { Route } from "../../../../types/controllers/Route";
import { readUserById } from "../../../../utils/crud-user/readUserById";

export const readUserByIdController: Route = async (req, res, next) => {
	try {
		const { id } = req.params;
		const user = await readUserById(Number(id));
		res.status(200).json(user);
	} catch (error) {
		next(error);
	}
};
