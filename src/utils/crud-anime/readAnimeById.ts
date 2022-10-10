import { CustomError } from "../../classes/CustomError";
import { NOT_FOUND } from "../../constants/msgs";
import { prisma } from "../../prisma";

export const readAnimeById = async (id: number) => {
	const anime = await prisma.anime.findUnique({
		where: { id },
		select: {
			id: true,
			name: true,
			score: true,
			status: true,
			episodes: true,
			seasons: true,
			synopsis: true,
			edarReview: true,
			categories: { select: { id: true, name: true } },
			images: { select: { id: true, original: true } }
		}
	});
	if (!anime) throw new CustomError({ message: NOT_FOUND, status: 404 });

	return anime;
};
