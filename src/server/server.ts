import express, { Request, Response } from "express";

const server = express();

server.get("/", (req: Request, res: Response) => {
  res.json({ mensagem: "Setup finalizado com sucessor." });
});

export { server };
