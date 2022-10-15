import { Router } from "express";
import { categories } from "./categories/categories.router";
import { users } from "./users/users.router";
export const client = Router();

client.use("/categories", categories);
client.use("/users", users);
