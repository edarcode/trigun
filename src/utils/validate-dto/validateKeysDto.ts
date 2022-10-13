import { CustomError } from "../../classes/CustomError";
import { Rules } from "../../types/validate-dto/ValidateDto";
import { calcTypeof } from "./calcTypeof";

export const validateKeysDto = (dto: object, rules: Rules[]) => {
	const arrDto = Object.entries(dto);
	const copyRules = [...rules];
	const arrKeysDto = [];

	for (let i = 0; i < arrDto.length; i++) {
		const [keyDto, valueDto] = arrDto[i];
		arrKeysDto.push(keyDto);
		const ruleDto = copyRules.find(rule => rule.key === keyDto);

		const ERR_KEY = `${keyDto} no valida`;
		if (!ruleDto || valueDto === "")
			throw new CustomError({ message: ERR_KEY, status: 400 });

		const ERR_TYPE = `${ruleDto.key} debe ser de tipo ${ruleDto.type}`;
		if (calcTypeof(valueDto) !== ruleDto.type)
			throw new CustomError({
				message: ruleDto.msg || ERR_TYPE,
				status: ruleDto.status || 400
			});
	}

	for (let i = 0; i < copyRules.length; i++) {
		const rule = copyRules[i];
		const REQUIRED_KEY = `Falta el ${rule.key}`;
		if (rule.required && !arrKeysDto.includes(rule.key))
			throw new CustomError({
				message: rule.msg || REQUIRED_KEY,
				status: rule.status || 400
			});
	}
};
