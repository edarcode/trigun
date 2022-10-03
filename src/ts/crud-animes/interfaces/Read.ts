import { Status } from "../enums/Status";

export interface Read {
	status: Status;
	score: number;
	seasons: number;
	episodes: number;
	name: string;
	categories: number[];
}
