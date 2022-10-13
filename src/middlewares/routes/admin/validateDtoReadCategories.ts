import { Route } from "../../../types/controllers/Route";
import { Rules, TypeData } from "../../../types/validate-dto/ValidateDto";
import { validateDto } from "../../../utils/validate-dto/validateDto";

export const validateDtoReadCategories: Route = (req, _, next) => {
	try {
		const rules: Rules[] = [
			{ key: "name", type: TypeData.string },
			{ key: "page", type: TypeData.number },
			{ key: "perPage", type: TypeData.number },
			{ key: "orderBy", type: TypeData.string }
		];
		validateDto({ dto: req.query, rules, isQuery: true });
		next();
	} catch (error) {
		next(error);
	}
};
