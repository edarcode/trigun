import "dotenv/config";
import { transporter } from "./src/config/nodemailer";
import { PORT } from "./src/env/server";
import { server } from "./src/server";

server.listen(PORT, () => {
	transporter
		.verify()
		.then(() => console.log(`Server running on port: ${PORT} 😎`))
		.catch(err => console.log(err));
});
