const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const userRoute = require("./routes/user.routes");

//connect database
const mongoURI = "mongodb://localhost:27017/travel";
mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Error in DB connection: " + err);
    } else {
      console.log("MongoDB Connection Succeeded.");
    }
  }
);

// Middleware
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);
app.use(logger("dev"));
app.use(
  cors({
    exposedHeaders: "*",
  })
);

// Router
app.use("/user", userRoute);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Server is running on port 8080");
});
