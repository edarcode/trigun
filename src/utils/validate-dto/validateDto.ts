import { PropsValidateDto } from "../../types/validate-dto/ValidateDto";
import { validateBody } from "./body/validateBody";
import { validateQuery } from "./query/validateQuery";

export const validateDto = (props: PropsValidateDto) => {
	const { dto, rules, isQuery } = props;
	if (isQuery) return validateQuery(dto, rules);
	return validateBody(dto, rules);
};
