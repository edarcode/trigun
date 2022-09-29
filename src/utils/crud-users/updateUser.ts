import { prisma } from "../../db";

export const updateUser = async () => {
	const post = await prisma.post.update({
		where: { id: 1 },
		data: { published: true }
	});

	return post;
};
