import { Route } from "../../../ts/interfaces/controllers/Route";
import { readCategories } from "../../../utils/crud-category/readCategories";

export const getAllCategoriesController: Route = async (req, res, next) => {
	try {
		const categories = await readCategories(req.query);
		res.json(categories);
	} catch (error: any) {
		next(error);
	}
};
