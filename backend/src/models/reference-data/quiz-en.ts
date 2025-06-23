import { makeQuiz, makeQuizAnswer, makeQuizQuestion } from "@/utils/reference-data-utils";
import type { Quiz, QuizAnswer, QuizQuestion } from "../model";

// Custom
// Quiz 1 - 5
const quizCustom: Quiz[] = [
  makeQuiz(1, 1, "Customs Basics"),
  makeQuiz(1, 1, "Moving to Switzerland"),
  makeQuiz(1, 1, "Ordering Goods from Abroad"),
  makeQuiz(1, 1, "Shopping Tourism"),
  makeQuiz(1, 1, "Special Situations"),
];

// Question 1 - 36
const quizQuestionCustom: QuizQuestion[] = [
  //Customs Basics (Quiz 1)
  makeQuizQuestion(1, 1, "What is the duty-free value threshold for personal imports into Switzerland?"),
  makeQuizQuestion(1, 1, "Which of the following items require declaration if exceeded?"),
  makeQuizQuestion(1, 1, "What happens if you fail to declare goods?"),
  makeQuizQuestion(1, 1, "Which items are exempt from duties regardless of value?"),
  makeQuizQuestion(1, 1, "How often can you benefit from the duty-free threshold?"),
  makeQuizQuestion(1, 1, "Are children eligible for the same duty-free allowances?"),
  makeQuizQuestion(1, 1, "Do duty-free limits apply per person or per family?"),
  makeQuizQuestion(1, 1, "What should you do if you're unsure whether to declare something?"),

  // Moving to Switzerland (Quiz 2)
  makeQuizQuestion(1, 2, "Can you import pets duty-free when relocating?"),
  makeQuizQuestion(1, 2, "What items are excluded from duty-free relocation imports?"),
  makeQuizQuestion(1, 2, "Is a residence permit required for relocation import?"),
  makeQuizQuestion(1, 2, "How should goods be transported for duty-free relocation?"),
  makeQuizQuestion(1, 2, "How long must you have used belongings before importing them duty-free?"),
  makeQuizQuestion(1, 2, "What document is NOT required when moving?"),
  makeQuizQuestion(1, 2, "What is the deadline for importing goods duty-free after relocation?"),

  // Ordering Goods from Abroad (Quiz 3)
  makeQuizQuestion(1, 3, "Do customs charges apply to gifts sent by mail?"),
  makeQuizQuestion(1, 3, "Are shipping costs included when calculating VAT?"),
  makeQuizQuestion(1, 3, "Can you dispute a customs charge?"),
  makeQuizQuestion(1, 3, "Where can you find customs rates for specific goods?"),
  makeQuizQuestion(1, 3, "Are second-hand goods treated differently for customs?"),
  makeQuizQuestion(1, 3, "What is the VAT exemption limit for 8.1% goods?"),
  makeQuizQuestion(1, 3, "Who typically pays customs duties for online purchases?"),

  // Shopping Tourism (Quiz 4)
  makeQuizQuestion(1, 4, "Can you reclaim foreign VAT when shopping abroad?"),
  makeQuizQuestion(1, 4, "Is it allowed to split purchases to stay below limits?"),
  makeQuizQuestion(1, 4, "Does group travel affect import limits?"),
  makeQuizQuestion(1, 4, "Do food items have special restrictions?"),
  makeQuizQuestion(1, 4, "What documents help during inspection?"),
  makeQuizQuestion(1, 4, "How much meat can you import duty-free per person per day?"),
  makeQuizQuestion(1, 4, "What app can be used to declare goods before entering Switzerland?"),

  // Special Situations (Quiz 5)
  makeQuizQuestion(1, 5, "Can you import medication for personal use?"),
  makeQuizQuestion(1, 5, "What rules apply for temporary imports like event equipment?"),
  makeQuizQuestion(1, 5, "Do diplomatic goods have special customs treatment?"),
  makeQuizQuestion(1, 5, "Are there exceptions for humanitarian aid shipments?"),
  makeQuizQuestion(1, 5, "What is required to import cultural artifacts?"),
  makeQuizQuestion(1, 5, "What is the rule regarding loaned vehicles?"),
  makeQuizQuestion(1, 5, "Do you need to declare weapons?"),
];

// Answer 1 - 143
const quizAnswerCustom: QuizAnswer[] = [
  // Question 1: Duty-free value threshold for personal imports
  makeQuizAnswer(1, 1, "CHF 100", 0),
  makeQuizAnswer(1, 1, "CHF 150", 1),
  makeQuizAnswer(1, 1, "CHF 200", 0),
  makeQuizAnswer(1, 1, "CHF 300", 0),

  // Question 2: Items requiring declaration if exceeded
  makeQuizAnswer(1, 2, "Books", 0),
  makeQuizAnswer(1, 2, "Meat and alcohol", 1),
  makeQuizAnswer(1, 2, "Clothing", 0),
  makeQuizAnswer(1, 2, "Electronics", 0),

  // Question 3: Consequences of failing to declare goods
  makeQuizAnswer(1, 3, "You are warned", 0),
  makeQuizAnswer(1, 3, "You may receive a fine", 0),
  makeQuizAnswer(1, 3, "Your items could be seized", 1),
  makeQuizAnswer(1, 3, "Nothing happens", 0),

  // Question 4: Items exempt from duties
  makeQuizAnswer(1, 4, "Personal medications", 1),
  makeQuizAnswer(1, 4, "Electronics", 0),
  makeQuizAnswer(1, 4, "Alcohol", 0),
  makeQuizAnswer(1, 4, "Tobacco", 0),

  // Question 5: Frequency of duty-free threshold
  makeQuizAnswer(1, 5, "Once per day", 1),
  makeQuizAnswer(1, 5, "Once per week", 0),
  makeQuizAnswer(1, 5, "Once per month", 0),
  makeQuizAnswer(1, 5, "Unlimited", 0),

  // Question 6: Duty-free allowances for children
  makeQuizAnswer(1, 6, "Yes, same as adults", 1),
  makeQuizAnswer(1, 6, "No, children have no allowance", 0),
  makeQuizAnswer(1, 6, "Half of adult allowance", 0),
  makeQuizAnswer(1, 6, "Only for specific items", 0),

  // Question 7: Duty-free limits per person or family
  makeQuizAnswer(1, 7, "Per person", 1),
  makeQuizAnswer(1, 7, "Per family", 0),
  makeQuizAnswer(1, 7, "Per household", 0),
  makeQuizAnswer(1, 7, "Per trip", 0),

  // Question 8: What to do if unsure about declaring
  makeQuizAnswer(1, 8, "Declare it", 1),
  makeQuizAnswer(1, 8, "Ignore it", 0),
  makeQuizAnswer(1, 8, "Ask a friend", 0),
  makeQuizAnswer(1, 8, "Hide it", 0),

  // Question 9: Importing pets duty-free
  makeQuizAnswer(1, 9, "Yes, with conditions", 1),
  makeQuizAnswer(1, 9, "No, always dutiable", 0),
  makeQuizAnswer(1, 9, "Only for dogs", 0),
  makeQuizAnswer(1, 9, "Only for cats", 0),

  // Question 10: Items excluded from duty-free relocation
  makeQuizAnswer(1, 10, "New furniture", 1),
  makeQuizAnswer(1, 10, "Used clothing", 0),
  makeQuizAnswer(1, 10, "Personal books", 0),
  makeQuizAnswer(1, 10, "Kitchenware", 0),

  // Question 11: Residence permit for relocation import
  makeQuizAnswer(1, 11, "Not always required", 1),
  makeQuizAnswer(1, 11, "Always required", 0),
  makeQuizAnswer(1, 11, "Only for EU citizens", 0),
  makeQuizAnswer(1, 11, "Only for non-EU citizens", 0),

  // Question 12: Transport method for duty-free relocation
  makeQuizAnswer(1, 12, "By any means", 1),
  makeQuizAnswer(1, 12, "Only by sea", 0),
  makeQuizAnswer(1, 12, "Only by air", 0),
  makeQuizAnswer(1, 12, "Only by road", 0),

  // Question 13: Usage duration for duty-free belongings
  makeQuizAnswer(1, 13, "6 months", 1),
  makeQuizAnswer(1, 13, "1 month", 0),
  makeQuizAnswer(1, 13, "1 year", 0),
  makeQuizAnswer(1, 13, "No requirement", 0),

  // Question 14: Document NOT required when moving
  makeQuizAnswer(1, 14, "Bank statement", 1),
  makeQuizAnswer(1, 14, "List of imported goods", 0),
  makeQuizAnswer(1, 14, "Residence permit", 0),
  makeQuizAnswer(1, 14, "Moving contract", 0),

  // Question 15: Deadline for importing goods duty-free
  makeQuizAnswer(1, 15, "1 year", 1),
  makeQuizAnswer(1, 15, "6 months", 0),
  makeQuizAnswer(1, 15, "2 years", 0),
  makeQuizAnswer(1, 15, "No deadline", 0),

  // Question 16: Customs charges for gifts by mail
  makeQuizAnswer(1, 16, "Yes, above CHF 100", 1),
  makeQuizAnswer(1, 16, "No, gifts are exempt", 0),
  makeQuizAnswer(1, 16, "Only for non-EU senders", 0),
  makeQuizAnswer(1, 16, "Only for commercial gifts", 0),

  // Question 17: Shipping costs in VAT calculation
  makeQuizAnswer(1, 17, "Yes", 1),
  makeQuizAnswer(1, 17, "Only for express shipping", 0),
  makeQuizAnswer(1, 17, "Only for EU shipments", 0),

  // Question 18: Disputing a customs charge
  makeQuizAnswer(1, 18, "Yes, with appeal", 1),
  makeQuizAnswer(1, 18, "No, never", 0),
  makeQuizAnswer(1, 18, "Only for businesses", 0),
  makeQuizAnswer(1, 18, "Only for residents", 0),

  // Question 19: Finding customs rates
  makeQuizAnswer(1, 19, "Swiss Customs website", 1),
  makeQuizAnswer(1, 19, "Local post office", 0),
  makeQuizAnswer(1, 19, "Travel agency", 0),
  makeQuizAnswer(1, 19, "Retailer’s website", 0),

  // Question 20: Second-hand goods treatment
  makeQuizAnswer(1, 20, "Same as new goods", 1),
  makeQuizAnswer(1, 20, "Always exempt", 0),
  makeQuizAnswer(1, 20, "Lower VAT rate", 0),
  makeQuizAnswer(1, 20, "No declaration needed", 0),

  // Question 21: VAT exemption limit for 8.1% goods
  makeQuizAnswer(1, 21, "CHF 62", 1),
  makeQuizAnswer(1, 21, "CHF 100", 0),
  makeQuizAnswer(1, 21, "CHF 150", 0),
  makeQuizAnswer(1, 21, "CHF 200", 0),

  // Question 22: Who pays customs duties for online purchases
  makeQuizAnswer(1, 22, "Recipient", 1),
  makeQuizAnswer(1, 22, "Sender", 0),
  makeQuizAnswer(1, 22, "Carrier", 0),
  makeQuizAnswer(1, 22, "Swiss government", 0),

  // Question 23: Reclaiming foreign VAT
  makeQuizAnswer(1, 23, "Yes, with receipt", 1),
  makeQuizAnswer(1, 23, "No, never", 0),
  makeQuizAnswer(1, 23, "Only in EU", 0),
  makeQuizAnswer(1, 23, "Only for residents", 0),

  // Question 24: Splitting purchases to stay below limits
  makeQuizAnswer(1, 24, "Not allowed", 1),
  makeQuizAnswer(1, 24, "Allowed", 0),
  makeQuizAnswer(1, 24, "Only for families", 0),
  makeQuizAnswer(1, 24, "Only for groups", 0),

  // Question 25: Group travel affecting import limits
  makeQuizAnswer(1, 25, "No, individual limits", 1),
  makeQuizAnswer(1, 25, "Yes, combined limits", 0),
  makeQuizAnswer(1, 25, "Only for families", 0),
  makeQuizAnswer(1, 25, "Only for tours", 0),

  // Question 26: Special restrictions for food items
  makeQuizAnswer(1, 26, "Yes, quantity limits", 1),
  makeQuizAnswer(1, 26, "No restrictions", 0),
  makeQuizAnswer(1, 26, "Only for meat", 0),
  makeQuizAnswer(1, 26, "Only for dairy", 0),

  // Question 27: Documents helping during inspection
  makeQuizAnswer(1, 27, "Receipts", 1),
  makeQuizAnswer(1, 27, "Passport", 0),
  makeQuizAnswer(1, 27, "Travel itinerary", 0),
  makeQuizAnswer(1, 27, "Hotel booking", 0),

  // Question 28: Meat import limit per person per day
  makeQuizAnswer(1, 28, "1 kg", 1),
  makeQuizAnswer(1, 28, "0.5 kg", 0),
  makeQuizAnswer(1, 28, "2 kg", 0),
  makeQuizAnswer(1, 28, "Unlimited", 0),

  // Question 29: App for declaring goods
  makeQuizAnswer(1, 29, "QuickZoll", 1),
  makeQuizAnswer(1, 29, "FastEntry", 0),
  makeQuizAnswer(1, 29, "EasyCross", 0),
  makeQuizAnswer(1, 29, "QuickScan", 0),

  // Question 30: Importing medication for personal use
  makeQuizAnswer(1, 30, "Yes, limited quantity", 1),
  makeQuizAnswer(1, 30, "No, prohibited", 0),
  makeQuizAnswer(1, 30, "Only with prescription", 0),
  makeQuizAnswer(1, 30, "Unlimited", 0),

  // Question 31: Rules for temporary imports
  makeQuizAnswer(1, 31, "ATA Carnet", 1),
  makeQuizAnswer(1, 31, "No documentation", 0),
  makeQuizAnswer(1, 31, "Only for EU goods", 0),
  makeQuizAnswer(1, 31, "Permanent import only", 0),

  // Question 32: Diplomatic goods customs treatment
  makeQuizAnswer(1, 32, "Exempt with approval", 1),
  makeQuizAnswer(1, 32, "Same as regular goods", 0),
  makeQuizAnswer(1, 32, "Prohibited", 0),
  makeQuizAnswer(1, 32, "Only for EU diplomats", 0),

  // Question 33: Exceptions for humanitarian aid
  makeQuizAnswer(1, 33, "Yes, duty-free", 1),
  makeQuizAnswer(1, 33, "No, standard duties", 0),
  makeQuizAnswer(1, 33, "Only for food", 0),
  makeQuizAnswer(1, 33, "Only for medicine", 0),

  // Question 34: Importing cultural artifacts
  makeQuizAnswer(1, 34, "Export permit needed", 1),
  makeQuizAnswer(1, 34, "No restrictions", 0),
  makeQuizAnswer(1, 34, "Only for museums", 0),
  makeQuizAnswer(1, 34, "Prohibited", 0),

  // Question 35: Rules for loaned vehicles
  makeQuizAnswer(1, 35, "Written authorization", 1),
  makeQuizAnswer(1, 35, "No special rule", 0),
  makeQuizAnswer(1, 35, "Must be registered", 0),
  makeQuizAnswer(1, 35, "Unrestricted use", 0),

  // Question 36: Declaring weapons
  makeQuizAnswer(1, 36, "Yes, always", 1),
  makeQuizAnswer(1, 36, "Only with ammunition", 0),
  makeQuizAnswer(1, 36, "Only in quantities", 0),
  makeQuizAnswer(1, 36, "No", 0),
];

