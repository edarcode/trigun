import { prisma } from "../../prisma";

export const deleteCategory = async (id: number) => {
	return await prisma.category.delete({ where: { id } });
};
