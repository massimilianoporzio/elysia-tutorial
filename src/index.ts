/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

const app = new Elysia()
  .use(swagger())
  .get("/", () => "Hello Elysia")
  .post("/hello", ({ body }) => {
    return body;
  })
  .get("/hello", ({ path }) => {
    return path;
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
