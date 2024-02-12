// Import necessary modules
import express from "express";
import bodyParser from "body-parser";

import dotenv from "dotenv";
dotenv.config(); // this is used in module js async and also

// Create an Express application
const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// Handling GET requests
app.get("/", (req, res) => {
  res.send("GET request received");
});

app.get("/login", (req, res) => {
  res.send("<h1>hello this backend in nodejs </h1>");
});
// Handling POST requests
app.post("/api/data", (req, res) => {
  const data = req.body;
  console.log("Received POST request with data:", data);
  res.send("POST request received");
});

// Start the server on port 3000
const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
