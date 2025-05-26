export type LocaleType = {
  id: number;
  code: LanguageEnum;
};

export enum LanguageEnum {
  EN = "en",
  DE = "de",
}
export type CategoryType = {
  locale_code: string;
  category_name: string;
  category_description: string;
};

//info
export type InfoTitleType = {
  locale_code: string;
  category_name: string;
  information_title: string;
};

export type InfoContentType = {
  locale_code: string;
  info_title: string;
  info_contents: InfoContent[];
};

export type InfoContent = {
  infos: Info[];
};

export type Info = {
  title: string;
  contents: Content[];
};

export type Content = {
  subtitle?: string;
  text: string;
  links?: Link[];
};

export type Link = {
  text?: string;
  url: string;
};

//quiz
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

export type ChecklistType = {
  locale_code: string;
  title: string;
  items: string[];
};

export type FetchError = {
  message: string;
};

export type GroupedTitle = {
  base: string;
  variations: string[];
};
