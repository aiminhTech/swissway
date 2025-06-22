import { Schema as S } from "effect";
import { CategoryId, InfoContent } from "./model";

export class CategoryDB extends S.Class<CategoryDB>("CategoryDB")({
  locale_code: S.NonEmptyString,
  category_id: CategoryId,
  category_name: S.NonEmptyString,
  category_description: S.NonEmptyString,
}) {}

export class InfoContentDB extends S.Class<InfoContentDB>("InfoContentDB")({
  locale_code: S.String,
  category_name: S.NonEmptyString,
  information_title: S.NonEmptyString,
  information_contents: S.String,
  is_essential: S.Number,
}) {}

export class ChecklistDB extends S.Class<ChecklistDB>("ChecklistDB")({
  locale_code: S.String,
  category_name: S.NonEmptyString,
  checklist_title: S.NonEmptyString,
  checklist_items: S.String,
}) {}
