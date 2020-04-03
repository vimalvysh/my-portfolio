const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

const router = express.Router();
dotenv.config();
// @route   email send.
// @desc    to send email.
// @access  public.
router.post("/emailSend", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email, message } = req.body;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_NAME,
      pass: process.env.PASS
    }
  });

  var mailOptions = {
    from: "contact@vimalmalayil.com",
    to: "vimalvyshagam@gmail.com",
    subject: "From My Website",
    text: "",
    html:
      "<b>Name : " +
      firstName +
      " " +
      lastName +
      "</b>" +
      "<p>Email Id : " +
      email +
      "</p>" +
      "<p> Message : " +
      message +
      "</p>"
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      res.send({ success: true });
    }
  });
});

module.exports = router;
