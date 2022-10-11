import { Role } from "@prisma/client";

export interface PropsReadUsers {
	username?: string;
	email?: string;
	page?: number;
	perPage?: number;
	role?: Role;
	verify?: boolean;
	active?: boolean;
}
