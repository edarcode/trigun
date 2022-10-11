import { CustomError } from "../../classes/CustomError";
import { REQUIRED_ID } from "../../constants/msgs";
import { prisma } from "../../prisma";
import { PropsUpdateUser } from "../../types/crud-users/UpdateUser";
import { encryptPassword } from "../auth/encryptPassword";

export const updateUserById = async (props: PropsUpdateUser) => {
	const { id, username, email, password, active, role, verify, img } = props;

	if (!id) throw new CustomError({ message: REQUIRED_ID, status: 400 });

	const user = await prisma.user.update({
		where: { id },
		data: {
			username,
			email,
			password: password ? await encryptPassword(password) : undefined,
			img,
			verify,
			active,
			role
		}
	});

	return user;
};
