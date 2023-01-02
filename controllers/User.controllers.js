const User = require("../models/User");

exports.register = async (req, res) => {
  try {
    const result = await User.create(req.body);
    if (result) {
      res.status(200).json({
        status: "Register success",
        data: result,
      });
    }
  } catch (error) {
    res.status(500).send({
      status: "register fail",
      error: error,
    });
  }
};
