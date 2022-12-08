import supertest from "supertest";
import { server } from "../src/server";

export const testServer = supertest(server);
