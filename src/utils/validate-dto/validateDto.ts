import { PropsValidateDto } from "../../types/validate-dto/ValidateDto";
import { calcLenAndStrictLen } from "./calcLenAndStrictLen";
import { validateKeysDto } from "./validateKeysDto";
import { validateLenDto } from "./validateLenDto";

export const validateDto = (props: PropsValidateDto) => {
	const { dto, rules } = props;
	const { len, strictLen } = calcLenAndStrictLen(rules);
	validateLenDto(dto, len, strictLen);
	validateKeysDto(dto, rules);
};
