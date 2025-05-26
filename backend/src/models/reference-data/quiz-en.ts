import type { Quiz, QuizAnswer, QuizQuestion } from "../model";

// Custom
// Quiz 1 - 5
const quizCustom = [
  { localeId: 1, categoryId: 1, title: "Customs Basics" },
  { localeId: 1, categoryId: 1, title: "Moving to Switzerland" },
  { localeId: 1, categoryId: 1, title: "Ordering Goods from Abroad" },
  { localeId: 1, categoryId: 1, title: "Shopping Tourism" },
  { localeId: 1, categoryId: 1, title: "Special Situations" },
];

// Question 1 - 36
const quizQuestionCustom = [
  //Customs Basics (Quiz 1)
  { localeId: 1, quizId: 1, question: "What is the duty-free value threshold for personal imports into Switzerland?" },
  { localeId: 1, quizId: 1, question: "Which of the following items require declaration if exceeded?" },
  { localeId: 1, quizId: 1, question: "What happens if you fail to declare goods?" },
  { localeId: 1, quizId: 1, question: "Which items are exempt from duties regardless of value?" },
  { localeId: 1, quizId: 1, question: "How often can you benefit from the duty-free threshold?" },
  { localeId: 1, quizId: 1, question: "Are children eligible for the same duty-free allowances?" },
  { localeId: 1, quizId: 1, question: "Do duty-free limits apply per person or per family?" },
  { localeId: 1, quizId: 1, question: "What should you do if you're unsure whether to declare something?" },

  // Moving to Switzerland (Quiz 2)
  { localeId: 1, quizId: 2, question: "Can you import pets duty-free when relocating?" },
  { localeId: 1, quizId: 2, question: "What items are excluded from duty-free relocation imports?" },
  { localeId: 1, quizId: 2, question: "Is a residence permit required for relocation import?" },
  { localeId: 1, quizId: 2, question: "How should goods be transported for duty-free relocation?" },
  { localeId: 1, quizId: 2, question: "How long must you have used belongings before importing them duty-free?" },
  { localeId: 1, quizId: 2, question: "What document is NOT required when moving?" },
  { localeId: 1, quizId: 2, question: "What is the deadline for importing goods duty-free after relocation?" },

  // Ordering Goods from Abroad (Quiz 3)
  { localeId: 1, quizId: 3, question: "Do customs charges apply to gifts sent by mail?" },
  { localeId: 1, quizId: 3, question: "Are shipping costs included when calculating VAT?" },
  { localeId: 1, quizId: 3, question: "Can you dispute a customs charge?" },
  { localeId: 1, quizId: 3, question: "Where can you find customs rates for specific goods?" },
  { localeId: 1, quizId: 3, question: "Are second-hand goods treated differently for customs?" },
  { localeId: 1, quizId: 3, question: "What is the VAT exemption limit for 8.1% goods?" },
  { localeId: 1, quizId: 3, question: "Who typically pays customs duties for online purchases?" },

  // Shopping Tourism (Quiz 4)
  { localeId: 1, quizId: 4, question: "Can you reclaim foreign VAT when shopping abroad?" },
  { localeId: 1, quizId: 4, question: "Is it allowed to split purchases to stay below limits?" },
  { localeId: 1, quizId: 4, question: "Does group travel affect import limits?" },
  { localeId: 1, quizId: 4, question: "Do food items have special restrictions?" },
  { localeId: 1, quizId: 4, question: "What documents help during inspection?" },
  { localeId: 1, quizId: 4, question: "How much meat can you import duty-free per person per day?" },
  { localeId: 1, quizId: 4, question: "What app can be used to declare goods before entering Switzerland?" },

  // Special Situations (Quiz 5)
  { localeId: 1, quizId: 5, question: "Can you import medication for personal use?" },
  { localeId: 1, quizId: 5, question: "What rules apply for temporary imports like event equipment?" },
  { localeId: 1, quizId: 5, question: "Do diplomatic goods have special customs treatment?" },
  { localeId: 1, quizId: 5, question: "Are there exceptions for humanitarian aid shipments?" },
  { localeId: 1, quizId: 5, question: "What is required to import cultural artifacts?" },
  { localeId: 1, quizId: 5, question: "What is the rule regarding loaned vehicles?" },
  { localeId: 1, quizId: 5, question: "Do you need to declare weapons?" },
];

