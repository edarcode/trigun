import { CustomError } from "../../../classes/CustomError";
import { P2025 } from "../../../constants/dbErrorCodes";
import { NOT_FOUND, UPDATE_SUCCESS } from "../../../constants/msgs";
import { Route } from "../../../types/controllers/Route";
import { updateAnime } from "../../../utils/crud-anime/updateAnime";

export const updateAnimeController: Route = async (req, res, next) => {
	try {
		const { id } = req.params;
		await updateAnime({ id: Number(id), ...req.body });
		res.status(200).json({ msg: UPDATE_SUCCESS });
	} catch (error: any) {
		if (error.code === P2025)
			next(new CustomError({ message: NOT_FOUND, status: 404 }));
		next(error);
	}
};
