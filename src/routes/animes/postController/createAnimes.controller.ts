import { CustomError } from "../../../classes/CustomError";
import { P2002 } from "../../../constants/dbErrorCodes";
import {
	ALREADY_EXIST_ANIME,
	ANIME_CREATED_SUCCESS
} from "../../../constants/msgs";
import { Route } from "../../../types/controllers/Route";
import { createAnime } from "../../../utils/crud-anime/createAnime";

export const createAnimeController: Route = async (req, res, next) => {
	try {
		await createAnime(req.body);
		res.status(201).json({ msg: ANIME_CREATED_SUCCESS });
	} catch (error: any) {
		if (error.code === P2002)
			next(new CustomError({ message: ALREADY_EXIST_ANIME, status: 400 }));
		next(error);
	}
};
