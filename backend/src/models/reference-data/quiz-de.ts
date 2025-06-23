import { makeQuiz, makeQuizAnswer, makeQuizQuestion } from "@/utils/reference-data-utils";
import type { Quiz, QuizAnswer, QuizQuestion } from "../model";

// Zoll
// Quiz 26 - 30
const quizZoll: Quiz[] = [
  makeQuiz(2, 7, "Zoll-Grundlagen"),
  makeQuiz(2, 7, "Umzug in die Schweiz"),
  makeQuiz(2, 7, "Bestellungen aus dem Ausland"),
  makeQuiz(2, 7, "Einkaufstourismus"),
  makeQuiz(2, 7, "Besondere Situationen"),
];

// Question 197
const quizQuestionZoll: QuizQuestion[] = [
  //Customs Basics (Quiz 26)
  makeQuizQuestion(2, 26, "Wie hoch ist der Freibetrag für persönliche Einfuhren in die Schweiz?"),
  makeQuizQuestion(2, 26, "Welche der folgenden Waren müssen bei Überschreitung deklariert werden?"),
  makeQuizQuestion(2, 26, "Was passiert, wenn Sie Waren nicht deklarieren?"),
  makeQuizQuestion(2, 26, "Welche Waren sind unabhängig vom Wert zollfrei?"),
  makeQuizQuestion(2, 26, "Wie oft kann man den Freibetrag nutzen?"),
  makeQuizQuestion(2, 26, "Haben Kinder Anspruch auf die gleichen Freibeträge?"),
  makeQuizQuestion(2, 26, "Gelten die Freibeträge pro Person oder pro Familie?"),
  makeQuizQuestion(2, 26, "Was sollten Sie tun, wenn Sie unsicher sind, ob etwas deklariert werden muss?"),

  // Moving to Switzerland (Quiz 27)
  makeQuizQuestion(2, 27, "Können Haustiere beim Umzug zollfrei eingeführt werden?"),
  makeQuizQuestion(2, 27, "Welche Gegenstände sind von der zollfreien Umzugseinfuhr ausgeschlossen?"),
  makeQuizQuestion(2, 27, "Ist eine Aufenthaltsbewilligung für die zollfreie Umzugseinfuhr erforderlich?"),
  makeQuizQuestion(2, 27, "Wie müssen Waren für die zollfreie Umzugseinfuhr transportiert werden?"),
  makeQuizQuestion(2, 27, "Wie lange müssen Sie Ihre persönlichen Gegenstände genutzt haben, bevor Sie sie zollfrei einführen können?"),
  makeQuizQuestion(2, 27, "Welches Dokument wird beim Umzug NICHT benötigt?"),
  makeQuizQuestion(2, 27, "Bis wann müssen Waren nach dem Umzug zollfrei eingeführt werden?"),

  // Ordering Goods from Abroad (Quiz 28)
  makeQuizQuestion(2, 28, "Fallen Zollgebühren für Geschenke an, die per Post verschickt werden?"),
  makeQuizQuestion(2, 28, "Werden Versandkosten bei der Berechnung der Mehrwertsteuer mitgerechnet?"),
  makeQuizQuestion(2, 28, "Kann man gegen eine Zollgebühr Einspruch erheben?"),
  makeQuizQuestion(2, 28, "Wo findet man die Zolltarife für bestimmte Waren?"),
  makeQuizQuestion(2, 28, "Werden gebrauchte Waren beim Zoll anders behandelt?"),
  makeQuizQuestion(2, 28, "Wie hoch ist der Mehrwertsteuer-Freibetrag für Waren mit 8,1%?"),
  makeQuizQuestion(2, 28, "Wer bezahlt normalerweise die Zollgebühren bei Online-Käufen?"),

  // Shopping Tourism (Quiz 29)
  makeQuizQuestion(2, 29, "Kann man die ausländische Mehrwertsteuer beim Einkaufen im Ausland zurückfordern?"),
  makeQuizQuestion(2, 29, "Ist es erlaubt, Einkäufe aufzuteilen, um unter den Grenzen zu bleiben?"),
  makeQuizQuestion(2, 29, "Beeinflusst eine Gruppenreise die Einfuhrgrenzen?"),
  makeQuizQuestion(2, 29, "Gibt es spezielle Einschränkungen für Lebensmittel?"),
  makeQuizQuestion(2, 29, "Welche Dokumente helfen bei einer Kontrolle?"),
  makeQuizQuestion(2, 29, "Wie viel Fleisch kann man pro Person und Tag zollfrei einführen?"),
  makeQuizQuestion(2, 29, "Welche App kann genutzt werden, um Waren vor der Einreise in die Schweiz zu deklarieren?"),

  // Special Situations (Quiz 30)
  makeQuizQuestion(2, 30, "Kann man Medikamente für den persönlichen Gebrauch einführen?"),
  makeQuizQuestion(2, 30, "Welche Regeln gelten für vorübergehende Einfuhren wie Veranstaltungsequipment?"),
  makeQuizQuestion(2, 30, "Werden diplomatische Waren speziell vom Zoll behandelt?"),
  makeQuizQuestion(2, 30, "Gibt es Ausnahmen für humanitäre Hilfslieferungen?"),
  makeQuizQuestion(2, 30, "Was wird für die Einfuhr von Kulturgütern benötigt?"),
  makeQuizQuestion(2, 30, "Welche Regel gilt für geliehene Fahrzeuge?"),
  makeQuizQuestion(2, 30, "Müssen Waffen deklariert werden?"),
];

