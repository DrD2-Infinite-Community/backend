import { StatusCodes } from "http-status-codes";
import { testServer } from "../vitest.setup";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const mongo = "";

beforeEach(async () => {
  await mongoose.connect(mongo);
});

/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("🧪 Testado se o as configurações iniciais do projeto foi realizada com sucessor.", () => {
  it("Deverá receber uma mensagem de sucessor.", async () => {
    const response = await testServer.get("/api/v1/user");

    expect(response.statusCode).toEqual(StatusCodes.OK);
  });

  it("Deverá receber uma mensagem de sucessor.", async () => {
    const response = await testServer.post("/api/v1/user");

    expect(response.statusCode).toEqual(StatusCodes.CREATED);
  });
});
