import { Route } from "../../../types/controllers/Route";
import { readCategories } from "../../../utils/crud-category/readCategories";

export const readAllCategoriesController: Route = async (req, res, next) => {
	try {
		const categories = await readCategories(req.query);
		res.json(categories);
	} catch (error) {
		next(error);
	}
};
