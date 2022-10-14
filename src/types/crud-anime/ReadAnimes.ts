import { Status } from "../enums/StatusAnime";

export interface PropsReadAnimes {
	page?: number;
	perPage?: number;
	status?: Status;
	score?: number;
	seasons?: number;
	episodes?: number;
	name?: string;
	categories?: number[];
}
