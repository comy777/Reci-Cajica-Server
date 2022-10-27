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
      from: '"Reci-Cajica"',
      to: email,
      subject: "Su peticion ha sido recibida",
      text: "Nos pondremos en contacto con usted para darle mas informacion al respecto de cajica Reci-Cajica",
      html: `
        <div>
          <h1>Reci-Cajica</h1>
          <div>
            <p>Reciba un cordial saludo de parte nuestra, es un gusto ver su interes por nuestro servicio, el cual busca brindar información importante acerca del reciclaje en Cajica, es por ello que lo invitamos a continuar este proceso de formación.
            <br/>
            Mas adelante nos comunicaremos con usted, para brindarle mas información, muchas gracias.
            </p>
          </div>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.log(error);
    return;
  }
};
