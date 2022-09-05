export const getAllUsersController = (_, res, next) => {
	try {
		res.json({ msg: "Hola edar" });
	} catch (error) {
		next(error);
	}
};
