import { Schema as S } from "effect";
import { InfoContent, QuizId } from "./model";

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
  quiz_id: QuizId,
  title: S.NonEmptyString,
}) {}
export const ApiQuizLists = S.mutable(S.Array(ApiQuizList));
export type ApiQuizLists = typeof ApiQuizLists.Type;

export class ApiQuiz extends S.Class<ApiQuiz>("ApiQuiz")({
  quiz_title: S.String,
  question: S.String,
  answers: S.String,
}) {}
export const ApiQuizzes = S.mutable(S.Array(ApiQuiz));
export type ApiQuizzes = typeof ApiQuizzes.Type;

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
