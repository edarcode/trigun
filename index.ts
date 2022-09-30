import "dotenv/config";
import { PORT } from "./src/env/server";
import { server } from "./src/server";

server.listen(PORT, async () => {
	console.log(`Server running on port: ${PORT} 😎`);
});
