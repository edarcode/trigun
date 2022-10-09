import { CustomError } from "../../classes/CustomError";
import { REQUIRED_ID } from "../../constants/msgs";
import { prisma } from "../../prisma";

export const deleteAnime = async (id: number) => {
	if (!id) throw new CustomError({ message: REQUIRED_ID, status: 400 });

	return await prisma.$transaction([
		prisma.image.deleteMany({ where: { animeId: id } }),
		prisma.anime.delete({ where: { id } })
	]);
};
