import { Order } from "../../enums/Order";

export interface PropsReadCategories {
	name?: string;
	page?: number;
	perPage?: number;
	orderBy?: OrderBy;
}

interface OrderBy {
	name?: Order;
}
