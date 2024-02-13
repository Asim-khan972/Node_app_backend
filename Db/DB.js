import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const DB_CONNECT = async () => {
  try {
    // console.log(process.env.MONGODB_URI, DB_NAME);
    const DB = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`DB CONNECT ${DB.connection.host}`);
  } catch (error) {
    console.error("MONGODB CONNECTION ERROR", error);
    process.exit(1);
  }
};

export default DB_CONNECT;
