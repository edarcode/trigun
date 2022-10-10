import jwt from "jsonwebtoken";
import { SECRET } from "../../env/server";

export const createToken = (dataToSave: object, expiresIn: string) => {
	const token = jwt.sign(dataToSave, SECRET, { expiresIn });

	return token;
};
