import { Router } from "express";
import { categories } from "./categories/categories.router";
export const admin = Router();

admin.use("/categories", categories);
