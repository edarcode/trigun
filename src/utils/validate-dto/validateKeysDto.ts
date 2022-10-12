import { CustomError } from "../../classes/CustomError";
import { Rules } from "../../types/validate-dto/ValidateDto";
import { calcTypeof } from "./calcTypeof";

export const validateKeysDto = (dto: object, rules: Rules[]) => {
	const arrDto = Object.entries(dto);

	for (let i = 0; i < rules.length; i++) {
		const dataErr = rules[i];
		const { key, msg, status, type, required = true } = dataErr;
		const REQUIRE_KEY = `Falta el ${key}`;
		const REQUIRE_TYPE = `${key} debe ser de tipo ${type}`;

		const itemDto = arrDto.find(item => item[0] === key);
		if (required) {
			if (!itemDto || !itemDto[1])
				throw new CustomError({
					message: msg || REQUIRE_KEY,
					status: status || 400
				});

			if (calcTypeof(itemDto[1]) !== type)
				throw new CustomError({
					message: msg || REQUIRE_TYPE,
					status: status || 400
				});
		} else {
			if (itemDto && calcTypeof(itemDto[1]) !== type)
				throw new CustomError({
					message: msg || REQUIRE_TYPE,
					status: status || 400
				});
		}
	}
};
