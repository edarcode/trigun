import { prisma } from "../../prisma";

interface Dto {
	name: string;
}

export const createCategory = async (dto: Dto) => {
	const category = await prisma.category.create({ data: dto });

	return category;
};
