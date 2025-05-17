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
  { localeId: 1, name: "Culture", description: "foo" },
  { localeId: 1, name: "Work", description: "foo" },
  { localeId: 2, name: "Kultur", description: "foo" },
  { localeId: 2, name: "Arbeiten", description: "foo" },
  { localeId: 2, name: "Behördengänge", description: "foo" },
  { localeId: 2, name: "Administrativen", description: "foo" },
];

export const informations: Information[] = [
  {
    categoryId: 1,
    title: "Contract, reference, probation period",
    content: [
      {
        topic: "Employment contract and collective agreements",
        description:
          "The employee and the employer must sign a contract specifying the terms of employment. In some sectors, specific rules predefined by national or regional collective agreements apply.",
        infos: [
          {
            subtitle: "Individual employment contract",
            text: `
					New employees and their employers who hire a new employee need to sign an employment contract. This contract sets out the rights and obligations that apply to both parties in the employment relationship.

					The contract must include:

					- The name of the employee and the name of the employer  
					- The date of commencement of the employment relationship  
					- The employee’s function  
					- The salary and any allowances  
					- The weekly working hours  
					- For fixed-term contracts, the end date

					> Additional special rules must be included, such as a non-compete clause or rules on overtime.
					
				},
				{
					subtitle: "Collective employment agreements",
					text: 
					A collective employment agreement is an agreement concluded between employers’ associations and workers’ associations / unions. The two parties define the minimum conditions (e.g. minimum wage) to be observed. In Switzerland, there are many collective employment agreements, including collective employment agreements for hairdressers, the construction industry, private security and the bakery-pastry sector.

					These collective employment agreements are generally binding to a specific sector throughout Switzerland. There also company-specific collective employment agreements (e.g. Coop or Migros collective employment agreements) and collective employment agreements specific to a certain region, with conditions that only apply in a specific company or region.
					`,
          },
        ],
      },
    ],
  },
  {
    categoryId: 4,
    title: "Vertrag, Bezug, Probezeit",
    content: [
      {
        topic: "Arbeitsvertrag und Gesamtarbeitsverträge",
        description:
          "Der Arbeitnehmer und der Arbeitgeber müssen einen Vertrag unterschreiben, der die Arbeitsbedingungen festlegt. In einigen Branchen gelten spezielle Regeln, die in nationalen oder regionalen Gesamtarbeitsverträgen vordefiniert sind.",
        infos: [
          {
            subtitle: "Individueller Arbeitsvertrag",
            text: `
Neue Mitarbeitende und ihre Arbeitgeber müssen einen Arbeitsvertrag unterschreiben. Dieser Vertrag legt die Rechte und Pflichten beider Parteien im Arbeitsverhältnis fest.

Der Vertrag muss Folgendes enthalten:

- Name des Arbeitnehmers und des Arbeitgebers  
- Beginn des Arbeitsverhältnisses  
- Funktion des Arbeitnehmers  
- Lohn und allfällige Zulagen  
- Wöchentliche Arbeitszeit  
- Bei befristeten Verträgen das Enddatum

> Zusätzliche Sonderregelungen müssen gegebenenfalls enthalten sein, wie z.B. eine Wettbewerbsverbotsklausel oder Regeln zu Überstunden.
            `,
          },
          {
            subtitle: "Gesamtarbeitsverträge",
            text: `
Ein Gesamtarbeitsvertrag ist eine Vereinbarung zwischen Arbeitgeber- und Arbeitnehmerverbänden / Gewerkschaften. Die beiden Parteien definieren die Mindestbedingungen (z.B. Mindestlohn), die einzuhalten sind. In der Schweiz gibt es viele Gesamtarbeitsverträge, u.a. für Coiffeure, die Bauindustrie, privaten Sicherheitsdienst und das Bäckerei-Confiseur-Gewerbe.

Diese Gesamtarbeitsverträge sind in der Regel für eine bestimmte Branche in der ganzen Schweiz verbindlich. Es gibt auch branchenspezifische Gesamtarbeitsverträge (z.B. Coop oder Migros GAV) und regional spezifische Gesamtarbeitsverträge, die nur für bestimmte Unternehmen oder Regionen gelten.
            `,
          },
        ],
      },
    ],
  },

  {
    categoryId: 4,
    title: "Arbeitszeiten und Pausen",
    content: [
      {
        topic: "Arbeitszeitgesetzgebung",
        description:
          "Das Arbeitszeitgesetz regelt die maximale Arbeitszeit und die Mindestpausen, die ein Arbeitnehmer einhalten muss.",
        infos: [
          {
            subtitle: "Maximale Arbeitszeit",
            text: `
In der Schweiz darf die tägliche Arbeitszeit in der Regel 9 Stunden nicht überschreiten. In bestimmten Branchen können abweichende Regeln gelten.

Überstunden sind grundsätzlich zu vermeiden und müssen meist gesondert kompensiert werden.
            `,
          },
          {
            subtitle: "Pausenregelungen",
            text: `
Arbeitnehmende haben Anspruch auf Pausen bei einer Arbeitszeit von mehr als 5.5 Stunden. Die Pausen sind in der Regel mindestens 15 Minuten bei einer Arbeitszeit von 5.5 bis 7 Stunden und mindestens 30 Minuten ab 7 Stunden.

> Pausen gelten nicht als Arbeitszeit und sind entsprechend freizugeben.
            `,
          },
        ],
      },
    ],
  },
];

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
