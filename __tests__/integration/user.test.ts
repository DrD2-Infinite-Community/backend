import { testServer } from "../vitest.setup";
import { describe, it, expect } from "vitest";

describe("🧪 Rota user", () => {
  it("Deve criar um usuário", async () => {
    await testServer
      .post("/api/v1/user")
      .send({ username: "Mario Silvo", email: "mario@outlook.com", password: "sal123Acucar" })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).to.have.property("username", "Mario Silvo");
      });
  });

  it("Deve retornar todos os usuários", async () => {
    await testServer
      .get("/api/v1/user")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              username: "Mario Silvo",
              email: "mario@outlook.com",
            }),
          ])
        );
      });
  });
});
