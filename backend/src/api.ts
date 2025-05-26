import { Hono } from "hono";
import { getCategories, getChecklists, getInfoContentByKey, getInfoTitleLocaleCodeAndCatName, getLocales, getQuiz, getQuizLists } from "@db/select";
import { showRoutes } from "hono/dev";

/**
 * Hono application instance for handling API routes.
 */
const app = new Hono();

/**
 * GET `/api/locale`
 *
 * Returns a list of all available locales.
 *
 * @example
 * GET http://localhost:3000/api/locale
 */
app.get("/api/locale", (c) => {
  const locales = getLocales();
  return c.json(locales);
});

/**
 * GET `/api/category?code=:localeCode`
 *
 * Returns all categories for a given locale code.
 *
 * @queryParam code - The locale code (e.g., `en`, `de`, etc.)
 * @example
 * GET http://localhost:3000/api/category?code=en
 */
app.get("/api/category", (c) => {
  const code = c.req.query("code");

  if (!code) {
    return c.text("missing query param", 400);
  }

  const categories = getCategories(code);
  return c.json(categories);
});

/**
 * GET `/api/info?code=:localeCode&cat=:categoryName`
 *
 * Returns information titles for a given locale and category.
 *
 * @queryParam code - The locale code
 * @queryParam cat - The name of the category
 * @example
 * GET http://localhost:3000/api/info?code=en&cat=Work
 */
app.get("/api/info", (c) => {
  const code = c.req.query("code");
  const cat = c.req.query("cat");

  if (!code || !cat) {
    return c.text("missing query param", 400);
  }

  const infoTitles = getInfoTitleLocaleCodeAndCatName(code, cat);
  return c.json(infoTitles);
});

/**
 * GET `/api/info/content?code=:localeCode&infoTitle=:title`
 *
 * Returns the content for a specific information entry.
 *
 * @queryParam code - The locale code
 * @queryParam infoTitle - The full information title
 * @example
 * GET http://localhost:3000/api/info/content?code=en&infoTitle=Family and work/Absences from work due to illness or accident
 */
app.get("/api/info/content", (c) => {
  const code = c.req.query("code");
  const infoKey = c.req.query("infoTitle");

  if (!code || !infoKey) {
    return c.text("missing query param", 400);
  }

  const infoContents = getInfoContentByKey(code, infoKey);
  return c.json(infoContents);
});

/**
 * GET `/api/checklist?code=:localeCode`
 *
 * Returns checklists for a specific locale.
 *
 * @queryParam code - The locale code
 * @example
 * GET http://localhost:3000/api/checklist?code=en
 */
app.get("/api/checklist", (c) => {
  const code = c.req.query("code");

  if (!code) {
    return c.text("missing query param", 400);
  }

  const checklists = getChecklists(code);
  return c.json(checklists);
});

/**
 * GET `/api/quiz?cat=:categoryName`
 *
 * Returns all quizzes for a given category.
 *
 * @queryParam cat - The name of the category
 * @example
 * GET http://localhost:3000/api/quiz?cat=Customs
 */
app.get("/api/quiz", (c) => {
  const cat = c.req.query("cat");

  if (!cat) {
    return c.text("missing query param", 400);
  }

  const quizLists = getQuizLists(cat);
  return c.json(quizLists);
});

/**
 * GET `/api/quiz/:id`
 *
 * Returns a single quiz with all questions and answers by quiz ID.
 *
 * @param id - The ID of the quiz
 * @example
 * GET http://localhost:3000/api/quiz/1
 */
app.get("/api/quiz/:id", (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.text("missing url param", 400);
  }

  return c.json(getQuiz(Number(id)));
});

/**
 * Displays all registered routes in the console.
 */
showRoutes(app);

/**
 * Exports the configured Hono app instance.
 */
export default app;
