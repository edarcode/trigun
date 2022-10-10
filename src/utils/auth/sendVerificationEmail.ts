import { transporter } from "../../config/nodemailer";
import { EMAIL_NODEMAILER } from "../../env/nodemailer";
import { API_BASE_URL } from "../../env/server";

export const sendVerificationEmail = async (email: string, token: string) => {
	const res = await transporter.sendMail({
		from: `Trigun ${EMAIL_NODEMAILER}`,
		to: email,
		subject: "✔ Verify email ✔",
		text: `${API_BASE_URL}/auth/verify-user?token=${token}`
	});

	return res;
};
