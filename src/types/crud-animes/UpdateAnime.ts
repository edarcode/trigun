import { StatusAnime } from "@prisma/client";

export interface UpdateAnime {
	id: number;
	status?: StatusAnime;
	score?: number;
	name?: string;
	seasons?: number;
	episodes?: number;
	synopsis?: string;
	edarReview?: string;
	images?: string[];
	categories?: number[];
}
