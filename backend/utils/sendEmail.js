const nodemail = require('nodemailer')

const sendEmail = async (subject, message, sent_to, sent_fro, reply_to) => {
    const transporter = nodemail.createTransport({
      host: process.env.SERVER,
      port: 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  
    const options = {
      from: sent_fro,
      to: sent_to,
      reply: reply_to,
      subject: subject,
      html: message,  // Use `html` instead of `message` for HTML emails
    };
  
    return new Promise((resolve, reject) => {
      transporter.sendMail(options, (err, info) => {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });
  };
  
  module.exports = sendEmail;
  