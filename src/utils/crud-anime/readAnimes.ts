import { prisma } from "../../prisma";

export const readAnimes = async () => {
	return await prisma.anime.findMany({
		include: {
			categories: { select: { id: true, name: true, img: true } },
			images: true
		}
	});
};
