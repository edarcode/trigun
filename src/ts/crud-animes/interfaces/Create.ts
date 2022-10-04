import { Status } from "../enums/Status";

export interface Create {
	name: string;
	status?: Status;
	seasons: number;
	episodes: number;
	synopsis: string;
	edarReview: string;
	images: string[];
	categories: number[];
}
