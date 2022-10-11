import { CustomError } from "../../classes/CustomError";
import { NOT_FOUND } from "../../constants/msgs";
import { prisma } from "../../prisma";

export const readUserById = async (id: number) => {
	const user = await prisma.user.findUnique({
		where: { id },
		select: {
			id: true,
			img: true,
			verify: true,
			active: true,
			role: true,
			username: true,
			email: true
		}
	});

	if (!user) throw new CustomError({ message: NOT_FOUND, status: 404 });

	return user;
};
