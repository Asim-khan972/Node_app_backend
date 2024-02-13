// Import necessary modules
import DB_CONNECT from "./Db/DB.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config(); // this is used in module js async and also

// Middleware to parse incoming JSON requests

DB_CONNECT()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `⚙️ ⚙️ ⚙️ ⚙️ ⚙️  Server is running at port : ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
