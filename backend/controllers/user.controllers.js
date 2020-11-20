const User = require("../models/user.model");

module.exports.login = async (req, res) => {
  try {
    // code here
  } catch (err) {
    console.log(err + " ");
    return res.status(400).json(err + " ");
  }
};

module.exports.register = async (req, res) => {
  try {
    // code here
  } catch (err) {
    console.log(err + " ");
    return res.status(400).json(err + " ");
  }
};
