import { Role } from "@prisma/client";

export interface PropsUpdateUserById {
	id: number;
	username?: string;
	email?: string;
	password?: string;
	active?: boolean;
	verify?: boolean;
	role?: Role;
	img?: string;
}
