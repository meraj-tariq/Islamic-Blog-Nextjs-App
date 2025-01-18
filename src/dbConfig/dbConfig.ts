import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDb is connected...");
    });

    connection.on("error", (err: Error) => {
      console.log("MongoDb connection error: " + err);
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong in connecting to DB.");
    console.log(error);
  }
}
