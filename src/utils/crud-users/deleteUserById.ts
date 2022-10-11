import { prisma } from "../../prisma";

export const deleteUserById = async (id: number) => {
	return await prisma.user.delete({ where: { id } });
};
