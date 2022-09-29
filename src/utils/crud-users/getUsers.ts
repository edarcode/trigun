import { prisma } from "../../db";

export const getUsers = async () => {
	const allUsers = await prisma.user.findMany({
		include: {
			posts: true,
			profile: true
		}
	});

	return allUsers;
};
