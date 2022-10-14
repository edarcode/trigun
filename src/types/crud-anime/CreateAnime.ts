import { StatusAnime } from "@prisma/client";

export interface PropsCreateAnime {
	name: string;
	status?: StatusAnime;
	seasons: number;
	episodes: number;
	synopsis: string;
	edarReview: string;
	images: string[];
	categories: number[];
}
