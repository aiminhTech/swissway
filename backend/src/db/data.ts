import type { Category, CheckList, CheckListItem, Image, Information, Language, Quiz, QuizAnswer, QuizQuestion } from "./model";

export const locales = ["en", "de"]

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
		categoryId: 1, title: "Contract, reference, probation period", content: [
			{
				topic: "Employment contract and collective agreements",
				description: "The employee and the employer must sign a contract specifying the terms of employment. In some sectors, specific rules predefined by national or regional collective agreements apply.",
				infos: [{
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
					`
				},
				{
					subtitle: "Collective employment agreements",
					text: `
					A collective employment agreement is an agreement concluded between employers’ associations and workers’ associations / unions. The two parties define the minimum conditions (e.g. minimum wage) to be observed. In Switzerland, there are many collective employment agreements, including collective employment agreements for hairdressers, the construction industry, private security and the bakery-pastry sector.

					These collective employment agreements are generally binding to a specific sector throughout Switzerland. There also company-specific collective employment agreements (e.g. Coop or Migros collective employment agreements) and collective employment agreements specific to a certain region, with conditions that only apply in a specific company or region.
					`
				}
				]
			},
		]
	},
];

export const checklists: CheckList[] = [
	{
		categoryId: 1,
		title: "checklist 1",
	},
	{
		categoryId: 3,
		title: "Checkliste 1",
	}
]

export const checklistItems: CheckListItem[] = [
	{
		checklistId: 1,
		text: "todo 1",
	},
	{
		checklistId: 1,
		text: "todo 2",
	},
	{
		checklistId: 1,
		text: "todo 2",
	},
	{
		checklistId: 2,
		text: "Schritt 1",
	}, {
		checklistId: 2,
		text: "Schritt 2",
	}, {
		checklistId: 2,
		text: "Schritt 3",
	},
]

export const quizzes: Quiz[] = [
	{
		categoryId: 1,
		title: "Quiz 1"
	},
	{
		categoryId: 1,
		title: "Quiz 2"
	},
	{
		categoryId: 3,
		title: "Wissenstest 1" 
	},
	{
		categoryId: 3,
		title: "Wissenstest 2"
	}
]

export const quizQuestions: QuizQuestion[] = [
	{
		quizId: 1,
		question: "question 1"
	},
	{
		quizId: 1,
		question: "question 2"
	},
	{
		quizId: 2,
		question: "Frage 1"
	},
	{
		quizId: 2,
		question: "Frage 2"
	},
]

export const quizAnswers: QuizAnswer[] = [
	{
		quizQuestionId: 1,
		answer: "answer A",
		isCorrect: 0
	},
	{
		quizQuestionId: 1,
		answer: "answer B",
		isCorrect: 0
	},
	{
		quizQuestionId: 1,
		answer: "answer C",
		isCorrect: 0
	},
	{
		quizQuestionId: 1,
		answer: "answer D",
		isCorrect: 1
	}
]

export const images : Image[] = [
	{
		relatedTable: "information",
		relatedId: 1,
		url: "/src/assets/foo.png"
	},
	{
		relatedTable: "information",
		relatedId: 2,
		url: "/src/assets/bar.png"
	}
]