import { CustomError } from "../../../classes/CustomError";
import { Rules } from "../../../types/validate-dto/ValidateDto";
import { parseQuery } from "./parseQuery";

export const validateQuery = (dto: object, rules: Rules[]) => {
	const query: { [key: string]: string | number | boolean | object } = {};
	const arrDto = Object.entries(dto);
	const lenDto = arrDto.length;

	const ERR_LEN_DTO = "Tamaño del DTO incorrecto";
	if (lenDto > rules.length)
		throw new CustomError({ message: ERR_LEN_DTO, status: 400 });

	for (let i = 0; i < arrDto.length; i++) {
		const [keyDto, valueDto] = arrDto[i];
		const ruleDto = rules.find(rule => rule.key === keyDto);

		const ERR_KEY = `${keyDto} no valida`;
		if (!ruleDto || valueDto === "")
			throw new CustomError({ message: ERR_KEY, status: 400 });

		const valueQuery = parseQuery(keyDto, valueDto, ruleDto.type);
		query[keyDto] = valueQuery;
	}

	return query;
};
