import { CustomError } from "../../classes/CustomError";
import { REQUIRED_CATEGORIES, REQUIRED_IMAGES } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { PropsCreateAnime } from "../../types/crud-animes/CreateAnime";

export const createAnime = async (props: PropsCreateAnime) => {
	const {
		edarReview,
		episodes,
		images,
		name,
		seasons,
		synopsis,
		categories,
		status
	} = props;

	if (!categories)
		throw new CustomError({ message: REQUIRED_CATEGORIES, status: 400 });
	if (!images) throw new CustomError({ message: REQUIRED_IMAGES, status: 400 });

	const anime = await prisma.anime.create({
		data: {
			score: 0,
			status,
			seasons,
			episodes,
			name,
			synopsis,
			edarReview,
			images: { create: images.map(original => ({ original })) },
			categories: { connect: categories.map(id => ({ id })) }
		}
	});

	return anime;
};
