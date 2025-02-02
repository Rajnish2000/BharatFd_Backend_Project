import mongoose from "mongoose";
let db_name = process.env.DB_NAME;
const con_url = process.env.DB_URL;
const connectDB = async () => {
  try {
    let connectionInstance = await mongoose.connect(`${con_url}`);
    console.log(
      `🤞🤳🐱‍🏍 mongodb connected Successfully ${connectionInstance.connection.host}`
    );
  } catch (err) {
    console.error(err);
  }
};

export { connectDB };