// Documents
// Quiz 6 - 19
const quizDocuments: Quiz[] = [
  makeQuiz(1, 2, "Certificate of Inheritance"),
  makeQuiz(1, 2, "Civil Status Certificates"),
  makeQuiz(1, 2, "Criminal Records Extract"),
  makeQuiz(1, 2, "Driving Licence"),
  makeQuiz(1, 2, "International Driving Licence"),
  makeQuiz(1, 2, "Extract from the Debt Enforcement Register"),
  makeQuiz(1, 2, "Hunting Training and Licence"),
  makeQuiz(1, 2, "Living Wills"),
  makeQuiz(1, 2, "Passport and Identity Card"),
  makeQuiz(1, 2, "Lost or Stolen Passport or Identity Card"),
  makeQuiz(1, 2, "Permits for Living in Switzerland"),
  makeQuiz(1, 2, "Requesting an OASI Card"),
  makeQuiz(1, 2, "Salary Certificate"),
  makeQuiz(1, 2, "Lost Vehicle Registration Document"),
];

// Question 37 - 148
const quizQuestionDocuments: QuizQuestion[] = [
  // Quiz 6: Certificate of Inheritance
  makeQuizQuestion(1, 6, "Who can apply for a certificate of inheritance if there is no will?"),
  makeQuizQuestion(1, 6, "What document is required to obtain a certificate of inheritance?"),
  makeQuizQuestion(1, 6, "What factor influences the cost of a certificate of inheritance?"),
  makeQuizQuestion(1, 6, "When can you apply for a certificate if there is a will?"),
  makeQuizQuestion(1, 6, "What must you prove to get a certificate of inheritance?"),
  makeQuizQuestion(1, 6, "What is the purpose of a certificate of inheritance?"),
  makeQuizQuestion(1, 6, "Who are considered statutory heirs?"),
  makeQuizQuestion(1, 6, "What additional costs may arise for a certificate of inheritance?"),

  // Quiz 7: Civil Status Certificates
  makeQuizQuestion(1, 7, "Where can you request a birth certificate?"),
  makeQuizQuestion(1, 7, "What is the standard cost of a civil status certificate?"),
  makeQuizQuestion(1, 7, "Who can request a civil status certificate for another person?"),
  makeQuizQuestion(1, 7, "Where do Swiss citizens request a certificate of origin?"),
  makeQuizQuestion(1, 7, "How can you order a civil status certificate?"),
  makeQuizQuestion(1, 7, "What certificate do foreign nationals request for civil status?"),
  makeQuizQuestion(1, 7, "What is the cost for a family certificate compared to others?"),
  makeQuizQuestion(1, 7, "Can family record books still be ordered?"),

  // Quiz 8: Criminal Records Extract
  makeQuizQuestion(1, 8, "What does a standard private extract from the criminal records show?"),
  makeQuizQuestion(1, 8, "How much does a standard private extract cost?"),
  makeQuizQuestion(1, 8, "When is a special private extract required?"),
  makeQuizQuestion(1, 8, "Where can you order a criminal records extract?"),
  makeQuizQuestion(1, 8, "What additional cost applies for a legalized extract?"),
  makeQuizQuestion(1, 8, "What must an employer provide for a special private extract?"),
  makeQuizQuestion(1, 8, "What convictions are listed in a special private extract?"),
  makeQuizQuestion(1, 8, "Why might you need a criminal records extract?"),

  // Quiz 9: Driving Licence
  makeQuizQuestion(1, 9, "When must you exchange a blue paper driving licence?"),
  makeQuizQuestion(1, 9, "What must you do if your Swiss driving licence is stolen?"),
  makeQuizQuestion(1, 9, "How long can you drive in Switzerland with a foreign licence?"),
  makeQuizQuestion(1, 9, "What is required to exchange an EU/EEA driving licence?"),
  makeQuizQuestion(1, 9, "What happens to a lost driving licence once replaced?"),
  makeQuizQuestion(1, 9, "How much does a duplicate driving licence cost?"),
  makeQuizQuestion(1, 9, "What test is required for non-EU/EEA licence holders?"),
  makeQuizQuestion(1, 9, "How long does it take to receive a new driving licence?"),

  // Quiz 10: International Driving Licence
  makeQuizQuestion(1, 10, "What is required to use an international driving licence abroad?"),
  makeQuizQuestion(1, 10, "Which countries recommend an international driving licence for Swiss drivers?"),
  makeQuizQuestion(1, 10, "What is the validity period of an international driving licence?"),
  makeQuizQuestion(1, 10, "Where can you order an international driving licence?"),
  makeQuizQuestion(1, 10, "What is the approximate cost of an international driving licence?"),
  makeQuizQuestion(1, 10, "Can you renew an international driving licence?"),
  makeQuizQuestion(1, 10, "When might a foreign driver need an international licence in Switzerland?"),
  makeQuizQuestion(1, 10, "Who provides information on required driving documents abroad?"),

  // Quiz 11: Extract from the Debt Enforcement Register
  makeQuizQuestion(1, 11, "What does an extract from the debt enforcement register show?"),
  makeQuizQuestion(1, 11, "How can you request an extract from the debt enforcement register?"),
  makeQuizQuestion(1, 11, "How long does an entry remain in the debt enforcement register?"),
  makeQuizQuestion(1, 11, "What is required to request an extract for another person?"),
  makeQuizQuestion(1, 11, "How much does an extract from the debt enforcement register cost?"),
  makeQuizQuestion(1, 11, "How can an entry be removed from the debt enforcement register?"),
  makeQuizQuestion(1, 11, "When might you need a debt enforcement register extract?"),
  makeQuizQuestion(1, 11, "Can you request an extract without informing the person concerned?"),

  // Quiz 12: Hunting Training and Licence
  makeQuizQuestion(1, 12, "What is required before you can hunt in Switzerland?"),
  makeQuizQuestion(1, 12, "Which canton does not permit hunting?"),
  makeQuizQuestion(1, 12, "What must hunters do to prove shooting accuracy?"),
  makeQuizQuestion(1, 12, "How do some cantons regulate hunting?"),
  makeQuizQuestion(1, 12, "What regulates closed hunting seasons?"),
  makeQuizQuestion(1, 12, "What is required to hunt with dogs in Switzerland?"),
  makeQuizQuestion(1, 12, "Which cantons use hunting estates instead of licences?"),
  makeQuizQuestion(1, 12, "Where can you find information on hunting training?"),

  // Quiz 13: Living Wills
  makeQuizQuestion(1, 13, "What is the purpose of a living will?"),
  makeQuizQuestion(1, 13, "What must you do to make a living will legally binding?"),
  makeQuizQuestion(1, 13, "How often should you review your living will?"),
  makeQuizQuestion(1, 13, "Where can you find living will templates?"),
  makeQuizQuestion(1, 13, "Who should you give your living will to?"),
  makeQuizQuestion(1, 13, "What condition must you meet to create a living will?"),
  makeQuizQuestion(1, 13, "What types of living wills are available?"),
  makeQuizQuestion(1, 13, "Is a living will mandatory in Switzerland?"),

  // Quiz 14: Passport and Identity Card
  makeQuizQuestion(1, 14, "How long does it take to receive a passport in Switzerland?"),
  makeQuizQuestion(1, 14, "What biometric data is required for a passport?"),
  makeQuizQuestion(1, 14, "What is the validity period of a passport for adults?"),
  makeQuizQuestion(1, 14, "Where can Swiss citizens abroad apply for a passport?"),
  makeQuizQuestion(1, 14, "What is required for a child’s passport application?"),
  makeQuizQuestion(1, 14, "What is the validity period of a child’s passport?"),
  makeQuizQuestion(1, 14, "What is a temporary passport?"),
  makeQuizQuestion(1, 14, "What photo requirements apply for a passport?"),

  // Quiz 15: Lost or Stolen Passport or Identity Card
  makeQuizQuestion(1, 15, "What must you do if your passport is stolen in Switzerland?"),
  makeQuizQuestion(1, 15, "What happens to a lost passport after a police report is filed?"),
  makeQuizQuestion(1, 15, "What is the maximum validity of a temporary passport?"),
  makeQuizQuestion(1, 15, "What must you do if your passport is stolen abroad?"),
  makeQuizQuestion(1, 15, "How can you apply for a new passport after a theft?"),
  makeQuizQuestion(1, 15, "What happens if you find a lost passport after reporting it?"),
  makeQuizQuestion(1, 15, "Who cancels a stolen passport in Switzerland?"),
  makeQuizQuestion(1, 15, "What is required to get a temporary passport?"),

  // Quiz 16: Permits for Living in Switzerland
  makeQuizQuestion(1, 16, "Who must obtain a permit to live in Switzerland for more than three months?"),
  makeQuizQuestion(1, 16, "What document is required to apply for a permit renewal?"),
  makeQuizQuestion(1, 16, "What condition allows third-country citizens to stay after divorce?"),
  makeQuizQuestion(1, 16, "What permit is for temporarily admitted foreigners?"),
  makeQuizQuestion(1, 16, "Where do you apply for a residence permit?"),
  makeQuizQuestion(1, 16, "What must you do if your permit is lost?"),
  makeQuizQuestion(1, 16, "What permit do EU/EFTA cross-border commuters need?"),
  makeQuizQuestion(1, 16, "When can you apply to renew your permit?"),

  // Quiz 17: Requesting an OASI Card
  makeQuizQuestion(1, 17, "How can an employee request an OASI card?"),
  makeQuizQuestion(1, 17, "Where should self-employed individuals send their OASI card application?"),
  makeQuizQuestion(1, 17, "Who issues an OASI card for someone living abroad and not working in Switzerland?"),
  makeQuizQuestion(1, 17, "What form is required to request an OASI card?"),
  makeQuizQuestion(1, 17, "Where can you find the OASI card application form?"),
  makeQuizQuestion(1, 17, "What should you do if you lose your OASI card?"),
  makeQuizQuestion(1, 17, "Who handles OASI card requests for non-employees?"),
  makeQuizQuestion(1, 17, "What is the process for getting a new OASI card?"),

  // Quiz 18: Salary Certificate
  makeQuizQuestion(1, 18, "When do employees typically receive their salary certificate?"),
  makeQuizQuestion(1, 18, "What should you do if your salary certificate is incorrect?"),
  makeQuizQuestion(1, 18, "Who must provide a salary certificate to employees?"),
  makeQuizQuestion(1, 18, "What is included in a salary certificate?"),
  makeQuizQuestion(1, 18, "When must a salary certificate be attached to a tax return?"),
  makeQuizQuestion(1, 18, "Who can help employers create a salary certificate?"),
  makeQuizQuestion(1, 18, "What happens if you change employers during the year?"),
  makeQuizQuestion(1, 18, "Do employees need to request a salary certificate?"),

  // Quiz 19: Lost Vehicle Registration Document
  makeQuizQuestion(1, 19, "Who can apply for a replacement vehicle registration document?"),
  makeQuizQuestion(1, 19, "What is the cost range for a new vehicle registration document?"),
  makeQuizQuestion(1, 19, "What must you do if you find a lost vehicle registration document?"),
  makeQuizQuestion(1, 19, "Where do you apply for a replacement vehicle registration document?"),
  makeQuizQuestion(1, 19, "What must you notify within 19 days for a vehicle registration document?"),
  makeQuizQuestion(1, 19, "What happens to a replacement vehicle registration document if the original is found?"),
  makeQuizQuestion(1, 19, "Who issues a replacement vehicle registration document?"),
  makeQuizQuestion(1, 19, "What is the process for replacing a stolen vehicle registration document?"),
];

