import { NextFunction, Request, Response } from "express";

export interface Error {
	(error: any, _req: Request, res: Response, _next: NextFunction): void;
}
