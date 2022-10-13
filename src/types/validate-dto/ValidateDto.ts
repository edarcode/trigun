export interface PropsValidateDto {
	dto: object;
	rules: Rules[];
	isQuery?: boolean;
}

export interface Rules {
	key: string;
	type: TypeData;
	msg?: string;
	status?: number;
	required?: boolean;
}

export enum TypeData {
	boolean = "boolean",
	number = "number",
	string = "string",
	array = "array",
	object = "object"
}
