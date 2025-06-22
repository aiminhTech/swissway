import type { CategoryDB, ChecklistDB, InfoContentDB } from "@/models/db-model";
import { ApiCategories, ApiCategory, ApiInfoContents, type ApiChecklists, type ApiQuizzes } from "@models/api-model";
import { LocaleId, type InfoContent } from "@models/model";

/**
 * Transforms API category data into a structured format.
 *
 * @param apiCategories - Array of categories fetched from API/database.
 * @returns Array of transformed categories with explicit keys.
 *
 * @example
 * ```ts
 * const transformed = transformCategories(apiCategories);
 * ```
 */
export function transformCategories(categories: CategoryDB[]): ApiCategories {
  return categories.map((c) => ({
    locale_code: c.locale_code,
    category_name: c.category_name,
    category_description: c.category_description,
  }));
}

/**
 * Transforms API info content data by parsing JSON contents.
 *
 * @param apiInfoContents - Array of information content objects from API/database.
 * @returns Array of info content objects with parsed `info_contents` as `InfoContent[]`.
 *
 * @example
 * ```ts
 * const transformed = transformInfoContents(apiInfoContents);
 * ```
 */
export function transformInfoContents(infoContents: InfoContentDB[]): ApiInfoContents {
  return infoContents.map((ic) => {
    const contents = JSON.parse(ic.information_contents) as InfoContent[];

    return {
      information_title: ic.information_title,
      information_contents: contents,
    };
  });
}

/**
 * Transforms API checklist data by splitting checklist items string.
 *
 * @param apiChecklists - Array of checklist objects from API/database.
 * @returns Array of transformed checklist objects with `items` as string arrays.
 *
 * @example
 * ```ts
 * const transformed = transformChecklists(apiChecklists);
 * ```
 */
export function transformChecklists(checklists: ChecklistDB[]) {
  return checklists.map((c) => {
    const items = c.checklist_items.split(" ||| ");

    return {
      locale_code: c.locale_code,
      checklist_title: c.checklist_title,
      checklist_items: items,
    };
  });
}

/**
 * Transforms API quiz data by grouping answers under their respective questions.
 *
 * @param apiQuiz - Array of quiz question and answer objects from API/database.
 * @returns An object containing the quiz title and an array of questions,
 *          each with their answers mapped as `{ isCorrectFlag: answerNumber }`.
 *
 * @example
 * ```ts
 * const transformedQuiz = transformQuiz(apiQuiz);
 * ```
 */
export function transformQuiz(apiQuiz: ApiQuizzes) {
  if (apiQuiz.length === 0) {
    return undefined;
  }

  const title = apiQuiz[0]?.quiz_title;

  const questionMap = apiQuiz.reduce((acc, item) => {
    const question = item.question;
    const answers = item.answers.split(" ||| ").map((a) => {
      const [isCorrect, value] = a.split("::");
      return { [isCorrect!]: Number(value) };
    });

    return {
      ...acc,
      [question]: acc[question] ? [...acc[question], ...answers] : [...answers],
    };
  }, {} as Record<string, { [key: string]: number }[]>);

  const questions = Object.entries(questionMap).map(([q, a]) => ({
    [q]: a,
  }));

  return { title, questions };
}
