export interface PropsValidateStrictBody {
	dto: object;
	len: number;
	rules: DataErr[];
}
export interface DataErr {
	key: string;
	type: TypeData;
	msg?: string;
	status?: number;
}

export enum TypeData {
	boolean = "boolean",
	number = "number",
	string = "string"
}
