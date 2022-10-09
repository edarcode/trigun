import { CustomError } from "../../classes/CustomError";
import { REQUIRED_ID } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { UpdateAnime } from "../../types/crud-animes/UpdateAnime";

export const updateAnime = async (props: UpdateAnime) => {
	const {
		id,
		episodes,
		name,
		score,
		seasons,
		status,
		synopsis,
		edarReview,
		categories,
		images
	} = props;
	if (!id) throw new CustomError({ message: REQUIRED_ID, status: 400 });

	const anime = await prisma.anime.update({
		where: { id },
		data: {
			episodes,
			name,
			seasons,
			synopsis,
			score,
			status,
			edarReview,
			categories: {
				set: categories ? [] : undefined,
				connect: categories?.map(id => ({ id }))
			},
			images: {
				deleteMany: images ? {} : undefined,
				create: images?.map(original => ({ original }))
			}
		}
	});

	return anime;
};
