const express = require("express");

const app = express.Router();
const bcrypt = require("bcrypt");

const { OAuth2Client } = require("google-auth-library");

const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);
const jwt = require("jsonwebtoken");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const clientTwilio = require("twilio")(accountSid, authToken);
const User = require("../../models/userModel");

clientTwilio.verify.v2.services
  .create({ friendlyName: "Carental" })
  .then((service) => console.log(service.sid));

module.exports = {
  userSignup: async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    req.body.confirmPassword = null;

    try {
      const response = await User.create(req.body);

      const { email } = response;
      const countryCode = "+91";
      const number = countryCode.concat(req.body.number);

      console.log(number);
      clientTwilio.verify.v2
        .services("VAf7c680b79438f141534605c7adc7e89c")
        .verifications.create({ to: number, channel: "sms" })
        .then(() => res.status(200).json({ email, number }))
        .catch((error) => {
          console.log(error);
          return res.sendStatus(500);
        });
    } catch (error) {
      return res.sendStatus(409);
    }
  },
  googleSignin: async (req, res) => {
    try {
      const { token } = req.body;
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID,
      });

      const { name, email, picture } = ticket.getPayload();

      const user = await User.findOne({ email });

      if (user) {
        console.log("heyyyya");
        const user = { username: email };

        const accessToken = generateAccessToken(user);

        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
          expiresIn: "1d",
        });

        const response = await User.updateOne(
          { email },
          { $push: { refreshToken } }
        );

        return res
          .status(200)
          .json({
            name,
            email,
            picture,
            accessToken,
            refreshToken,
          })
          .send();
      }
        const res = await User.create({
          name,
          email,
          profilePicture: picture,
          emailVerified: true,
        });
        const userData = { username: email };

        const accessToken = generateAccessToken(userData);

        const refreshToken = jwt.sign(userData, process.env.REFRESH_TOKEN_SECRET, {
          expiresIn: "1d",
        });

        const response = await User.updateOne(
          { email },
          { $push: { refreshToken } }
        );

        return res.sendStatus(200).json({
          name,
          email,
          picture,
          accessToken,
          refreshToken,
        });
      
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  },
  userSignin: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.sendStatus(404).send("User not found");
      }
      if (!user.password) return res.sendStatus(404);
      if (await bcrypt.compare(req.body.password, user.password)) {
        const user = { username: req.body.email };

        const accessToken = generateAccessToken(user);

        const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
          expiresIn: "1d",
        });

        const response = await User.updateOne(
          { email: req.body.email },
          { $push: { refreshToken } }
        );
        console.log(response);

        res.json({ accessToken, refreshToken });
      } else {
        return res.sendStatus(404);
      }
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  },
  otpVerification: (req, res) => {
    try {
      const { email, otp, number } = req.body;

      console.log(email, otp, number);

      clientTwilio.verify.v2
        .services("VAf7c680b79438f141534605c7adc7e89c")
        .verificationChecks.create({ to: number, code: otp })
        .then(async (verification_check) => {
          console.log(verification_check.status);
          if (verification_check.status === "approved") {
            const updateNumber = await User.updateOne(
              { email },
              { $set: { numberVerified: true } }
            );

            console.log(updateNumber);

            return res.sendStatus(200);
          }
        });
    } catch (error) {}
  },
};

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10m" });
}
