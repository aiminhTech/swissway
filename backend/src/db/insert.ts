import {
  categories,
  checklistItems,
  checklists,
  images,
  informations,
  locales,
  quizAnswers,
  quizQuestions,
  quizzes,
} from "@db/data";
import type {
  Category,
  CheckList,
  CheckListItem,
  Image,
  Information,
  Quiz,
  QuizAnswer,
  QuizQuestion,
} from "@models/model";
import { Database } from "bun:sqlite";

export function insertAll(db: Database) {
  //locale table
  const localeQuery = db.prepare(
    "INSERT INTO locale (code) VALUES ($code) ON CONFLICT DO NOTHING"
  );

  const insertLocales = db.transaction((codes) => {
    for (const c of codes) localeQuery.run(c);
  });

  //category table
  const categoryQuery = db.prepare(
    "INSERT INTO category (locale_id, translation_key, name, description) VALUES ($localeId, $translationKey, $name, $description) ON CONFLICT DO NOTHING"
  );

  const insertCategories = db.transaction((cats: Category[]) => {
    for (const c of cats)
      categoryQuery.run({
        $localeId: c.localeId,
        $translationKey: c.translationKey,
        $name: c.name,
        $description: c.description,
      });
  });

  //information table
  const informationQuery = db.prepare(
    "INSERT INTO information (category_id, translation_key, locale_id, title, content) VALUES ($categoryId, $translationKey, $localeId, $title, $content) ON CONFLICT DO NOTHING"
  );

  const insertInformations = db.transaction((infos: Information[]) => {
    for (const i of infos)
      informationQuery.run({
        $categoryId: i.categoryId,
        $translationKey: i.translationKey,
        $localeId: i.localeId,
        $title: i.title,
        $content: JSON.stringify(i.content),
      });
  });

  //checklist table
  const checklistQuery = db.prepare(
    "INSERT INTO checklist (category_id, translation_key, locale_id, title) VALUES ($categoryId, $translationKey, $localeId, $title) ON CONFLICT DO NOTHING"
  );

  const insertChecklist = db.transaction((lists: CheckList[]) => {
    for (const l of lists)
      checklistQuery.run({
        $categoryId: l.categoryId,
        $translationKey: l.translationKey,
        $localeId: l.localeId,
        $title: l.title,
      });
  });

  //checklist_item table
  const checklistItemQuery = db.prepare(
    "INSERT INTO checklist_item (checklist_id, translation_key, locale_id, text) VALUES ($checklistId, $translationKey, $localeId, $text) ON CONFLICT DO NOTHING"
  );

  const insertChecklistItem = db.transaction((items: CheckListItem[]) => {
    for (const i of items)
      checklistItemQuery.run({
        $checklistId: i.checklistId,
        $translationKey: i.translationKey,
        $localeId: i.localeId,
        $text: i.text,
      });
  });

  // quiz table
  const quizQuery = db.prepare(
    "INSERT INTO quiz (category_id, translation_key, locale_id, title) VALUES ($categoryId, $translationKey, $localeId, $title) ON CONFLICT DO NOTHING"
  );

  const insertQuiz = db.transaction((quizzes: Quiz[]) => {
    for (const q of quizzes)
      quizQuery.run({
        $categoryId: q.categoryId,
        $translationKey: q.translationKey,
        $localeId: q.localeId,
        $title: q.title,
      });
  });

  //quiz_question table
  const quizQuestionQuery = db.prepare(
    "INSERT INTO quiz_question (quiz_id, translation_key, locale_id, question) VALUES ($quizId, $translationKey, $localeId, $question) ON CONFLICT DO NOTHING"
  );

  const insertQuizQuestion = db.transaction((questions: QuizQuestion[]) => {
    for (const q of questions)
      quizQuestionQuery.run({
        $quizId: q.quizId,
        $translationKey: q.translationKey,
        $localeId: q.localeId,
        $question: q.question,
      });
  });

  //quiz_answer table
  const quizAnswerQuery = db.prepare(
    "INSERT INTO quiz_answer (quiz_question_id, translation_key, locale_id, answer, is_correct) VALUES ($quizQuestionId, $translationKey, $localeId, $answer, $isCorrect) ON CONFLICT DO NOTHING"
  );

  const insertQuizAnswer = db.transaction((answers: QuizAnswer[]) => {
    for (const a of answers)
      quizAnswerQuery.run({
        $quizQuestionId: a.quizQuestionId,
        $translationKey: a.translationKey,
        $localeId: a.localeId,
        $answer: a.answer,
        $isCorrect: a.isCorrect,
      });
  });

  //image table
  const imageQuery = db.prepare(
    "INSERT INTO image (related_table, related_id, url) VALUES ($relatedTable, $relatedId, $url) ON CONFLICT DO NOTHING"
  );

  const insertImage = db.transaction((imgs: Image[]) => {
    for (const i of imgs)
      imageQuery.run({
        $relatedTable: i.relatedTable,
        $relatedId: i.relatedId,
        $url: i.url,
      });
  });

  try {
    insertLocales(locales);
    insertCategories(categories);
    insertInformations(informations);
    insertChecklist(checklists);
    insertChecklistItem(checklistItems);
    insertQuiz(quizzes);
    insertQuizQuestion(quizQuestions);
    insertQuizAnswer(quizAnswers);
    insertImage(images);
  } catch (err) {
    console.error("Error during seeding:", err);
  }
}
