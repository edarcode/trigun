import { VIRIFY_EMAIL } from "../../../../constants/msgs";
import { Route } from "../../../../types/controllers/Route";
import { createToken } from "../../../../utils/auth/createToken";
import { sendVerificationEmail } from "../../../../utils/auth/sendVerificationEmail";
import { createUser } from "../../../../utils/crud-user/createUser";

export const createUserController: Route = async (req, res, next) => {
	try {
		const user = await createUser(req.body);
		const token = createToken({ userId: user.id }, "1h");
		await sendVerificationEmail(user.email, token);
		res.status(200).json({ msg: VIRIFY_EMAIL });
	} catch (error) {
		next(error);
	}
};
