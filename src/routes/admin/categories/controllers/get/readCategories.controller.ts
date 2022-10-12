import { Route } from "../../../../../types/controllers/Route";
import { validateQueryNumber } from "../../../../../utils/common/validateQueryNumber";
import { validateQueryOrderBy } from "../../../../../utils/common/validateQueryOrderBy";
import { validateQueryString } from "../../../../../utils/common/validateQueryString";
import { readCategories } from "../../../../../utils/crud-category/admin/readCategories";

export const readCategoriesController: Route = async (req, res, next) => {
	try {
		const { name, page, perPage, orderBy } = req.query;

		const categories = await readCategories({
			name: validateQueryString(name),
			page: validateQueryNumber(page),
			perPage: validateQueryNumber(perPage),
			orderBy: validateQueryOrderBy(orderBy)
		});
		res.status(200).json(categories);
	} catch (error) {
		next(error);
	}
};
