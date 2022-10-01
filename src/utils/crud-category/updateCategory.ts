import { CustomError } from "../../classes/CustomError";
import { NOT_FOUND, REQUIRED_ID } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { Update } from "../../ts/interfaces/categories/Update";

export const updateCategory = async (props: Update) => {
	const { id, img, name } = props;
	if (!id) throw new CustomError({ message: REQUIRED_ID, status: 400 });
	const category = await prisma.category.update({
		where: { id },
		data: { img, name }
	});

	if (!category) throw new CustomError({ message: NOT_FOUND, status: 404 });

	return category;
};
