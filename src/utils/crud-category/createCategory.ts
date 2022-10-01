import { prisma } from "../../prisma";
import { Create } from "../../ts/crud-category/interfaces/Create";

export const createCategory = async (props: Create) => {
	let category = await prisma.category.findUnique({
		where: { name: props.name }
	});
	if (category) return [category, false];
	category = await prisma.category.create({ data: props });
	return [category, true];
};
