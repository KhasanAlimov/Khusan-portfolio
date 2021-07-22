const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAILPASS,
  },	
});

const mail = (mess) => {
  transporter.sendMail(mess, (err, info) => {
    console.log(err ? err : info);
  });
};

module.exports = mail;
