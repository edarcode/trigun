import { CustomError } from "../../classes/CustomError";
import { Rules } from "../../types/validate-dto/ValidateDto";
import { calcTypeof } from "./calcTypeof";

export const validateKeysDto = (dto: object, rules: Rules[]) => {
	const arrDto = Object.entries(dto);

	for (let i = 0; i < arrDto.length; i++) {
		const [keyDto, valueDto] = arrDto[i];
		const ruleDto = rules.find(rule => rule.key === keyDto);

		const ERR_KEY = `${keyDto} no valida`;
		if (!ruleDto || !valueDto)
			throw new CustomError({ message: ERR_KEY, status: 400 });

		const ERR_TYPE = `${ruleDto.key} debe ser de tipo ${ruleDto.type}`;

		if (ruleDto.required) {
			if (calcTypeof(valueDto) !== ruleDto.type)
				throw new CustomError({
					message: ruleDto.msg || ERR_TYPE,
					status: ruleDto.status || 400
				});
		}
	}
};
