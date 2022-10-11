import bcrypt from "bcrypt";

export const comparePassword = async (password: string, passwordDb: string) => {
	const isRight = await bcrypt.compare(password, passwordDb);

	return isRight;
};
