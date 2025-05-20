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

export const locales = ["en", "de"];

export const categories: Category[] = [
  // english
  { localeId: 1, name: "Customs", description: "foo", },
  { localeId: 1, name: "Documents and register extracts", description: "foo", },
  { localeId: 1, name: "Family and partnership", description: "foo", },
  { localeId: 1, name: "Foreign nationals in Switzerland", description: "foo", },
  { localeId: 1, name: "Health", description: "foo" },
  { localeId: 1, name: "Housing", description: "foo", },
  { localeId: 1, name: "Insurance", description: "foo", },
  { localeId: 1, name: "Political system", description: "foo", },
  { localeId: 1, name: "Retirement", description: "foo", },
  { localeId: 1, name: "Safety and justice", description: "foo", },
  { localeId: 1, name: "School and education", description: "foo", },
  { localeId: 1, name: "Taxes and finances", description: "foo", },
  { localeId: 1, name: "Travel and emigrate", description: "foo", },
  { localeId: 1, name: "Vehicles and traffic", description: "foo", },
  { localeId: 1, name: "Votes and elections", description: "foo", },
  { localeId: 1, name: "Work", description: "foo" },
  // german
  { localeId: 2, name: "Abstimmungen und Wahlen", description: "foo" },
  { localeId: 2, name: "Arbeit", description: "foo" },
  { localeId: 2, name: "Ausländer in der Schweiz", description: "foo" },
  { localeId: 2, name: "Ausweise und Dokumente", description: "foo" },
  { localeId: 2, name: "Fahrzeuge und Verkehr", description: "foo" },
  { localeId: 2, name: "Familie und Partnerschaft", description: "foo" },
  { localeId: 2, name: "Gesundheit", description: "foo" },
  { localeId: 2, name: "Pensionierung", description: "foo" },
  { localeId: 2, name: "Politisches System", description: "foo" },
  { localeId: 2, name: "Reisen und Auswandern", description: "foo" },
  { localeId: 2, name: "Schule und Bildung", description: "foo" },
  { localeId: 2, name: "Sicherheit und Recht", description: "foo" },
  { localeId: 2, name: "Steuern und Finanzen", description: "foo" },
  { localeId: 2, name: "Versicherungen", description: "foo" },
  { localeId: 2, name: "Wohnen", description: "foo" },
  { localeId: 2, name: "Zoll", description: "foo" },
];

