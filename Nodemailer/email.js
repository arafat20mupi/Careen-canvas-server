const nodemailer = require("nodemailer");
require("dotenv").config();
// Create a Nodemailer transporter using SMTP settings
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // SSL/TLS
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendCongratulatoryEmail = (to, name) => {
  const mailOptions = {
    from: process.env.EMAIL, // Sender email address
    to: to, // Receiver email address
    subject: "Congratulations! You are now registered!",
    html: `
     <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Congratulations!</title>
      </head>
      <body style="background-color: #f7fafc; font-family: 'Roboto', sans-serif; padding: 20px;">

          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);">
              <h1 style="font-size: 24px; font-weight: bold; color: #38a169;">Congratulations, ${name}!</h1>
              <p style="margin-top: 16px; color: #4a5568;">Thank you for registering on our platform. We are excited to have you on board!</p>
              <p style="margin-top: 16px; color: #4a5568;">Best regards,<br>Career Canvas</p>

              <div style="margin-top: 32px; text-align: center; color: #718096; font-size: 14px;">
                  <p>If you have any questions, feel free to reply to this email.</p>
              </div>
          </div>

      </body>
     </html>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
    } else {
      console.log("Email sent successfully:", info.response);
    }
  });
};

module.exports = {
  sendCongratulatoryEmail,
};
