import { CustomError } from "../../classes/CustomError";
import { NOT_FOUND } from "../../constants/msgs";
import { USERS } from "../../constants/perPage";
import { prisma } from "../../prisma";
import { PropsReadUsers } from "../../types/crud-users/ReadUsers";

export const readUsers = async (props: PropsReadUsers) => {
	const {
		page = 1,
		perPage = USERS,
		username,
		email,
		role,
		verify,
		active
	} = props;

	const realPage = page - 1;
	const where = { username, email, role, verify, active };

	const users = await prisma.user.findMany({
		skip: realPage * perPage,
		take: perPage,
		where,
		select: {
			id: true,
			active: true,
			verify: true,
			role: true,
			username: true,
			email: true,
			img: true
		}
	});

	if (!users.length) throw new CustomError({ message: NOT_FOUND, status: 404 });

	const totalRegisters = await prisma.user.count({ where });

	const totalPages = Math.ceil(totalRegisters / perPage);
	return {
		querySubject: "users",
		totalRegisters,
		totalPages,
		currentPage: Number(page),
		registersPerPage: perPage,
		registers: users
	};
};
