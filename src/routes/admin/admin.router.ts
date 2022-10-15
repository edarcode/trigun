import { Router } from "express";
import { animes } from "./animes/animes.router";
import { categories } from "./categories/categories.router";
import { users } from "./users/users.router";
export const admin = Router();

admin.use("/categories", categories);
admin.use("/animes", animes);
admin.use("/users", users);
