import { Database } from "bun:sqlite";

const schema = `
	PRAGMA foreign_keys = ON;

	CREATE TABLE IF NOT EXISTS locale (
		id INTEGER PRIMARY KEY NOT NULL,
		code TEXT NOT NULL
	) STRICT;

	CREATE UNIQUE INDEX IF NOT EXISTS idx_locale_code ON locale(code);

	CREATE TABLE IF NOT EXISTS language (
		id INTEGER PRIMARY KEY NOT NULL,
		locale_id INTEGER NOT NULL REFERENCES locale(id),
		name TEXT NOT NULL
	) STRICT;

	CREATE TABLE IF NOT EXISTS category (
		id INTEGER PRIMARY KEY NOT NULL,
		locale_id INTEGER NOT NULL REFERENCES locale(id),
		name TEXT NOT NULL,
		description TEXT NOT NULL
	) STRICT;

	CREATE TABLE IF NOT EXISTS information (
		id INTEGER PRIMARY KEY NOT NULL,
		category_id INTEGER NOT NULL REFERENCES category(id),
		title TEXT NOT NULL,
		content TEXT NOT NULL
	) STRICT;

	CREATE TABLE IF NOT EXISTS checklist (
		id INTEGER PRIMARY KEY NOT NULL,
		category_id INTEGER NOT NULL REFERENCES category(id),
		title TEXT NOT NULL
	) STRICT;

	CREATE TABLE IF NOT EXISTS checklist_item (
		id INTEGER PRIMARY KEY NOT NULL,
		checklist_id INTEGER NOT NULL REFERENCES checklist(id),
		text TEXT NOT NULL
	) STRICT;

	CREATE TABLE IF NOT EXISTS quiz (
		id INTEGER PRIMARY KEY NOT NULL,
		category_id INTEGER NOT NULL REFERENCES category(id),
		title TEXT NOT NULL
	) STRICT;

	CREATE TABLE IF NOT EXISTS quiz_question (
		id INTEGER PRIMARY KEY NOT NULL,
		quiz_id INTEGER NOT NULL REFERENCES quiz(id),
		question TEXT NOT NULL
	) STRICT;

	CREATE TABLE IF NOT EXISTS quiz_answer(
		id INTEGER PRIMARY KEY NOT NULL,
		quiz_question_id INTEGER NOT NULL REFERENCES quiz_question(id),
		answer TEXT NOT NULL,
		is_correct INTEGER NOT NULL
	) STRICT;

	CREATE TABLE IF NOT EXISTS image(
		id INTEGER PRIMARY KEY NOT NULL,
		related_table TEXT NOT NULL,
		related_id TEXT NOT NULL,
		url TEXT NOT NULL
	) STRICT;

`
const db = new Database("swissway.db");
db.run(schema);

export default db