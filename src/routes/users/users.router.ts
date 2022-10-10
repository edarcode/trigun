import { Router } from "express";
import { getAllUsersController } from "./getController/getAllUsers.controller";
import { createUserController } from "./postController/createUser.controller";

export const users = Router();

users.route("/").post(createUserController);
users.route("/").get(getAllUsersController);
