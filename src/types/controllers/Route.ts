import { NextFunction, Request, Response } from "express";

export interface Route {
	(req: Request, res: Response, next: NextFunction): void;
}
