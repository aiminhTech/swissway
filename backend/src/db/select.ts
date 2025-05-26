import type {
  ApiCategory,
  ApiChecklist,
  ApiInfoContent,
  ApiLocale,
  ApiQuiz,
} from "@models/api-model";
import {
  transformCategories,
  transformChecklists,
  transformInfoContents,
  transformQuiz,
} from "@utils/transform-api-response";
import db from "@db/db";

export function getLocales(): ApiLocale[] {
  return db.prepare("SELECT * FROM locale").all() as ApiLocale[];
}

export function getCategories(localeCode: string) {
  const result = db
    .prepare(
      `
    SELECT * from view_category as v
    WHERE v.code = ?
  `
    )
    .all(localeCode) as ApiCategory[];

  return transformCategories(result);
}

//information
export function getInfoTitleLocaleCodeAndCatName(
  localeCode: string,
  catName: string
) {
  return db
    .prepare(
      `
    SELECT v.code AS locale_code, v.category_name, v.information_title from view_information as v
    WHERE v.code = ? AND v.category_name = ?
  `
    )
    .all(localeCode, catName);
}

export function getInfoContentByKey(localeCode: string, infoTitle: string) {
  const result = db
    .prepare(
      `
      SELECT * FROM view_information AS v
      WHERE v.code = ? AND v.information_title LIKE ? 
      `
    )
    .all(localeCode, `${infoTitle}%`) as ApiInfoContent[];

  return transformInfoContents(result);
}

//checklist
export function getChecklists(catName: string) {
  const result = db
    .prepare(
      `
    SELECT * from view_checklist as v
    WHERE v.category_name = ?  
  `
    )
    .all(catName) as ApiChecklist[];

  return transformChecklists(result);
}

export function getQuizLists(catName: string) {
  return db
    .prepare(
      `
    SELECT q.id AS quiz_id, q.title AS title FROM quiz as q
    JOIN category ON q.category_id  = category.id
    WHERE category.name = ?
    
    `
    )
    .all(catName);
}

export function getQuiz(id: number) {
  const result = db
    .prepare(
      `
    SELECT v.quiz_title,v.question, v.answers
    FROM view_full_quiz as v
    WHERE v.quiz_id = ?
  `
    )
    .all(id) as ApiQuiz[];

  return transformQuiz(result);
}
