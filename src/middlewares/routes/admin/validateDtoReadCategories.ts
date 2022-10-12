import { Route } from "../../../types/controllers/Route";
import { Rules, TypeData } from "../../../types/validate-dto/ValidateDto";
import { validateDto } from "../../../utils/validate-dto/validateDto";

export const validateDtoReadCategories: Route = (req, _, next) => {
	try {
		const rules: Rules[] = [
			{ key: "name", type: TypeData.string, required: false },
			{ key: "page", type: TypeData.number, required: false },
			{ key: "perPage", type: TypeData.number, required: false },
			{ key: "orderBy", type: TypeData.string, required: false }
		];
		validateDto({ dto: req.query, rules });
		next();
	} catch (error) {
		next(error);
	}
};
