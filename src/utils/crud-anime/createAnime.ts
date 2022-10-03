import { CustomError } from "../../classes/CustomError";
import { REQUIRED_CATEGORIES, REQUIRED_IMAGES } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { Create } from "../../ts/crud-animes/interfaces/Create";

export const createAnime = async (props: Create) => {
	const { edarReview, episodes, images, name, seasons, synopsis, categories } =
		props;

	if (!categories)
		throw new CustomError({ message: REQUIRED_CATEGORIES, status: 400 });
	if (!images) throw new CustomError({ message: REQUIRED_IMAGES, status: 400 });

	const anime = await prisma.anime.create({
		data: {
			score: 0,
			seasons,
			episodes,
			name,
			synopsis,
			edarReview,
			images: { create: images },
			categories: { connect: categories }
		}
	});

	return anime;
};