const quizAnswerDocuments: QuizAnswer[] = [
  // Quiz 37: Certificate of Inheritance
  // Question 37
  makeQuizAnswer(1, 37, "Statutory heirs", 1),
  makeQuizAnswer(1, 37, "Anyone", 0),
  makeQuizAnswer(1, 37, "Only the executor", 0),
  makeQuizAnswer(1, 37, "Only non-relatives", 0),

  // Question 38
  makeQuizAnswer(1, 38, "Death certificate", 1),
  makeQuizAnswer(1, 38, "Bank statement", 0),
  makeQuizAnswer(1, 38, "Tax return", 0),
  makeQuizAnswer(1, 38, "Medical records", 0),

  // Question 39
  makeQuizAnswer(1, 39, "Enquiries needed", 1),
  makeQuizAnswer(1, 39, "Fixed fee", 0),
  makeQuizAnswer(1, 39, "Number of heirs", 0),
  makeQuizAnswer(1, 39, "Estate value", 0),

  // Question 40
  makeQuizAnswer(1, 40, "After official notice", 1),
  makeQuizAnswer(1, 40, "Immediately", 0),
  makeQuizAnswer(1, 40, "Before the will is read", 0),
  makeQuizAnswer(1, 40, "No restriction", 0),

  // Question 41
  makeQuizAnswer(1, 41, "Not renounced inheritance", 1),
  makeQuizAnswer(1, 41, "Swiss citizenship", 0),
  makeQuizAnswer(1, 41, "Property ownership", 0),
  makeQuizAnswer(1, 41, "Tax compliance", 0),

  // Question 42
  makeQuizAnswer(1, 42, "Deal with deceased's assets", 1),
  makeQuizAnswer(1, 42, "File taxes", 0),
  makeQuizAnswer(1, 42, "Register property", 0),
  makeQuizAnswer(1, 42, "Apply for permits", 0),

  // Question 43
  makeQuizAnswer(1, 43, "Spouse, descendants, parents", 1),
  makeQuizAnswer(1, 43, "Friends, colleagues", 0),
  makeQuizAnswer(1, 43, "Only children", 0),
  makeQuizAnswer(1, 43, "Only spouse", 0),

  // Question 44
  makeQuizAnswer(1, 44, "Civil register office fees", 1),
  makeQuizAnswer(1, 44, "Legal fees", 0),
  makeQuizAnswer(1, 44, "Bank fees", 0),
  makeQuizAnswer(1, 44, "No additional costs", 0),

  // Quiz 2: Civil Status Certificates
  // Question 45
  makeQuizAnswer(1, 45, "Register office at place of birth", 1),
  makeQuizAnswer(1, 45, "Cantonal passport office", 0),
  makeQuizAnswer(1, 45, "Swiss embassy", 0),
  makeQuizAnswer(1, 45, "Tax office", 0),

  // Question 46
  makeQuizAnswer(1, 46, "CHF 30", 1),
  makeQuizAnswer(1, 46, "CHF 17", 0),
  makeQuizAnswer(1, 46, "CHF 50", 0),
  makeQuizAnswer(1, 46, "Free", 0),

  // Question 47
  makeQuizAnswer(1, 47, "With power of attorney", 1),
  makeQuizAnswer(1, 47, "Anyone", 0),
  makeQuizAnswer(1, 47, "Only family members", 0),
  makeQuizAnswer(1, 47, "Only Swiss citizens", 0),

  // Question 48
  makeQuizAnswer(1, 48, "Register office at place of origin", 1),
  makeQuizAnswer(1, 48, "Place of residence", 0),
  makeQuizAnswer(1, 48, "Place of birth", 0),
  makeQuizAnswer(1, 48, "Any register office", 0),

  // Question 49
  makeQuizAnswer(1, 49, "Online or in person", 1),
  makeQuizAnswer(1, 49, "Only online", 0),
  makeQuizAnswer(1, 49, "Only in person", 0),
  makeQuizAnswer(1, 49, "By mail only", 0),

  // Question 50
  makeQuizAnswer(1, 50, "Confirmation of registered civil status", 1),
  makeQuizAnswer(1, 50, "Birth certificate", 0),
  makeQuizAnswer(1, 50, "Marriage certificate", 0),
  makeQuizAnswer(1, 50, "Family certificate", 0),

  // Question 51
  makeQuizAnswer(1, 51, "Higher than CHF 30", 1),
  makeQuizAnswer(1, 51, "Same as CHF 30", 0),
  makeQuizAnswer(1, 51, "Lower than CHF 30", 0),
  makeQuizAnswer(1, 51, "Free", 0),

  // Question 52
  makeQuizAnswer(1, 52, "No, only updated", 1),
  makeQuizAnswer(1, 52, "Yes, new orders allowed", 0),
  makeQuizAnswer(1, 52, "Only for Swiss citizens", 0),
  makeQuizAnswer(1, 52, "Only for foreign nationals", 0),

  // Quiz 3: Criminal Records Extract
  // Question 53
  makeQuizAnswer(1, 53, "Felony or misdemeanour convictions", 1),
  makeQuizAnswer(1, 53, "Traffic violations", 0),
  makeQuizAnswer(1, 53, "Civil disputes", 0),
  makeQuizAnswer(1, 53, "Tax records", 0),

  // Question 54
  makeQuizAnswer(1, 54, "CHF 17", 1),
  makeQuizAnswer(1, 54, "CHF 30", 0),
  makeQuizAnswer(1, 54, "CHF 50", 0),
  makeQuizAnswer(1, 54, "Free", 0),

  // Question 55
  makeQuizAnswer(1, 55, "Contact with minors", 1),
  makeQuizAnswer(1, 55, "Job applications", 0),
  makeQuizAnswer(1, 55, "Citizenship applications", 0),
  makeQuizAnswer(1, 55, "Firearms licences", 0),

  // Question 56
  makeQuizAnswer(1, 56, "Post office or online", 1),
  makeQuizAnswer(1, 56, "Tax office", 0),
  makeQuizAnswer(1, 56, "Police station", 0),
  makeQuizAnswer(1, 56, "Embassy", 0),

  // Question 57
  makeQuizAnswer(1, 57, "CHF 20", 1),
  makeQuizAnswer(1, 57, "CHF 10", 0),
  makeQuizAnswer(1, 57, "CHF 30", 0),
  makeQuizAnswer(1, 57, "No additional cost", 0),

  // Question 58
  makeQuizAnswer(1, 58, "Signed confirmation", 1),
  makeQuizAnswer(1, 58, "Payment receipt", 0),
  makeQuizAnswer(1, 58, "ID copy", 0),
  makeQuizAnswer(1, 58, "No documentation", 0),

  // Question 59
  makeQuizAnswer(1, 59, "Current bans", 1),
  makeQuizAnswer(1, 59, "All convictions", 0),
  makeQuizAnswer(1, 59, "Past bans", 0),
  makeQuizAnswer(1, 59, "No convictions", 0),

  // Question 60
  makeQuizAnswer(1, 60, "For job or citizenship", 1),
  makeQuizAnswer(1, 60, "For tax filing", 0),
  makeQuizAnswer(1, 60, "For travel", 0),
  makeQuizAnswer(1, 60, "For marriage", 0),

  // Quiz 4: Driving Licence
  // Question 61
  makeQuizAnswer(1, 61, "By 1 November 2024", 1),
  makeQuizAnswer(1, 61, "By 1 January 2024", 0),
  makeQuizAnswer(1, 61, "No deadline", 0),
  makeQuizAnswer(1, 61, "By 31 December 2024", 0),

  // Question 62
  makeQuizAnswer(1, 62, "Report to police", 1),
  makeQuizAnswer(1, 62, "Apply online", 0),
  makeQuizAnswer(1, 62, "Contact tax office", 0),
  makeQuizAnswer(1, 62, "No action needed", 0),

  // Question 63
  makeQuizAnswer(1, 63, "12 months", 1),
  makeQuizAnswer(1, 63, "6 months", 0),
  makeQuizAnswer(1, 63, "24 months", 0),
  makeQuizAnswer(1, 63, "No limit", 0),

  // Question 64
  makeQuizAnswer(1, 64, "Eye test", 1),
  makeQuizAnswer(1, 64, "Driving test", 0),
  makeQuizAnswer(1, 64, "Theory exam", 0),
  makeQuizAnswer(1, 64, "Medical exam", 0),

  // Question 65
  makeQuizAnswer(1, 65, "No longer valid", 1),
  makeQuizAnswer(1, 65, "Still valid", 0),
  makeQuizAnswer(1, 65, "Suspended", 0),
  makeQuizAnswer(1, 65, "Renewed", 0),

  // Question 66
  makeQuizAnswer(1, 66, "Around CHF 30", 1),
  makeQuizAnswer(1, 66, "CHF 50", 0),
  makeQuizAnswer(1, 66, "CHF 100", 0),
  makeQuizAnswer(1, 66, "Free", 0),

  // Question 67
  makeQuizAnswer(1, 67, "Driving test", 1),
  makeQuizAnswer(1, 67, "Eye test", 0),
  makeQuizAnswer(1, 67, "No test", 0),
  makeQuizAnswer(1, 67, "Medical exam", 0),

  // Question 68
  makeQuizAnswer(1, 68, "1-2 weeks", 1),
  makeQuizAnswer(1, 68, "1-2 days", 0),
  makeQuizAnswer(1, 68, "3-4 weeks", 0),
  makeQuizAnswer(1, 68, "1 month", 0),

  // Quiz 5: International Driving Licence
  // Question 69
  makeQuizAnswer(1, 69, "Swiss driving licence", 1),
  makeQuizAnswer(1, 69, "Passport", 0),
  makeQuizAnswer(1, 69, "Identity card", 0),
  makeQuizAnswer(1, 69, "No additional document", 0),

  // Question 70
  makeQuizAnswer(1, 70, "Countries outside EU/EFTA", 1),
  makeQuizAnswer(1, 70, "EU countries only", 0),
  makeQuizAnswer(1, 70, "EFTA countries only", 0),
  makeQuizAnswer(1, 70, "All countries", 0),

  // Question 71
  makeQuizAnswer(1, 71, "Three years", 1),
  makeQuizAnswer(1, 71, "One year", 0),
  makeQuizAnswer(1, 71, "Five years", 0),
  makeQuizAnswer(1, 71, "No expiry", 0),

  // Question 72
  makeQuizAnswer(1, 72, "Road traffic office", 1),
  makeQuizAnswer(1, 72, "Tax office", 0),
  makeQuizAnswer(1, 72, "Police station", 0),
  makeQuizAnswer(1, 72, "Embassy", 0),

  // Question 73
  makeQuizAnswer(1, 73, "Around CHF 30", 1),
  makeQuizAnswer(1, 73, "CHF 17", 0),
  makeQuizAnswer(1, 73, "CHF 50", 0),
  makeQuizAnswer(1, 73, "Free", 0),

  // Question 74
  makeQuizAnswer(1, 74, "No, order a new one", 1),
  makeQuizAnswer(1, 74, "Yes, renewable", 0),
  makeQuizAnswer(1, 74, "Only if expired", 0),
  makeQuizAnswer(1, 74, "Only in some cantons", 0),

  // Question 75
  makeQuizAnswer(1, 75, "Non-Latin characters", 1),
  makeQuizAnswer(1, 75, "Expired licence", 0),
  makeQuizAnswer(1, 75, "No vehicle categories", 0),
  makeQuizAnswer(1, 75, "All foreign licences", 0),

  // Question 76
  makeQuizAnswer(1, 76, "Travel agent", 1),
  makeQuizAnswer(1, 76, "Tax office", 0),
  makeQuizAnswer(1, 76, "Police station", 0),
  makeQuizAnswer(1, 76, "Bank", 0),

  // Quiz 6: Extract from the Debt Enforcement Register
  // Question 77
  makeQuizAnswer(1, 77, "Debt enforcement proceedings", 1),
  makeQuizAnswer(1, 77, "Criminal convictions", 0),
  makeQuizAnswer(1, 77, "Tax records", 0),
  makeQuizAnswer(1, 77, "Civil status", 0),

  // Question 78
  makeQuizAnswer(1, 78, "Online or in person", 1),
  makeQuizAnswer(1, 78, "Only online", 0),
  makeQuizAnswer(1, 78, "Only in person", 0),
  makeQuizAnswer(1, 78, "Through a lawyer", 0),

  // Question 79
  makeQuizAnswer(1, 79, "Five years", 1),
  makeQuizAnswer(1, 79, "One year", 0),
  makeQuizAnswer(1, 79, "Three years", 0),
  makeQuizAnswer(1, 79, "Permanent", 0),

  // Question 80
  makeQuizAnswer(1, 80, "Signed authorization", 1),
  makeQuizAnswer(1, 80, "No documentation", 0),
  makeQuizAnswer(1, 80, "Tax return", 0),
  makeQuizAnswer(1, 80, "Bank statement", 0),

  // Question 81
  makeQuizAnswer(1, 81, "CHF 17", 1),
  makeQuizAnswer(1, 81, "CHF 30", 0),
  makeQuizAnswer(1, 81, "CHF 50", 0),
  makeQuizAnswer(1, 81, "Free", 0),

  // Question 82
  makeQuizAnswer(1, 82, "Creditor agreement", 1),
  makeQuizAnswer(1, 82, "Court order", 0),
  makeQuizAnswer(1, 82, "Tax payment", 0),
  makeQuizAnswer(1, 82, "No removal possible", 0),

  // Question 83
  makeQuizAnswer(1, 83, "Renting an apartment", 1),
  makeQuizAnswer(1, 83, "Filing taxes", 0),
  makeQuizAnswer(1, 83, "Registering a vehicle", 0),
  makeQuizAnswer(1, 83, "Applying for a passport", 0),

  // Question 84
  makeQuizAnswer(1, 84, "Yes, with proof of interest", 1),
  makeQuizAnswer(1, 84, "No, always inform", 0),
  makeQuizAnswer(1, 84, "Only with court order", 0),
  makeQuizAnswer(1, 84, "Only for family", 0),

  // Quiz 7: Hunting Training and Licence
  // Question 85
  makeQuizAnswer(1, 85, "Pass an examination", 1),
  makeQuizAnswer(1, 85, "Join a club", 0),
  makeQuizAnswer(1, 85, "Pay a fee", 0),
  makeQuizAnswer(1, 85, "No requirement", 0),

  // Question 86
  makeQuizAnswer(1, 86, "Geneva", 1),
  makeQuizAnswer(1, 86, "Bern", 0),
  makeQuizAnswer(1, 86, "Zurich", 0),
  makeQuizAnswer(1, 86, "Vaud", 0),

  // Question 87
  makeQuizAnswer(1, 87, "Annual shooting test", 1),
  makeQuizAnswer(1, 87, "Monthly shooting test", 0),
  makeQuizAnswer(1, 87, "No shooting test", 0),
  makeQuizAnswer(1, 87, "Biennial shooting test", 0),

  // Question 88
  makeQuizAnswer(1, 88, "Hunting estates", 1),
  makeQuizAnswer(1, 88, "No regulation", 0),
  makeQuizAnswer(1, 88, "Only licences", 0),
  makeQuizAnswer(1, 88, "Federal bans", 0),

  // Question 89
  makeQuizAnswer(1, 89, "Confederation", 1),
  makeQuizAnswer(1, 89, "Cantons only", 0),
  makeQuizAnswer(1, 89, "Hunting associations", 0),
  makeQuizAnswer(1, 89, "No regulation", 0),

  // Question 90
  makeQuizAnswer(1, 90, "Training and tests", 1),
  makeQuizAnswer(1, 90, "No requirements", 0),
  makeQuizAnswer(1, 90, "Only a licence", 0),
  makeQuizAnswer(1, 90, "Veterinary approval", 0),

  // Question 91
  makeQuizAnswer(1, 91, "Zurich, Lucerne, Aargau", 1),
  makeQuizAnswer(1, 91, "Bern, Vaud, Ticino", 0),
  makeQuizAnswer(1, 91, "Geneva, Jura, Valais", 0),
  makeQuizAnswer(1, 91, "Fribourg, Zug, Uri", 0),

  // Question 92
  makeQuizAnswer(1, 92, "Cantonal offices", 1),
  makeQuizAnswer(1, 92, "Tax authorities", 0),
  makeQuizAnswer(1, 92, "Police stations", 0),
  makeQuizAnswer(1, 92, "Federal offices", 0),

  // Quiz 8: Living Wills
  // Question 93
  makeQuizAnswer(1, 93, "Determine medical treatment", 1),
  makeQuizAnswer(1, 93, "Assign inheritance", 0),
  makeQuizAnswer(1, 93, "Authorize travel", 0),
  makeQuizAnswer(1, 93, "Declare taxes", 0),

  // Question 94
  makeQuizAnswer(1, 94, "Date and sign by hand", 1),
  makeQuizAnswer(1, 94, "Notarize", 0),
  makeQuizAnswer(1, 94, "File with court", 0),
  makeQuizAnswer(1, 94, "Register online", 0),

  // Question 95
  makeQuizAnswer(1, 95, "Every two years", 1),
  makeQuizAnswer(1, 95, "Every year", 0),
  makeQuizAnswer(1, 95, "Every five years", 0),
  makeQuizAnswer(1, 95, "Never", 0),

  // Question 96
  makeQuizAnswer(1, 96, "Swiss Medical Association", 1),
  makeQuizAnswer(1, 96, "Tax office", 0),
  makeQuizAnswer(1, 96, "Police station", 0),
  makeQuizAnswer(1, 96, "Embassy", 0),

  // Question 97
  makeQuizAnswer(1, 97, "Family or doctor", 1),
  makeQuizAnswer(1, 97, "Lawyer", 0),
  makeQuizAnswer(1, 97, "Bank", 0),
  makeQuizAnswer(1, 97, "Tax office", 0),

  // Question 98
  makeQuizAnswer(1, 98, "Legal capacity", 1),
  makeQuizAnswer(1, 98, "Swiss citizenship", 0),
  makeQuizAnswer(1, 98, "Medical approval", 0),
  makeQuizAnswer(1, 98, "Age limit", 0),

  // Question 99
  makeQuizAnswer(1, 99, "General and specific", 1),
  makeQuizAnswer(1, 99, "Short and long", 0),
  makeQuizAnswer(1, 99, "Legal and medical", 0),
  makeQuizAnswer(1, 99, "Public and private", 0),

  // Question 100
  makeQuizAnswer(1, 100, "No, optional", 1),
  makeQuizAnswer(1, 100, "Yes, mandatory", 0),
  makeQuizAnswer(1, 100, "Only for elderly", 0),
  makeQuizAnswer(1, 100, "Only for hospitalized", 0),

  // Quiz 9: Passport and Identity Card
  // Question 101
  makeQuizAnswer(1, 101, "10 working days", 1),
  makeQuizAnswer(1, 101, "5 working days", 0),
  makeQuizAnswer(1, 101, "20 working days", 0),
  makeQuizAnswer(1, 101, "30 working days", 0),

  // Question 102
  makeQuizAnswer(1, 102, "Photo, signature, fingerprints", 1),
  makeQuizAnswer(1, 102, "Photo only", 0),
  makeQuizAnswer(1, 102, "Signature only", 0),
  makeQuizAnswer(1, 102, "No biometric data", 0),

  // Question 103
  makeQuizAnswer(1, 103, "10 years", 1),
  makeQuizAnswer(1, 103, "5 years", 0),
  makeQuizAnswer(1, 103, "15 years", 0),
  makeQuizAnswer(1, 103, "No expiry", 0),

  // Question 104
  makeQuizAnswer(1, 104, "Swiss embassy", 1),
  makeQuizAnswer(1, 104, "Tax office", 0),
  makeQuizAnswer(1, 104, "Police station", 0),
  makeQuizAnswer(1, 104, "Cantonal office", 0),

  // Question 105
  makeQuizAnswer(1, 105, "Parental authority", 1),
  makeQuizAnswer(1, 105, "Child’s signature", 0),
  makeQuizAnswer(1, 105, "Birth certificate", 0),
  makeQuizAnswer(1, 105, "No requirements", 0),

  // Question 106
  makeQuizAnswer(1, 106, "5 years", 1),
  makeQuizAnswer(1, 106, "10 years", 0),
  makeQuizAnswer(1, 106, "3 years", 0),
  makeQuizAnswer(1, 106, "No expiry", 0),

  // Question 107
  makeQuizAnswer(1, 107, "Non-biometric urgent passport", 1),
  makeQuizAnswer(1, 107, "Biometric passport", 0),
  makeQuizAnswer(1, 107, "Identity card", 0),
  makeQuizAnswer(1, 107, "Driving licence", 0),

  // Question 108
  makeQuizAnswer(1, 108, "Meet specific requirements", 1),
  makeQuizAnswer(1, 108, "Any photo", 0),
  makeQuizAnswer(1, 108, "No photo needed", 0),
  makeQuizAnswer(1, 108, "Only digital photos", 0),

  // Quiz 10: Lost or Stolen Passport or Identity Card
  // Question 109
  makeQuizAnswer(1, 109, "File a police report", 1),
  makeQuizAnswer(1, 109, "Apply online", 0),
  makeQuizAnswer(1, 109, "Contact embassy", 0),
  makeQuizAnswer(1, 109, "No action needed", 0),

  // Question 110
  makeQuizAnswer(1, 110, "It is cancelled", 1),
  makeQuizAnswer(1, 110, "It remains valid", 0),
  makeQuizAnswer(1, 110, "It is renewed", 0),
  makeQuizAnswer(1, 110, "It is suspended", 0),

  // Question 111
  makeQuizAnswer(1, 111, "12 months", 1),
  makeQuizAnswer(1, 111, "6 months", 0),
  makeQuizAnswer(1, 111, "24 months", 0),
  makeQuizAnswer(1, 111, "No limit", 0),

  // Question 112
  makeQuizAnswer(1, 112, "Notify local police and embassy", 1),
  makeQuizAnswer(1, 112, "Apply online", 0),
  makeQuizAnswer(1, 112, "Contact tax office", 0),
  makeQuizAnswer(1, 112, "No action needed", 0),

  // Question 113
  makeQuizAnswer(1, 113, "At embassy or online", 1),
  makeQuizAnswer(1, 113, "Only online", 0),
  makeQuizAnswer(1, 113, "Only at embassy", 0),
  makeQuizAnswer(1, 113, "At police station", 0),

  // Question 114
  makeQuizAnswer(1, 114, "Hand over to passport office", 1),
  makeQuizAnswer(1, 114, "Keep it", 0),
  makeQuizAnswer(1, 114, "Destroy it", 0),
  makeQuizAnswer(1, 114, "Use it", 0),

  // Question 115
  makeQuizAnswer(1, 115, "Police", 1),
  makeQuizAnswer(1, 115, "Embassy", 0),
  makeQuizAnswer(1, 115, "Tax office", 0),
  makeQuizAnswer(1, 115, "Passport office", 0),

  // Question 116
  makeQuizAnswer(1, 116, "Justified urgency", 1),
  makeQuizAnswer(1, 116, "No requirements", 0),
  makeQuizAnswer(1, 116, "Payment only", 0),
  makeQuizAnswer(1, 116, "Swiss citizenship", 0),

  // Quiz 11: Permits for Living in Switzerland
  // Question 117
  makeQuizAnswer(1, 117, "All foreign nationals", 1),
  makeQuizAnswer(1, 117, "Only EU/EFTA nationals", 0),
  makeQuizAnswer(1, 117, "Only third-country nationals", 0),
  makeQuizAnswer(1, 117, "Only Swiss citizens", 0),

  // Question 118
  makeQuizAnswer(1, 118, "Valid ID or passport", 1),
  makeQuizAnswer(1, 118, "Tax return", 0),
  makeQuizAnswer(1, 118, "Employment contract", 0),
  makeQuizAnswer(1, 118, "Bank statement", 0),

  // Question 119
  makeQuizAnswer(1, 119, "Married for three years", 1),
  makeQuizAnswer(1, 119, "Married for one year", 0),
  makeQuizAnswer(1, 119, "No marriage required", 0),
  makeQuizAnswer(1, 119, "Employed for five years", 0),

  // Question 120
  makeQuizAnswer(1, 120, "F permit", 1),
  makeQuizAnswer(1, 120, "B permit", 0),
  makeQuizAnswer(1, 120, "C permit", 0),
  makeQuizAnswer(1, 120, "G permit", 0),

  // Question 121
  makeQuizAnswer(1, 121, "Cantonal migration authorities", 1),
  makeQuizAnswer(1, 121, "Tax office", 0),
  makeQuizAnswer(1, 121, "Police station", 0),
  makeQuizAnswer(1, 121, "Embassy", 0),

  // Question 122
  makeQuizAnswer(1, 122, "Report to police", 1),
  makeQuizAnswer(1, 122, "Apply online", 0),
  makeQuizAnswer(1, 122, "Contact embassy", 0),
  makeQuizAnswer(1, 122, "No action needed", 0),

  // Question 123
  makeQuizAnswer(1, 123, "G permit", 1),
  makeQuizAnswer(1, 123, "B permit", 0),
  makeQuizAnswer(1, 123, "C permit", 0),
  makeQuizAnswer(1, 123, "L permit", 0),

  // Question 124
  makeQuizAnswer(1, 124, "Three months to two weeks before expiry", 1),
  makeQuizAnswer(1, 124, "Any time", 0),
  makeQuizAnswer(1, 124, "After expiry", 0),
  makeQuizAnswer(1, 124, "One year before expiry", 0),

  // Quiz 12: Requesting an OASI Card
  // Question 125
  makeQuizAnswer(1, 125, "Submit form to employer", 1),
  makeQuizAnswer(1, 125, "Apply online directly", 0),
  makeQuizAnswer(1, 125, "Visit the tax office", 0),
  makeQuizAnswer(1, 125, "Contact the embassy", 0),

  // Question 126
  makeQuizAnswer(1, 126, "Professional fund or compensation office", 1),
  makeQuizAnswer(1, 126, "Tax office", 0),
  makeQuizAnswer(1, 126, "Police station", 0),
  makeQuizAnswer(1, 126, "Swiss embassy", 0),

  // Question 127
  makeQuizAnswer(1, 127, "Swiss Compensation Office", 1),
  makeQuizAnswer(1, 127, "Cantonal migration office", 0),
  makeQuizAnswer(1, 127, "Tax authority", 0),
  makeQuizAnswer(1, 127, "Employer", 0),

  // Question 128
  makeQuizAnswer(1, 128, "Form 101", 1),
  makeQuizAnswer(1, 128, "Form 102", 0),
  makeQuizAnswer(1, 128, "Form 103", 0),
  makeQuizAnswer(1, 128, "No form needed", 0),

  // Question 129
  makeQuizAnswer(1, 129, "Compensation office website", 1),
  makeQuizAnswer(1, 129, "Tax office", 0),
  makeQuizAnswer(1, 129, "Police station", 0),
  makeQuizAnswer(1, 129, "Embassy", 0),

  // Question 130
  makeQuizAnswer(1, 130, "Contact compensation office", 1),
  makeQuizAnswer(1, 130, "Apply online", 0),
  makeQuizAnswer(1, 130, "Visit tax office", 0),
  makeQuizAnswer(1, 130, "No action needed", 0),

  // Question 131
  makeQuizAnswer(1, 131, "Compensation office", 1),
  makeQuizAnswer(1, 131, "Employer", 0),
  makeQuizAnswer(1, 131, "Tax office", 0),
  makeQuizAnswer(1, 131, "Police station", 0),

  // Question 132
  makeQuizAnswer(1, 132, "Submit form to compensation office", 1),
  makeQuizAnswer(1, 132, "Apply online directly", 0),
  makeQuizAnswer(1, 132, "Visit tax office", 0),
  makeQuizAnswer(1, 132, "Contact embassy", 0),

  // Quiz 13: Salary Certificate
  // Question 133
  makeQuizAnswer(1, 133, "Before end of January", 1),
  makeQuizAnswer(1, 133, "Before end of March", 0),
  makeQuizAnswer(1, 133, "Before end of June", 0),
  makeQuizAnswer(1, 133, "Upon request", 0),

  // Question 134
  makeQuizAnswer(1, 134, "Request from employer", 1),
  makeQuizAnswer(1, 134, "Contact tax authority", 0),
  makeQuizAnswer(1, 134, "Apply online", 0),
  makeQuizAnswer(1, 134, "Visit police station", 0),

  // Question 135
  makeQuizAnswer(1, 135, "Employer", 1),
  makeQuizAnswer(1, 135, "Employee", 0),
  makeQuizAnswer(1, 135, "Tax authority", 0),
  makeQuizAnswer(1, 135, "Bank", 0),

  // Question 136
  makeQuizAnswer(1, 136, "Gross salary, deductions", 1),
  makeQuizAnswer(1, 136, "Net salary only", 0),
  makeQuizAnswer(1, 136, "Bonuses only", 0),
  makeQuizAnswer(1, 136, "No financial details", 0),

  // Question 137
  makeQuizAnswer(1, 137, "With tax return", 1),
  makeQuizAnswer(1, 137, "Upon request", 0),
  makeQuizAnswer(1, 137, "Not required", 0),
  makeQuizAnswer(1, 137, "Only for audits", 0),

  // Question 138
  makeQuizAnswer(1, 138, "Tax authority", 1),
  makeQuizAnswer(1, 138, "Bank", 0),
  makeQuizAnswer(1, 138, "Lawyer", 0),
  makeQuizAnswer(1, 138, "Employee", 0),

  // Question 139
  makeQuizAnswer(1, 139, "Certificates from all employers", 1),
  makeQuizAnswer(1, 139, "One certificate", 0),
  makeQuizAnswer(1, 139, "No certificate needed", 0),
  makeQuizAnswer(1, 139, "Last employer only", 0),

  // Question 140
  makeQuizAnswer(1, 140, "No, provided automatically", 1),
  makeQuizAnswer(1, 140, "Yes, always request", 0),
  makeQuizAnswer(1, 140, "Only for new employees", 0),
  makeQuizAnswer(1, 140, "Only for tax audits", 0),

  // Quiz 14: Lost Vehicle Registration Document
  // Question 141
  makeQuizAnswer(1, 141, "Vehicle owner", 1),
  makeQuizAnswer(1, 141, "Anyone", 0),
  makeQuizAnswer(1, 141, "Insurance company", 0),
  makeQuizAnswer(1, 141, "Driver only", 0),

  // Question 142
  makeQuizAnswer(1, 142, "CHF 15-30", 1),
  makeQuizAnswer(1, 142, "CHF 50-100", 0),
  makeQuizAnswer(1, 142, "Free", 0),
  makeQuizAnswer(1, 142, "CHF 5-10", 0),

  // Question 143
  makeQuizAnswer(1, 143, "Return to road traffic office", 1),
  makeQuizAnswer(1, 143, "Keep it", 0),
  makeQuizAnswer(1, 143, "Destroy it", 0),
  makeQuizAnswer(1, 143, "Use it", 0),

  // Question 144
  makeQuizAnswer(1, 144, "Road traffic office", 1),
  makeQuizAnswer(1, 144, "Police station", 0),
  makeQuizAnswer(1, 144, "Tax office", 0),
  makeQuizAnswer(1, 144, "Insurance company", 0),

  // Question 145
  makeQuizAnswer(1, 145, "Loss or theft", 1),
  makeQuizAnswer(1, 145, "Change of address", 0),
  makeQuizAnswer(1, 145, "Vehicle sale", 0),
  makeQuizAnswer(1, 145, "No notification needed", 0),

  // Question 146
  makeQuizAnswer(1, 146, "Original becomes invalid", 1),
  makeQuizAnswer(1, 146, "Original remains valid", 0),
  makeQuizAnswer(1, 146, "Both are valid", 0),
  makeQuizAnswer(1, 146, "Replacement is temporary", 0),

  // Question 147
  makeQuizAnswer(1, 147, "Road traffic office", 1),
  makeQuizAnswer(1, 147, "Police station", 0),
  makeQuizAnswer(1, 147, "Tax office", 0),
  makeQuizAnswer(1, 147, "Insurance company", 0),

  // Question 148
  makeQuizAnswer(1, 148, "Report theft to police, then apply", 1),
  makeQuizAnswer(1, 148, "Apply online directly", 0),
  makeQuizAnswer(1, 148, "Contact insurance", 0),
  makeQuizAnswer(1, 148, "No action needed", 0),
];

