import { Order } from "../../common/enums/Order";

export interface Read {
	name?: string;
	page?: number;
	perPage?: number;
	orderBy?: OrderBy;
}

interface OrderBy {
	name?: Order;
}
