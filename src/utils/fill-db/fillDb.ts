import { fillCategory } from "./fillCategory";

const fillDb = async () => {
	try {
		await fillCategory();
		console.log("Database filled successfully");
	} catch (error) {
		console.log(error);
	}
};

fillDb();
