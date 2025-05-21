import type {
  Category,
  CheckList,
  CheckListItem,
  Image,
  Information,
  Quiz,
  QuizAnswer,
  QuizQuestion,
} from "@models/model";
import { infoEN } from "./info-en";

export const locales = ["en", "de"];

export const categories: Category[] = [
  {
    localeId: 1,
    name: "Customs",
    description:
      "Information on customs regulations, duties, and importing goods into Switzerland.",
  },
  {
    localeId: 1,
    name: "Documents and register extracts",
    description:
      "Guidance on obtaining official documents like birth certificates and residence confirmations.",
  },
  {
    localeId: 1,
    name: "Family and partnership",
    description:
      "Support and information on marriage, registered partnerships, and family life.",
  },
  {
    localeId: 1,
    name: "Foreign nationals in Switzerland",
    description:
      "Key information for immigrants, including residence permits and integration support.",
  },
  {
    localeId: 1,
    name: "Health",
    description:
      "Resources on healthcare providers, insurance, and staying healthy in Switzerland.",
  },
  {
    localeId: 1,
    name: "Housing",
    description:
      "Everything you need to know about finding, renting, or buying a home.",
  },
  {
    localeId: 1,
    name: "Insurance",
    description:
      "Overview of mandatory and optional insurances, from health to liability.",
  },
  {
    localeId: 1,
    name: "Political system",
    description:
      "Understand how Swiss democracy works, including federalism and citizen participation.",
  },
  {
    localeId: 1,
    name: "Retirement",
    description:
      "Details on pensions, retirement planning, and senior services.",
  },
  {
    localeId: 1,
    name: "Safety and justice",
    description: "Information on public safety, police, and legal rights.",
  },
  {
    localeId: 1,
    name: "School and education",
    description:
      "Educational pathways from kindergarten to university and adult learning.",
  },
  {
    localeId: 1,
    name: "Taxes and finances",
    description: "Help with taxes, financial planning, and public fees.",
  },
  {
    localeId: 1,
    name: "Travel and emigrate",
    description:
      "Advice on traveling abroad or relocating from or to Switzerland.",
  },
  {
    localeId: 1,
    name: "Vehicles and traffic",
    description: "Rules for driving, vehicle registration, and road safety.",
  },
  {
    localeId: 1,
    name: "Votes and elections",
    description:
      "Get involved in democratic processes through voting and elections.",
  },
  {
    localeId: 1,
    name: "Work",
    description:
      "Job search, labor rights, and employment regulations in Switzerland.",
  },
];





export const checklists: CheckList[] = [
  {
    localeId: 1,
    categoryId: 1,
    title: "checklist 1",
  },
  {
    localeId: 2,
    categoryId: 3,
    title: "Checkliste 1",
  },
];

export const checklistItems: CheckListItem[] = [
  { localeId: 1, checklistId: 1, text: "todo 1" },
  { localeId: 1, checklistId: 1, text: "todo 2" },
  { localeId: 1, checklistId: 1, text: "todo 2" },
  { localeId: 2, checklistId: 2, text: "Schritt 1" },
  { localeId: 2, checklistId: 2, text: "Schritt 2" },
  { localeId: 2, checklistId: 2, text: "Schritt 3" },
];

export const quizzes: Quiz[] = [
  { localeId: 1, categoryId: 1, title: "Quiz 1" },
  { localeId: 1, categoryId: 1, title: "Quiz 2" },
  { localeId: 2, categoryId: 3, title: "Wissenstest 1" },
  { localeId: 2, categoryId: 3, title: "Wissenstest 2" },
];

export const quizQuestions: QuizQuestion[] = [
  { localeId: 1, quizId: 1, question: "question 1" },
  { localeId: 1, quizId: 1, question: "question 2" },
  { localeId: 1, quizId: 1, question: "question 3" },
  { localeId: 2, quizId: 2, question: "Frage 1" },
  { localeId: 2, quizId: 2, question: "Frage 2" },
];

export const quizAnswers: QuizAnswer[] = [
  { localeId: 1, quizQuestionId: 1, answer: "answer A", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 1, answer: "answer B", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 1, answer: "answer C", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 1, answer: "answer D", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 2, answer: "answer A", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 2, answer: "answer B", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 2, answer: "answer C", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 2, answer: "answer D", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 3, answer: "answer A", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 3, answer: "answer B", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 3, answer: "answer C", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 3, answer: "answer D", isCorrect: 0 },
];

export const images: Image[] = [
  { relatedTable: "information", relatedId: 1, url: "/src/assets/foo.png" },
  { relatedTable: "information", relatedId: 2, url: "/src/assets/bar.png" },
];


export const informations: Information[] = [
  ...infoEN
];