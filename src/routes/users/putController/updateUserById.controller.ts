import { UPDATE_SUCCESS } from "../../../constants/msgs";
import { Route } from "../../../types/controllers/Route";
import { updateUserById } from "../../../utils/crud-users/updateUserById";

export const updateUserByIdController: Route = async (req, res, next) => {
	try {
		await updateUserById(req.body);
		res.status(200).json(UPDATE_SUCCESS);
	} catch (error) {
		next(error);
	}
};
