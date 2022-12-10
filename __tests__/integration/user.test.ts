import { testServer } from "../vitest.setup";
import { describe, it, expect, assert } from "vitest";

let userId: string;

describe("🧪 Rota user - POST", () => {
  it("Não deve criar um usuário com os campos vazios", async () => {
    await testServer
      .post("/api/v1/user")
      .send({ username: "", email: "", password: "" })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((res) => {
        const responseExpected = {
          errors: {
            username: "Deve ter pelo menos 4 caracteres",
            email: "Este campo é obrigatório",
            password: "Deve ter pelo menos 7 caracteres",
          },
        };

        expect(res.body).toEqual(expect.objectContaining(responseExpected));
      });
  });

  it("Deve criar um usuário", async () => {
    await testServer
      .post("/api/v1/user")
      .send({ username: "Mario Silvo", email: "mario@outlook.com", password: "sal123Acucar" })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).to.have.property("username", "Mario Silvo");
        expect(res.body).to.have.property("email", "mario@outlook.com");

        userId = res.body.id;
      });
  });

  it("Não deve criar um usuário com um username que já existe", async () => {
    await testServer
      .post("/api/v1/user")
      .send({ username: "Mario Silvo", email: "mario@outlook.com", password: "sal123Acucar" })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((res) => {
        expect(res.body).to.have.property(
          "mensagem",
          "Este username já existe. Escolha outro, por favor."
        );
      });
  });

  it("Não deve criar um usuário com um email que já existe", async () => {
    await testServer
      .post("/api/v1/user")
      .send({ username: "Mario Silvo 12345", email: "mario@outlook.com", password: "sal123Acucar" })
      .expect("Content-Type", /json/)
      .expect(400)
      .then((res) => {
        expect(res.body).to.have.property(
          "mensagem",
          "Este email já existe. Escolha outro, por favor."
        );
      });
  });
});

describe("🧪 Rota user - GET", () => {
  it("Deve retornar todos os usuários", async () => {
    await testServer
      .get("/api/v1/user")
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body.length).to.equal(1);
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: userId,
              username: "Mario Silvo",
              email: "mario@outlook.com",
            }),
          ])
        );
      });
  });

  it("Deve retornar um erro ao enviar um id invalido", async () => {
    const invalidID = "iDinvalido123456445";
    await testServer
      .get(`/api/v1/user/${invalidID}`)
      .expect(400)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.have.property("mensagem", `O ID ${invalidID} é invalido`);
      });
  });

  it("Deve retornar um erro ao enviar um id valido de um usuário que não existe", async () => {
    const validID = "6391251bf219c5f3eae298eB";
    await testServer
      .get(`/api/v1/user/${validID}`)
      .expect(400)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.have.property("mensagem", "Usuário não existe.");
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
        expect(res.body).to.have.property("id", userId);
        expect(res.body).to.not.have.property("password");
      });
  });
});

describe("🧪 Rota user - UPDATE", () => {
  it("Deve retornar um erro ao enviar um id invalido", async () => {
    const invalidID = "iDinvalido123456445";
    await testServer
      .get(`/api/v1/user/${invalidID}`)
      .expect(400)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.have.property("mensagem", `O ID ${invalidID} é invalido`);
      });
  });

  it("Deve retornar um erro ao enviar um id valido de um usuário que não existe", async () => {
    const validID = "6391251bf219c5f3eae298eB";
    await testServer
      .get(`/api/v1/user/${validID}`)
      .expect(400)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.have.property("mensagem", "Usuário não existe.");
      });
  });

  it("Deve atualizar um usuário", async () => {
    await testServer
      .put(`/api/v1/user/${userId}`)
      .send({
        username: "Silvo Mauro Atualizado",
        email: "silvo@outlook.com",
        password: "sal123Acucar",
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property("username", "Silvo Mauro Atualizado");
        expect(res.body).to.have.property("email", "silvo@outlook.com");
        expect(res.body).to.have.property("id", userId);
        expect(res.body).to.not.have.property("password");
      });
  });
});

describe("🧪 Rota user - DELETE", () => {
  it("Deve retornar um erro ao enviar um id invalido", async () => {
    const invalidID = "iDinvalido123456445";
    await testServer
      .get(`/api/v1/user/${invalidID}`)
      .expect(400)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.have.property("mensagem", `O ID ${invalidID} é invalido`);
      });
  });

  it("Deve retornar um erro ao enviar um id valido de um usuário que não existe", async () => {
    const validID = "6391251bf219c5f3eae298eB";
    await testServer
      .get(`/api/v1/user/${validID}`)
      .expect(400)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.have.property("mensagem", "Usuário não existe.");
      });
  });

  it("Deleta um usuário pelo id", async () => {
    await testServer
      .delete(`/api/v1/user/${userId}`)
      .expect(200)
      .expect("Content-Type", /json/)
      .then((res) => {
        expect(res.body).to.have.property("mensagem", "Usuário apagado com sucessor.");
      });
  });
});
