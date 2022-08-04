require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
var bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
//connection();
// mongoose.connect(process.env.DB, () => {
//   console.log("Connect to MongoDB");
// });

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

// middlewares
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("commom"));
app.use(cookieParser());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const port = 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
