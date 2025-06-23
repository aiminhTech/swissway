import { Category, type CheckList, type CheckListItem, type Information } from "@models/model";
import { infoEN } from "./info-en";
import { checklistItemsEN, checklistsEN } from "./checklist-en";
import { infoDE } from "./info-de";
import { makeCategory } from "@/utils/reference-data-utils";
import { checklistItemsDE, checklistsDE } from "./checklist-de";
import { quizAnswersEN, quizQuestionsEN, quizzesEN } from "./quiz-en";
import { quizAnswersDE, quizQuestionsDE, quizzesDE } from "./quiz-de";

export const locales = ["en", "de"];

// Category
export const categoriesEN: Category[] = [
  makeCategory(1, "Customs", "Information on customs regulations, duties, and importing goods into Switzerland."),
  makeCategory(1, "Documents and register extracts", "Guidance on obtaining official documents like birth certificates and residence confirmations."),
  makeCategory(1, "Family and partnership", "Support and information on marriage, registered partnerships, and family life."),
  makeCategory(1, "Foreign nationals in Switzerland", "Key information for immigrants, including residence permits and integration support."),
  makeCategory(1, "Health", "Resources on healthcare providers, insurance, and staying healthy in Switzerland."),
  makeCategory(1, "Work", "Job search, labor rights, and employment regulations in Switzerland."),
];

export const categoriesDE: Category[] = [
  makeCategory(2, "Zoll", "Informationen zu Zollvorschriften, Abgaben und der Einfuhr von Waren in die Schweiz."),
  makeCategory(2, "Dokumente und Registerauszüge", "Anleitungen zum Erhalten offizieller Dokumente wie Geburtsurkunden und Wohnsitzbestätigungen."),
  makeCategory(2, "Familie und Partnerschaft", "Unterstützung und Informationen zu Ehe, eingetragenen Partnerschaften und Familienleben."),
  makeCategory(2, "Ausländerinnen und Ausländer in der Schweiz", "Wichtige Informationen für Zuwandernde, einschließlich Aufenthaltsbewilligungen und Integrationshilfen."),
  makeCategory(2, "Gesundheit", "Ressourcen zu Gesundheitsdienstleistern, Versicherungen und gesund bleiben in der Schweiz."),
  makeCategory(2, "Arbeit", "Informationen zu arbeitsrechtlichen Regelungen, Beschäftigungsmöglichkeiten und Arbeitsgenehmigungen in der Schweiz."),
];

export const categories = [...categoriesEN, ...categoriesDE];

// Checklist
export const checklists: CheckList[] = [...checklistsEN, ...checklistsDE];

export const checklistItems: CheckListItem[] = [...checklistItemsEN, ...checklistItemsDE];

// Information
export const informations: Information[] = [...infoEN, ...infoDE];

export const quizzes = [...quizzesEN, ...quizzesDE];
export const quizQuestions = [...quizQuestionsEN, ...quizQuestionsDE];
export const quizAnswers = [...quizAnswersEN, ...quizAnswersDE];
