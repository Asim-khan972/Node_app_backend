// Import necessary modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";

// Create an Express application

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

export { app };
