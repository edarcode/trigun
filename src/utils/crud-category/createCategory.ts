import { CustomError } from "../../classes/CustomError";
import { CATEGORY_CREATED_ERR } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { PropsCreateCategory } from "../../ts/crud-category/CreateCategory";

export const createCategory = async (props: PropsCreateCategory) => {
	const category = await prisma.category.findUnique({
		where: { name: props.name }
	});
	if (category)
		throw new CustomError({ message: CATEGORY_CREATED_ERR, status: 400 });

	return prisma.category.create({ data: props });
};
