import { Route } from "../../../types/controllers/Route";
import { TypeData } from "../../../types/validate-dto/ValidateStrictBody";
import { validateStrictBody } from "../../../utils/validate-dto/body/validateStrictBody";

export const validateDtoCreateCategory: Route = (req, _, next) => {
	try {
		const rules = [
			{ key: "name", type: TypeData.string },
			{ key: "img", type: TypeData.string }
		];
		validateStrictBody({ dto: req.body, len: 2, rules });
		next();
	} catch (error) {
		next(error);
	}
};
