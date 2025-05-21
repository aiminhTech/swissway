import { Database } from "bun:sqlite";
import { join } from "path";
import { insert } from "@db/insert";

const dbPath = join(import.meta.dir, "../../swissway.db");
const db = new Database(dbPath);

const schema = `
	PRAGMA foreign_keys = ON;

	CREATE TABLE IF NOT EXISTS locale (
		id INTEGER PRIMARY KEY NOT NULL,
		code TEXT NOT NULL
	) STRICT;
	CREATE UNIQUE INDEX IF NOT EXISTS idx_locale_code ON locale(code);

	CREATE TABLE IF NOT EXISTS category (
		id INTEGER PRIMARY KEY NOT NULL,
		locale_id INTEGER NOT NULL REFERENCES locale(id),
		name TEXT NOT NULL,
		description TEXT NOT NULL
	) STRICT;
	CREATE UNIQUE INDEX IF NOT EXISTS idx_category_locale_id_name ON category(locale_id, name);

	CREATE TABLE IF NOT EXISTS information (
		id INTEGER PRIMARY KEY NOT NULL,
		locale_id INTEGER NOT NULL REFERENCES locale(id),
		category_id INTEGER NOT NULL REFERENCES category(id),
		title TEXT NOT NULL,
		content TEXT NOT NULL
	) STRICT;
	CREATE UNIQUE INDEX IF NOT EXISTS idx_information_locale_id_category_id_title ON information(locale_id, category_id, title);

	CREATE TABLE IF NOT EXISTS checklist (
		id INTEGER PRIMARY KEY NOT NULL,
		locale_id INTEGER NOT NULL REFERENCES locale(id),
		category_id INTEGER NOT NULL REFERENCES category(id),
		title TEXT NOT NULL
	) STRICT;
	CREATE UNIQUE INDEX IF NOT EXISTS idx_checklist_locale_id_category_id_title ON checklist(locale_id, category_id, title);

	CREATE TABLE IF NOT EXISTS checklist_item (
		id INTEGER PRIMARY KEY NOT NULL,
		locale_id INTEGER NOT NULL REFERENCES locale(id),
		checklist_id INTEGER NOT NULL REFERENCES checklist(id),
		text TEXT NOT NULL
	) STRICT;
	CREATE UNIQUE INDEX IF NOT EXISTS idx_locale_id_checklist_item_checklist_id_text ON checklist_item(locale_id,checklist_id, text);

	CREATE TABLE IF NOT EXISTS quiz (
		id INTEGER PRIMARY KEY NOT NULL,
		locale_id INTEGER NOT NULL REFERENCES locale(id),
		category_id INTEGER NOT NULL REFERENCES category(id),
		title TEXT NOT NULL
	) STRICT;
	CREATE UNIQUE INDEX IF NOT EXISTS idx_quiz_category_id_title ON quiz(category_id, title);

	CREATE TABLE IF NOT EXISTS quiz_question (
		id INTEGER PRIMARY KEY NOT NULL,
		locale_id INTEGER NOT NULL REFERENCES locale(id),
		quiz_id INTEGER NOT NULL REFERENCES quiz(id),
		question TEXT NOT NULL
	) STRICT;
	CREATE UNIQUE INDEX IF NOT EXISTS idx_quiz_question_quiz_id_question ON quiz_question(quiz_id, question);

	CREATE TABLE IF NOT EXISTS quiz_answer(
		id INTEGER PRIMARY KEY NOT NULL,
		locale_id INTEGER NOT NULL REFERENCES locale(id),
		quiz_question_id INTEGER NOT NULL REFERENCES quiz_question(id),
		answer TEXT NOT NULL,
		is_correct INTEGER NOT NULL
	) STRICT;
	CREATE UNIQUE INDEX IF NOT EXISTS idx_quiz_answer_quiz_question_id_answer ON quiz_answer(quiz_question_id, answer);

	CREATE TABLE IF NOT EXISTS image(
		id INTEGER PRIMARY KEY NOT NULL,
		related_table TEXT NOT NULL,
		related_id TEXT NOT NULL,
		url TEXT NOT NULL
	) STRICT;
	CREATE UNIQUE INDEX IF NOT EXISTS idx_image_related_table_related_id_url ON image(related_table, related_id, url);

	CREATE VIEW IF NOT EXISTS view_locale AS
		SELECT locale.id as code_id, locale.code AS code
		FROM locale;

	CREATE VIEW IF NOT EXISTS view_category AS
		SELECT
			v.code,
			c.id AS category_id,
			c.name AS category_name,
			c.description AS category_description
		FROM view_locale AS v
		JOIN category AS c ON c.locale_id = v.code_id;

	CREATE VIEW IF NOT EXISTS view_information AS
		SELECT
			v.code,
			v.category_name,
			i.title AS information_title,
			i.content AS information_content
		FROM view_category AS v
		JOIN information AS i ON i.category_id = v.category_id;

		CREATE VIEW IF NOT EXISTS view_checklist AS
		SELECT
			v.code,
			v.category_name,
			c.title AS checklist_title,
			GROUP_CONCAT(ci.text, ' ||| ') AS checklist_items
		FROM
			view_category AS v
		JOIN checklist AS c ON c.category_id = v.category_id
		JOIN checklist_item AS ci ON ci.checklist_id = c.id
		GROUP BY
			v.code,
			v.category_name,
			c.title;


	CREATE VIEW IF NOT EXISTS view_quiz_question_answers AS
		SELECT
			qq.id AS question_id,
			qq.quiz_id,
			qq.question,
			GROUP_CONCAT(qa.answer || '::' || qa.is_correct, ' ||| ') AS answers
		FROM quiz_question AS qq
		JOIN quiz_answer AS qa ON qa.quiz_question_id = qq.id
		GROUP BY question_id;

	CREATE VIEW IF NOT EXISTS view_full_quiz AS
		SELECT
			vc.code,
			vc.category_name,
			vqa.quiz_id,
			q.title AS quiz_title,
			vqa.question,
			vqa.answers
		FROM view_quiz_question_answers AS vqa
		JOIN quiz AS q ON vqa.quiz_id = q.id
		JOIN view_category AS vc ON q.category_id = vc.category_id;
`;

db.run(schema);
insert(db);

export default db;
