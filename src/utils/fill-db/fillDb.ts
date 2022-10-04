import { fillAnime } from "./fillAnime";
import { fillCategory } from "./fillCategory";

const fillDb = async () => {
	try {
		await fillCategory();
		await fillAnime();
		console.log("Database filled successfully");
	} catch (error) {
		console.log(error);
	}
};

fillDb();
