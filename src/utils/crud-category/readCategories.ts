import { CustomError } from "../../classes/CustomError";
import { ERR_PAGE, NOT_FOUND } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { ReadCategories } from "../../ts/interfaces/ReadCategories";

export const readCategories = async (queries: ReadCategories) => {
	const { page = 1, perPage = 2, name, orderBy } = queries;

	const errPage = new CustomError({ message: ERR_PAGE, status: 400 });
	if (page <= 0) throw errPage;

	const realPage = page - 1;
	const where = { name: { contains: name } };
	const filters = {
		skip: realPage * perPage,
		take: perPage,
		where,
		select: { id: true, name: true, img: true },
		orderBy
	};

	const [categories, totalRegisters] = await prisma.$transaction([
		prisma.category.findMany(filters),
		prisma.category.count({ where })
	]);

	const totalPages = Math.ceil(totalRegisters / perPage);
	const dataCategories = {
		totalRegisters,
		totalPages,
		perPage,
		page: Number(page),
		categories
	};

	const err404 = new CustomError({ message: NOT_FOUND, status: 404 });
	if (!categories.length) throw err404;
	return dataCategories;
};
