import { CustomError } from "../../classes/CustomError";
import { REQUIRED_ID } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { Update } from "../../types/crud-category/UpdateCategory";

export const updateCategory = async (props: Update) => {
	const { id, img, name } = props;
	if (!id) throw new CustomError({ message: REQUIRED_ID, status: 400 });
	const category = await prisma.category.update({
		where: { id },
		data: { img, name }
	});

	return category;
};
