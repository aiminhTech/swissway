import { Schema as S } from "effect";

export enum Locales {
  EN = "en",
  DE = "de",
}

const LocaleSchema = S.Enums(Locales);
export type Locale = typeof LocaleSchema.Type;

export class ApiLocale extends S.Class<ApiLocale>("ApiLocale")({
  id: S.Positive,
  code: LocaleSchema,
}) {}
export const ApiLocales = S.mutable(S.Array(ApiLocale));
export type ApiLocales = typeof ApiLocales.Type;

export class ApiCategory extends S.Class<ApiCategory>("ApiCategory")({
  locale_code: S.String,
  category_name: S.String,
  category_description: S.String,
}) {}
export const ApiCategories = S.mutable(S.Array(ApiCategory));
export type ApiCategories = typeof ApiCategories.Type;

export class ApiInfoTitle extends S.Class<ApiInfoTitle>("ApiInfoTitle")({
  locale_code: S.String,
  category_name: S.String,
  information_title: S.String,
}) {}
export const ApiInfoTitles = S.mutable(S.Array(ApiInfoTitle));
export type ApiInfoTitles = typeof ApiInfoTitles.Type;

export class Link extends S.Class<Link>("Link")({
  text: S.optional(S.String),
  url: S.String,
}) {}

export class Content extends S.Class<Content>("Content")({
  subtitle: S.optional(S.String),
  text: S.NonEmptyString,
  links: S.optional(S.mutable(S.Array(Link))),
}) {}

export class Info extends S.Class<Info>("Info")({
  title: S.NonEmptyString,
  contents: S.Array(Content),
}) {}

export class InfoContent extends S.Class<InfoContent>("InfoContent")({
  infos: S.Array(Info),
}) {}

export class ApiInfoContent extends S.Class<ApiInfoContent>("ApiInfoContent")({
  information_title: S.String,
  information_contents: S.Array(InfoContent),
}) {}
export const ApiInfoContents = S.mutable(S.Array(ApiInfoContent));
export type ApiInfoContents = typeof ApiInfoContents.Type;

export class ApiChecklist extends S.Class<ApiChecklist>("ApiChecklist")({
  locale_code: S.String,
  checklist_title: S.String,
  checklist_items: S.Array(S.String),
}) {}
export const ApiChecklists = S.mutable(S.Array(ApiChecklist));
export type ApiChecklists = typeof ApiChecklists.Type;

export class ApiQuizList extends S.Class<ApiQuizList>("ApiQuizList")({
  quiz_id: S.Number,
  title: S.NonEmptyString,
}) {}
export const ApiQuizLists = S.mutable(S.Array(ApiQuizList));
export type ApiQuizLists = typeof ApiQuizLists.Type;

const AnswerOption = S.Record({ key: S.String, value: S.Number });

const Question = S.Record({ key: S.String, value: S.Array(AnswerOption) });

export class ApiQuiz extends S.Class<ApiQuiz>("ApiQuiz")({
  title: S.String,
  questions: S.Array(Question),
}) {}

export class ApiError extends S.TaggedError<ApiError>("ApiError")("ApiError", {
  message: S.Unknown,
}) {
  static noContent(contentType: string) {
    return ApiError.make({
      message: `There’s no content available for ${contentType}.`,
    });
  }

  static missingParameter(queryParam: string) {
    return ApiError.make({ message: `Missing query param: ${queryParam}.` });
  }

  static missingUrlParameter(queryParam: string) {
    return ApiError.make({
      message: `Missing url query param: ${queryParam}.`,
    });
  }

  static fetchFailed(type: string) {
    return ApiError.make({
      message: `Failed to fetch: ${type}. Please try again!`,
    });
  }
}
