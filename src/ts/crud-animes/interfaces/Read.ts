import { Status } from "../enums/Status";

export interface Read {
	page?: number;
	perPage?: number;
	status?: Status;
	score?: number;
	seasons?: number;
	episodes?: number;
	name?: string;
	categoryId?: number;
}