import { categories, checklistItems, checklists, informations, locales, quizAnswers, quizQuestions, quizzes } from "@/models/reference-data/data";
import { Database } from "bun:sqlite";

/**
 * Inserts seed data into the SQLite database.
 *
 * This function performs a transactional batch insert of reference data into multiple tables:
 * - `locale`
 * - `category`
 * - `information`
 * - `checklist`
 * - `checklist_item`
 * - `quiz`
 * - `quiz_question`
 * - `quiz_answer`
 * - `image`
 *
 * The insertions use "ON CONFLICT DO NOTHING" to avoid duplicates.
 * The reference data is imported from static modules representing localized content and quizzes.
 *
 * @param db - An open SQLite `Database` instance from Bun's SQLite module.
 *
 * @remarks
 * The function wraps all insertions in a single transaction for atomicity and performance.
 * If any error occurs during the transaction, it will be caught and logged.
 *
 * @example
 * ```ts
 * import { Database } from "bun:sqlite";
 * import { insert } from "./path/to/this/file";
 *
 * const db = new Database("mydb.sqlite");
 * insert(db);
 * ```
 */
export function insert(db: Database) {
  const insertAll = db.transaction(() => {
    // locale table
    const localeQuery = db.prepare("INSERT INTO locale (code) VALUES ($code) ON CONFLICT DO NOTHING");
    for (const c of locales) {
      localeQuery.run({ $code: c });
    }

    // category table
    const categoryQuery = db.prepare("INSERT INTO category (locale_id, name, description) VALUES ($localeId, $name, $description) ON CONFLICT DO NOTHING");
    for (const c of categories) {
      categoryQuery.run({
        $localeId: c.localeId,
        $name: c.name,
        $description: c.description,
      });
    }

    // information table
    const informationQuery = db.prepare(
      "INSERT INTO information (category_id, locale_id, title, content, is_essential) VALUES ($categoryId, $localeId, $title, $content, $isEssential) ON CONFLICT DO NOTHING",
    );
    for (const i of informations) {
      informationQuery.run({
        $categoryId: i.categoryId,
        $localeId: i.localeId,
        $title: i.title,
        $content: JSON.stringify(i.contents),
        $isEssential: i.isEssential,
      });
    }

    // checklist table
    const checklistQuery = db.prepare("INSERT INTO checklist ( locale_id, title) VALUES ( $localeId, $title) ON CONFLICT DO NOTHING");
    for (const l of checklists) {
      checklistQuery.run({
        $localeId: l.localeId,
        $title: l.title,
      });
    }

    // checklist_item table
    const checklistItemQuery = db.prepare("INSERT INTO checklist_item (checklist_id, locale_id, text) VALUES ($checklistId, $localeId, $text) ON CONFLICT DO NOTHING");
    for (const i of checklistItems) {
      checklistItemQuery.run({
        $checklistId: i.checklistId,
        $localeId: i.localeId,
        $text: i.text,
      });
    }

    // quiz table
    const quizQuery = db.prepare("INSERT INTO quiz (category_id, locale_id, title) VALUES ($categoryId, $localeId, $title) ON CONFLICT DO NOTHING");
    for (const q of quizzes) {
      quizQuery.run({
        $categoryId: q.categoryId,
        $localeId: q.localeId,
        $title: q.title,
      });
    }

    // quiz_question table
    const quizQuestionQuery = db.prepare("INSERT INTO quiz_question (quiz_id, locale_id, question) VALUES ($quizId, $localeId, $question) ON CONFLICT DO NOTHING");
    for (const q of quizQuestions) {
      quizQuestionQuery.run({
        $quizId: q.quizId,
        $localeId: q.localeId,
        $question: q.question,
      });
    }

    // quiz_answer table
    const quizAnswerQuery = db.prepare("INSERT INTO quiz_answer (quiz_question_id, locale_id, answer, is_correct) VALUES ($quizQuestionId, $localeId, $answer, $isCorrect) ON CONFLICT DO NOTHING");
    for (const a of quizAnswers) {
      quizAnswerQuery.run({
        $quizQuestionId: a.quizQuestionId,
        $localeId: a.localeId,
        $answer: a.answer,
        $isCorrect: a.isCorrect,
      });
    }

    // image table
    /*  const imageQuery = db.prepare("INSERT INTO image (related_table, related_id, url) VALUES ($relatedTable, $relatedId, $url) ON CONFLICT DO NOTHING");
    for (const i of images) {
      imageQuery.run({
        $relatedTable: i.relatedTable,
        $relatedId: i.relatedId,
        $url: i.url,
      });
    } */
  });

  try {
    insertAll();
  } catch (err) {
    console.error("Error during seeding:", err);
  }
}
