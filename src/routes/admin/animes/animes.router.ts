import { Router } from "express";
import { deleteAnimeController } from "./controllers/delete/deleteAnimeController";
import { readAnimeByIdController } from "./controllers/get/readAnimeById.controller";
import { readAnimesController } from "./controllers/get/readAnimes.controller";
import { createAnimeController } from "./controllers/post/createAnimes.controller";
import { updateAnimeController } from "./controllers/put/updateAnimeController";
export const animes = Router();

animes.route("/").post(createAnimeController);
animes.route("/").get(readAnimesController);
animes.route("/:id").get(readAnimeByIdController);
animes.route("/:id").put(updateAnimeController);
animes.route("/:id").delete(deleteAnimeController);
