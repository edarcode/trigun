import { DELETE_SUCCESS } from "../../../../../constants/msgs";
import { Route } from "../../../../../types/controllers/Route";
import { deleteAnime } from "../../../../../utils/crud-anime/deleteAnime";

export const deleteAnimeController: Route = async (req, res, next) => {
	try {
		const { id } = req.params;
		await deleteAnime(Number(id));
		res.status(200).json({ msg: DELETE_SUCCESS });
	} catch (error) {
		next(error);
	}
};