// Answer 1 - 143
const quizAnswerZoll: QuizAnswer[] = [
  // Question 197: Duty-free value threshold for personal imports
  makeQuizAnswer(2, 197, "CHF 100", 0),
  makeQuizAnswer(2, 197, "CHF 150", 1),
  makeQuizAnswer(2, 197, "CHF 200", 0),
  makeQuizAnswer(2, 197, "CHF 300", 0),

  // Question 198: Items requiring declaration if exceeded
  makeQuizAnswer(2, 198, "Books", 0),
  makeQuizAnswer(2, 198, "Meat and alcohol", 1),
  makeQuizAnswer(2, 198, "Clothing", 0),
  makeQuizAnswer(2, 198, "Electronics", 0),

  // Question 199: Consequences of failing to declare goods
  makeQuizAnswer(2, 199, "You are warned", 0),
  makeQuizAnswer(2, 199, "You may receive a fine", 0),
  makeQuizAnswer(2, 199, "Your items could be seized", 1),
  makeQuizAnswer(2, 199, "Nothing happens", 0),

  // Question 200: Items exempt from duties
  makeQuizAnswer(2, 200, "Personal medications", 1),
  makeQuizAnswer(2, 200, "Electronics", 0),
  makeQuizAnswer(2, 200, "Alcohol", 0),
  makeQuizAnswer(2, 200, "Tobacco", 0),

  // Question 201: Frequency of duty-free threshold
  makeQuizAnswer(2, 201, "Once per day", 1),
  makeQuizAnswer(2, 201, "Once per week", 0),
  makeQuizAnswer(2, 201, "Once per month", 0),
  makeQuizAnswer(2, 201, "Unlimited", 0),

  // Question 202: Duty-free allowances for children
  makeQuizAnswer(2, 202, "Yes, same as adults", 1),
  makeQuizAnswer(2, 202, "No, children have no allowance", 0),
  makeQuizAnswer(2, 202, "Half of adult allowance", 0),
  makeQuizAnswer(2, 202, "Only for specific items", 0),

  // Question 203: Duty-free limits per person or family
  makeQuizAnswer(2, 203, "Per person", 1),
  makeQuizAnswer(2, 203, "Per family", 0),
  makeQuizAnswer(2, 203, "Per household", 0),
  makeQuizAnswer(2, 203, "Per trip", 0),

  // Question 204: What to do if unsure about declaring
  makeQuizAnswer(2, 204, "Declare it", 1),
  makeQuizAnswer(2, 204, "Ignore it", 0),
  makeQuizAnswer(2, 204, "Ask a friend", 0),
  makeQuizAnswer(2, 204, "Hide it", 0),

  // Question 205: Importing pets duty-free
  makeQuizAnswer(2, 205, "Yes, with conditions", 1),
  makeQuizAnswer(2, 205, "No, always dutiable", 0),
  makeQuizAnswer(2, 205, "Only for dogs", 0),
  makeQuizAnswer(2, 205, "Only for cats", 0),

  // Question 206: Items excluded from duty-free relocation
  makeQuizAnswer(2, 206, "New furniture", 1),
  makeQuizAnswer(2, 206, "Used clothing", 0),
  makeQuizAnswer(2, 206, "Personal books", 0),
  makeQuizAnswer(2, 206, "Kitchenware", 0),

  // Question 207: Residence permit for relocation import
  makeQuizAnswer(2, 207, "Not always required", 1),
  makeQuizAnswer(2, 207, "Always required", 0),
  makeQuizAnswer(2, 207, "Only for EU citizens", 0),
  makeQuizAnswer(2, 207, "Only for non-EU citizens", 0),

  // Question 208: Transport method for duty-free relocation
  makeQuizAnswer(2, 208, "By any means", 1),
  makeQuizAnswer(2, 208, "Only by sea", 0),
  makeQuizAnswer(2, 208, "Only by air", 0),
  makeQuizAnswer(2, 208, "Only by road", 0),

  // Question 209: Usage duration for duty-free belongings
  makeQuizAnswer(2, 209, "6 months", 1),
  makeQuizAnswer(2, 209, "1 month", 0),
  makeQuizAnswer(2, 209, "1 year", 0),
  makeQuizAnswer(2, 209, "No requirement", 0),

  // Question 210: Document NOT required when moving
  makeQuizAnswer(2, 210, "Bank statement", 1),
  makeQuizAnswer(2, 210, "List of imported goods", 0),
  makeQuizAnswer(2, 210, "Residence permit", 0),
  makeQuizAnswer(2, 210, "Moving contract", 0),

  // Question 211: Deadline for importing goods duty-free
  makeQuizAnswer(2, 211, "1 year", 1),
  makeQuizAnswer(2, 211, "6 months", 0),
  makeQuizAnswer(2, 211, "2 years", 0),
  makeQuizAnswer(2, 211, "No deadline", 0),

  // Question 212: Customs charges for gifts by mail
  makeQuizAnswer(2, 212, "Yes, above CHF 100", 1),
  makeQuizAnswer(2, 212, "No, gifts are exempt", 0),
  makeQuizAnswer(2, 212, "Only for non-EU senders", 0),
  makeQuizAnswer(2, 212, "Only for commercial gifts", 0),

  // Frage 213 (entspricht 17): Versandkosten in der MwSt.-Berechnung
  makeQuizAnswer(2, 213, "Ja", 1),
  makeQuizAnswer(2, 213, "Nur für Expressversand", 0),
  makeQuizAnswer(2, 213, "Nur für EU-Lieferungen", 0),

  // Frage 214 (entspricht 18): Einspruch gegen eine Zollgebühr
  makeQuizAnswer(2, 214, "Ja, mit Einsprache", 1),
  makeQuizAnswer(2, 214, "Nein, niemals", 0),
  makeQuizAnswer(2, 214, "Nur für Unternehmen", 0),
  makeQuizAnswer(2, 214, "Nur für Einwohner", 0),

  // Frage 215 (entspricht 19): Wo findet man Zolltarife
  makeQuizAnswer(2, 215, "Website der Schweizer Zollverwaltung", 1),
  makeQuizAnswer(2, 215, "Lokale Postfiliale", 0),
  makeQuizAnswer(2, 215, "Reisebüro", 0),
  makeQuizAnswer(2, 215, "Website des Händlers", 0),

  // Frage 216 (entspricht 20): Behandlung von Gebrauchtwaren
  makeQuizAnswer(2, 216, "Wie Neuwaren", 1),
  makeQuizAnswer(2, 216, "Immer befreit", 0),
  makeQuizAnswer(2, 216, "Niedrigerer MwSt.-Satz", 0),
  makeQuizAnswer(2, 216, "Keine Deklaration nötig", 0),

  // Frage 217 (entspricht 21): MwSt.-Freigrenze für 8.1%-Waren
  makeQuizAnswer(2, 217, "CHF 62", 1),
  makeQuizAnswer(2, 217, "CHF 100", 0),
  makeQuizAnswer(2, 217, "CHF 150", 0),
  makeQuizAnswer(2, 217, "CHF 200", 0),

  // Frage 218 (entspricht 22): Wer bezahlt Zollabgaben bei Online-Käufen
  makeQuizAnswer(2, 218, "Empfänger", 1),
  makeQuizAnswer(2, 218, "Absender", 0),
  makeQuizAnswer(2, 218, "Transportunternehmen", 0),
  makeQuizAnswer(2, 218, "Schweizer Staat", 0),

  // Frage 219 (entspricht 23): Rückforderung ausländischer MwSt.
  makeQuizAnswer(2, 219, "Ja, mit Beleg", 1),
  makeQuizAnswer(2, 219, "Nein, niemals", 0),
  makeQuizAnswer(2, 219, "Nur in der EU", 0),
  makeQuizAnswer(2, 219, "Nur für Einwohner", 0),

  // Frage 220 (entspricht 24): Aufteilung von Einkäufen zur Einhaltung von Freigrenzen
  makeQuizAnswer(2, 220, "Nicht erlaubt", 1),
  makeQuizAnswer(2, 220, "Erlaubt", 0),
  makeQuizAnswer(2, 220, "Nur für Familien", 0),
  makeQuizAnswer(2, 220, "Nur für Gruppen", 0),

  // Frage 221 (entspricht 25): Gruppenreisen und Einfuhrlimits
  makeQuizAnswer(2, 221, "Nein, individuelle Limits", 1),
  makeQuizAnswer(2, 221, "Ja, gemeinsame Limits", 0),
  makeQuizAnswer(2, 221, "Nur für Familien", 0),
  makeQuizAnswer(2, 221, "Nur für Gruppenreisen", 0),

  // Frage 222 (entspricht 26): Besondere Beschränkungen für Lebensmittel
  makeQuizAnswer(2, 222, "Ja, Mengenbeschränkungen", 1),
  makeQuizAnswer(2, 222, "Keine Beschränkungen", 0),
  makeQuizAnswer(2, 222, "Nur für Fleisch", 0),
  makeQuizAnswer(2, 222, "Nur für Milchprodukte", 0),

  // Frage 223 (entspricht 27): Dokumente, die bei Kontrolle helfen
  makeQuizAnswer(2, 223, "Quittungen", 1),
  makeQuizAnswer(2, 223, "Reisepass", 0),
  makeQuizAnswer(2, 223, "Reiseplan", 0),
  makeQuizAnswer(2, 223, "Hotelbuchung", 0),

  // Frage 224 (entspricht 28): Fleisch-Einfuhrgrenze pro Person pro Tag
  makeQuizAnswer(2, 224, "1 kg", 1),
  makeQuizAnswer(2, 224, "0.5 kg", 0),
  makeQuizAnswer(2, 224, "2 kg", 0),
  makeQuizAnswer(2, 224, "Unbegrenzt", 0),

  // Frage 225 (entspricht 29): App zum Verzollen von Waren
  makeQuizAnswer(2, 225, "QuickZoll", 1),
  makeQuizAnswer(2, 225, "FastEntry", 0),
  makeQuizAnswer(2, 225, "EasyCross", 0),
  makeQuizAnswer(2, 225, "QuickScan", 0),

  // Frage 226 (entspricht 30): Medikamenteneinfuhr für den persönlichen Gebrauch
  makeQuizAnswer(2, 226, "Ja, begrenzte Menge", 1),
  makeQuizAnswer(2, 226, "Nein, verboten", 0),
  makeQuizAnswer(2, 226, "Nur mit Rezept", 0),
  makeQuizAnswer(2, 226, "Unbegrenzt", 0),

  // Frage 227 (entspricht 31): Regeln für vorübergehende Einfuhren
  makeQuizAnswer(2, 227, "ATA Carnet", 1),
  makeQuizAnswer(2, 227, "Keine Dokumentation", 0),
  makeQuizAnswer(2, 227, "Nur für EU-Waren", 0),
  makeQuizAnswer(2, 227, "Nur Dauerimport", 0),

  // Frage 228 (entspricht 32): Zollbehandlung diplomatischer Waren
  makeQuizAnswer(2, 228, "Befreit mit Genehmigung", 1),
  makeQuizAnswer(2, 228, "Wie normale Waren", 0),
  makeQuizAnswer(2, 228, "Verboten", 0),
  makeQuizAnswer(2, 228, "Nur für EU-Diplomaten", 0),

  // Frage 229 (entspricht 33): Ausnahmen für humanitäre Hilfe
  makeQuizAnswer(2, 229, "Ja, zollfrei", 1),
  makeQuizAnswer(2, 229, "Nein, Standardzoll", 0),
  makeQuizAnswer(2, 229, "Nur für Lebensmittel", 0),
  makeQuizAnswer(2, 229, "Nur für Medizin", 0),

  // Frage 230 (entspricht 34): Einfuhr von Kulturgütern
  makeQuizAnswer(2, 230, "Ausfuhrbewilligung nötig", 1),
  makeQuizAnswer(2, 230, "Keine Beschränkungen", 0),
  makeQuizAnswer(2, 230, "Nur für Museen", 0),
  makeQuizAnswer(2, 230, "Verboten", 0),

  // Frage 231 (entspricht 35): Regeln für geliehene Fahrzeuge
  makeQuizAnswer(2, 231, "Schriftliche Genehmigung", 1),
  makeQuizAnswer(2, 231, "Keine Sonderregel", 0),
  makeQuizAnswer(2, 231, "Muss registriert sein", 0),
  makeQuizAnswer(2, 231, "Uneingeschränkte Nutzung", 0),

  // Frage 232 (entspricht 36): Waffen anmelden
  makeQuizAnswer(2, 232, "Ja, immer", 1),
  makeQuizAnswer(2, 232, "Nur mit Munition", 0),
  makeQuizAnswer(2, 232, "Nur in Mengen", 0),
  makeQuizAnswer(2, 232, "Nein", 0),
];

export const quizzesDE: Quiz[] = [...quizZoll];

export const quizQuestionsDE: QuizQuestion[] = [...quizQuestionZoll];

export const quizAnswersDE: QuizAnswer[] = [...quizAnswerZoll];
