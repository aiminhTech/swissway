import { Hono } from "hono";
import {
  getCategories,
  getChecklists,
  getInfoContentByKey,
  getInfoTitleLocaleCodeAndCatName,
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

// http://localhost:3000/api/info?code=en&cat=Work
http: app.get("/api/info", (c) => {
  const code = c.req.query("code");
  const cat = c.req.query("cat");

  if (!code || !cat) {
    return c.text("missing query param", 400);
  }

  const infoTitles = getInfoTitleLocaleCodeAndCatName(code, cat);
  return c.json(infoTitles);
});

// http://localhost:3000/api/info/content?code=en&infoTitle=Family and work/Absences from work due to illness or accident
app.get("/api/info/content", (c) => {
  const code = c.req.query("code");
  const infoKey = c.req.query("infoTitle");

  if (!code || !infoKey) {
    return c.text("missing query param", 400);
  }

  const infoContents = getInfoContentByKey(code, infoKey);
  return c.json(infoContents);
});

// http://localhost:3000/api/checklist?cat=Customs&code=en
app.get("/api/checklist", (c) => {
  const cat = c.req.query("cat");

  if (!cat) {
    return c.text("missing query param", 400);
  }

  const checklists = getChecklists(cat);
  return c.json(checklists);
});

// http://localhost:3000/api/quiz?cat=Customs
app.get("/api/quiz", (c) => {
  const cat = c.req.query("cat");

  if (!cat) {
    return c.text("missing query param", 400);
  }

  const quizLists = getQuizLists(cat);
  return c.json(quizLists);
});

// http://localhost:3000/api/quiz/1
app.get("/api/quiz/:id", (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.text("missing url param", 400);
  }

  return c.json(getQuiz(Number(id)));
});

export default app;
