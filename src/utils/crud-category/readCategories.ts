import { prisma } from "../../prisma";

enum Order {
	ASC = "asc",
	DESC = "desc"
}
interface OrderBy {
	name?: Order;
}
interface Query {
	name?: string;
	page?: number;
	perPage?: number;
	orderBy?: OrderBy;
}

export const readCategories = async (queries: Query) => {
	const { page = 1, perPage = 2, name, orderBy } = queries;
	if (page <= 0) throw TypeError("Error de página");
	const realPage = page - 1;
	const where = { name: { contains: name } };
	const filters = {
		skip: realPage * perPage,
		take: perPage,
		where,
		select: { id: true, name: true, img: true },
		orderBy
	};
	const [categories, totalCategories] = await prisma.$transaction([
		prisma.category.findMany(filters),
		prisma.category.count({ where })
	]);
	const totalPages = Math.ceil(totalCategories / perPage);
	if (page > totalPages) throw TypeError("Error de página");

	return {
		totalPages: Math.ceil(totalCategories / perPage),
		page: Number(page),
		perPage,
		totalCategories,
		categories
	};
};
