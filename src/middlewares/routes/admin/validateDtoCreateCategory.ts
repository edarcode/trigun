import { Route } from "../../../types/controllers/Route";
import { validateStrictDto } from "../../../utils/common/validateStrictDto";

export const validateDtoCreateCategory: Route = (req, _, next) => {
	try {
		const rules = [{ key: "name" }, { key: "img" }];
		validateStrictDto({ dto: req.body, len: 2, rules });
		next();
	} catch (error) {
		next(error);
	}
};
