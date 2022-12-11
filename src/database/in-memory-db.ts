import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

export const connectMemoryDatabase = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = await mongoServer.getUri();
  await mongoose
    .connect(mongoUri, { dbName: "testUser" })
    .then(() => console.log(`Conectado no banco em memoria do mongoDB com sucessor.`))
    .catch((err) => console.error(err));
};
