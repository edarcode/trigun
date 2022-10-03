import { Image } from "@prisma/client";

export interface Create {
	name: string;
	seasons: number;
	episodes: number;
	synopsis: string;
	edarReview: string;
	images: Image;
	categories: CategoryId[];
}

interface CategoryId {
	id: number;
}
