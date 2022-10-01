import { Route } from "../../../ts/controllers/interfaces/Route";
import { readCategories } from "../../../utils/crud-category/readCategories";

export const readAllCategoriesController: Route = async (req, res, next) => {
	try {
		const categories = await readCategories(req.query);
		res.json(categories);
	} catch (error: any) {
		next(error);
	}
};
