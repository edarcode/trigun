import { Route } from "../../../ts/controllers/interfaces/Route";
import { readAnimes } from "../../../utils/crud-anime/readAnimes";

export const readAnimesController: Route = async (_req, res, next) => {
	try {
		const animes = await readAnimes();
		res.status(200).json(animes);
	} catch (error) {
		next(error);
	}
};
