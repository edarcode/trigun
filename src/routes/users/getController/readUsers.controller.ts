import { Route } from "../../../types/controllers/Route";
import { validateQueryBool } from "../../../utils/common/validateQueryBool";
import { readUsers } from "../../../utils/crud-users/readUsers";

export const readUsersController: Route = async (req, res, next) => {
	try {
		const { verify, active, ...queries } = req.query;
		const users = await readUsers({
			verify: validateQueryBool(verify),
			active: validateQueryBool(active),
			...queries
		});
		res.status(200).json(users);
	} catch (error) {
		next(error);
	}
};
