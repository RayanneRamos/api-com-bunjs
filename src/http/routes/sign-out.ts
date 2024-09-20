import Elysia from "elysia";
import { auth } from "../auth";
import jwt from "@elysiajs/jwt";
import { env } from "../../env";

export const signOut = new Elysia()
  .use(auth)
  .post("/sign-out", async ({ signOut: internalSignOut }) => {
    internalSignOut();
  });
