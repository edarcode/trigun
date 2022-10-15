import { DELETE_SUCCESS } from "../../../../constants/msgs";
import { Route } from "../../../../types/controllers/Route";
import { deleteUserById } from "../../../../utils/crud-users/deleteUserById";

export const deleteUserByIdController: Route = async (req, res, next) => {
	try {
		const { id } = req.params;
		await deleteUserById(Number(id));
		res.status(200).json({ msg: DELETE_SUCCESS });
	} catch (error) {
		next(error);
	}
};
