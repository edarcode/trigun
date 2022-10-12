import bcrypt from "bcrypt";

export const encryptPassword = async (password: string) => {
	if (!password) throw new TypeError("Olvidó enviar el password");
	const salt = await bcrypt.genSalt(10);
	const passwordHash = await bcrypt.hash(password, salt);

	return passwordHash;
};
