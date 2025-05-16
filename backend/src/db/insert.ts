import db from "./db"
import type { Category, CheckList, CheckListItem, Image, Information, Language, Quiz, QuizAnswer, QuizQuestion } from "./model";

//locale table
const localeQuery = db.prepare("INSERT INTO locale (code) VALUES ($code) ON CONFLICT DO NOTHING")

const insertLocales = db.transaction(codes => {
	for (const c of codes) localeQuery.run(c);
});

//language table
const languageQuery = db.prepare("INSERT INTO language (locale_id, name) VALUES ($localeId, $name) ON CONFLICT DO NOTHING")

const insertLanguages = db.transaction((languages: Language[]) => {
	for (const l of languages) languageQuery.run({
		$localeId: l.localeId,
		$name: l.name,
	});
});

//category table
const categoryQuery = db.prepare("INSERT INTO category (locale_id, name, description) VALUES ($localeId, $name, $description) ON CONFLICT DO NOTHING")

const insertCategories = db.transaction((cats: Category[]) => {
	for (const c of cats) categoryQuery.run({
		$localeId: c.localeId,
		$name: c.name,
		$description: c.description
	});
});

//information table
const informationQuery = db.prepare("INSERT INTO information (category_id, title, content) VALUES ($categoryId, $title, $content) ON CONFLICT DO NOTHING")

const insertInformations = db.transaction((infos: Information[]) => {
	for (const i of infos) informationQuery.run({
		$categoryId: i.categoryId,
		$title: i.title,
		$content: JSON.stringify(i.content)
	});
});

//checklist table
const checklistQuery = db.prepare("INSERT INTO checklist (category_id, title) VALUES ($categoryId, $title) ON CONFLICT DO NOTHING")

const insertChecklist = db.transaction((lists: CheckList[]) => {
	for (const l of lists) checklistQuery.run({
		$categoryId: l.categoryId,
		$title: l.title,
	});
});

//checklist_item table
const checklistItemQuery = db.prepare("INSERT INTO checklist_item (checklist_id, text) VALUES ($checklistId, $text) ON CONFLICT DO NOTHING")

const insertChecklistItem = db.transaction((items: CheckListItem[]) => {
	for (const i of items) checklistItemQuery.run({
		$checklistId: i.checklistId,
		$text: i.text,
	});
});

// quiz table
const quizQuery = db.prepare("INSERT INTO quiz (category_id, title) VALUES ($categoryId, $title) ON CONFLICT DO NOTHING")

const insertQuiz = db.transaction((quizzes: Quiz[]) => {
	for (const q of quizzes) quizQuery.run({
		$categoryId: q.categoryId,
		$title: q.title,
	});
});

//quiz_question table
const quizQuestionQuery = db.prepare("INSERT INTO quiz_question (quiz_id, question) VALUES ($quizId, $question) ON CONFLICT DO NOTHING")

const insertQuizQuestion = db.transaction((questions: QuizQuestion[]) => {
	for (const q of questions) quizQuestionQuery.run({
		$quizId: q.quizId,
		$question: q.question,
	});
});

//quiz_answer table
const quizAnswerQuery = db.prepare("INSERT INTO quiz_answer (quiz-question_id, answer, is_correct) VALUES ($quizQuestionId, $answer, $isCorrect) ON CONFLICT DO NOTHING")

const insertQuizanswer = db.transaction((answers: QuizAnswer[]) => {
	for (const a of answers) quizAnswerQuery.run({
		$quizQuestionId: a.quizQuestionId,
		$answer: a.answer,
		$isCorrect: a.isCorrect
	});
});

//image table
const imageQuery = db.prepare("INSERT INTO image (related_table, related_id, url) VALUES ($relatedTable, $relatedId, $url) ON CONFLICT DO NOTHING")

const insertImage = db.transaction((imgs: Image[]) => {
	for (const i of imgs) imageQuery.run({
		$relatedTable: i.relatedTable,
		$relatedId: i.relatedId,
		$url: i.url
	});
});





function insertAll() {
	try {
		insertLocales();
		insertLanguages()
		insertCategories()
		insertInformations()
		insertChecklist()
		insertChecklistItem()
		insertQuiz()
		insertQuizQuestion()
		insertQuizanswer()
		insertImage()

		console.log("succeed");
	} catch (err) {
		console.error(err);
	}
}

insertAll()


