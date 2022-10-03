import { Prisma } from "@prisma/client";
import { CustomError } from "../../classes/CustomError";
import { NOT_FOUND } from "../../constants/msgs";
import { ANIMES } from "../../constants/perPage";
import { prisma } from "../../prisma";
import { Read } from "../../ts/crud-animes/interfaces/Read";

export const readAnimes = async (props: Read) => {
	const {
		page = 1,
		perPage = ANIMES,
		status,
		seasons,
		episodes,
		categoryId,
		name,
		score
	} = props;
	const realPage = page - 1;

	const where: Prisma.AnimeWhereInput = {
		status,
		seasons,
		episodes,
		name: { contains: name, mode: "insensitive" },
		score: { gt: Number(score) || undefined },
		categories: {
			some: {
				id: Number(categoryId) || undefined
			}
		}
	};

	const [animes, totalRegisters] = await prisma.$transaction([
		prisma.anime.findMany({
			skip: realPage * perPage,
			take: perPage,
			where,
			select: {
				id: true,
				status: true,
				score: true,
				seasons: true,
				episodes: true,
				name: true,
				synopsis: true,
				edarReview: true,
				categories: { select: { id: true, name: true } },
				images: { select: { id: true, original: true } }
			}
		}),
		prisma.anime.count({ where })
	]);

	if (!animes.length)
		throw new CustomError({ message: NOT_FOUND, status: 404 });

	const totalPages = Math.ceil(totalRegisters / perPage);
	return {
		totalRegisters,
		totalPages,
		perPage,
		page: Number(page),
		animes
	};
};
