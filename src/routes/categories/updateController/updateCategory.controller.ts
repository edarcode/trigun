import { UPDATE_SUCCESS } from "../../../constants/msgs";
import { Route } from "../../../ts/controllers/interfaces/Route";

import { updateCategory } from "../../../utils/crud-category/updateCategory";

export const updateCategoryController: Route = async (req, res, next) => {
	try {
		const { id } = req.params;
		await updateCategory({ id: Number(id), ...req.body });
		res.status(200).json({ msg: UPDATE_SUCCESS });
	} catch (error) {
		next(error);
	}
};
