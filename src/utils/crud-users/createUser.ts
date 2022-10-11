import { CustomError } from "../../classes/CustomError";
import { DATA_IS_MISSING } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { PropsCreateUser } from "../../types/crud-users/CreateUser";
import { encryptPassword } from "../auth/encryptPassword";

export const createUser = async (props: PropsCreateUser) => {
	const { email, username, password } = props;

	if (!email || !username || !password)
		throw new CustomError({ message: DATA_IS_MISSING, status: 400 });

	const user = await prisma.user.create({
		data: { email, username, password: await encryptPassword(password) }
	});

	return user;
};
