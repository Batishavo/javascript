const express = require("express");
const bcrypt = require("bcrypt");
const { expressjwt: expressJwt } = require("express-jwt");
const User = require("./user.model");
const jwt = require("jsonwebtoken");

const validateJwt = expressJwt({
  secret: "micodigo-secreto",
  algorithms: ["HS256"],
});

const signToken = (_id) => jwt.sign({ _id }, "codigo-secreto");

const findAndAssignUser = async (req, res, next) => {
  const user = await User.findById(req.auth._id);
  try {
    if (!user) {
      return res.status(401).end();
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

const isAuthenticated = express.Router().use(validateJwt, findAndAssignUser);

const Auth = {
  login: async (req, res) => {
    const { body } = req;
    try {
      const user = await User.findOne({ email: body.email });
      if (!user) {
        res.status(401).send("Usuario y/o constraseña invalida");
      } else {
        const isMatch = await bcrypt.compare(body.password, user.password);
        if (isMatch) {
          const signed = signToken(user._id);
          res.status(200).send(signed);
        } else {
          res.status(401).send("Usuario y/o contraseña equivocada");
        }
      }
    } catch (e) {
      res.send(e.message);
    }
  },
  register: async (req, res) => {
    const { body } = req;

    try {
      const isUser = await User.findOne({ email: body.email });
      if (isUser) {
        res.send("Usuario ya existe");
      } else {
        const salt = await bcrypt.genSalt();
        const hashed = await bcrypt.hash(body.password, salt);
        const user = await User.create({
          email: body.email,
          password: hashed,
          salt,
        });

        const signed = signToken(user._id);
        res.send(signed);
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  },
};
module.exports = { Auth, isAuthenticated };
