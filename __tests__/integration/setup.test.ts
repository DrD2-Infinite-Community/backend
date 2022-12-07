import { StatusCodes } from "http-status-codes";
import { testServer } from "../vitest.setup";
import { describe, it, expect } from "vitest";

describe("🧪 Testado se o as configurações iniciais do projeto foi realizada com sucessor.", () => {
  it("Deverá receber uma mensagem de sucessor.", async () => {
    const response = await testServer.get("/");

    expect(response.statusCode).toEqual(StatusCodes.OK);
    expect(typeof response.body.mensagem).toEqual("string");
    expect(response.body.mensagem).toEqual("Setup finalizado com sucessor.");
  });
});
