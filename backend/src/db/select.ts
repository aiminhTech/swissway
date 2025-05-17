import type { ApiCategory, ApiChecklist, ApiInfoContent, ApiLanguage, ApiLocale, ApiQuiz } from "@models/api-model";
import { transformCategories, transformChecklists, transformInfoContents, transformLanguage, transformQuiz } from "@utils/transform-api-response";
import db from "@db/db";

export function getLocales(): ApiLocale[] {
  return db.prepare("SELECT * FROM locale").all() as ApiLocale[];
}

export function getLanguages(localeCode: string) {
  const result = db.prepare(`
    SELECT locale.id as code_id, locale.code AS code, language.name AS language_name
		FROM language
		JOIN locale ON language.locale_id = locale.id
    WHERE locale.code = ?
  `).all(localeCode) as ApiLanguage[];

  return transformLanguage(result)
}

export function getCategory(localeCode: string) {
  const result = db.prepare(`
    SELECT * from view_category as v
    WHERE v.code = ?
  `).all(localeCode) as ApiCategory[];

  return transformCategories(result)
}

//information
export function getInfoByCat(localeCode: string, cat: string) {
  return db.prepare(`
    SELECT v.code, v.category_name, v.information_title from view_information as v
    WHERE v.code = ? AND v.category_name = ?
  `).all(localeCode, cat);
}

export function getInfoContentByTitle(infoTitle: string) {
  const result = db.prepare(`
    SELECT * from view_information as v
    WHERE v.information_title = ?
  `).all(infoTitle) as ApiInfoContent[];

  return transformInfoContents(result)
}

//checklist
export function getChecklists(catName: string) {
  const result = db.prepare(`
    SELECT * from view_checklist as v
    WHERE v.category_name = ?
  `).all(catName) as ApiChecklist[];

  return transformChecklists(result)
}

export function getQuizLists(catName: string) {
  return db.prepare(`
    SELECT q.id AS id, q.title AS title FROM quiz as q
    JOIN category ON q.category_id  = category.id
    WHERE category.name = ?
  `).all(catName);
}

export function getQuiz(id: number) {
  const result =  db.prepare(`
    SELECT v.quiz_title,v.question, v.answers
    FROM view_full_quiz as v
    WHERE v.quiz_id = ?
  `).all(id) as ApiQuiz[];

  return transformQuiz(result)
}


