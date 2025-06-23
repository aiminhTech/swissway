import { Schema as S } from "effect";

export const CategoryId = S.Positive.pipe(S.brand("CategoryId"));
export type CategoryId = typeof CategoryId.Type;

export const LocaleId = S.Positive.pipe(S.brand("LocaleId"));
export type LocaleId = typeof LocaleId.Type;

export const QuizId = S.Positive.pipe(S.brand("QuizId"));
export type QuizId = typeof QuizId.Type;

export const QuizQuestionId = S.Positive.pipe(S.brand("QuizQuestionId"));
export type QuizQuestionId = typeof QuizQuestionId.Type;

export const ChecklistId = S.Positive.pipe(S.brand("ChecklistId"));
export type ChecklistId = typeof ChecklistId.Type;

export class Category extends S.Class<Category>("Category")({
  localeId: LocaleId,
  name: S.NonEmptyString,
  description: S.NonEmptyString,
}) {}

export class Link extends S.Class<Link>("Link")({
  text: S.optional(S.String),
  url: S.String,
}) {}

export class Content extends S.Class<Content>("Content")({
  subtitle: S.optional(S.String),
  text: S.NonEmptyString,
  links: S.optional(S.Array(Link)),
}) {}

export class Info extends S.Class<Info>("Info")({
  title: S.NonEmptyString,
  contents: S.Array(Content),
}) {}

export class InfoContent extends S.Class<InfoContent>("InfoContent")({
  infos: S.Array(Info),
}) {}

export class Information extends S.Class<Information>("Information")({
  localeId: LocaleId,
  categoryId: CategoryId,
  title: S.NonEmptyString,
  description: S.NonEmptyString,
  contents: S.Array(InfoContent),
  isEssential: S.Number,
}) {}

export class CheckList extends S.Class<CheckList>("CheckList")({
  localeId: LocaleId,
  title: S.String,
}) {}

export class CheckListItem extends S.Class<CheckListItem>("CheckListItem")({
  localeId: LocaleId,
  checklistId: ChecklistId,
  text: S.String,
}) {}

export class Quiz extends S.Class<Quiz>("Quiz")({
  localeId: LocaleId,
  categoryId: CategoryId,
  title: S.String,
}) {}

export class QuizQuestion extends S.Class<QuizQuestion>("QuizQuestion")({
  localeId: LocaleId,
  quizId: QuizId,
  question: S.String,
}) {}

export class QuizAnswer extends S.Class<QuizAnswer>("QuizAnswer")({
  localeId: LocaleId,
  quizQuestionId: QuizQuestionId,
  answer: S.NonEmptyString,
  isCorrect: S.Number,
}) {}

export class Image extends S.Class<Image>("Image")({
  relatedTable: S.String,
  relatedId: S.Number,
  url: S.String,
}) {}
