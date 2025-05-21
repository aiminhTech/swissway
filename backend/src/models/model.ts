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
  content: InformationContent[];
};

export type InformationContent = {
  infos: {
    title: string;
    content: {
      subtitle?: string;
      text?: string;
      links?: {
        text: string, url: string
      }[]
    }[];
  }[];
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
