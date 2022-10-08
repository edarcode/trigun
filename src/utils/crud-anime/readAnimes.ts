import { Prisma } from "@prisma/client";
import { CustomError } from "../../classes/CustomError";
import { NOT_FOUND } from "../../constants/msgs";
import { ANIMES } from "../../constants/perPage";
import { prisma } from "../../prisma";
import { PropsReadAnimes } from "../../types/crud-animes/ReadAnimes";

export const readAnimes = async (props: PropsReadAnimes) => {
	const {
		page = 1,
		perPage = ANIMES,
		status,
		seasons,
		episodes,
		categories,
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
				OR: categories
			}
		}
	};

	const animes = await prisma.anime.findMany({
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
	});

	if (!animes.length)
		throw new CustomError({ message: NOT_FOUND, status: 404 });

	const totalRegisters = await prisma.anime.count({ where });

	const totalPages = Math.ceil(totalRegisters / perPage);
	return {
		querySubject: "animes",
		totalRegisters,
		totalPages,
		currentPage: Number(page),
		registersPerPage: perPage,
		registers: animes
	};
};
