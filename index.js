const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const mongoose = require("mongoose");
const categoryRoute = require("./routes/CatecoryRoute");

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log("Database Down");
    console.log(err);
  });

app.use(express.json());
app.use("/api/v1/category", categoryRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to home",
  });
});

app.use((req, res) => {
  res.status(400).json({
    message: "invalid route",
    data: null,
  });
});

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log("app is running on port " + PORT);
  });
}

module.exports = app;
