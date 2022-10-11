import { Router } from "express";
import { readUsersController } from "./getController/readUsers.controller";
import { createUserController } from "./postController/createUser.controller";

export const users = Router();

users.route("/").post(createUserController);
users.route("/").get(readUsersController);
