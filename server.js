const app = require("./app");
require("dotenv").config();
const { dbConnection } = require("./utils/dbConnection");
const PORT = process.env.PORT || 5000;

// database connection
dbConnection();

app.listen(PORT, () => {
  console.log(`Server running at on port ${PORT}`);
});
