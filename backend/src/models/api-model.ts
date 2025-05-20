export type ApiLocale = {
  id: number;
  code: string;
};

export type ApiCategory = {
  code: string;
  category_id: number;
  category_translation_key: string;
  category_name: string;
  category_description: string;
};

export type ApiInfoContent = {
  code: string;
  category_name: string;
  information_title: string;
  information_content: string;
};

export type ApiChecklist = {
  code: string;
  category_name: string;
  checklist_title: string;
  checklist_items: string;
};

export type ApiQuiz = {
  quiz_title: string;
  question: string;
  answers: string;
};
