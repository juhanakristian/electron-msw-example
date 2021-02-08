// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post("https://example.com/login", (req, res, ctx) => {
    return res(ctx.status(200));
  }),

  // Handles a GET /user request
  rest.get("https://example.com/user", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        username: "John",
      })
    );
  }),
];
