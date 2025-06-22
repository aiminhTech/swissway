import { ApiCategories, ApiLocale, ApiLocales, type ApiCategory, type ApiChecklist, type ApiInfoContent, type ApiQuiz } from "@models/api-model";
import { transformCategories, transformChecklists, transformInfoContents, transformQuiz } from "@utils/transform-api-response";
import db from "@db/db";
import type { CategoryDB, ChecklistDB, InfoContentDB } from "@/models/db-model";

/**
 * Retrieves all locales from the database.
 *
 * @returns An array of `ApiLocale` objects representing all available locales.
 *
 * @example
 * ```ts
 * const locales = getLocales();
 * ```
 */
export function getLocales(): ApiLocale[] {
  return db.prepare("SELECT * FROM locale").all() as ApiLocales;
}

/**
 * Retrieves categories for a specified locale code.
 *
 * @param localeCode - The locale code (e.g., "en", "de").
 * @returns An array of `ApiCategory` objects for the given locale.
 *
 * @example
 * ```ts
 * const categories = getCategories("en");
 * ```
 */
export function getCategories(localeCode: string): ApiCategories {
  const result = db
    .prepare(
      `
    SELECT * from view_category as v
    WHERE v.locale_code = ?
  `,
    )
    .all(localeCode) as CategoryDB[];

  return transformCategories(result);
}

/**
 * Retrieves information titles filtered by locale code and category name.
 *
 * @param localeCode - The locale code (e.g., "en").
 * @param catName - The category name to filter by.
 * @returns Array of objects containing locale code, category name, and information title.
 *
 * @example
 * ```ts
 * const infoTitles = getInfoTitleLocaleCodeAndCatName("en", "Work");
 * ```
 */
export function getInfoTitle(localeCode: string, catName: string) {
  return db
    .prepare(
      `
    SELECT v.locale_code AS locale_code, v.category_name, v.information_title from view_information as v
    WHERE v.locale_code = ? AND v.category_name = ?
  `,
    )
    .all(localeCode, catName);
}

export function getEssentialInfoTitle(localeCode: string, isEssential: number) {
  return db
    .prepare(
      `
    SELECT v.locale_code AS locale_code, v.category_name, v.information_title from view_information as v
    WHERE v.locale_code = ? AND v.is_essential = ?
  `,
    )
    .all(localeCode, isEssential);
}

/**
 * Retrieves detailed information content by locale code and information title key.
 *
 * @param localeCode - The locale code (e.g., "en").
 * @param infoTitle - The information title key or prefix.
 * @returns An array of `ApiInfoContent` objects with the matching content.
 *
 * @example
 * ```ts
 * const infoContent = getInfoContentByKey("en", "Family and work/Absences");
 * ```
 */
export function getInfoContent(localeCode: string, infoTitle: string) {
  const result = db
    .prepare(
      `
      SELECT * FROM view_information AS v
      WHERE v.locale_code = ? AND v.information_title LIKE ?
      `,
    )
    .all(localeCode, `${infoTitle}%`) as InfoContentDB[];

  return transformInfoContents(result);
}

/**
 * Retrieves checklists for a specific locale code.
 *
 * @param localeCode - The locale code to filter checklists by.
 * @returns An array of `ApiChecklist` objects for the given locale.
 *
 * @example
 * ```ts
 * const checklists = getChecklists("en");
 * ```
 */
export function getChecklists(localeCode: string) {
  const result = db
    .prepare(
      `
    SELECT * from view_checklist as v
    WHERE v.locale_code = ?
  `,
    )
    .all(localeCode) as ChecklistDB[];

  return transformChecklists(result);
}

/**
 * Retrieves quizzes for a given category name.
 *
 * @param catName - The category name to filter quizzes by.
 * @returns An array of quiz summaries with `quiz_id` and `title`.
 *
 * @example
 * ```
 * const quizzes = getQuizLists("Customs");
 * ```
 */
export function getQuizLists(catName: string) {
  return db
    .prepare(
      `
    SELECT q.id AS quiz_id, q.title AS title FROM quiz as q
    JOIN category ON q.category_id  = category.id
    WHERE category.name = ?

    `,
    )
    .all(catName);
}

/**
 * Retrieves detailed quiz information including questions and answers by quiz ID.
 *
 * @param id - The quiz ID.
 * @returns An array of `ApiQuiz` objects with full quiz details.
 *
 * @example
 * ```ts
 * const quiz = getQuiz(1);
 * ```
 */
export function getQuiz(id: number) {
  const result = db
    .prepare(
      `
    SELECT v.quiz_title,v.question, v.answers
    FROM view_full_quiz as v
    WHERE v.quiz_id = ?
  `,
    )
    .all(id) as ApiQuiz[];

  return transformQuiz(result);
}
