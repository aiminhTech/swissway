export type Category = {
  translationKey: string;
  localeId: number;
  name: string;
  description: string;
};

export type Information = {
  translationKey: string;
  localeId: number;
  categoryId: number;
  title: string;
  description: string;
  content: InformationContent[];
};

export type InformationContent = {
  infos: {
    title: string;
    content: {
      subtitle?: string;
      text: string;
    }[];
  }[];
};

export type CheckList = {
  translationKey: string;
  localeId: number;
  categoryId: number;
  title: string;
};

export type CheckListItem = {
  translationKey: string;
  localeId: number;
  checklistId: number;
  text: string;
};

export type Quiz = {
  translationKey: string;
  localeId: number;
  categoryId: number;
  title: string;
};

export type QuizQuestion = {
  translationKey: string;
  localeId: number;
  quizId: number;
  question: string;
};

export type QuizAnswer = {
  translationKey: string;
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
