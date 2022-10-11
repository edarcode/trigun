import { Route } from "../../../types/controllers/Route";
import { queryStringToBool } from "../../../utils/common/queryToBoolean";
import { readUsers } from "../../../utils/crud-users/readUsers";

export const readUsersController: Route = async (req, res, next) => {
	try {
		const { verify, active, ...queries } = req.query;
		const users = await readUsers({
			verify: queryStringToBool(verify),
			active: queryStringToBool(active),
			...queries
		});
		res.json(users);
	} catch (error) {
		next(error);
	}
};
