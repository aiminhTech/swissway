import { Hono } from "hono";
import {
  getCategories,
  getChecklists,
  getInfoByCatKey,
  getInfoContentByKey,
  getLocales,
  getQuiz,
  getQuizLists,
} from "@db/select";

const app = new Hono();

// http://localhost:3000/api/locale
app.get("/api/locale", (c) => {
  const locales = getLocales();
  return c.json(locales);
});

// http://localhost:3000/api/category?code=en
app.get("/api/category", (c) => {
  const code = c.req.query("code");

  if (!code) {
    return c.text("missing query param", 400);
  }

  const categories = getCategories(code);
  return c.json(categories);
});

// http://localhost:3000/api/info?code=en&catKey=Work
app.get("/api/info", (c) => {
  const code = c.req.query("code");
  const catKey = c.req.query("catKey");

  if (!code || !catKey) {
    return c.text("missing query param", 400);
  }

  const infoTitles = getInfoByCatKey(code, catKey);
  return c.json(infoTitles);
});

// http://localhost:3000/api/info/content?code=en&infoKey=Absences%20from%20work%20due%20to%20illness%20or%20accident
app.get("/api/info/content", (c) => {
  const code = c.req.query("code");
  const infoKey = c.req.query("infoKey");

   if (!code || !infoKey) {
    return c.text("missing query param", 400);
  }

  const infoContents = getInfoContentByKey(code, infoKey);
  return c.json(infoContents);
});

// TODO params
app.get("/api/checklist", (c) => {
  const catKey = c.req.query("catKey");

  if (!catKey) {
    return c.text("missing query param", 400);
  }

  const checklists = getChecklists(catKey);
  return c.json(checklists);
});

app.get("/api/quiz", (c) => {
  const cat = c.req.query("cat");

  if (!cat) {
    return c.text("missing query param", 400);
  }

  const quizLists = getQuizLists(cat);
  return c.json(quizLists);
});

app.get("/api/quiz/:id", (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.text("missing url param", 400);
  }

  return c.json(getQuiz(Number(id)));
});

export default app;
