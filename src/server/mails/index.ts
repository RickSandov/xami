import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ContactInfoEmail } from "./templates/contact_info_email";

export interface IContactInfo {
  name: string;
  phoneNumber?: string;
  email?: string;
  message: string;
}

export async function sendShippingInfoEmail(contactInfo: IContactInfo) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "i.s.ricardo.sandoval@gmail.com", // development
      pass: "qdfoxvhgjvrkvfch", // development
    },
  });

  const emailHtml = render(ContactInfoEmail(contactInfo));
  const options = {
    from: "i.s.ricardo.sandoval@gmail.com",
    // to: "applebono3@gmail.com",
    to: "gusfavela@xamicalli.com",
    subject: `Solicitud de contacto desde www.xamicalli.com`,
    html: emailHtml,
  };

  try {
    const send = await transporter.sendMail(options);
    console.log({ send });
    return "ok";
  } catch (error) {
    console.log("This is the error: ", error);
  }
}