// Answer 1 - 143
const quizAnswerCustom: QuizAnswer[] = [
  // Question 1: Duty-free value threshold for personal imports
  { localeId: 1, quizQuestionId: 1, answer: "CHF 100", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 1, answer: "CHF 150", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 1, answer: "CHF 200", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 1, answer: "CHF 300", isCorrect: 0 },

  // Question 2: Items requiring declaration if exceeded
  { localeId: 1, quizQuestionId: 2, answer: "Books", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 2, answer: "Meat and alcohol", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 2, answer: "Clothing", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 2, answer: "Electronics", isCorrect: 0 },

  // Question 3: Consequences of failing to declare goods
  { localeId: 1, quizQuestionId: 3, answer: "You are warned", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 3, answer: "You may receive a fine", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 3, answer: "Your items could be seized", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 3, answer: "Nothing happens", isCorrect: 0 },

  // Question 4: Items exempt from duties
  { localeId: 1, quizQuestionId: 4, answer: "Personal medications", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 4, answer: "Electronics", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 4, answer: "Alcohol", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 4, answer: "Tobacco", isCorrect: 0 },

  // Question 5: Frequency of duty-free threshold
  { localeId: 1, quizQuestionId: 5, answer: "Once per day", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 5, answer: "Once per week", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 5, answer: "Once per month", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 5, answer: "Unlimited", isCorrect: 0 },

  // Question 6: Duty-free allowances for children
  { localeId: 1, quizQuestionId: 6, answer: "Yes, same as adults", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 6, answer: "No, children have no allowance", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 6, answer: "Half of adult allowance", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 6, answer: "Only for specific items", isCorrect: 0 },

  // Question 7: Duty-free limits per person or family
  { localeId: 1, quizQuestionId: 7, answer: "Per person", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 7, answer: "Per family", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 7, answer: "Per household", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 7, answer: "Per trip", isCorrect: 0 },

  // Question 8: What to do if unsure about declaring
  { localeId: 1, quizQuestionId: 8, answer: "Declare it", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 8, answer: "Ignore it", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 8, answer: "Ask a friend", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 8, answer: "Hide it", isCorrect: 0 },

  // Question 9: Importing pets duty-free
  { localeId: 1, quizQuestionId: 9, answer: "Yes, with conditions", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 9, answer: "No, always dutiable", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 9, answer: "Only for dogs", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 9, answer: "Only for cats", isCorrect: 0 },

  // Question 10: Items excluded from duty-free relocation
  { localeId: 1, quizQuestionId: 10, answer: "New furniture", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 10, answer: "Used clothing", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 10, answer: "Personal books", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 10, answer: "Kitchenware", isCorrect: 0 },

  // Question 11: Residence permit for relocation import
  { localeId: 1, quizQuestionId: 11, answer: "Not always required", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 11, answer: "Always required", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 11, answer: "Only for EU citizens", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 11, answer: "Only for non-EU citizens", isCorrect: 0 },

  // Question 12: Transport method for duty-free relocation
  { localeId: 1, quizQuestionId: 12, answer: "By any means", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 12, answer: "Only by sea", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 12, answer: "Only by air", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 12, answer: "Only by road", isCorrect: 0 },

  // Question 13: Usage duration for duty-free belongings
  { localeId: 1, quizQuestionId: 13, answer: "6 months", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 13, answer: "1 month", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 13, answer: "1 year", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 13, answer: "No requirement", isCorrect: 0 },

  // Question 14: Document NOT required when moving
  { localeId: 1, quizQuestionId: 14, answer: "Bank statement", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 14, answer: "List of imported goods", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 14, answer: "Residence permit", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 14, answer: "Moving contract", isCorrect: 0 },

  // Question 15: Deadline for importing goods duty-free
  { localeId: 1, quizQuestionId: 15, answer: "1 year", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 15, answer: "6 months", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 15, answer: "2 years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 15, answer: "No deadline", isCorrect: 0 },

  // Question 16: Customs charges for gifts by mail
  { localeId: 1, quizQuestionId: 16, answer: "Yes, above CHF 100", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 16, answer: "No, gifts are exempt", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 16, answer: "Only for non-EU senders", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 16, answer: "Only for commercial gifts", isCorrect: 0 },

  // Question 17: Shipping costs in VAT calculation
  { localeId: 1, quizQuestionId: 17, answer: "Yes", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 17, answer: "Only for express shipping", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 17, answer: "Only for EU shipments", isCorrect: 0 },

  // Question 18: Disputing a customs charge
  { localeId: 1, quizQuestionId: 18, answer: "Yes, with appeal", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 18, answer: "No, never", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 18, answer: "Only for businesses", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 18, answer: "Only for residents", isCorrect: 0 },

  // Question 19: Finding customs rates
  { localeId: 1, quizQuestionId: 19, answer: "Swiss Customs website", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 19, answer: "Local post office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 19, answer: "Travel agency", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 19, answer: "Retailer’s website", isCorrect: 0 },

  // Question 20: Second-hand goods treatment
  { localeId: 1, quizQuestionId: 20, answer: "Same as new goods", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 20, answer: "Always exempt", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 20, answer: "Lower VAT rate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 20, answer: "No declaration needed", isCorrect: 0 },

  // Question 21: VAT exemption limit for 8.1% goods
  { localeId: 1, quizQuestionId: 21, answer: "CHF 62", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 21, answer: "CHF 100", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 21, answer: "CHF 150", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 21, answer: "CHF 200", isCorrect: 0 },

  // Question 22: Who pays customs duties for online purchases
  { localeId: 1, quizQuestionId: 22, answer: "Recipient", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 22, answer: "Sender", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 22, answer: "Carrier", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 22, answer: "Swiss government", isCorrect: 0 },

  // Question 23: Reclaiming foreign VAT
  { localeId: 1, quizQuestionId: 23, answer: "Yes, with receipt", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 23, answer: "No, never", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 23, answer: "Only in EU", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 23, answer: "Only for residents", isCorrect: 0 },

  // Question 24: Splitting purchases to stay below limits
  { localeId: 1, quizQuestionId: 24, answer: "Not allowed", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 24, answer: "Allowed", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 24, answer: "Only for families", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 24, answer: "Only for groups", isCorrect: 0 },

  // Question 25: Group travel affecting import limits
  { localeId: 1, quizQuestionId: 25, answer: "No, individual limits", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 25, answer: "Yes, combined limits", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 25, answer: "Only for families", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 25, answer: "Only for tours", isCorrect: 0 },

  // Question 26: Special restrictions for food items
  { localeId: 1, quizQuestionId: 26, answer: "Yes, quantity limits", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 26, answer: "No restrictions", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 26, answer: "Only for meat", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 26, answer: "Only for dairy", isCorrect: 0 },

  // Question 27: Documents helping during inspection
  { localeId: 1, quizQuestionId: 27, answer: "Receipts", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 27, answer: "Passport", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 27, answer: "Travel itinerary", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 27, answer: "Hotel booking", isCorrect: 0 },

  // Question 28: Meat import limit per person per day
  { localeId: 1, quizQuestionId: 28, answer: "1 kg", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 28, answer: "0.5 kg", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 28, answer: "2 kg", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 28, answer: "Unlimited", isCorrect: 0 },

  // Question 29: App for declaring goods
  { localeId: 1, quizQuestionId: 29, answer: "QuickZoll", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 29, answer: "FastEntry", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 29, answer: "EasyCross", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 29, answer: "QuickScan", isCorrect: 0 },

  // Question 30: Importing medication for personal use
  { localeId: 1, quizQuestionId: 30, answer: "Yes, limited quantity", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 30, answer: "No, prohibited", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 30, answer: "Only with prescription", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 30, answer: "Unlimited", isCorrect: 0 },

  // Question 31: Rules for temporary imports
  { localeId: 1, quizQuestionId: 31, answer: "ATA Carnet", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 31, answer: "No documentation", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 31, answer: "Only for EU goods", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 31, answer: "Permanent import only", isCorrect: 0 },

  // Question 32: Diplomatic goods customs treatment
  { localeId: 1, quizQuestionId: 32, answer: "Exempt with approval", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 32, answer: "Same as regular goods", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 32, answer: "Prohibited", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 32, answer: "Only for EU diplomats", isCorrect: 0 },

  // Question 33: Exceptions for humanitarian aid
  { localeId: 1, quizQuestionId: 33, answer: "Yes, duty-free", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 33, answer: "No, standard duties", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 33, answer: "Only for food", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 33, answer: "Only for medicine", isCorrect: 0 },

  // Question 34: Importing cultural artifacts
  { localeId: 1, quizQuestionId: 34, answer: "Export permit needed", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 34, answer: "No restrictions", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 34, answer: "Only for museums", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 34, answer: "Prohibited", isCorrect: 0 },

  // Question 35: Rules for loaned vehicles
  { localeId: 1, quizQuestionId: 35, answer: "Written authorization", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 35, answer: "No special rule", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 35, answer: "Must be registered", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 35, answer: "Unrestricted use", isCorrect: 0 },

  // Question 36: Declaring weapons
  { localeId: 1, quizQuestionId: 36, answer: "Yes, always", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 36, answer: "Only with ammunition", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 36, answer: "Only in quantities", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 36, answer: "No", isCorrect: 0 },
];

// Documents
// Quiz 6 - 19
const quizDocuments: Quiz[] = [
  { localeId: 1, categoryId: 2, title: "Certificate of Inheritance" },
  { localeId: 1, categoryId: 2, title: "Civil Status Certificates" },
  { localeId: 1, categoryId: 2, title: "Criminal Records Extract" },
  { localeId: 1, categoryId: 2, title: "Driving Licence" },
  { localeId: 1, categoryId: 2, title: "International Driving Licence" },
  { localeId: 1, categoryId: 2, title: "Extract from the Debt Enforcement Register" },
  { localeId: 1, categoryId: 2, title: "Hunting Training and Licence" },
  { localeId: 1, categoryId: 2, title: "Living Wills" },
  { localeId: 1, categoryId: 2, title: "Passport and Identity Card" },
  { localeId: 1, categoryId: 2, title: "Lost or Stolen Passport or Identity Card" },
  { localeId: 1, categoryId: 2, title: "Permits for Living in Switzerland" },
  { localeId: 1, categoryId: 2, title: "Requesting an OASI Card" },
  { localeId: 1, categoryId: 2, title: "Salary Certificate" },
  { localeId: 1, categoryId: 2, title: "Lost Vehicle Registration Document" },
];

// Question 37 - 148
const quizQuestionDocuments = [
  // Quiz 6: Certificate of Inheritance
  { localeId: 1, quizId: 6, question: "Who can apply for a certificate of inheritance if there is no will?" },
  { localeId: 1, quizId: 6, question: "What document is required to obtain a certificate of inheritance?" },
  { localeId: 1, quizId: 6, question: "What factor influences the cost of a certificate of inheritance?" },
  { localeId: 1, quizId: 6, question: "When can you apply for a certificate if there is a will?" },
  { localeId: 1, quizId: 6, question: "What must you prove to get a certificate of inheritance?" },
  { localeId: 1, quizId: 6, question: "What is the purpose of a certificate of inheritance?" },
  { localeId: 1, quizId: 6, question: "Who are considered statutory heirs?" },
  { localeId: 1, quizId: 6, question: "What additional costs may arise for a certificate of inheritance?" },

  // Quiz 7: Civil Status Certificates
  { localeId: 1, quizId: 7, question: "Where can you request a birth certificate?" },
  { localeId: 1, quizId: 7, question: "What is the standard cost of a civil status certificate?" },
  { localeId: 1, quizId: 7, question: "Who can request a civil status certificate for another person?" },
  { localeId: 1, quizId: 7, question: "Where do Swiss citizens request a certificate of origin?" },
  { localeId: 1, quizId: 7, question: "How can you order a civil status certificate?" },
  { localeId: 1, quizId: 7, question: "What certificate do foreign nationals request for civil status?" },
  { localeId: 1, quizId: 7, question: "What is the cost for a family certificate compared to others?" },
  { localeId: 1, quizId: 7, question: "Can family record books still be ordered?" },

  // Quiz 8: Criminal Records Extract
  { localeId: 1, quizId: 8, question: "What does a standard private extract from the criminal records show?" },
  { localeId: 1, quizId: 8, question: "How much does a standard private extract cost?" },
  { localeId: 1, quizId: 8, question: "When is a special private extract required?" },
  { localeId: 1, quizId: 8, question: "Where can you order a criminal records extract?" },
  { localeId: 1, quizId: 8, question: "What additional cost applies for a legalized extract?" },
  { localeId: 1, quizId: 8, question: "What must an employer provide for a special private extract?" },
  { localeId: 1, quizId: 8, question: "What convictions are listed in a special private extract?" },
  { localeId: 1, quizId: 8, question: "Why might you need a criminal records extract?" },

  // Quiz 9: Driving Licence
  { localeId: 1, quizId: 9, question: "When must you exchange a blue paper driving licence?" },
  { localeId: 1, quizId: 9, question: "What must you do if your Swiss driving licence is stolen?" },
  { localeId: 1, quizId: 9, question: "How long can you drive in Switzerland with a foreign licence?" },
  { localeId: 1, quizId: 9, question: "What is required to exchange an EU/EEA driving licence?" },
  { localeId: 1, quizId: 9, question: "What happens to a lost driving licence once replaced?" },
  { localeId: 1, quizId: 9, question: "How much does a duplicate driving licence cost?" },
  { localeId: 1, quizId: 9, question: "What test is required for non-EU/EEA licence holders?" },
  { localeId: 1, quizId: 9, question: "How long does it take to receive a new driving licence?" },

  // Quiz 10: International Driving Licence
  { localeId: 1, quizId: 10, question: "What is required to use an international driving licence abroad?" },
  { localeId: 1, quizId: 10, question: "Which countries recommend an international driving licence for Swiss drivers?" },
  { localeId: 1, quizId: 10, question: "What is the validity period of an international driving licence?" },
  { localeId: 1, quizId: 10, question: "Where can you order an international driving licence?" },
  { localeId: 1, quizId: 10, question: "What is the approximate cost of an international driving licence?" },
  { localeId: 1, quizId: 10, question: "Can you renew an international driving licence?" },
  { localeId: 1, quizId: 10, question: "When might a foreign driver need an international licence in Switzerland?" },
  { localeId: 1, quizId: 10, question: "Who provides information on required driving documents abroad?" },

  // Quiz 11: Extract from the Debt Enforcement Register
  { localeId: 1, quizId: 11, question: "What does an extract from the debt enforcement register show?" },
  { localeId: 1, quizId: 11, question: "How can you request an extract from the debt enforcement register?" },
  { localeId: 1, quizId: 11, question: "How long does an entry remain in the debt enforcement register?" },
  { localeId: 1, quizId: 11, question: "What is required to request an extract for another person?" },
  { localeId: 1, quizId: 11, question: "How much does an extract from the debt enforcement register cost?" },
  { localeId: 1, quizId: 11, question: "How can an entry be removed from the debt enforcement register?" },
  { localeId: 1, quizId: 11, question: "When might you need a debt enforcement register extract?" },
  { localeId: 1, quizId: 11, question: "Can you request an extract without informing the person concerned?" },

  // Quiz 12: Hunting Training and Licence
  { localeId: 1, quizId: 12, question: "What is required before you can hunt in Switzerland?" },
  { localeId: 1, quizId: 12, question: "Which canton does not permit hunting?" },
  { localeId: 1, quizId: 12, question: "What must hunters do to prove shooting accuracy?" },
  { localeId: 1, quizId: 12, question: "How do some cantons regulate hunting?" },
  { localeId: 1, quizId: 12, question: "What regulates closed hunting seasons?" },
  { localeId: 1, quizId: 12, question: "What is required to hunt with dogs in Switzerland?" },
  { localeId: 1, quizId: 12, question: "Which cantons use hunting estates instead of licences?" },
  { localeId: 1, quizId: 12, question: "Where can you find information on hunting training?" },

  // Quiz 13: Living Wills
  { localeId: 1, quizId: 13, question: "What is the purpose of a living will?" },
  { localeId: 1, quizId: 13, question: "What must you do to make a living will legally binding?" },
  { localeId: 1, quizId: 13, question: "How often should you review your living will?" },
  { localeId: 1, quizId: 13, question: "Where can you find living will templates?" },
  { localeId: 1, quizId: 13, question: "Who should you give your living will to?" },
  { localeId: 1, quizId: 13, question: "What condition must you meet to create a living will?" },
  { localeId: 1, quizId: 13, question: "What types of living wills are available?" },
  { localeId: 1, quizId: 13, question: "Is a living will mandatory in Switzerland?" },

  // Quiz 14: Passport and Identity Card
  { localeId: 1, quizId: 14, question: "How long does it take to receive a passport in Switzerland?" },
  { localeId: 1, quizId: 14, question: "What biometric data is required for a passport?" },
  { localeId: 1, quizId: 14, question: "What is the validity period of a passport for adults?" },
  { localeId: 1, quizId: 14, question: "Where can Swiss citizens abroad apply for a passport?" },
  { localeId: 1, quizId: 14, question: "What is required for a child’s passport application?" },
  { localeId: 1, quizId: 14, question: "What is the validity period of a child’s passport?" },
  { localeId: 1, quizId: 14, question: "What is a temporary passport?" },
  { localeId: 1, quizId: 14, question: "What photo requirements apply for a passport?" },

  // Quiz 15: Lost or Stolen Passport or Identity Card
  { localeId: 1, quizId: 15, question: "What must you do if your passport is stolen in Switzerland?" },
  { localeId: 1, quizId: 15, question: "What happens to a lost passport after a police report is filed?" },
  { localeId: 1, quizId: 15, question: "What is the maximum validity of a temporary passport?" },
  { localeId: 1, quizId: 15, question: "What must you do if your passport is stolen abroad?" },
  { localeId: 1, quizId: 15, question: "How can you apply for a new passport after a theft?" },
  { localeId: 1, quizId: 15, question: "What happens if you find a lost passport after reporting it?" },
  { localeId: 1, quizId: 15, question: "Who cancels a stolen passport in Switzerland?" },
  { localeId: 1, quizId: 15, question: "What is required to get a temporary passport?" },

  // Quiz 16: Permits for Living in Switzerland
  { localeId: 1, quizId: 16, question: "Who must obtain a permit to live in Switzerland for more than three months?" },
  { localeId: 1, quizId: 16, question: "What document is required to apply for a permit renewal?" },
  { localeId: 1, quizId: 16, question: "What condition allows third-country citizens to stay after divorce?" },
  { localeId: 1, quizId: 16, question: "What permit is for temporarily admitted foreigners?" },
  { localeId: 1, quizId: 16, question: "Where do you apply for a residence permit?" },
  { localeId: 1, quizId: 16, question: "What must you do if your permit is lost?" },
  { localeId: 1, quizId: 16, question: "What permit do EU/EFTA cross-border commuters need?" },
  { localeId: 1, quizId: 16, question: "When can you apply to renew your permit?" },

  // Quiz 17: Requesting an OASI Card
  { localeId: 1, quizId: 17, question: "How can an employee request an OASI card?" },
  { localeId: 1, quizId: 17, question: "Where should self-employed individuals send their OASI card application?" },
  { localeId: 1, quizId: 17, question: "Who issues an OASI card for someone living abroad and not working in Switzerland?" },
  { localeId: 1, quizId: 17, question: "What form is required to request an OASI card?" },
  { localeId: 1, quizId: 17, question: "Where can you find the OASI card application form?" },
  { localeId: 1, quizId: 17, question: "What should you do if you lose your OASI card?" },
  { localeId: 1, quizId: 17, question: "Who handles OASI card requests for non-employees?" },
  { localeId: 1, quizId: 17, question: "What is the process for getting a new OASI card?" },

  // Quiz 18: Salary Certificate
  { localeId: 1, quizId: 18, question: "When do employees typically receive their salary certificate?" },
  { localeId: 1, quizId: 18, question: "What should you do if your salary certificate is incorrect?" },
  { localeId: 1, quizId: 18, question: "Who must provide a salary certificate to employees?" },
  { localeId: 1, quizId: 18, question: "What is included in a salary certificate?" },
  { localeId: 1, quizId: 18, question: "When must a salary certificate be attached to a tax return?" },
  { localeId: 1, quizId: 18, question: "Who can help employers create a salary certificate?" },
  { localeId: 1, quizId: 18, question: "What happens if you change employers during the year?" },
  { localeId: 1, quizId: 18, question: "Do employees need to request a salary certificate?" },

  // Quiz 19: Lost Vehicle Registration Document
  { localeId: 1, quizId: 19, question: "Who can apply for a replacement vehicle registration document?" },
  { localeId: 1, quizId: 19, question: "What is the cost range for a new vehicle registration document?" },
  { localeId: 1, quizId: 19, question: "What must you do if you find a lost vehicle registration document?" },
  { localeId: 1, quizId: 19, question: "Where do you apply for a replacement vehicle registration document?" },
  { localeId: 1, quizId: 19, question: "What must you notify within 19 days for a vehicle registration document?" },
  { localeId: 1, quizId: 19, question: "What happens to a replacement vehicle registration document if the original is found?" },
  { localeId: 1, quizId: 19, question: "Who issues a replacement vehicle registration document?" },
  { localeId: 1, quizId: 19, question: "What is the process for replacing a stolen vehicle registration document?" },
];

const quizAnswerDocuments: QuizAnswer[] = [
  // Quiz 37: Certificate of Inheritance
  // Question 37
  { localeId: 1, quizQuestionId: 37, answer: "Statutory heirs", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 37, answer: "Anyone", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 37, answer: "Only the executor", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 37, answer: "Only non-relatives", isCorrect: 0 },

  // Question 38
  { localeId: 1, quizQuestionId: 38, answer: "Death certificate", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 38, answer: "Bank statement", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 38, answer: "Tax return", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 38, answer: "Medical records", isCorrect: 0 },

  // Question 39
  { localeId: 1, quizQuestionId: 39, answer: "Enquiries needed", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 39, answer: "Fixed fee", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 39, answer: "Number of heirs", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 39, answer: "Estate value", isCorrect: 0 },

  // Question 40
  { localeId: 1, quizQuestionId: 40, answer: "After official notice", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 40, answer: "Immediately", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 40, answer: "Before the will is read", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 40, answer: "No restriction", isCorrect: 0 },

  // Question 41
  { localeId: 1, quizQuestionId: 41, answer: "Not renounced inheritance", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 41, answer: "Swiss citizenship", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 41, answer: "Property ownership", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 41, answer: "Tax compliance", isCorrect: 0 },

  // Question 42
  { localeId: 1, quizQuestionId: 42, answer: "Deal with deceased's assets", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 42, answer: "File taxes", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 42, answer: "Register property", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 42, answer: "Apply for permits", isCorrect: 0 },

  // Question 43
  { localeId: 1, quizQuestionId: 43, answer: "Spouse, descendants, parents", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 43, answer: "Friends, colleagues", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 43, answer: "Only children", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 43, answer: "Only spouse", isCorrect: 0 },

  // Question 44
  { localeId: 1, quizQuestionId: 44, answer: "Civil register office fees", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 44, answer: "Legal fees", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 44, answer: "Bank fees", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 44, answer: "No additional costs", isCorrect: 0 },

  // Quiz 2: Civil Status Certificates
  // Question 45
  { localeId: 1, quizQuestionId: 45, answer: "Register office at place of birth", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 45, answer: "Cantonal passport office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 45, answer: "Swiss embassy", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 45, answer: "Tax office", isCorrect: 0 },

  // Question 46
  { localeId: 1, quizQuestionId: 46, answer: "CHF 30", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 46, answer: "CHF 17", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 46, answer: "CHF 50", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 46, answer: "Free", isCorrect: 0 },

  // Question 47
  { localeId: 1, quizQuestionId: 47, answer: "With power of attorney", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 47, answer: "Anyone", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 47, answer: "Only family members", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 47, answer: "Only Swiss citizens", isCorrect: 0 },

  // Question 48
  { localeId: 1, quizQuestionId: 48, answer: "Register office at place of origin", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 48, answer: "Place of residence", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 48, answer: "Place of birth", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 48, answer: "Any register office", isCorrect: 0 },

  // Question 49
  { localeId: 1, quizQuestionId: 49, answer: "Online or in person", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 49, answer: "Only online", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 49, answer: "Only in person", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 49, answer: "By mail only", isCorrect: 0 },

  // Question 50
  { localeId: 1, quizQuestionId: 50, answer: "Confirmation of registered civil status", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 50, answer: "Birth certificate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 50, answer: "Marriage certificate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 50, answer: "Family certificate", isCorrect: 0 },

  // Question 51
  { localeId: 1, quizQuestionId: 51, answer: "Higher than CHF 30", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 51, answer: "Same as CHF 30", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 51, answer: "Lower than CHF 30", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 51, answer: "Free", isCorrect: 0 },

  // Question 52
  { localeId: 1, quizQuestionId: 52, answer: "No, only updated", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 52, answer: "Yes, new orders allowed", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 52, answer: "Only for Swiss citizens", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 52, answer: "Only for foreign nationals", isCorrect: 0 },

  // Quiz 3: Criminal Records Extract
  // Question 53
  { localeId: 1, quizQuestionId: 53, answer: "Felony or misdemeanour convictions", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 53, answer: "Traffic violations", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 53, answer: "Civil disputes", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 53, answer: "Tax records", isCorrect: 0 },

  // Question 54
  { localeId: 1, quizQuestionId: 54, answer: "CHF 17", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 54, answer: "CHF 30", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 54, answer: "CHF 50", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 54, answer: "Free", isCorrect: 0 },

  // Question 55
  { localeId: 1, quizQuestionId: 55, answer: "Contact with minors", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 55, answer: "Job applications", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 55, answer: "Citizenship applications", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 55, answer: "Firearms licences", isCorrect: 0 },

  // Question 56
  { localeId: 1, quizQuestionId: 56, answer: "Post office or online", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 56, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 56, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 56, answer: "Embassy", isCorrect: 0 },

  // Question 57
  { localeId: 1, quizQuestionId: 57, answer: "CHF 20", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 57, answer: "CHF 10", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 57, answer: "CHF 30", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 57, answer: "No additional cost", isCorrect: 0 },

  // Question 58
  { localeId: 1, quizQuestionId: 58, answer: "Signed confirmation", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 58, answer: "Payment receipt", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 58, answer: "ID copy", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 58, answer: "No documentation", isCorrect: 0 },

  // Question 59
  { localeId: 1, quizQuestionId: 59, answer: "Current bans", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 59, answer: "All convictions", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 59, answer: "Past bans", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 59, answer: "No convictions", isCorrect: 0 },

  // Question 60
  { localeId: 1, quizQuestionId: 60, answer: "For job or citizenship", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 60, answer: "For tax filing", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 60, answer: "For travel", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 60, answer: "For marriage", isCorrect: 0 },

  // Quiz 4: Driving Licence
  // Question 61
  { localeId: 1, quizQuestionId: 61, answer: "By 1 November 2024", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 61, answer: "By 1 January 2024", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 61, answer: "No deadline", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 61, answer: "By 31 December 2024", isCorrect: 0 },

  // Question 62
  { localeId: 1, quizQuestionId: 62, answer: "Report to police", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 62, answer: "Apply online", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 62, answer: "Contact tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 62, answer: "No action needed", isCorrect: 0 },

  // Question 63
  { localeId: 1, quizQuestionId: 63, answer: "12 months", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 63, answer: "6 months", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 63, answer: "24 months", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 63, answer: "No limit", isCorrect: 0 },

  // Question 64
  { localeId: 1, quizQuestionId: 64, answer: "Eye test", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 64, answer: "Driving test", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 64, answer: "Theory exam", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 64, answer: "Medical exam", isCorrect: 0 },

  // Question 65
  { localeId: 1, quizQuestionId: 65, answer: "No longer valid", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 65, answer: "Still valid", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 65, answer: "Suspended", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 65, answer: "Renewed", isCorrect: 0 },

  // Question 66
  { localeId: 1, quizQuestionId: 66, answer: "Around CHF 30", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 66, answer: "CHF 50", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 66, answer: "CHF 100", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 66, answer: "Free", isCorrect: 0 },

  // Question 67
  { localeId: 1, quizQuestionId: 67, answer: "Driving test", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 67, answer: "Eye test", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 67, answer: "No test", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 67, answer: "Medical exam", isCorrect: 0 },

  // Question 68
  { localeId: 1, quizQuestionId: 68, answer: "1-2 weeks", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 68, answer: "1-2 days", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 68, answer: "3-4 weeks", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 68, answer: "1 month", isCorrect: 0 },

  // Quiz 5: International Driving Licence
  // Question 69
  { localeId: 1, quizQuestionId: 69, answer: "Swiss driving licence", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 69, answer: "Passport", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 69, answer: "Identity card", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 69, answer: "No additional document", isCorrect: 0 },

  // Question 70
  { localeId: 1, quizQuestionId: 70, answer: "Countries outside EU/EFTA", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 70, answer: "EU countries only", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 70, answer: "EFTA countries only", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 70, answer: "All countries", isCorrect: 0 },

  // Question 71
  { localeId: 1, quizQuestionId: 71, answer: "Three years", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 71, answer: "One year", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 71, answer: "Five years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 71, answer: "No expiry", isCorrect: 0 },

  // Question 72
  { localeId: 1, quizQuestionId: 72, answer: "Road traffic office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 72, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 72, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 72, answer: "Embassy", isCorrect: 0 },

  // Question 73
  { localeId: 1, quizQuestionId: 73, answer: "Around CHF 30", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 73, answer: "CHF 17", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 73, answer: "CHF 50", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 73, answer: "Free", isCorrect: 0 },

  // Question 74
  { localeId: 1, quizQuestionId: 74, answer: "No, order a new one", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 74, answer: "Yes, renewable", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 74, answer: "Only if expired", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 74, answer: "Only in some cantons", isCorrect: 0 },

  // Question 75
  { localeId: 1, quizQuestionId: 75, answer: "Non-Latin characters", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 75, answer: "Expired licence", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 75, answer: "No vehicle categories", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 75, answer: "All foreign licences", isCorrect: 0 },

  // Question 76
  { localeId: 1, quizQuestionId: 76, answer: "Travel agent", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 76, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 76, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 76, answer: "Bank", isCorrect: 0 },

  // Quiz 6: Extract from the Debt Enforcement Register
  // Question 77
  { localeId: 1, quizQuestionId: 77, answer: "Debt enforcement proceedings", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 77, answer: "Criminal convictions", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 77, answer: "Tax records", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 77, answer: "Civil status", isCorrect: 0 },

  // Question 78
  { localeId: 1, quizQuestionId: 78, answer: "Online or in person", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 78, answer: "Only online", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 78, answer: "Only in person", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 78, answer: "Through a lawyer", isCorrect: 0 },

  // Question 79
  { localeId: 1, quizQuestionId: 79, answer: "Five years", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 79, answer: "One year", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 79, answer: "Three years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 79, answer: "Permanent", isCorrect: 0 },

  // Question 80
  { localeId: 1, quizQuestionId: 80, answer: "Signed authorization", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 80, answer: "No documentation", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 80, answer: "Tax return", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 80, answer: "Bank statement", isCorrect: 0 },

  // Question 81
  { localeId: 1, quizQuestionId: 81, answer: "CHF 17", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 81, answer: "CHF 30", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 81, answer: "CHF 50", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 81, answer: "Free", isCorrect: 0 },

  // Question 82
  { localeId: 1, quizQuestionId: 82, answer: "Creditor agreement", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 82, answer: "Court order", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 82, answer: "Tax payment", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 82, answer: "No removal possible", isCorrect: 0 },

  // Question 83
  { localeId: 1, quizQuestionId: 83, answer: "Renting an apartment", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 83, answer: "Filing taxes", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 83, answer: "Registering a vehicle", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 83, answer: "Applying for a passport", isCorrect: 0 },

  // Question 84
  { localeId: 1, quizQuestionId: 84, answer: "Yes, with proof of interest", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 84, answer: "No, always inform", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 84, answer: "Only with court order", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 84, answer: "Only for family", isCorrect: 0 },

  // Quiz 7: Hunting Training and Licence
  // Question 85
  { localeId: 1, quizQuestionId: 85, answer: "Pass an examination", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 85, answer: "Join a club", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 85, answer: "Pay a fee", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 85, answer: "No requirement", isCorrect: 0 },

  // Question 86
  { localeId: 1, quizQuestionId: 86, answer: "Geneva", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 86, answer: "Bern", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 86, answer: "Zurich", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 86, answer: "Vaud", isCorrect: 0 },

  // Question 87
  { localeId: 1, quizQuestionId: 87, answer: "Annual shooting test", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 87, answer: "Monthly shooting test", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 87, answer: "No shooting test", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 87, answer: "Biennial shooting test", isCorrect: 0 },

  // Question 88
  { localeId: 1, quizQuestionId: 88, answer: "Hunting estates", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 88, answer: "No regulation", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 88, answer: "Only licences", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 88, answer: "Federal bans", isCorrect: 0 },

  // Question 89
  { localeId: 1, quizQuestionId: 89, answer: "Confederation", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 89, answer: "Cantons only", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 89, answer: "Hunting associations", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 89, answer: "No regulation", isCorrect: 0 },

  // Question 90
  { localeId: 1, quizQuestionId: 90, answer: "Training and tests", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 90, answer: "No requirements", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 90, answer: "Only a licence", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 90, answer: "Veterinary approval", isCorrect: 0 },

  // Question 91
  { localeId: 1, quizQuestionId: 91, answer: "Zurich, Lucerne, Aargau", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 91, answer: "Bern, Vaud, Ticino", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 91, answer: "Geneva, Jura, Valais", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 91, answer: "Fribourg, Zug, Uri", isCorrect: 0 },

  // Question 92
  { localeId: 1, quizQuestionId: 92, answer: "Cantonal offices", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 92, answer: "Tax authorities", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 92, answer: "Police stations", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 92, answer: "Federal offices", isCorrect: 0 },

  // Quiz 8: Living Wills
  // Question 93
  { localeId: 1, quizQuestionId: 93, answer: "Determine medical treatment", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 93, answer: "Assign inheritance", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 93, answer: "Authorize travel", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 93, answer: "Declare taxes", isCorrect: 0 },

  // Question 94
  { localeId: 1, quizQuestionId: 94, answer: "Date and sign by hand", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 94, answer: "Notarize", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 94, answer: "File with court", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 94, answer: "Register online", isCorrect: 0 },

  // Question 95
  { localeId: 1, quizQuestionId: 95, answer: "Every two years", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 95, answer: "Every year", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 95, answer: "Every five years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 95, answer: "Never", isCorrect: 0 },

  // Question 96
  { localeId: 1, quizQuestionId: 96, answer: "Swiss Medical Association", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 96, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 96, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 96, answer: "Embassy", isCorrect: 0 },

  // Question 97
  { localeId: 1, quizQuestionId: 97, answer: "Family or doctor", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 97, answer: "Lawyer", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 97, answer: "Bank", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 97, answer: "Tax office", isCorrect: 0 },

  // Question 98
  { localeId: 1, quizQuestionId: 98, answer: "Legal capacity", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 98, answer: "Swiss citizenship", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 98, answer: "Medical approval", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 98, answer: "Age limit", isCorrect: 0 },

  // Question 99
  { localeId: 1, quizQuestionId: 99, answer: "General and specific", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 99, answer: "Short and long", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 99, answer: "Legal and medical", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 99, answer: "Public and private", isCorrect: 0 },

  // Question 100
  { localeId: 1, quizQuestionId: 100, answer: "No, optional", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 100, answer: "Yes, mandatory", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 100, answer: "Only for elderly", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 100, answer: "Only for hospitalized", isCorrect: 0 },

  // Quiz 9: Passport and Identity Card
  // Question 101
  { localeId: 1, quizQuestionId: 101, answer: "10 working days", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 101, answer: "5 working days", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 101, answer: "20 working days", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 101, answer: "30 working days", isCorrect: 0 },

  // Question 102
  { localeId: 1, quizQuestionId: 102, answer: "Photo, signature, fingerprints", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 102, answer: "Photo only", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 102, answer: "Signature only", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 102, answer: "No biometric data", isCorrect: 0 },

  // Question 103
  { localeId: 1, quizQuestionId: 103, answer: "10 years", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 103, answer: "5 years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 103, answer: "15 years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 103, answer: "No expiry", isCorrect: 0 },

  // Question 104
  { localeId: 1, quizQuestionId: 104, answer: "Swiss embassy", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 104, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 104, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 104, answer: "Cantonal office", isCorrect: 0 },

  // Question 105
  { localeId: 1, quizQuestionId: 105, answer: "Parental authority", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 105, answer: "Child’s signature", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 105, answer: "Birth certificate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 105, answer: "No requirements", isCorrect: 0 },

  // Question 106
  { localeId: 1, quizQuestionId: 106, answer: "5 years", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 106, answer: "10 years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 106, answer: "3 years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 106, answer: "No expiry", isCorrect: 0 },

  // Question 107
  { localeId: 1, quizQuestionId: 107, answer: "Non-biometric urgent passport", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 107, answer: "Biometric passport", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 107, answer: "Identity card", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 107, answer: "Driving licence", isCorrect: 0 },

  // Question 108
  { localeId: 1, quizQuestionId: 108, answer: "Meet specific requirements", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 108, answer: "Any photo", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 108, answer: "No photo needed", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 108, answer: "Only digital photos", isCorrect: 0 },

  // Quiz 10: Lost or Stolen Passport or Identity Card
  // Question 109
  { localeId: 1, quizQuestionId: 109, answer: "File a police report", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 109, answer: "Apply online", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 109, answer: "Contact embassy", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 109, answer: "No action needed", isCorrect: 0 },

  // Question 110
  { localeId: 1, quizQuestionId: 110, answer: "It is cancelled", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 110, answer: "It remains valid", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 110, answer: "It is renewed", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 110, answer: "It is suspended", isCorrect: 0 },

  // Question 111
  { localeId: 1, quizQuestionId: 111, answer: "12 months", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 111, answer: "6 months", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 111, answer: "24 months", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 111, answer: "No limit", isCorrect: 0 },

  // Question 112
  { localeId: 1, quizQuestionId: 112, answer: "Notify local police and embassy", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 112, answer: "Apply online", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 112, answer: "Contact tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 112, answer: "No action needed", isCorrect: 0 },

  // Question 113
  { localeId: 1, quizQuestionId: 113, answer: "At embassy or online", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 113, answer: "Only online", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 113, answer: "Only at embassy", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 113, answer: "At police station", isCorrect: 0 },

  // Question 114
  { localeId: 1, quizQuestionId: 114, answer: "Hand over to passport office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 114, answer: "Keep it", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 114, answer: "Destroy it", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 114, answer: "Use it", isCorrect: 0 },

  // Question 115
  { localeId: 1, quizQuestionId: 115, answer: "Police", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 115, answer: "Embassy", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 115, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 115, answer: "Passport office", isCorrect: 0 },

  // Question 116
  { localeId: 1, quizQuestionId: 116, answer: "Justified urgency", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 116, answer: "No requirements", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 116, answer: "Payment only", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 116, answer: "Swiss citizenship", isCorrect: 0 },

  // Quiz 11: Permits for Living in Switzerland
  // Question 117
  { localeId: 1, quizQuestionId: 117, answer: "All foreign nationals", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 117, answer: "Only EU/EFTA nationals", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 117, answer: "Only third-country nationals", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 117, answer: "Only Swiss citizens", isCorrect: 0 },

  // Question 118
  { localeId: 1, quizQuestionId: 118, answer: "Valid ID or passport", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 118, answer: "Tax return", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 118, answer: "Employment contract", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 118, answer: "Bank statement", isCorrect: 0 },

  // Question 119
  { localeId: 1, quizQuestionId: 119, answer: "Married for three years", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 119, answer: "Married for one year", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 119, answer: "No marriage required", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 119, answer: "Employed for five years", isCorrect: 0 },

  // Question 120
  { localeId: 1, quizQuestionId: 120, answer: "F permit", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 120, answer: "B permit", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 120, answer: "C permit", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 120, answer: "G permit", isCorrect: 0 },

  // Question 121
  { localeId: 1, quizQuestionId: 121, answer: "Cantonal migration authorities", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 121, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 121, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 121, answer: "Embassy", isCorrect: 0 },

  // Question 122
  { localeId: 1, quizQuestionId: 122, answer: "Report to police", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 122, answer: "Apply online", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 122, answer: "Contact embassy", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 122, answer: "No action needed", isCorrect: 0 },

  // Question 123
  { localeId: 1, quizQuestionId: 123, answer: "G permit", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 123, answer: "B permit", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 123, answer: "C permit", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 123, answer: "L permit", isCorrect: 0 },

  // Question 124
  { localeId: 1, quizQuestionId: 124, answer: "Three months to two weeks before expiry", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 124, answer: "Any time", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 124, answer: "After expiry", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 124, answer: "One year before expiry", isCorrect: 0 },

  // Quiz 12: Requesting an OASI Card
  // Question 125
  { localeId: 1, quizQuestionId: 125, answer: "Submit form to employer", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 125, answer: "Apply online directly", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 125, answer: "Visit the tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 125, answer: "Contact the embassy", isCorrect: 0 },

  // Question 126
  { localeId: 1, quizQuestionId: 126, answer: "Professional fund or compensation office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 126, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 126, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 126, answer: "Swiss embassy", isCorrect: 0 },

  // Question 127
  { localeId: 1, quizQuestionId: 127, answer: "Swiss Compensation Office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 127, answer: "Cantonal migration office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 127, answer: "Tax authority", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 127, answer: "Employer", isCorrect: 0 },

  // Question 128
  { localeId: 1, quizQuestionId: 128, answer: "Form 101", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 128, answer: "Form 102", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 128, answer: "Form 103", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 128, answer: "No form needed", isCorrect: 0 },

  // Question 129
  { localeId: 1, quizQuestionId: 129, answer: "Compensation office website", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 129, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 129, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 129, answer: "Embassy", isCorrect: 0 },

  // Question 130
  { localeId: 1, quizQuestionId: 130, answer: "Contact compensation office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 130, answer: "Apply online", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 130, answer: "Visit tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 130, answer: "No action needed", isCorrect: 0 },

  // Question 131
  { localeId: 1, quizQuestionId: 131, answer: "Compensation office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 131, answer: "Employer", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 131, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 131, answer: "Police station", isCorrect: 0 },

  // Question 132
  { localeId: 1, quizQuestionId: 132, answer: "Submit form to compensation office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 132, answer: "Apply online directly", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 132, answer: "Visit tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 132, answer: "Contact embassy", isCorrect: 0 },

  // Quiz 13: Salary Certificate
  // Question 133
  { localeId: 1, quizQuestionId: 133, answer: "Before end of January", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 133, answer: "Before end of March", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 133, answer: "Before end of June", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 133, answer: "Upon request", isCorrect: 0 },

  // Question 134
  { localeId: 1, quizQuestionId: 134, answer: "Request from employer", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 134, answer: "Contact tax authority", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 134, answer: "Apply online", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 134, answer: "Visit police station", isCorrect: 0 },

  // Question 135
  { localeId: 1, quizQuestionId: 135, answer: "Employer", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 135, answer: "Employee", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 135, answer: "Tax authority", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 135, answer: "Bank", isCorrect: 0 },

  // Question 136
  { localeId: 1, quizQuestionId: 136, answer: "Gross salary, deductions", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 136, answer: "Net salary only", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 136, answer: "Bonuses only", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 136, answer: "No financial details", isCorrect: 0 },

  // Question 137
  { localeId: 1, quizQuestionId: 137, answer: "With tax return", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 137, answer: "Upon request", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 137, answer: "Not required", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 137, answer: "Only for audits", isCorrect: 0 },

  // Question 138
  { localeId: 1, quizQuestionId: 138, answer: "Tax authority", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 138, answer: "Bank", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 138, answer: "Lawyer", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 138, answer: "Employee", isCorrect: 0 },

  // Question 139
  { localeId: 1, quizQuestionId: 139, answer: "Certificates from all employers", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 139, answer: "One certificate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 139, answer: "No certificate needed", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 139, answer: "Last employer only", isCorrect: 0 },

  // Question 140
  { localeId: 1, quizQuestionId: 140, answer: "No, provided automatically", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 140, answer: "Yes, always request", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 140, answer: "Only for new employees", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 140, answer: "Only for tax audits", isCorrect: 0 },

  // Quiz 14: Lost Vehicle Registration Document
  // Question 141
  { localeId: 1, quizQuestionId: 141, answer: "Vehicle owner", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 141, answer: "Anyone", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 141, answer: "Insurance company", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 141, answer: "Driver only", isCorrect: 0 },

  // Question 142
  { localeId: 1, quizQuestionId: 142, answer: "CHF 15-30", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 142, answer: "CHF 50-100", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 142, answer: "Free", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 142, answer: "CHF 5-10", isCorrect: 0 },

  // Question 143
  { localeId: 1, quizQuestionId: 143, answer: "Return to road traffic office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 143, answer: "Keep it", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 143, answer: "Destroy it", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 143, answer: "Use it", isCorrect: 0 },

  // Question 144
  { localeId: 1, quizQuestionId: 144, answer: "Road traffic office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 144, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 144, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 144, answer: "Insurance company", isCorrect: 0 },

  // Question 145
  { localeId: 1, quizQuestionId: 145, answer: "Loss or theft", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 145, answer: "Change of address", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 145, answer: "Vehicle sale", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 145, answer: "No notification needed", isCorrect: 0 },

  // Question 146
  { localeId: 1, quizQuestionId: 146, answer: "Original becomes invalid", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 146, answer: "Original remains valid", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 146, answer: "Both are valid", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 146, answer: "Replacement is temporary", isCorrect: 0 },

  // Question 147
  { localeId: 1, quizQuestionId: 147, answer: "Road traffic office", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 147, answer: "Police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 147, answer: "Tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 147, answer: "Insurance company", isCorrect: 0 },

  // Question 148
  { localeId: 1, quizQuestionId: 148, answer: "Report theft to police, then apply", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 148, answer: "Apply online directly", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 148, answer: "Contact insurance", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 148, answer: "No action needed", isCorrect: 0 },
];

// Documents
// Quiz 20 - 25
const quizFamily = [
  { localeId: 1, categoryId: 3, title: "Adoption" },
  { localeId: 1, categoryId: 3, title: "Family Reunification" },
  { localeId: 1, categoryId: 3, title: "Death" },
  { localeId: 1, categoryId: 3, title: "Divorce" },
  { localeId: 1, categoryId: 3, title: "Inheritance" },
  { localeId: 1, categoryId: 3, title: "Marriage" },
];

// Question 149 - 196
const quizQuestionFamily = [
  // Quiz 20: Adoption
  { localeId: 1, quizId: 20, question: "Who should you contact to adopt a child in Switzerland?" },
  { localeId: 1, quizId: 20, question: "What is the minimum age difference required between the adoptive parent and the child?" },
  { localeId: 1, quizId: 20, question: "What is a key requirement for adopting a child as a couple in Switzerland?" },
  { localeId: 1, quizId: 20, question: "What is the minimum age for a single person to adopt a child?" },
  { localeId: 1, quizId: 20, question: "What is required for a child to consent to their adoption?" },
  { localeId: 1, quizId: 20, question: "How long must adoptive parents care for a child before adoption?" },
  { localeId: 1, quizId: 20, question: "Who is entitled to adoption leave in Switzerland?" },
  { localeId: 1, quizId: 20, question: "What is the maximum daily adoption allowance in Switzerland?" },

  // Quiz 21: Family Reunification
  { localeId: 1, quizId: 21, question: "Who can apply for family reunification in Switzerland?" },
  { localeId: 1, quizId: 21, question: "Which family members can a Swiss citizen bring to Switzerland?" },
  { localeId: 1, quizId: 21, question: "What is a key condition for family reunification?" },
  { localeId: 1, quizId: 21, question: "What is the time limit for applying for family reunification for children over 12?" },
  { localeId: 1, quizId: 21, question: "Who cannot bring all family members to Switzerland?" },
  { localeId: 1, quizId: 21, question: "What document is required for family members arriving in Switzerland?" },
  { localeId: 1, quizId: 21, question: "What must children joining Switzerland do until age 16?" },
  { localeId: 1, quizId: 21, question: "Where should you apply for family reunification?" },

  // Quiz 22: Death
  { localeId: 1, quizId: 22, question: "Who issues a death certificate if a person dies in a hospital?" },
  { localeId: 1, quizId: 22, question: "Within how many days must a death be reported to the civil register office?" },
  { localeId: 1, quizId: 22, question: "What document is required to report a death?" },
  { localeId: 1, quizId: 22, question: "What must be done before a funeral can take place?" },
  { localeId: 1, quizId: 22, question: "Who should be notified if a death occurs abroad?" },
  { localeId: 1, quizId: 22, question: "What is the purpose of a survivor’s pension?" },
  { localeId: 1, quizId: 22, question: "What is the maximum monthly widow’s or widower’s pension?" },
  { localeId: 1, quizId: 22, question: "What should be done after the funeral regarding the deceased’s insurance?" },

  // Quiz 23: Divorce
  { localeId: 1, quizId: 23, question: "Where do you file for a divorce in Switzerland?" },
  { localeId: 1, quizId: 23, question: "What is required for a divorce by mutual consent?" },
  { localeId: 1, quizId: 23, question: "How long must spouses live separately for a unilateral divorce?" },
  { localeId: 1, quizId: 23, question: "What is the typical duration of a divorce by mutual consent?" },
  { localeId: 1, quizId: 23, question: "What happens to parental responsibility after divorce?" },
  { localeId: 1, quizId: 23, question: "What can you do if an ex-spouse does not pay child support?" },
  { localeId: 1, quizId: 23, question: "What is the effect of divorce on a foreign national’s B permit?" },
  { localeId: 1, quizId: 23, question: "What are the court costs for a divorce in Switzerland?" },

  // Quiz 24: Inheritance
  { localeId: 1, quizId: 24, question: "Who is exempt from inheritance tax in most cantons?" },
  { localeId: 1, quizId: 24, question: "What is required to obtain a certificate of inheritance?" },
  { localeId: 1, quizId: 24, question: "Within how many months must you renounce an inheritance?" },
  { localeId: 1, quizId: 24, question: "Who inherits if there is no will and no relatives?" },
  { localeId: 1, quizId: 24, question: "What is a handwritten will also known as?" },
  { localeId: 1, quizId: 24, question: "What can be included in a contract of succession?" },
  { localeId: 1, quizId: 24, question: "What is the purpose of a public inventory?" },
  { localeId: 1, quizId: 24, question: "Who are statutory heirs entitled to a share of the estate?" },

  // Quiz 25: Marriage
  { localeId: 1, quizId: 25, question: "What is the minimum age to get married in Switzerland?" },
  { localeId: 1, quizId: 25, question: "What must you do before getting married at a civil register office?" },
  { localeId: 1, quizId: 25, question: "What is the default marital property regime in Switzerland?" },
  { localeId: 1, quizId: 25, question: "Since when can same-sex couples marry in Switzerland?" },
  { localeId: 1, quizId: 25, question: "What is a requirement for a marriage ceremony?" },
  { localeId: 1, quizId: 25, question: "How are taxes handled for married couples?" },
  { localeId: 1, quizId: 25, question: "What happens to a same-sex registered partnership after 1 July 2022?" },
  { localeId: 1, quizId: 25, question: "What is the approximate cost of a civil marriage ceremony?" },
];

const quizAnswerFamily = [
  // Quiz 20: Adoption
  // Question 149
  { localeId: 1, quizQuestionId: 149, answer: "Central adoption authority of your canton", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 149, answer: "Local police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 149, answer: "Federal tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 149, answer: "Health insurance provider", isCorrect: 0 },

  // Question 150
  { localeId: 1, quizQuestionId: 150, answer: "16 years", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 150, answer: "10 years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 150, answer: "20 years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 150, answer: "5 years", isCorrect: 0 },

  // Question 151
  { localeId: 1, quizQuestionId: 151, answer: "Must be married", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 151, answer: "Must be under 30 years old", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 151, answer: "Must own a house", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 151, answer: "Must have Swiss citizenship", isCorrect: 0 },

  // Question 152
  { localeId: 1, quizQuestionId: 152, answer: "28 years old", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 152, answer: "18 years old", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 152, answer: "25 years old", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 152, answer: "35 years old", isCorrect: 0 },

  // Question 152
  { localeId: 1, quizQuestionId: 153, answer: "The child must be capable of consenting", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 153, answer: "The child must be over 18", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 153, answer: "The child’s consent is not required", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 153, answer: "The child must be Swiss", isCorrect: 0 },

  // Question 154
  { localeId: 1, quizQuestionId: 154, answer: "At least one year", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 154, answer: "Six months", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 154, answer: "Two years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 154, answer: "Three months", isCorrect: 0 },

  // Question 155
  { localeId: 1, quizQuestionId: 155, answer: "Employed or self-employed parents adopting a child under 4", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 155, answer: "Parents adopting their spouse’s child", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 155, answer: "Unemployed parents", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 155, answer: "Parents adopting an adult", isCorrect: 0 },

  // Question 156
  { localeId: 1, quizQuestionId: 156, answer: "CHF 220", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 156, answer: "CHF 150", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 156, answer: "CHF 300", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 156, answer: "CHF 100", isCorrect: 0 },

  // Quiz 21: Family Reunification
  // Question 157: Who can apply
  { localeId: 1, quizQuestionId: 157, answer: "Residents of Switzerland with foreign family members", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 157, answer: "Asylum seekers", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 157, answer: "Tourists in Switzerland", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 157, answer: "Non-residents", isCorrect: 0 },

  // Question 158: Family members for Swiss citizen
  { localeId: 1, quizQuestionId: 158, answer: "Spouse, children under 18, dependent parents with EU/EFTA permit", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 158, answer: "All extended family members", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 158, answer: "Only parents", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 158, answer: "Siblings over 18", isCorrect: 0 },

  // Question 159: Condition for reunification
  { localeId: 1, quizQuestionId: 159, answer: "Adequate housing for the family", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 159, answer: "Swiss citizenship", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 159, answer: "Permanent employment", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 159, answer: "Fluency in German", isCorrect: 0 },

  // Question 160: Time limit for children over 12
  { localeId: 1, quizQuestionId: 160, answer: "One year", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 160, answer: "Five years", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 160, answer: "Six months", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 160, answer: "Two years", isCorrect: 0 },

  // Question 161: Who cannot bring all family members
  { localeId: 1, quizQuestionId: 161, answer: "Citizens from third countries", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 161, answer: "Swiss citizens", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 161, answer: "EU/EFTA citizens", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 161, answer: "All residents", isCorrect: 0 },

  // Question 162: Required document
  { localeId: 1, quizQuestionId: 162, answer: "Valid identity card or passport", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 162, answer: "Swiss work permit", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 162, answer: "Tax return", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 162, answer: "Health certificate", isCorrect: 0 },

  // Question 163: Children’s obligation
  { localeId: 1, quizQuestionId: 163, answer: "Attend compulsory schooling until age 16", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 163, answer: "Obtain a work permit", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 163, answer: "Learn Swiss history", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 163, answer: "Register with the police", isCorrect: 0 },

  // Question 164: Where to apply
  { localeId: 1, quizQuestionId: 164, answer: "Cantonal immigration authorities", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 164, answer: "Federal tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 164, answer: "Local police station", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 164, answer: "Swiss embassy", isCorrect: 0 },

  // Quiz 22: Death
  // Question 165: Death certificate in hospital
  { localeId: 1, quizQuestionId: 165, answer: "The hospital", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 165, answer: "The police", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 165, answer: "The civil register office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 165, answer: "The family doctor", isCorrect: 0 },

  // Question 166
  { localeId: 1, quizQuestionId: 166, answer: "Within two days", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 166, answer: "Within one week", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 166, answer: "Within one month", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 166, answer: "Within 24 hours", isCorrect: 0 },

  // Question 167
  { localeId: 1, quizQuestionId: 167, answer: "Original medical death certificate", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 167, answer: "Birth certificate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 167, answer: "Marriage certificate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 167, answer: "Tax return", isCorrect: 0 },

  // Question 168
  { localeId: 1, quizQuestionId: 168, answer: "Civil register office confirms the death report", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 168, answer: "Police approval", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 168, answer: "Tax clearance", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 168, answer: "Insurance notification", isCorrect: 0 },

  // Question 169
  { localeId: 1, quizQuestionId: 169, answer: "Swiss representation abroad", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 169, answer: "Local police", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 169, answer: "Federal health office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 169, answer: "Cantonal tax office", isCorrect: 0 },

  // Question 170
  { localeId: 1, quizQuestionId: 170, answer: "Prevent financial hardship for survivors", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 170, answer: "Cover funeral costs", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 170, answer: "Pay off debts", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 170, answer: "Support education", isCorrect: 0 },

  // Question 171
  { localeId: 1, quizQuestionId: 171, answer: "CHF 2016", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 171, answer: "CHF 1008", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 171, answer: "CHF 3000", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 171, answer: "CHF 504", isCorrect: 0 },

  // Question 172
  { localeId: 1, quizQuestionId: 172, answer: "Cancel the deceased’s insurance policies", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 172, answer: "File a tax return", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 172, answer: "Register a new address", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 172, answer: "Apply for a new passport", isCorrect: 0 },

  // Quiz 23: Divorce
  // Question 173
  { localeId: 1, quizQuestionId: 173, answer: "Competent cantonal court", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 173, answer: "Civil register office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 173, answer: "Federal migration office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 173, answer: "Local commune office", isCorrect: 0 },

  // Question 174
  { localeId: 1, quizQuestionId: 174, answer: "Joint application with agreement on consequences", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 174, answer: "Court approval without agreement", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 174, answer: "Separate applications", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 174, answer: "Mediation session", isCorrect: 0 },

  // Question 175
  { localeId: 1, quizQuestionId: 175, answer: "At least two years", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 175, answer: "One year", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 175, answer: "Six months", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 175, answer: "Three years", isCorrect: 0 },

  // Question 176
  { localeId: 1, quizQuestionId: 176, answer: "Three to four months", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 176, answer: "One year", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 176, answer: "Six weeks", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 176, answer: "Two years", isCorrect: 0 },

  // Question 177
  { localeId: 1, quizQuestionId: 177, answer: "Joint responsibility is the rule", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 177, answer: "Always sole responsibility", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 177, answer: "No responsibility assigned", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 177, answer: "Decided by children", isCorrect: 0 },

  // Question 178
  { localeId: 1, quizQuestionId: 178, answer: "Contact a canton’s debt collection agency", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 178, answer: "File a new divorce case", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 178, answer: "Report to the police", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 178, answer: "Apply for a loan", isCorrect: 0 },

  // Question 179
  { localeId: 1, quizQuestionId: 179, answer: "May stay under certain conditions", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 179, answer: "Must leave immediately", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 179, answer: "Automatically upgraded to C permit", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 179, answer: "No change in status", isCorrect: 0 },

  // Question 180
  { localeId: 1, quizQuestionId: 180, answer: "CHF 1,000 to CHF 4,000", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 180, answer: "CHF 500 to CHF 1,000", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 180, answer: "CHF 5,000 to CHF 10,000", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 180, answer: "Free of charge", isCorrect: 0 },

  // Quiz 24: Inheritance
  // Question 181
  { localeId: 1, quizQuestionId: 181, answer: "Spouses and children", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 181, answer: "All heirs", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 181, answer: "Only siblings", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 181, answer: "Non-relatives", isCorrect: 0 },

  // Question 182
  { localeId: 1, quizQuestionId: 182, answer: "Copy of death certificate and proof of entitlement", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 182, answer: "Tax return", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 182, answer: "Marriage certificate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 182, answer: "Bank statement", isCorrect: 0 },

  // Question 183
  { localeId: 1, quizQuestionId: 183, answer: "Three months", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 183, answer: "One month", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 183, answer: "Six months", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 183, answer: "One year", isCorrect: 0 },

  // Question 184
  { localeId: 1, quizQuestionId: 184, answer: "Canton or commune", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 184, answer: "Federal government", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 184, answer: "Charity", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 184, answer: "Bank", isCorrect: 0 },

  // Question 185
  { localeId: 1, quizQuestionId: 185, answer: "Holographic will", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 185, answer: "Public deed will", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 185, answer: "Oral will", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 185, answer: "Notarial will", isCorrect: 0 },

  // Question 186
  { localeId: 1, quizQuestionId: 186, answer: "Agreement for an heir to renounce inheritance", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 186, answer: "Tax exemption form", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 186, answer: "Marriage contract", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 186, answer: "Loan agreement", isCorrect: 0 },

  // Question 187
  { localeId: 1, quizQuestionId: 187, answer: "List assets and debts of the estate", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 187, answer: "Distribute the estate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 187, answer: "Tax the estate", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 187, answer: "Sell the estate", isCorrect: 0 },

  // Question 188
  { localeId: 1, quizQuestionId: 188, answer: "Spouse and children", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 188, answer: "Siblings only", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 188, answer: "Friends", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 188, answer: "All relatives", isCorrect: 0 },

  // Quiz 24: Marriage
  // Question 189
  { localeId: 1, quizQuestionId: 189, answer: "18 years old", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 189, answer: "16 years old", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 189, answer: "21 years old", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 189, answer: "25 years old", isCorrect: 0 },

  // Question 190
  { localeId: 1, quizQuestionId: 190, answer: "Submit a marriage application", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 190, answer: "Obtain a work permit", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 190, answer: "Register with the tax office", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 190, answer: "Apply for citizenship", isCorrect: 0 },

  // Question 191
  { localeId: 1, quizQuestionId: 191, answer: "Participation in acquired property", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 191, answer: "Community of property", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 191, answer: "Separation of property", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 191, answer: "Joint ownership", isCorrect: 0 },

  // Question 192
  { localeId: 1, quizQuestionId: 192, answer: "1 July 2022", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 192, answer: "1 January 2020", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 192, answer: "1 June 2021", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 192, answer: "1 August 2023", isCorrect: 0 },

  // Question 193
  { localeId: 1, quizQuestionId: 193, answer: "Two witnesses over 18", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 193, answer: "Parental consent", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 193, answer: "Swiss citizenship", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 193, answer: "Religious officiant", isCorrect: 0 },

  // Question 194
  { localeId: 1, quizQuestionId: 194, answer: "File joint tax return", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 194, answer: "File separate tax returns", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 194, answer: "No tax obligation", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 194, answer: "Pay individual income tax", isCorrect: 0 },

  // Question 195
  { localeId: 1, quizQuestionId: 195, answer: "Can be converted to marriage", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 195, answer: "Automatically becomes marriage", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 195, answer: "No longer valid", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 195, answer: "Cannot be changed", isCorrect: 0 },

  // Question 196
  { localeId: 1, quizQuestionId: 196, answer: "CHF 300 to CHF 400", isCorrect: 1 },
  { localeId: 1, quizQuestionId: 196, answer: "CHF 100 to CHF 200", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 196, answer: "CHF 500 to CHF 600", isCorrect: 0 },
  { localeId: 1, quizQuestionId: 196, answer: "Free of charge", isCorrect: 0 },
];

export const quizzes: Quiz[] = [...quizCustom, ...quizDocuments, ...quizFamily];

export const quizQuestions: QuizQuestion[] = [...quizQuestionCustom, ...quizQuestionDocuments, ...quizQuestionFamily];

export const quizAnswers: QuizAnswer[] = [...quizAnswerCustom, ...quizAnswerDocuments, ...quizAnswerFamily];
