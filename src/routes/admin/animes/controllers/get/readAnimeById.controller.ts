import { Route } from "../../../../../types/controllers/Route";
import { readAnimeById } from "../../../../../utils/crud-anime/readAnimeById";

export const readAnimeByIdController: Route = async (req, res, next) => {
	try {
		const { id } = req.params;
		const anime = await readAnimeById(Number(id));
		res.status(200).json(anime);
	} catch (error) {
		next(error);
	}
};
