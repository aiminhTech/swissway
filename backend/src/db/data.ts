import type {
  Category,
  CheckList,
  CheckListItem,
  Image,
  Information,
  Language,
  Quiz,
  QuizAnswer,
  QuizQuestion,
} from "@models/model";

export const locales = ["en", "de"];

export const languages: Language[] = [
  { localeId: 1, name: "English" },
  { localeId: 1, name: "German" },
  { localeId: 2, name: "Englisch" },
  { localeId: 2, name: "Deutsch" },
];

export const categories: Category[] = [
  { localeId: 1, translationKey: "Customs", name: "Customs", description: "foo" },
  { localeId: 1, translationKey: "Documents and register extracts", name: "Documents and register extracts", description: "foo" },
  { localeId: 1, translationKey: "Family and partnership", name: "Family and partnership", description: "foo" },
  { localeId: 1, translationKey: "Foreign nationals in Switzerland", name: "Foreign nationals in Switzerland", description: "foo" },
  { localeId: 1, translationKey: "Health", name: "Health", description: "foo" },
  { localeId: 1, translationKey: "Housing", name: "Housing", description: "foo" },
  { localeId: 1, translationKey: "Insurance", name: "Insurance", description: "foo" },
  { localeId: 1, translationKey: "Political system", name: "Political system", description: "foo" },
  { localeId: 1, translationKey:  "Retirement", name: "Retirement", description: "foo" },
  { localeId: 1, translationKey: "Safety and justice", name: "Safety and justice", description: "foo" },
  { localeId: 1, translationKey: "School and education", name: "School and education", description: "foo" },
  { localeId: 1, translationKey: "Taxes and finances", name: "Taxes and finances", description: "foo" },
  { localeId: 1, translationKey: "Travel and emigrate", name: "Travel and emigrate", description: "foo" },
  { localeId: 1, translationKey: "Vehicles and traffic", name: "Vehicles and traffic", description: "foo" },
  { localeId: 1, translationKey: "Votes and elections", name: "Votes and elections", description: "foo" },
  { localeId: 1, translationKey: "Work", name: "Work", description: "foo" },
];

/* {
  topic: ,
  description: ,
  infos: [{
    title: ,
    content: [{
      subtitle: ,
      text: 
    }]
  }]
} */
const informationCustoms: Information[] = [
]

export const informations: Information[] = [...informationCustoms];

export const checklists: CheckList[] = [
  { categoryId: 1, title: "checklist 1" },
  { categoryId: 3, title: "Checkliste 1" },
];

export const checklistItems: CheckListItem[] = [
  { checklistId: 1, text: "todo 1" },
  { checklistId: 1, text: "todo 2" },
  { checklistId: 1, text: "todo 2" },
  { checklistId: 2, text: "Schritt 1" },
  { checklistId: 2, text: "Schritt 2" },
  { checklistId: 2, text: "Schritt 3" },
];

export const quizzes: Quiz[] = [
  { categoryId: 1, title: "Quiz 1" },
  { categoryId: 1, title: "Quiz 2" },
  { categoryId: 3, title: "Wissenstest 1" },
  { categoryId: 3, title: "Wissenstest 2" },
];

export const quizQuestions: QuizQuestion[] = [
  { quizId: 1, question: "question 1" },
  { quizId: 1, question: "question 2" },
  { quizId: 2, question: "Frage 1" },
  { quizId: 2, question: "Frage 2" },
];

export const quizAnswers: QuizAnswer[] = [
  { quizQuestionId: 1, answer: "answer A", isCorrect: 0 },
  { quizQuestionId: 1, answer: "answer B", isCorrect: 0 },
  { quizQuestionId: 1, answer: "answer C", isCorrect: 0 },
  { quizQuestionId: 1, answer: "answer D", isCorrect: 1 },
  { quizQuestionId: 2, answer: "answer AA", isCorrect: 0 },
  { quizQuestionId: 2, answer: "answer BB", isCorrect: 0 },
  { quizQuestionId: 2, answer: "answer CC", isCorrect: 0 },
  { quizQuestionId: 2, answer: "answer DD", isCorrect: 1 },
  { quizQuestionId: 3, answer: "answer AA", isCorrect: 0 },
  { quizQuestionId: 3, answer: "answer BB", isCorrect: 0 },
  { quizQuestionId: 3, answer: "answer CC", isCorrect: 0 },
  { quizQuestionId: 3, answer: "answer DD", isCorrect: 1 },
];

export const images: Image[] = [
  { relatedTable: "information", relatedId: 1, url: "/src/assets/foo.png" },
  { relatedTable: "information", relatedId: 2, url: "/src/assets/bar.png" },
];
