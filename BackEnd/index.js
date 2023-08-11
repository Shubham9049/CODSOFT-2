const express = require("express");
const { connectDB } = require("./config/db");
const { UserRoutes } = require("./routes/user.routes");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
app.use(express.json());

//User Route or creating end point
app.use("/user", UserRoutes);

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.log(error.message);
  }
});
