import type {
  ApiCategory,
  ApiChecklist,
  ApiInfoContent,
  ApiQuiz,
} from "@models/api-model";
import type { InfoContent } from "@models/model";


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
export function transformCategories(apiCategories: ApiCategory[]) {
  return apiCategories.map((c) => ({
    locale_code: c.code,
    category_name: c.category_name,
    category_description: c.category_description,
    category_translation_key: c.category_translation_key,
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
export function transformInfoContents(apiInfoContents: ApiInfoContent[]) {
  return apiInfoContents.map((ic) => {
    const contents = JSON.parse(ic.information_contents) as InfoContent[];

    return {
      locale_code: ic.code,
      info_title: ic.information_title,
      info_contents: contents,
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
export function transformChecklists(apiChecklists: ApiChecklist[]) {
  return apiChecklists.map((c) => {
    const items = c.checklist_items.split(" ||| ");

    return {
      locale_code: c.code,
      title: c.checklist_title,
      items,
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
export function transformQuiz(apiQuiz: ApiQuiz[]) {
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

