import { Router } from "express";
import { users } from "./users/users.router";

export const router = Router();

router.use("/users", users);
