import { CustomError } from "../../../classes/CustomError";
import { Rules } from "../../../types/validate-dto/ValidateDto";

export const validateQuery = (dto: object, rules: Rules[]) => {
	const query = {};
	const arrDto = Object.entries(dto);
	const lenDto = arrDto.length;

	const ERR_SIZE_DTO = "Tamaño del DTO incorrecto";
	if (lenDto > rules.length)
		throw new CustomError({ message: ERR_SIZE_DTO, status: 400 });

	for (let i = 0; i < arrDto.length; i++) {
		const [keyDto, valueDto] = arrDto[i];
		const ruleDto = rules.find(rule => rule.key === keyDto);

		const ERR_KEY = `${keyDto} no valida`;
		if (!ruleDto || valueDto === "")
			throw new CustomError({ message: ERR_KEY, status: 400 });
	}

	return query;
};
