import { Image } from "@prisma/client";

export interface Create {
	name: string;
	seasons: number;
	episodes: number;
	synopsis: string;
	creatorReview: string;
	images: Image;
	categories: CategoryId[];
}

interface CategoryId {
	id: number;
}
