const express = require("express");
const cors = require("cors");
const feedbackRouter = require("./resources/feedback");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/feedbacks", feedbackRouter);

app.all("*", (req, res) => {
  console.log("REQUEST:", req.url);
  res.status(200).json({ message: "App is live" });
});

module.exports = app;
