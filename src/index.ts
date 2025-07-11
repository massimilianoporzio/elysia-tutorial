/*
 *   Copyright (c) 2025 Massimiliano Porzio
 *   All rights reserved.
 */
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";

class Note {
  constructor(public data: string[] = ["Moonhalo"]) {}
}

const app = new Elysia()
  .use(swagger())
  .decorate("note", new Note())
  .get("/note", ({ note }) => {
    return note.data;
  })
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
