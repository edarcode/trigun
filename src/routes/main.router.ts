import { Router } from "express";
import { animes } from "./animes/animes.router";
import { categories } from "./categories/categories.router";
import { users } from "./users/users.router";

export const router = Router();

router.use("/users", users);
router.use("/categories", categories);
router.use("/animes", animes);
