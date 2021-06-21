// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const transactionsController = require("./Controllers/transactionsController")
const app = express();
// Middleware
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionsController)
// Routes
app.get("/", (req, res) => {
  res.send("Welcome to Myra's budgeting app! Nothing to see here...");
});

app.get("*", (req, res) => {
  res.status(404).send("404: page not found")
})
// Export app
module.exports = app;