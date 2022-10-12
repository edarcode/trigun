import { CATEGORY_CREATED_SUCCESS } from "../../../../../constants/msgs";
import { Route } from "../../../../../types/controllers/Route";
import { createCategory } from "../../../../../utils/crud-category/createCategory";

export const createCategoryController: Route = async (req, res, next) => {
	try {
		const { img, name } = req.body;
		await createCategory({ img, name });
		res.status(201).json({ msg: CATEGORY_CREATED_SUCCESS });
	} catch (error) {
		next(error);
	}
};
