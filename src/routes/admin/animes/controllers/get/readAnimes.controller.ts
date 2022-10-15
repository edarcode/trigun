import { Route } from "../../../../../types/controllers/Route";
import { readAnimes } from "../../../../../utils/crud-anime/readAnimes";

export const readAnimesController: Route = async (req, res, next) => {
	try {
		const animes = await readAnimes(req.query);
		res.status(200).json(animes);
	} catch (error) {
		next(error);
	}
};
