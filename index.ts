import "dotenv/config";
import { PORT } from "./src/env/server";
import { server } from "./src/server";
import { fillDb } from "./src/utils/fill-db/fillDb";

server.listen(PORT, async () => {
	await fillDb();
	console.log(`Server running on port: ${PORT} 😎`);
});
