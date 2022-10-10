import nodemailer from "nodemailer";
import { EMAIL_NODEMAILER, PASS_NODEMAILER } from "../env/nodemailer";

export const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true, // true for 465, false for other ports
	auth: {
		user: EMAIL_NODEMAILER, // generated ethereal user
		pass: PASS_NODEMAILER // generated ethereal password
	}
});
