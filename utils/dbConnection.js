const mongoose = require("mongoose");

exports.dbConnection = () => {
  mongoose
    .connect(process.env.DATABASE, {
      dbName: "authentication",
    })
    .then((res) => {
      if (!res.connections) {
        return console.log("you got error");
      } else {
        return res.connections;
      }
    });
};
