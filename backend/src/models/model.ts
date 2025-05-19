export type Language = {
  localeId: number;
  name: string;
};

export type Category = {
  translationKey: string;
  localeId: number;
  name: string;
  description: string;
};

export type Information = {
  categoryId: number;
  title: string;
  description: string;
  content: InformationContent[];
};

export type InformationContent = {
  topic: string;
  description: string;
};

export type CheckList = {
  categoryId: number;
  title: string;
};

export type CheckListItem = {
  checklistId: number;
  text: string;
};

export type Quiz = {
  categoryId: number;
  title: string;
};

export type QuizQuestion = {
  quizId: number;
  question: string;
};

export type QuizAnswer = {
  quizQuestionId: number;
  answer: string;
  isCorrect: number;
};

export type Image = {
  relatedTable: string;
  relatedId: number;
  url: string;
};
