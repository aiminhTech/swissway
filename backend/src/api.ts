import "dotenv/config";
import { Hono, type Context, type MiddlewareHandler } from "hono";
import { getCategories, getChecklists, getEssentialInfoTitle, getInfoContent, getInfoTitle, getLocales, getQuiz, getQuizLists } from "@db/select";
import { showRoutes } from "hono/dev";
import { ApiError } from "./models/api-model";
/**
 * Hono application instance for handling API routes.
 */

export const apiKeyAuth: MiddlewareHandler = async (c, next) => {
  const apiKeyHeader = c.req.header("x-api-key");
  const validKey = process.env.API_KEY;

  if (!apiKeyHeader || apiKeyHeader !== validKey) {
    return c.json({ error: "Unauthorized: Invalid API Key" }, 401);
  }

  await next();
};
const app = new Hono();
app.use("/api/*", apiKeyAuth);
app.get("/", (c) => c.text("Backend is live and running!"));

/**
 * Returns a list of all available locales.
 */
app.get("/api/locale", (c: Context) => {
  const locales = getLocales();

  return locales.length === 0 ? c.json(ApiError.noContent("locale"), 404) : c.json(locales);
});

/**
 * Returns all categories for a given locale code.
 */
app.get("/api/category", (c: Context) => {
  const code = c.req.query("code");

  if (!code) {
    return c.json(ApiError.missingParameter("code"), 400);
  }

  const categories = getCategories(code);

  return categories.length === 0 ? c.json(ApiError.noContent("category"), 404) : c.json(categories);
});

/**
 * Returns information titles for a given locale and category.
 */
app.get("/api/info", (c: Context) => {
  const code = c.req.query("code");
  const cat = c.req.query("cat");

  if (!code) {
    return c.json(ApiError.missingParameter("code"), 400);
  }

  if (!cat) {
    return c.json(ApiError.missingParameter("cat"), 400);
  }

  const infoTitles = getInfoTitle(code, cat);

  return infoTitles.length === 0 ? c.json(ApiError.noContent("information"), 404) : c.json(infoTitles);
});

/**
 * Returns essential information titles for a given locale and category.
 */
app.get("/api/info/essential", (c: Context) => {
  const code = c.req.query("code");
  const essential = c.req.query("essential");

  if (!code) {
    return c.json(ApiError.missingParameter("code"), 400);
  }

  if (!essential) {
    return c.json(ApiError.missingParameter("essential"), 400);
  }

  return essential === "true" ? c.json(getEssentialInfoTitle(code, 1)) : c.json(ApiError.noContent("essential information"), 404);
});

/**
 * Returns the content for a specific information entry.
 */
app.get("/api/info/content", (c: Context) => {
  const code = c.req.query("code");
  const title = c.req.query("title");

  if (!code) {
    return c.json(ApiError.missingParameter("code"), 400);
  }

  if (!title) {
    return c.json(ApiError.missingParameter("title"), 400);
  }

  const infoContents = getInfoContent(code, title);

  return infoContents.length === 0 ? c.json(ApiError.noContent("information content"), 404) : c.json(infoContents);
});

/**
 * Returns checklists for a specific locale.
 */
app.get("/api/checklist", (c: Context) => {
  const code = c.req.query("code");

  if (!code) {
    return c.json(ApiError.missingParameter("code"), 400);
  }

  const checklists = getChecklists(code);

  return checklists.length === 0 ? c.json(ApiError.noContent("checklist"), 404) : c.json(checklists);
});

/**
 * Returns all quizzes for a given category.
 */
app.get("/api/quiz", (c: Context) => {
  const cat = c.req.query("cat");

  if (!cat) {
    return c.json(ApiError.missingParameter("cat"), 400);
  }

  const quizLists = getQuizLists(cat);
  return quizLists.length === 0 ? c.json(ApiError.noContent("quiz list"), 404) : c.json(quizLists);
});

/**
 * Returns a single quiz with all questions and answers by quiz ID.
 */
app.get("/api/quiz/:id", (c: Context) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json(ApiError.missingUrlParameter("id"), 400);
  }
  const quizzes = getQuiz(Number(id));

  return quizzes ? c.json(quizzes) : c.json(ApiError.noContent(`quiz ${id}`), 404);
});

/**
 * Displays all registered routes in the console.
 */
showRoutes(app);

/**
 * Exports the configured Hono app instance.
 */

export default app;
