const nodemailer = require("nodemailer");
const keys = require("../../config/keys");

// Send email verification
module.exports = async (email, uniqueString) => {
  email = email.toLowerCase();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    //host: "smtp.mailtrap.io",
    host: "smtp.gmail.com",
    port: 465,
    //port: 2525,
    auth: {
      user: keys.EMAIL_USERNAME,
      pass: keys.EMAIL_PASSWORD,
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail(
    {
      from: "zipiwhisk.com",
      to: "mikebilyeu512@gmail.com",
      subject: "Email confirmation - zipiwhisk.com", // Subject line
      html: `EMAIL SENT: ${email}. Press <a href='http://localhost:3000/api/users/verify/${uniqueString}'> here </a> to verify your account. Thanks`, // html body
    },
    (err, res) => {
      if (err) console.log(err);
      else {
        console.log("Message sent");
      }
    }
  );

  console.log(info);
};
