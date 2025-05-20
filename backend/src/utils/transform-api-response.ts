import type {
  ApiCategory,
  ApiChecklist,
  ApiInfoContent,
  ApiQuiz,
} from "@models/api-model";
import type { InformationContent } from "@models/model";

export function transformCategories(apiCategories: ApiCategory[]) {
  return apiCategories.map((c) => ({
    locale_code: c.code,
    category_name: c.category_name,
    category_description: c.category_description,
    category_translation_key: c.category_translation_key
  }));
}

export function transformInfoContents(apiInfoContents: ApiInfoContent[]) {
  return apiInfoContents.map((ic) => {
    const content = JSON.parse(ic.information_content) as InformationContent[];

    return {
      locale_code: ic.code,
      info_title: ic.information_title,
      info_content: content,
    };
  });
}

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

export function transformQuiz(apiQuiz: ApiQuiz[]) {
  const title = apiQuiz[0]?.quiz_title;

  const questionMap = apiQuiz.reduce((acc, item) => {
    const question = item.question;
    const answers = item.answers.split(" ||| ").map(a => {
      const [isCorrect, value] = a.split("::");
      return { [isCorrect!]: Number(value) };
    });

    return {
      ...acc,
      [question]: acc[question]
        ? [...acc[question], ...answers]
        : [...answers]
    };
  }, {} as Record<string, { [key: string]: number }[]>);

  const questions = Object.entries(questionMap).map(([q, a]) => ({
    [q]: a
  }));

  return { title, questions };
}


