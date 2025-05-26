export type Category = {
  localeId: number;
  name: string;
  description: string;
};

export type Information = {
  localeId: number;
  categoryId: number;
  title: string;
  description: string;
  contents: InfoContent[];
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

export type CheckList = {
  localeId: number;
  categoryId: number;
  title: string;
};

export type CheckListItem = {
  localeId: number;
  checklistId: number;
  text: string;
};

export type Quiz = {
  localeId: number;
  categoryId: number;
  title: string;
};

export type QuizQuestion = {
  localeId: number;
  quizId: number;
  question: string;
};

export type QuizAnswer = {
  localeId: number;
  quizQuestionId: number;
  answer: string;
  isCorrect: number;
};

export type Image = {
  relatedTable: string;
  relatedId: number;
  url: string;
};
