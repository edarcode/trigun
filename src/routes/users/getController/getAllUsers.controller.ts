export const getAllUsersController = (_: any, res: any, next: any) => {
	try {
		res.json({ msg: "Hola edar" });
	} catch (error) {
		next(error);
	}
};
