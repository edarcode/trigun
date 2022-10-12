import { CustomError } from "../../../classes/CustomError";
import { DataErr } from "../../../types/validate-dto/ValidateStrictBody";

export const validateKeysBody = (dto: object, validate: DataErr[]) => {
	const arrDto = Object.entries(dto);

	for (let i = 0; i < validate.length; i++) {
		const dataErr = validate[i];
		const { key, msg, status, type } = dataErr;
		const REQUIRE_KEY = `Falta el ${key}`;
		const REQUIRE_TYPE = `${key} debe ser de tipo ${type}`;

		const itemDto = arrDto.find(item => item[0] === key);
		if (!itemDto)
			throw new CustomError({
				message: msg || REQUIRE_KEY,
				status: status || 400
			});

		if (typeof itemDto[1] !== type)
			throw new CustomError({
				message: msg || REQUIRE_TYPE,
				status: status || 400
			});
	}
};