const informationWorkAbscenceDueToIllnes: Information[] = [
  {
    localeId: 1,
    categoryId: 16,
    title: "Family and work/Absences from work due to illness or accident",
    description:
      "If you cannot work because you are ill or have had an accident, you will still be paid your salary for a certain time. In addition, you cannot be dismissed.",
    content: [
      {
        infos: [
          {
            title: "If you are ill",
            content: [
              {
                subtitle: "What should you do?",
                text: "If you are ill and are unable to go to work, you need to let your employer know as soon as possible. Generally, you need to obtain a medical certificate after three days off work. Ask your employer for more specific information about what you need to do. If you are only able to work part-time because of illness or pregnancy, your doctor needs to indicate on the medical certificate the maximum daily/weekly hours you can work.",
              },
              {
                subtitle: "Illness and salary",
                text: "If you are off work because you are ill, your salary will continue to be paid to you in one of two ways: Your employer has sickness benefit insurance for employees. Most employers are insured. If your employer is insured, you will continue to receive your salary for 720 or 730 days of illness over 900 days, depending on the type of insurance. Find out more from your employer. Please note: if you are on sick leave, you are not supposed to work. If you do work, the insurance company can file a claim against you and demand you reimburse the benefits you received. Your employer does not have sickness benefit insurance for employees. In this case, your employer must continue to pay your salary for a certain period: this amounts to three weeks in the first year of employment, and increases every additional year to a maximum of four months. The exact period that the salary is paid varies from region to region.",
              },
              {
                subtitle: "Sickness and dismissal",
                text: "Your employer cannot simply dismiss you while you are on sick leave. If you are absent from work because of illness for a longer time, you are protected from dismissal for a limited period: 30 days in the first year of work; 90 days from the 2nd to the 5th year of work; and 180 days from the 6th year of work. Please note: Your employer has the right to dismiss you during your trial period even if you are on sick leave. Employees have the right to terminate their contract during sick leave. If you fall ill after receiving notice, the notice period is postponed for the duration of your sick leave, and will resume once you are able to return to work.",
              },
            ],
          },
          {
            title: "If you have an accident",
            content: [
              {
                subtitle: "What should you do?",
                text: "If you have an accident – regardless of whether it occurs during your working hours or your free time – you need to let your employer know as soon as possible. Your employer then needs to inform his or her insurance company. The insurance company will send you a form so that you and your doctor can provide information about the accident and your state of health.",
              },
              {
                subtitle: "Accidents and salary",
                text: "In Switzerland, employers are obliged to insure their employees against the consequences of an accident. From the third day after the accident, you receive a daily allowance of 80 per cent of your salary. You receive this allowance regardless of whether the accident occurred at work (occupational accident) or during your time off work (non-occupational accident). The only exception arises if you are an employee working less than eight hours a week; in this case, only occupational accidents and accidents that occur on your way to work are covered. The allowance is paid for a fixed period.  Ask your employer about the conditions that apply in your case. Please note: if your doctor decides that you are unable to work after an accident, you are not supposed to work. If you do work, the insurance company can file a claim against you and demand you reimburse the benefits you received.",
              },
              {
                subtitle: "Accidents and dismissal",
                text: "Your employer cannot simply dismiss you while you are on sick leave recovering from an accident. During this time, you are protected from dismissal for a limited period: 30 days in the first year of work; 90 days from the 2nd to the 5th year of work; and 180 days from the 6th year of work. Please note: Your employer has the right to dismiss you during your trial period even if you are on sick leave recovering from an accident. Employees have the right to terminate their contract during the period of convalescence after an accident. If you have an accident after receiving notice, the notice period is postponed for the duration of your sick leave, and will resume once you are able to return to work.",
              },
            ],
          },
          {
            title: "Further information and contacts",
            content: [
              {
                text: "On its website, the State Secretariat for Economic Affairs (SECO) provide further information on the duration and conditions of the protection period in the event of a termination and on the incapacity for work (webpages available in German, French and Italian). More information for self-employed persons is available on the page about self-employment. This page provides detailed information about protection for pregnant women and mothers at work. This page provides details on disability insurance.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 1,
    categoryId: 16,
    title: "Family and work|Arranging childcare",
    description: "What are your rights if your child is ill? And what can you do if no one can look after your child while you are working, or if you have to be away from home on short notice?"
    content: []
  },
  {
    localeId: 1,
    categoryId: 16,
    title: "Family and work|Family allowance",
    description: "You are entitled to receive a monthly allowance for each child from their birth until they reach the age of 16. If your child is in education after 16 or is unable to work for health reasons, you may receive additional support."
    content: []
  },
  {
    localeId: 1,
    categoryId: 16,
    title: "Family and work|Pregnancy, maternity leave and work",
    description: "During your pregnancy, your employer must take special measures to protect you and your baby. You also have special rights during maternity leave and breastfeeding."
    content: []
  },
  {
    localeId: 1,
    categoryId: 16,
    title: "Family and work|Maternity leave",
    description: "When a child is born, the mother who has given birth is entitled to 14 weeks' paid leave."
    content: []
  },
  {
    localeId: 1,
    categoryId: 16,
    title: "Family and work|Co-parental leave /  paternity leave",
    description: "When a child is born, the baby’s father – or the wife of the biological mother – is entitled to two weeks’ paid leave."
    content: []
  },
  {
    localeId: 1,
    categoryId: 16,
    title: "Family and work|Co-parental leave /  paternity leave",
    description: "Under certain conditions, couples who adopt a child under the age of 4 may share two weeks of paid leave."
    content: []
  },
];

export const informations: Information[] = [
  ...informationWorkAbscenceDueToIllnes,
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
  { localeId: 2, quizId: 2, question: "Frage 1" },
  { localeId: 2, quizId: 2, question: "Frage 2" },
];

export const quizAnswers: QuizAnswer[] = [
  { localeId: 1, quizQuestionId: 1, answer: "answer A", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 1, answer: "answer B", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 1, answer: "answer C", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 1, answer: "answer D", isCorrect: 1 },
];

export const images: Image[] = [
  { relatedTable: "information", relatedId: 1, url: "/src/assets/foo.png" },
  { relatedTable: "information", relatedId: 2, url: "/src/assets/bar.png" },
];
