import { Hono, type Context } from "hono";
import {
  getCategories,
  getChecklists,
  getInfoContentByKey,
  getInfoTitleLocaleCodeAndCatName,
  getLocales,
  getQuiz,
  getQuizLists,
} from "@db/select";
import { showRoutes } from "hono/dev";

/**
 * Hono application instance for handling API routes.
 */
const app = new Hono();

app.get("/", (c) => c.text("Backend is live and running!"));

/**
 * GET `/api/locale`
 *
 * Returns a list of all available locales.
 *
 * @example
 * GET http://localhost:3000/api/locale
 */
export function getLocaleHandler(c: Context) {
  const locales = getLocales();
  return c.json(locales);
}
app.get("/api/locale", getLocaleHandler);


/**
 * GET `/api/category?code=:localeCode`
 *
 * Returns all categories for a given locale code.
 *
 * Query parameters:
 * - `code` — The locale code (e.g., `en`, `de`, etc.)
 *
 * @param c - The request context
 * @returns JSON array of categories for the specified locale code
 *
 * @example
 * GET http://localhost:3000/api/category?code=en
 */
export function getCategoryHandler(c: Context) {
  const code = c.req.query("code");

  if (!code) {
    return c.text("missing query param", 400);
  }

  const categories = getCategories(code);
  return c.json(categories);
}
app.get("/api/category", getCategoryHandler);


/**
 * GET `/api/info?code=:localeCode&cat=:categoryName`
 *
 * Returns information titles for a given locale and category.
 *
 * Query parameters:
 * - `code` — The locale code
 * - `cat` — The name of the category
 *
 * @param c - The request context
 * @returns JSON array of information titles matching the locale and category
 *
 * @example
 * GET http://localhost:3000/api/info?code=en&cat=Work
 */
export function getInfoHandler(c: Context) {
  const code = c.req.query("code");
  const cat = c.req.query("cat");

  if (!code || !cat) {
    return c.text("missing query param", 400);
  }

  const infoTitles = getInfoTitleLocaleCodeAndCatName(code, cat);
  return c.json(infoTitles);
}
app.get("/api/info", getInfoHandler);


/**
 * GET `/api/info/content?code=:localeCode&infoTitle=:title`
 *
 * Returns the content for a specific information entry.
 *
 * Query parameters:
 * - `code` — The locale code
 * - `infoTitle` — The full information title
 *
 * @param c - The request context
 * @returns JSON content associated with the specified information title and locale
 *
 * @example
 * GET http://localhost:3000/api/info/content?code=en&infoTitle=Family and work/Absences from work due to illness or accident
 */
export function getInfoContentHandler(c: Context) {
  const code = c.req.query("code");
  const infoKey = c.req.query("infoTitle");

  if (!code || !infoKey) {
    return c.text("missing query param", 400);
  }

  const infoContents = getInfoContentByKey(code, infoKey);
  return c.json(infoContents);
}
app.get("/api/info/content", getInfoContentHandler);


/**
 * GET `/api/checklist?code=:localeCode`
 *
 * Returns checklists for a specific locale.
 *
 * Query parameters:
 * - `code` — The locale code
 *
 * @param c - The request context
 * @returns JSON array of checklists for the specified locale
 *
 * @example
 * GET http://localhost:3000/api/checklist?code=en
 */
export function getChecklistHandler(c: Context) {
  const code = c.req.query("code");

  if (!code) {
    return c.text("missing query param", 400);
  }

  const checklists = getChecklists(code);
  return c.json(checklists);
}
app.get("/api/checklist", getChecklistHandler);


/**
 * GET `/api/quiz?cat=:categoryName`
 *
 * Returns all quizzes for a given category.
 *
 * Query parameters:
 * - `cat` — The name of the category
 *
 * @param c - The request context
 * @returns JSON array of quizzes for the specified category
 *
 * @example
 * GET http://localhost:3000/api/quiz?cat=Customs
 */
export function getQuizListHandler(c: Context) {
  const cat = c.req.query("cat");

  if (!cat) {
    return c.text("missing query param", 400);
  }

  const quizLists = getQuizLists(cat);
  return c.json(quizLists);
}
app.get("/api/quiz", getQuizListHandler);


/**
 * GET `/api/quiz/:id`
 *
 * Returns a single quiz with all questions and answers by quiz ID.
 *
 * URL parameters:
 * - `id` — The ID of the quiz
 *
 * @param c - The request context
 * @returns JSON object representing the quiz identified by the given ID
 *
 * @example
 * GET http://localhost:3000/api/quiz/1
 */
export function getQuizByIdHandler(c: Context) {
  const id = c.req.param("id");

  if (!id) {
    return c.text("missing url param", 400);
  }

  return c.json(getQuiz(Number(id)));
}
app.get("/api/quiz/:id", getQuizByIdHandler);


/**
 * Displays all registered routes in the console.
 */
showRoutes(app);

/**
 * Exports the configured Hono app instance.
 */
export default app;
