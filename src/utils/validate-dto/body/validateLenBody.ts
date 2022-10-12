import { CustomError } from "../../../classes/CustomError";

export const validateLenBody = (dto: object, len: number) => {
	const keysDto = Object.keys(dto);
	const lenDto = keysDto.length;
	const ERR_SIZE_DTO = "Tamaño del DTO incorrecto";

	if (lenDto !== len)
		throw new CustomError({
			message: ERR_SIZE_DTO,
			status: 400
		});
};
