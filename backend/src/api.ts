import { Hono } from "hono";
import {
  getCategory,
  getChecklists,
  getInfoByCat,
  getInfoContentByTitle,
  getLanguages,
  getLocales,
  getQuiz,
  getQuizLists,
} from "@db/select";

const app = new Hono();

app.get("/api/locale", (c) => {
  const locales = getLocales();
  return c.json(locales);
});

app.get("/api/language", (c) => {
  const code = c.req.query("code");

  if (!code) {
    return c.text("missing locale code query param", 400);
  }

  const languages = getLanguages(code);
  return c.json(languages);
});

app.get("/api/category", (c) => {
  const code = c.req.query("code");

  if (!code) {
    return c.text("missing query param", 400);
  }

  const categories = getCategory(code);
  return c.json(categories);
});

app.get("/api/info", (c) => {
  const code = c.req.query("code");
  const cat = c.req.query("cat");

  if (!code || !cat) {
    return c.text("missing query param", 400);
  }

  const infoTitles = getInfoByCat(code, cat);
  return c.json(infoTitles);
});

app.get("/api/info/:content", (c) => {
  const title = c.req.query("title");

  if (!title) {
    return c.text("missing query param", 400);
  }

  const infoContents = getInfoContentByTitle(title);
  return c.json(infoContents);
});

app.get("/api/checklist", (c) => {
  const cat = c.req.query("cat");

  if (!cat) {
    return c.text("missing query param", 400);
  }

  const checklists = getChecklists(cat);
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
