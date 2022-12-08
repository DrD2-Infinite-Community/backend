import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

export const connectMemoryDatabase = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = await mongoServer.getUri();
  await mongoose
    .connect(mongoUri, { dbName: "testUser" })
    .then(() => console.log(`Conectado no banco em memoria do mongoDB com sucessor.`))
    .catch((err) => console.error(err));
};

export const connectCloudDatabase = () => {
  console.log("Realizado a conexão com o MongoDB Atlas...");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const url = process.env.MONGO_URL!;
  mongoose
    .connect(url)
    .then(() => console.log("Conectado com MongoDB Atlas com sucessor."))
    .catch((err) => console.error(err));
};
