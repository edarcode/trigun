import { Status } from "../enums/StatusAnime";

export interface PropsCreateAnime {
	name: string;
	status?: Status;
	seasons: number;
	episodes: number;
	synopsis: string;
	edarReview: string;
	images: string[];
	categories: number[];
}
