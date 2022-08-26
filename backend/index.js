require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const vendorRoutes = require("./routes/vendor")
const cookieParser = require("cookie-parser");
mongoose
  .connect("mongodb://localhost:27017/MERN-Project-carental")
  .then((done, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Database Connected ");
    }
  });

app.use(cors({credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);
app.use("/vendor",vendorRoutes)

app.listen(process.env.PORT, () => {
  console.log("Server started", process.env.PORT);
});
