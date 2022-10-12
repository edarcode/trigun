import { Rules } from "../../types/validate-dto/ValidateDto";

export const calcLenAndStrictLen = (rules: Rules[]) => {
	const lenRulesNoRequired = rules.filter(
		rule => rule.required === false
	).length;
	const len = rules.length;
	const strictLen = lenRulesNoRequired ? false : true;

	return { len, strictLen };
};
