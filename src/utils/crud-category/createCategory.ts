import { prisma } from "../../prisma";

interface Dto {
	name: string;
	image: string;
}

export const createCategory = async (dto: Dto) => {
	let category = await prisma.category.findUnique({
		where: { name: dto.name }
	});
	if (category) return [category, false];
	category = await prisma.category.create({ data: dto });
	return [category, true];
};
