import { Order } from "../../enums/Order";

export interface PropsReadCategories {
	name?: string;
	page?: number;
	perPage?: number;
	orderBy?: OrderByReadCategories;
}

export interface OrderByReadCategories {
	name?: Order;
}
