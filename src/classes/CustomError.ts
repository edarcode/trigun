interface DtoConstructor {
	message: string;
	status: number;
}

export class CustomError extends Error {
	status;
	constructor({ message, status = 500 }: DtoConstructor) {
		// Pasa los argumentos restantes (incluidos los específicos del proveedor) al constructor padre
		super();
		// Mantiene un seguimiento adecuado de la pila para el lugar donde se lanzó nuestro error (solo disponible en V8)
		if (Error.captureStackTrace) {
			Error.captureStackTrace(this, CustomError);
		}
		this.name = "CustomError";
		this.message = message;
		this.status = status;
	}
}
