import { animes } from "../../sketch/animes";
import { createAnime } from "../crud-anime/createAnime";

export const fillAnime = async () => {
	for (let i = 0; i < animes.length; i++) {
		const anime = animes[i];
		await createAnime(anime);
	}
};