// Documents
// Quiz 20 - 25
const quizFamily: Quiz[] = [
  makeQuiz(1, 3, "Adoption"),
  makeQuiz(1, 3, "Family Reunification"),
  makeQuiz(1, 3, "Death"),
  makeQuiz(1, 3, "Divorce"),
  makeQuiz(1, 3, "Inheritance"),
  makeQuiz(1, 3, "Marriage"),
];

// Question 149 - 196
const quizQuestionFamily: QuizQuestion[] = [
  // Quiz 20: Adoption
  makeQuizQuestion(1, 20, "Who should you contact to adopt a child in Switzerland?"),
  makeQuizQuestion(1, 20, "What is the minimum age difference required between the adoptive parent and the child?"),
  makeQuizQuestion(1, 20, "What is a key requirement for adopting a child as a couple in Switzerland?"),
  makeQuizQuestion(1, 20, "What is the minimum age for a single person to adopt a child?"),
  makeQuizQuestion(1, 20, "What is required for a child to consent to their adoption?"),
  makeQuizQuestion(1, 20, "How long must adoptive parents care for a child before adoption?"),
  makeQuizQuestion(1, 20, "Who is entitled to adoption leave in Switzerland?"),
  makeQuizQuestion(1, 20, "What is the maximum daily adoption allowance in Switzerland?"),

  // Quiz 21: Family Reunification
  makeQuizQuestion(1, 21, "Who can apply for family reunification in Switzerland?"),
  makeQuizQuestion(1, 21, "Which family members can a Swiss citizen bring to Switzerland?"),
  makeQuizQuestion(1, 21, "What is a key condition for family reunification?"),
  makeQuizQuestion(1, 21, "What is the time limit for applying for family reunification for children over 12?"),
  makeQuizQuestion(1, 21, "Who cannot bring all family members to Switzerland?"),
  makeQuizQuestion(1, 21, "What document is required for family members arriving in Switzerland?"),
  makeQuizQuestion(1, 21, "What must children joining Switzerland do until age 16?"),
  makeQuizQuestion(1, 21, "Where should you apply for family reunification?"),

  // Quiz 22: Death
  makeQuizQuestion(1, 22, "Who issues a death certificate if a person dies in a hospital?"),
  makeQuizQuestion(1, 22, "Within how many days must a death be reported to the civil register office?"),
  makeQuizQuestion(1, 22, "What document is required to report a death?"),
  makeQuizQuestion(1, 22, "What must be done before a funeral can take place?"),
  makeQuizQuestion(1, 22, "Who should be notified if a death occurs abroad?"),
  makeQuizQuestion(1, 22, "What is the purpose of a survivor’s pension?"),
  makeQuizQuestion(1, 22, "What is the maximum monthly widow’s or widower’s pension?"),
  makeQuizQuestion(1, 22, "What should be done after the funeral regarding the deceased’s insurance?"),

  // Quiz 23: Divorce
  makeQuizQuestion(1, 23, "Where do you file for a divorce in Switzerland?"),
  makeQuizQuestion(1, 23, "What is required for a divorce by mutual consent?"),
  makeQuizQuestion(1, 23, "How long must spouses live separately for a unilateral divorce?"),
  makeQuizQuestion(1, 23, "What is the typical duration of a divorce by mutual consent?"),
  makeQuizQuestion(1, 23, "What happens to parental responsibility after divorce?"),
  makeQuizQuestion(1, 23, "What can you do if an ex-spouse does not pay child support?"),
  makeQuizQuestion(1, 23, "What is the effect of divorce on a foreign national’s B permit?"),
  makeQuizQuestion(1, 23, "What are the court costs for a divorce in Switzerland?"),

  // Quiz 24: Inheritance
  makeQuizQuestion(1, 24, "Who is exempt from inheritance tax in most cantons?"),
  makeQuizQuestion(1, 24, "What is required to obtain a certificate of inheritance?"),
  makeQuizQuestion(1, 24, "Within how many months must you renounce an inheritance?"),
  makeQuizQuestion(1, 24, "Who inherits if there is no will and no relatives?"),
  makeQuizQuestion(1, 24, "What is a handwritten will also known as?"),
  makeQuizQuestion(1, 24, "What can be included in a contract of succession?"),
  makeQuizQuestion(1, 24, "What is the purpose of a public inventory?"),
  makeQuizQuestion(1, 24, "Who are statutory heirs entitled to a share of the estate?"),

  // Quiz 25: Marriage
  makeQuizQuestion(1, 25, "What is the minimum age to get married in Switzerland?"),
  makeQuizQuestion(1, 25, "What must you do before getting married at a civil register office?"),
  makeQuizQuestion(1, 25, "What is the default marital property regime in Switzerland?"),
  makeQuizQuestion(1, 25, "Since when can same-sex couples marry in Switzerland?"),
  makeQuizQuestion(1, 25, "What is a requirement for a marriage ceremony?"),
  makeQuizQuestion(1, 25, "How are taxes handled for married couples?"),
  makeQuizQuestion(1, 25, "What happens to a same-sex registered partnership after 1 July 2022?"),
  makeQuizQuestion(1, 25, "What is the approximate cost of a civil marriage ceremony?"),
];

