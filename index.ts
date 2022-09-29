import "dotenv/config";
import { PORT } from "./src/env/server";
import server from "./src/server";
import { updateUser } from "./src/utils/crud-users/updateUser";

server.listen(PORT, async () => {
	console.log(`Server running on port: ${PORT} 😎`);
	const user = await updateUser();

	console.dir(user, { depth: null });
});
