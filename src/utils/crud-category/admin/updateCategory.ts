import { CustomError } from "../../../classes/CustomError";
import { REQUIRED_ID } from "../../../constants/msgs";
import { prisma } from "../../../prisma";
import { PropsUpdateCategory } from "../../../types/crud-category/admin/UpdateCategory";

export const updateCategory = async (props: PropsUpdateCategory) => {
	const { id, img, name } = props;
	if (!id) throw new CustomError({ message: REQUIRED_ID, status: 400 });
	const category = await prisma.category.update({
		where: { id },
		data: { img, name }
	});

	return category;
};
