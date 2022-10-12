import { CustomError } from "../../classes/CustomError";

interface PropsValidateDto {
	dto: object;
	len: number;
	rules: DataErr[];
}
interface DataErr {
	key: string;
	msg?: string;
	status?: number;
}

export const validateStrictDto = (props: PropsValidateDto) => {
	const { dto, len } = props;
	validateSizeDto(dto, len);

	const { rules } = props;
	validateKeysDto(dto, rules);
};

const validateSizeDto = (dto: object, len: number) => {
	const keysDto = Object.keys(dto);
	const lenDto = keysDto.length;
	const ERR_SIZE_DTO = "Tamaño del DTO incorrecto";

	if (lenDto > len || lenDto <= 0)
		throw new CustomError({
			message: ERR_SIZE_DTO,
			status: 400
		});
};

const validateKeysDto = (dto: object, validate: DataErr[]) => {
	const keysDto = Object.keys(dto);

	for (let i = 0; i < validate.length; i++) {
		const dataErr = validate[i];
		const { key, msg, status } = dataErr;
		const defaultMsg = `Falta el ${key}`;
		if (!keysDto.includes(key))
			throw new CustomError({
				message: msg || defaultMsg,
				status: status || 400
			});
	}
};
