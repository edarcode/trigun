import { Router } from "express";
import { readAnimesController } from "./getController/readAnimes.controller";
import { createAnimeController } from "./postController/createAnimes.controller";
import { updateAnimeController } from "./updateController/updateAnimeController";

export const animes = Router();

animes.route("/").post(createAnimeController);
animes.route("/").get(readAnimesController);
animes.route("/:id").patch(updateAnimeController);
