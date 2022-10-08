import { Route } from "../../../types/controllers/Route";
import { formatCategories } from "../../../utils/common/formatCategories";
import { readAnimes } from "../../../utils/crud-anime/readAnimes";

export const readAnimesController: Route = async (req, res, next) => {
	try {
		const { categories } = req.query;
		const animes = await readAnimes({
			...req.query,
			categories: formatCategories(categories)
		});
		res.status(200).json(animes);
	} catch (error) {
		next(error);
	}
};
