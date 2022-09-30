import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD_EMAIL,
  },
});

export const sendEmailUser = async (email: string) => {
  try {
    await transporter.sendMail({
      from: '"Cajica Recicla"',
      to: email,
      subject: "Peticion recibida", // Subject line
      text: "Nos pondremos en contacto con usted para darle mas informacion al respecto de cajica recicla", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
    return true;
  } catch (error) {
    console.log(error);
    return;
  }
};
