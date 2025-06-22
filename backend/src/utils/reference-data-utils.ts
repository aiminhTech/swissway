import { Category, CategoryId, CheckList, ChecklistId, CheckListItem, LocaleId, Quiz, QuizAnswer, QuizId, QuizQuestion, QuizQuestionId } from "@/models/model";

export function makeCategory(localeId: number, name: string, description: string) {
  return Category.make({
    localeId: LocaleId.make(localeId),
    name,
    description,
  });
}

export function makeQuiz(localeId: number, categoryId: number, title: string) {
  return Quiz.make({
    localeId: LocaleId.make(localeId),
    categoryId: CategoryId.make(categoryId),
    title,
  });
}

export function makeQuizQuestion(localeId: number, quizId: number, question: string) {
  return QuizQuestion.make({
    localeId: LocaleId.make(localeId),
    quizId: QuizId.make(quizId),
    question,
  });
}

export function makeQuizAnswer(localeId: number, quizQuestionId: number, answer: string, isCorrect: number) {
  return QuizAnswer.make({
    localeId: LocaleId.make(localeId),
    quizQuestionId: QuizQuestionId.make(quizQuestionId),
    answer,
    isCorrect,
  });
}

export function makeChecklist(localeId: number, categoryId: number, title: string) {
  return CheckList.make({
    localeId: LocaleId.make(localeId),
    categoryId: CategoryId.make(categoryId),
    title,
  });
}

export function makeChecklistItem(localeId: number, checklistId: number, text: string) {
  return CheckListItem.make({
    localeId: LocaleId.make(localeId),
    checklistId: ChecklistId.make(checklistId),
    text,
  });
}
