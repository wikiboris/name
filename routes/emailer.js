"use strict";
const router = require("express").Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "vdgolkbkoodgogokgofngkonkortk@gmail.com",
      pass: "gorod2010", // naturally, replace both with your real credentials or an application-specific password
    },
  });

  const mailOptions = {
    from: "vdgolkbkoodgogokgofngkonkortk@gmail.com",
    to: "asymortenson@gmail.com",
    subject: "Hello man",
    text: "You received that email because you're the best man on the planet.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    try {
      console.log("Email sent: " + info.response);
    } catch (error) {
      console.log(error);
    }
  });

  res.send("succes");
});

module.exports = router;
