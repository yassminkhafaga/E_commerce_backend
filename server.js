const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const connectDB = require("./config/dataDB");
connectDB();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server is running on prot ${port}`);
});
