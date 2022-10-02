import { InitCustomError } from "../ts/constructors/interfaces/InitCustomError";

export class CustomError extends Error {
	status;
	constructor(props: InitCustomError) {
		const { message, status = 500 } = props;
		super();
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, CustomError);
		}
		this.name = "CustomError";
		this.message = message;
		this.status = status;
	}
}
