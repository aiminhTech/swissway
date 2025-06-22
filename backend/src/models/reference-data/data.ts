import { Category, type CheckList, type CheckListItem, type Information } from "@models/model";
import { infoEN } from "./info-en";
import { checklistItemsEN, checklistsEN } from "./checklist-en";
import { infoDE } from "./info-de";
import { makeCategory } from "@/utils/reference-data-utils";

export const locales = ["en", "de"];

// Category
export const categoriesEN: Category[] = [
  makeCategory(1, "Customs", "Information on customs regulations, duties, and importing goods into Switzerland."),
  makeCategory(1, "Documents and register extracts", "Guidance on obtaining official documents like birth certificates and residence confirmations."),
  makeCategory(1, "Family and partnership", "Support and information on marriage, registered partnerships, and family life."),
  makeCategory(1, "Foreign nationals in Switzerland", "Key information for immigrants, including residence permits and integration support."),
  makeCategory(1, "Health", "Resources on healthcare providers, insurance, and staying healthy in Switzerland."),
  makeCategory(1, "Housing", "Everything you need to know about finding, renting, or buying a home."),
  makeCategory(1, "Insurance", "Overview of mandatory and optional insurances, from health to liability."),
  makeCategory(1, "Political system", "Understand how Swiss democracy works, including federalism and citizen participation."),
  makeCategory(1, "Retirement", "Details on pensions, retirement planning, and senior services."),
  makeCategory(1, "Safety and justice", "Information on public safety, police, and legal rights."),
  makeCategory(1, "School and education", "Educational pathways from kindergarten to university and adult learning."),
  makeCategory(1, "Taxes and finances", "Help with taxes, financial planning, and public fees."),
  makeCategory(1, "Travel and emigrate", "Advice on traveling abroad or relocating from or to Switzerland."),
  makeCategory(1, "Vehicles and traffic", "Rules for driving, vehicle registration, and road safety."),
  makeCategory(1, "Votes and elections", "Get involved in democratic processes through voting and elections."),
  makeCategory(1, "Work", "Job search, labor rights, and employment regulations in Switzerland."),
];

export const categoriesDE: Category[] = [
  makeCategory(2, "Zoll", "Informationen zu Zollvorschriften, Abgaben und der Einfuhr von Waren in die Schweiz."),
  makeCategory(2, "Arbeit", "Informationen zu arbeitsrechtlichen Regelungen, Beschäftigungsmöglichkeiten und Arbeitsgenehmigungen in der Schweiz."),
];

export const categories = [...categoriesEN, ...categoriesDE];

// Checklist
export const checklists: CheckList[] = [...checklistsEN];

export const checklistItems: CheckListItem[] = [...checklistItemsEN];

// Information
export const informations: Information[] = [...infoEN, ...infoDE];
