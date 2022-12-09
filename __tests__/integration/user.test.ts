import { testServer } from "../vitest.setup";
import { describe, it, expect } from "vitest";

describe("🧪 Rota user", () => {
  let userId:string
  it("Deve criar um usuário", async () => {
    await testServer
      .post("/api/v1/user")
      .send({ username: "Mario Silvo", email: "mario@outlook.com", password: "sal123Acucar" })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).to.have.property("username", "Mario Silvo");
        userId = res.body.id
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

  it("Deve retornar um único usuário pelo id", async () => {
    await testServer
      .get(`/api/v1/user/${userId}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.have.property("username", "Mario Silvo");
        expect(res.body).to.have.property("email", "mario@outlook.com");
      });
  });

  it("Deve atualizar um usuário", async () => {
    await testServer
      .put(`/api/v1/user/${userId}`)
      .send({ username: "Silvo Mauro", email: "silvo@outlook.com", password: "sal123Acucar" })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property("username", "Silvo Mauro");
        expect(res.body).to.have.property("email", "silvo@outlook.com");
      });
  });


  it("Deleta um usuário pelo id", async () => {
    await testServer
      .delete(`/api/v1/user/${userId}`)
      .expect(200)
  });
});
