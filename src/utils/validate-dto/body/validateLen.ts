import { CustomError } from "../../../classes/CustomError";

export const validateLen = (dto: object, len: number, strictLen: boolean) => {
	const keysDto = Object.keys(dto);
	const lenDto = keysDto.length;
	const ERR_SIZE_DTO = "Tamaño del DTO incorrecto";
	if (strictLen) {
		if (lenDto !== len)
			throw new CustomError({
				message: ERR_SIZE_DTO,
				status: 400
			});
	} else {
		if (lenDto > len || lenDto < 0)
			throw new CustomError({
				message: ERR_SIZE_DTO,
				status: 400
			});
	}
};
