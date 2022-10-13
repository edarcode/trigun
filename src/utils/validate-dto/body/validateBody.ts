import { Rules } from "../../../types/validate-dto/ValidateDto";
import { calcLenAndStrictLen } from "./calcLenAndStrictLen";
import { validateKeys } from "./validateKeys";
import { validateLen } from "./validateLen";

export const validateBody = (dto: object, rules: Rules[]) => {
	const { len, strictLen } = calcLenAndStrictLen(rules);
	validateLen(dto, len, strictLen);
	validateKeys(dto, rules);
	return dto;
};
