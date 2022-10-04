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
	// const filters = ;

	const categories = await prisma.category.findMany({
		skip: realPage * perPage,
		take: perPage,
		where,
		orderBy,
		select: {
			id: true,
			name: true,
			img: true
			// animes: { select: { id: true, name: true } }
		}
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
