import { CustomError } from "../../classes/CustomError";
import { ERR_PAGE, NOT_FOUND } from "../../constants/msgs";
import { CATEGORIES } from "../../constants/perPage";
import { prisma } from "../../prisma";
import { PropsReadCategories } from "../../types/crud-category/ReadCategories";
import { CategorySelect } from "../../types/prisma/category/CategorySelect";
import { CategoryWhere } from "../../types/prisma/category/CategoryWhere";

export const readCategories = async (props: PropsReadCategories) => {
	const { page = 1, perPage = CATEGORIES, name, orderBy } = props;

	if (page <= 0) throw new CustomError({ message: ERR_PAGE, status: 400 });

	const realPage = page - 1;
	const where: CategoryWhere = {
		name: { contains: name, mode: "insensitive" }
	};
	const select: CategorySelect = { id: true, name: true, img: true };

	const categories = await prisma.category.findMany({
		skip: realPage * perPage,
		take: perPage,
		orderBy,
		where,
		select
	});

	if (!categories.length)
		throw new CustomError({ message: NOT_FOUND, status: 404 });

	const totalRegisters = await prisma.category.count({ where });

	const totalPages = Math.ceil(totalRegisters / perPage);
	return {
		querySubject: "categories",
		totalRegisters,
		totalPages,
		currentPage: Number(page),
		registersPerPage: perPage,
		registers: categories
	};
};
