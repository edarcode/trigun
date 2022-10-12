import { Route } from "../../../types/controllers/Route";
import { Rules, TypeData } from "../../../types/validate-dto/ValidateDto";
import { validateDto } from "../../../utils/validate-dto/validateDto";

export const validateDtoCreateCategory: Route = (req, _, next) => {
	try {
		const rules: Rules[] = [
			{ key: "name", type: TypeData.string },
			{ key: "img", type: TypeData.string }
		];
		validateDto({ dto: req.body, rules });
		next();
	} catch (error) {
		next(error);
	}
};
