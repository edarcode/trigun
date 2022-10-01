import { NextFunction, Request, Response } from "express";

export interface Headers {
	(_req: Request, res: Response, next: NextFunction): void;
}
