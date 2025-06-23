import app from "./api";

const port = Number(process.env.PORT) || 3000;

Bun.serve({
  port,
  fetch: app.fetch,
});
