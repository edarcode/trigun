import { CustomError } from "../../classes/CustomError";
import { ERR_PAGE, NOT_FOUND } from "../../constants/msgs";
import { CATEGORIES } from "../../constants/perPage";
import { prisma } from "../../prisma";
import { Read } from "../../ts/crud-category/interfaces/Read";

export const readCategories = async (props: Read) => {
	const { page = 1, perPage = CATEGORIES, name, orderBy } = props;

	if (page <= 0) throw new CustomError({ message: ERR_PAGE, status: 400 });

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

	if (!categories.length)
		throw new CustomError({ message: NOT_FOUND, status: 404 });

	const totalPages = Math.ceil(totalRegisters / perPage);
	return {
		totalRegisters,
		totalPages,
		perPage,
		page: Number(page),
		categories
	};
};
