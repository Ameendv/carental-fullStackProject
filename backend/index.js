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

app.use(cors({credentials: true,origin:true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", userRoutes);
app.use("/vendor", vendorRoutes)


app.use((err, req, res, next) => {
  const errorStatus = err.status || 500

  const errorMessage = err.message || "Something went wrong !"

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(process.env.PORT, () => {
  console.log("Server started", process.env.PORT);
});
