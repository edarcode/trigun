import { Router } from "express";
import { categories } from "./categories/categories.router";
export const client = Router();

client.use("/categories", categories);
