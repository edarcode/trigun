import { CustomError } from "../../classes/CustomError";
import { CATEGORY_CREATED_ERR } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { Create } from "../../ts/crud-category/interfaces/Create";

export const createCategory = async (props: Create) => {
	const category = await prisma.category.findUnique({
		where: { name: props.name }
	});
	if (category)
		throw new CustomError({ message: CATEGORY_CREATED_ERR, status: 400 });

	return prisma.category.create({ data: props });
};
