import { prisma } from "../../db";

export const createUsers = async () => {
	const user = await prisma.user.create({
		data: {
			name: "edarcode",
			email: "edarcode@gmail.com",
			posts: {
				create: { title: "Hello World" }
			},
			profile: {
				create: { bio: "I like turtles" }
			}
		}
	});

	return user;
};
