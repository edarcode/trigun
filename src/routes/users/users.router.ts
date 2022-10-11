import { Router } from "express";
import { deleteUserByIdController } from "./deleteController/deleteUserById.controller";
import { readUserByIdController } from "./getController/readUserById.controller";
import { readUsersController } from "./getController/readUsers.controller";
import { createUserController } from "./postController/createUser.controller";
import { updateUserController } from "./putController/updateUser.controller";

export const users = Router();

users.route("/").post(createUserController);
users.route("/").get(readUsersController);
users.route("/:id").get(readUserByIdController);
users.route("/:id").put(updateUserController);
users.route("/:id").delete(deleteUserByIdController);
