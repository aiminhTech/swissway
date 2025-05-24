export enum LanguageEnum {
  EN = "en",
  DE = "de",
}
export type CategoryType = {
  locale_code: string;
  category_name: string;
  category_description: string;
};

export type InfoTitleType = {
  locale_code: string;
  category_name: string;
  information_title: string;
};

export type InfoContentType = {
  locale_code: string;
  info_title: string;
  info_content: ContentType[];
};

export type ContentType = {
  infos: {
    title: string;
    content: {
      subtitle?: string;
      text: string;
    }[];
  }[];
};

export type QuizListType = {
  quiz_id: number;
  title: string;
};

export type AnswerOption = {
  [answerText: string]: number;
};

export type Question = {
  [questionText: string]: AnswerOption[];
};

export type QuizType = {
  title: string;
  questions: Question[];
};

export type FetchError = {
  message: string;
};
