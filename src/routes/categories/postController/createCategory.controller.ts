import { CATEGORY_CREATED_SUCCESS } from "../../../constants/msgs";
import { Route } from "../../../ts/controllers/interfaces/Route";

import { createCategory } from "../../../utils/crud-category/createCategory";

export const createCategoryController: Route = async (req, res, next) => {
	try {
		await createCategory(req.body);
		res.status(201).json({ msg: CATEGORY_CREATED_SUCCESS });
	} catch (error) {
		next(error);
	}
};
