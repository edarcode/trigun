import { Router } from "express";
import { createUserController } from "./post/createUser.controller";
export const users = Router();

users.route("/").post(createUserController);