const quizAnswerFamily: QuizAnswer[] = [
  // Quiz 20: Adoption
  // Question 149
  makeQuizAnswer(1, 149, "Central adoption authority of your canton", 1),
  makeQuizAnswer(1, 149, "Local police station", 0),
  makeQuizAnswer(1, 149, "Federal tax office", 0),
  makeQuizAnswer(1, 149, "Health insurance provider", 0),

  // Question 150
  makeQuizAnswer(1, 150, "16 years", 1),
  makeQuizAnswer(1, 150, "10 years", 0),
  makeQuizAnswer(1, 150, "20 years", 0),
  makeQuizAnswer(1, 150, "5 years", 0),

  // Question 151
  makeQuizAnswer(1, 151, "Must be married", 1),
  makeQuizAnswer(1, 151, "Must be under 30 years old", 0),
  makeQuizAnswer(1, 151, "Must own a house", 0),
  makeQuizAnswer(1, 151, "Must have Swiss citizenship", 0),

  // Question 152
  makeQuizAnswer(1, 152, "28 years old", 1),
  makeQuizAnswer(1, 152, "18 years old", 0),
  makeQuizAnswer(1, 152, "25 years old", 0),
  makeQuizAnswer(1, 152, "35 years old", 0),

  // Question 152
  makeQuizAnswer(1, 153, "The child must be capable of consenting", 1),
  makeQuizAnswer(1, 153, "The child must be over 18", 0),
  makeQuizAnswer(1, 153, "The child’s consent is not required", 0),
  makeQuizAnswer(1, 153, "The child must be Swiss", 0),

  // Question 154
  makeQuizAnswer(1, 154, "At least one year", 1),
  makeQuizAnswer(1, 154, "Six months", 0),
  makeQuizAnswer(1, 154, "Two years", 0),
  makeQuizAnswer(1, 154, "Three months", 0),

  // Question 155
  makeQuizAnswer(1, 155, "Employed or self-employed parents adopting a child under 4", 1),
  makeQuizAnswer(1, 155, "Parents adopting their spouse’s child", 0),
  makeQuizAnswer(1, 155, "Unemployed parents", 0),
  makeQuizAnswer(1, 155, "Parents adopting an adult", 0),

  // Question 156
  makeQuizAnswer(1, 156, "CHF 220", 1),
  makeQuizAnswer(1, 156, "CHF 150", 0),
  makeQuizAnswer(1, 156, "CHF 300", 0),
  makeQuizAnswer(1, 156, "CHF 100", 0),

  // Quiz 21: Family Reunification
  // Question 157: Who can apply
  makeQuizAnswer(1, 157, "Residents of Switzerland with foreign family members", 1),
  makeQuizAnswer(1, 157, "Asylum seekers", 0),
  makeQuizAnswer(1, 157, "Tourists in Switzerland", 0),
  makeQuizAnswer(1, 157, "Non-residents", 0),

  // Question 158: Family members for Swiss citizen
  makeQuizAnswer(1, 158, "Spouse, children under 18, dependent parents with EU/EFTA permit", 1),
  makeQuizAnswer(1, 158, "All extended family members", 0),
  makeQuizAnswer(1, 158, "Only parents", 0),
  makeQuizAnswer(1, 158, "Siblings over 18", 0),

  // Question 159: Condition for reunification
  makeQuizAnswer(1, 159, "Adequate housing for the family", 1),
  makeQuizAnswer(1, 159, "Swiss citizenship", 0),
  makeQuizAnswer(1, 159, "Permanent employment", 0),
  makeQuizAnswer(1, 159, "Fluency in German", 0),

  // Question 160: Time limit for children over 12
  makeQuizAnswer(1, 160, "One year", 1),
  makeQuizAnswer(1, 160, "Five years", 0),
  makeQuizAnswer(1, 160, "Six months", 0),
  makeQuizAnswer(1, 160, "Two years", 0),

  // Question 161: Who cannot bring all family members
  makeQuizAnswer(1, 161, "Citizens from third countries", 1),
  makeQuizAnswer(1, 161, "Swiss citizens", 0),
  makeQuizAnswer(1, 161, "EU/EFTA citizens", 0),
  makeQuizAnswer(1, 161, "All residents", 0),

  // Question 162: Required document
  makeQuizAnswer(1, 162, "Valid identity card or passport", 1),
  makeQuizAnswer(1, 162, "Swiss work permit", 0),
  makeQuizAnswer(1, 162, "Tax return", 0),
  makeQuizAnswer(1, 162, "Health certificate", 0),

  // Question 163: Children’s obligation
  makeQuizAnswer(1, 163, "Attend compulsory schooling until age 16", 1),
  makeQuizAnswer(1, 163, "Obtain a work permit", 0),
  makeQuizAnswer(1, 163, "Learn Swiss history", 0),
  makeQuizAnswer(1, 163, "Register with the police", 0),

  // Question 164: Where to apply
  makeQuizAnswer(1, 164, "Cantonal immigration authorities", 1),
  makeQuizAnswer(1, 164, "Federal tax office", 0),
  makeQuizAnswer(1, 164, "Local police station", 0),
  makeQuizAnswer(1, 164, "Swiss embassy", 0),

  // Quiz 22: Death
  // Question 165: Death certificate in hospital
  makeQuizAnswer(1, 165, "The hospital", 1),
  makeQuizAnswer(1, 165, "The police", 0),
  makeQuizAnswer(1, 165, "The civil register office", 0),
  makeQuizAnswer(1, 165, "The family doctor", 0),

  // Question 166
  makeQuizAnswer(1, 166, "Within two days", 1),
  makeQuizAnswer(1, 166, "Within one week", 0),
  makeQuizAnswer(1, 166, "Within one month", 0),
  makeQuizAnswer(1, 166, "Within 24 hours", 0),

  // Question 167
  makeQuizAnswer(1, 167, "Original medical death certificate", 1),
  makeQuizAnswer(1, 167, "Birth certificate", 0),
  makeQuizAnswer(1, 167, "Marriage certificate", 0),
  makeQuizAnswer(1, 167, "Tax return", 0),

  // Question 168
  makeQuizAnswer(1, 168, "Civil register office confirms the death report", 1),
  makeQuizAnswer(1, 168, "Police approval", 0),
  makeQuizAnswer(1, 168, "Tax clearance", 0),
  makeQuizAnswer(1, 168, "Insurance notification", 0),

  // Question 169
  makeQuizAnswer(1, 169, "Swiss representation abroad", 1),
  makeQuizAnswer(1, 169, "Local police", 0),
  makeQuizAnswer(1, 169, "Federal health office", 0),
  makeQuizAnswer(1, 169, "Cantonal tax office", 0),

  // Question 170
  makeQuizAnswer(1, 170, "Prevent financial hardship for survivors", 1),
  makeQuizAnswer(1, 170, "Cover funeral costs", 0),
  makeQuizAnswer(1, 170, "Pay off debts", 0),
  makeQuizAnswer(1, 170, "Support education", 0),

  // Question 171
  makeQuizAnswer(1, 171, "CHF 2016", 1),
  makeQuizAnswer(1, 171, "CHF 1008", 0),
  makeQuizAnswer(1, 171, "CHF 3000", 0),
  makeQuizAnswer(1, 171, "CHF 504", 0),

  // Question 172
  makeQuizAnswer(1, 172, "Cancel the deceased’s insurance policies", 1),
  makeQuizAnswer(1, 172, "File a tax return", 0),
  makeQuizAnswer(1, 172, "Register a new address", 0),
  makeQuizAnswer(1, 172, "Apply for a new passport", 0),

  // Quiz 23: Divorce
  // Question 173
  makeQuizAnswer(1, 173, "Competent cantonal court", 1),
  makeQuizAnswer(1, 173, "Civil register office", 0),
  makeQuizAnswer(1, 173, "Federal migration office", 0),
  makeQuizAnswer(1, 173, "Local commune office", 0),

  // Question 174
  makeQuizAnswer(1, 174, "Joint application with agreement on consequences", 1),
  makeQuizAnswer(1, 174, "Court approval without agreement", 0),
  makeQuizAnswer(1, 174, "Separate applications", 0),
  makeQuizAnswer(1, 174, "Mediation session", 0),

  // Question 175
  makeQuizAnswer(1, 175, "At least two years", 1),
  makeQuizAnswer(1, 175, "One year", 0),
  makeQuizAnswer(1, 175, "Six months", 0),
  makeQuizAnswer(1, 175, "Three years", 0),

  // Question 176
  makeQuizAnswer(1, 176, "Three to four months", 1),
  makeQuizAnswer(1, 176, "One year", 0),
  makeQuizAnswer(1, 176, "Six weeks", 0),
  makeQuizAnswer(1, 176, "Two years", 0),

  // Question 177
  makeQuizAnswer(1, 177, "Joint responsibility is the rule", 1),
  makeQuizAnswer(1, 177, "Always sole responsibility", 0),
  makeQuizAnswer(1, 177, "No responsibility assigned", 0),
  makeQuizAnswer(1, 177, "Decided by children", 0),

  // Question 178
  makeQuizAnswer(1, 178, "Contact a canton’s debt collection agency", 1),
  makeQuizAnswer(1, 178, "File a new divorce case", 0),
  makeQuizAnswer(1, 178, "Report to the police", 0),
  makeQuizAnswer(1, 178, "Apply for a loan", 0),

  // Question 179
  makeQuizAnswer(1, 179, "May stay under certain conditions", 1),
  makeQuizAnswer(1, 179, "Must leave immediately", 0),
  makeQuizAnswer(1, 179, "Automatically upgraded to C permit", 0),
  makeQuizAnswer(1, 179, "No change in status", 0),

  // Question 180
  makeQuizAnswer(1, 180, "CHF 1,000 to CHF 4,000", 1),
  makeQuizAnswer(1, 180, "CHF 500 to CHF 1,000", 0),
  makeQuizAnswer(1, 180, "CHF 5,000 to CHF 10,000", 0),
  makeQuizAnswer(1, 180, "Free of charge", 0),

  // Quiz 24: Inheritance
  // Question 181
  makeQuizAnswer(1, 181, "Spouses and children", 1),
  makeQuizAnswer(1, 181, "All heirs", 0),
  makeQuizAnswer(1, 181, "Only siblings", 0),
  makeQuizAnswer(1, 181, "Non-relatives", 0),

  // Question 182
  makeQuizAnswer(1, 182, "Copy of death certificate and proof of entitlement", 1),
  makeQuizAnswer(1, 182, "Tax return", 0),
  makeQuizAnswer(1, 182, "Marriage certificate", 0),
  makeQuizAnswer(1, 182, "Bank statement", 0),

  // Question 183
  makeQuizAnswer(1, 183, "Three months", 1),
  makeQuizAnswer(1, 183, "One month", 0),
  makeQuizAnswer(1, 183, "Six months", 0),
  makeQuizAnswer(1, 183, "One year", 0),

  // Question 184
  makeQuizAnswer(1, 184, "Canton or commune", 1),
  makeQuizAnswer(1, 184, "Federal government", 0),
  makeQuizAnswer(1, 184, "Charity", 0),
  makeQuizAnswer(1, 184, "Bank", 0),

  // Question 185
  makeQuizAnswer(1, 185, "Holographic will", 1),
  makeQuizAnswer(1, 185, "Public deed will", 0),
  makeQuizAnswer(1, 185, "Oral will", 0),
  makeQuizAnswer(1, 185, "Notarial will", 0),

  // Question 186
  makeQuizAnswer(1, 186, "Agreement for an heir to renounce inheritance", 1),
  makeQuizAnswer(1, 186, "Tax exemption form", 0),
  makeQuizAnswer(1, 186, "Marriage contract", 0),
  makeQuizAnswer(1, 186, "Loan agreement", 0),

  // Question 187
  makeQuizAnswer(1, 187, "List assets and debts of the estate", 1),
  makeQuizAnswer(1, 187, "Distribute the estate", 0),
  makeQuizAnswer(1, 187, "Tax the estate", 0),
  makeQuizAnswer(1, 187, "Sell the estate", 0),

  // Question 188
  makeQuizAnswer(1, 188, "Spouse and children", 1),
  makeQuizAnswer(1, 188, "Siblings only", 0),
  makeQuizAnswer(1, 188, "Friends", 0),
  makeQuizAnswer(1, 188, "All relatives", 0),

  // Quiz 24: Marriage
  // Question 189
  makeQuizAnswer(1, 189, "18 years old", 1),
  makeQuizAnswer(1, 189, "16 years old", 0),
  makeQuizAnswer(1, 189, "21 years old", 0),
  makeQuizAnswer(1, 189, "25 years old", 0),

  // Question 190
  makeQuizAnswer(1, 190, "Submit a marriage application", 1),
  makeQuizAnswer(1, 190, "Obtain a work permit", 0),
  makeQuizAnswer(1, 190, "Register with the tax office", 0),
  makeQuizAnswer(1, 190, "Apply for citizenship", 0),

  // Question 191
  makeQuizAnswer(1, 191, "Participation in acquired property", 1),
  makeQuizAnswer(1, 191, "Community of property", 0),
  makeQuizAnswer(1, 191, "Separation of property", 0),
  makeQuizAnswer(1, 191, "Joint ownership", 0),

  // Question 192
  makeQuizAnswer(1, 192, "1 July 2022", 1),
  makeQuizAnswer(1, 192, "1 January 2020", 0),
  makeQuizAnswer(1, 192, "1 June 2021", 0),
  makeQuizAnswer(1, 192, "1 August 2023", 0),

  // Question 193
  makeQuizAnswer(1, 193, "Two witnesses over 18", 1),
  makeQuizAnswer(1, 193, "Parental consent", 0),
  makeQuizAnswer(1, 193, "Swiss citizenship", 0),
  makeQuizAnswer(1, 193, "Religious officiant", 0),

  // Question 194
  makeQuizAnswer(1, 194, "File joint tax return", 1),
  makeQuizAnswer(1, 194, "File separate tax returns", 0),
  makeQuizAnswer(1, 194, "No tax obligation", 0),
  makeQuizAnswer(1, 194, "Pay individual income tax", 0),

  // Question 195
  makeQuizAnswer(1, 195, "Can be converted to marriage", 1),
  makeQuizAnswer(1, 195, "Automatically becomes marriage", 0),
  makeQuizAnswer(1, 195, "No longer valid", 0),
  makeQuizAnswer(1, 195, "Cannot be changed", 0),

  // Question 196
  makeQuizAnswer(1, 196, "CHF 300 to CHF 400", 1),
  makeQuizAnswer(1, 196, "CHF 100 to CHF 200", 0),
  makeQuizAnswer(1, 196, "CHF 500 to CHF 600", 0),
  makeQuizAnswer(1, 196, "Free of charge", 0),
];

export const quizzesEN: Quiz[] = [...quizCustom, ...quizDocuments, ...quizFamily];

export const quizQuestionsEN: QuizQuestion[] = [...quizQuestionCustom, ...quizQuestionDocuments, ...quizQuestionFamily];

export const quizAnswersEN: QuizAnswer[] = [...quizAnswerCustom, ...quizAnswerDocuments, ...quizAnswerFamily];
