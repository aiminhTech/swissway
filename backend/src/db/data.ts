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
  { localeId: 1, name: "Health", description: "foo" },
  { localeId: 1, name: "Political system", description: "foo" },
  { localeId: 1, name: "Work", description: "foo" },
  { localeId: 1, name: "School and education", description: "foo" },
  { localeId: 1, name: "Safety and justice", description: "foo" },
];

/* {
  topic: ,
  description: ,
  infos: [{
    title: ,
    content: [{
      subtitle: ,
      text: 
    }]
  }]
} */
const informationHealth: Information[] = [
  {
    categoryId: 1,
    title: "Health insurance",
    content: [
      {
        topic: "Health insurance costs",
        description:
          "Health insurance costs are a major budget item for many. However, if you are a low earner you will pay a reduced premium. You can also save with your choice of deductible and retention fee. ",
        infos: [
          {
            title: "The costs to you",
            content: [
              {
                subtitle: "Premiums",
                text: `Your health insurance premium is an insurance contribution that you must pay to your health insurer every month.

The level of this premium depends on the health insurance company you are with. Other factors are your insurance model, which deductible you choose and where you live. Premiums are lower for children and young adults under the age of 25.`,
              },
              {
                subtitle: "Deductible",
                text: `The deductible is the amount that you have to pay out of your own pocket towards your health-related costs every year. The health insurer will not cover costs until this deductible has been used up.

Example: You have chosen a deductible of CHF 300 and have to go to the doctor once or twice a year. Your doctor charges you CHF 200 for each appointment. You will pay all of the first bill and CHF 100 of the second yourself. Your health insurer will cover CHF 100 of the second bill, less the retention fee of CHF 10 that you also have to pay (see next section). It will also cover all other medical bills that you incur in the same year.

The lowest deductible for adults is CHF 300, the highest CHF 2,500. Deductibles of between CHF 0 and CHF 600 apply for children.`,
              },
              {
                subtitle: "Retention fee",
                text: `When the deductible has been used up you will still pay ten percent of your healthcare costs. However, this retention fee is limited to CHF 700 per year (CHF 350 for children). Your annual share of your healthcare costs is therefore capped at your chosen deductible, plus CHF 700.`,
              },
              {
                subtitle: "Hospital contribution",
                text: `You must pay the contribution to hospital costs if you are hospitalised. It is CHF 15 per day. The reasoning behind it is that, in hospital, you save costs that you would otherwise incur at home, such as food and power. Children, young adults in education and training and pregnant women do not pay any contribution to hospital costs.`,
              },
            ],
          },
          {
            title: "Premium reduction",
            content: [
              {
                text: `Anyone who is a low earner or has a large number of children may be eligible to have their premiums subsidised by their canton. Many cantons notify those concerned automatically. In others, you must apply for the reduction yourself every year. For details, please contact the competent agency in your canton (web page available in German, French and Italian).`,
              },
            ],
          },
          {
            title: "Save on premiums",
            content: [
              {
                text: `There are a number of ways to save on your premiums:

Choose a low-premium health insurer
Choose a family doctor or other insurance model with a low premium
Choose a high deductible and pay lower premiums in return
If you are employed for more than eight hours per week you are covered by compulsory accident insurance. You do not need to include accident cover additionally in your compulsory health insurance`,
              },
            ],
          },
        ],
      },
      {
        topic: "Health insurance benefits",
        description:
          "All health insurers must pay the same benefits under basic insurance. If you are pregnant, you will generally not have to pay a deductible. But what happens if you fall ill abroad?",
        infos: [
          {
            title: "Benefits under basic insurance",
            content: [
              {
                subtitle: "All insurers pay the same basic benefits",
                text: `Your health insurance company will cover the costs of examinations and treatment if you are ill. It will also cover certain preventive measures to help you stay healthy. Vaccinations and check-ups are two examples here. Under the Federal Health Insurance Act (KVG) all health insurers must pay the same basic insurance benefits.

Your doctor must tell you before starting a course of treatment if basic insurance will not pay for it. If in doubt, it is worth asking your insurer. Comprehensive information on the benefits paid under basic insurance is available from the Federal Office of Public Health.`,
              },
              {
                subtitle: "Restrictions under the family doctor model",
                text: `If you have opted for the family doctor or another premium-saving model, you must follow the rules of that model when seeking medical care. With the family doctor model, for example, you must almost always go to your family doctor first.`,
              },
            ],
          },
          {
            title: "Benefits during pregnancy",
            content: [
              {
                subtitle: "Deductible during pregnancy",
                text: `If you are pregnant, you don't have to pay any share of the related healthcare costs that are specifically maternity-related. This means that you pay no deductible, no retention fee and no contribution to the costs of your stay in hospital. From the 13th week of pregnancy and up until eight weeks after the birth, you also pay nothing for general medical services as well as for healthcare services in the event of illness.`,
              },
              {
                subtitle: "Benefits for the mother",
                text: `The health insurance company pays for the birth, postnatal check-up, the costs of any complications, breastfeeding advice and some of the costs of antenatal classes, providing they are led by a midwife. It does not matter whether the baby is born in hospital, at a birthing centre or at home. If the hospital or birthing centre of your choice is not included in the list of authorised hospitals for your canton, you should ask your health insurer in advance if it will bear the costs.`,
              },
              {
                subtitle: "Benefits for check-ups",
                text: `Basic health insurance covers the following check-ups:

Two ultrasounds (more if the pregnancy is deemed high risk)
First-trimester screening to determine the risk of trisomies 21, 18 and 13, and
If the first-trimester test indicates a high risk, then non-invasive prenatal testing (NIFT) and if necessary amniocentesis and chorionic villus sampling.
Added to this are regular check-ups with your obstetrician/gynaecologist, which in some cases may be conducted by a midwife.`,
              },
              {
                subtitle: "Benefits for the baby",
                text: `The mother's health insurer covers all the costs of the baby's stay in hospital. If the newborn is ill and requires hospital treatment, it is covered by the child's health insurance. You must pay a share of these costs in the form of the retention fee`,
              },
            ],
          },
          {
            title: "Health insurance benefits abroad",
            content: [
              {
                text: `If you fall ill on holiday abroad, your health insurer will pay for your emergency treatment. The level of cover depends on the country you are in.`,
              },
              {
                subtitle: "Health insurance abroad - EU",
                text: `In the EU, Norway, Iceland and Liechtenstein you are entitled to the same benefits as local residents. It is important to remember that your health insurance card also serves as a European health insurance card. Always take it on holiday. Your health insurer can issue you with a temporary replacement certificate if you do not have your health insurance card with you.`,
              },
              {
                subtitle: "Health insurance abroad - world-wide",
                text: `Outside EU and EFTA countries, your health insurance company will pay for your emergency treatment only up to a certain amount. You may have to pay some of these costs out of your own pocket, especially if you are hospitalised. You can take out appropriate supplementary insurance if you would like higher cover. This may make sense before travelling to the USA or Canada, for example. Treatment is expensive in both countries.`,
              },
              {
                subtitle: "Out-of-pocket expenses",
                text: `There are medical services abroad that your Swiss health insurance company will not cover. This includes elective treatment and medication bought abroad, for example. There are also cases in which your Swiss doctor will actually send you abroad for treatment. You should then talk to your health insurer beforehand about whether it will pay. Insurance companies will often cover the costs if the treatment is not available in Switzerland.`,
              },
            ],
          },
          {
            title: "Disputes with your health insurer",
            content: [
              {
                text: `In the event of a conflict with your health insurance company, you can contact the Health Insurance Ombudsman Service (website available in German, French and Italian). It will attempt to reach an agreement between you and your insurer. The service is free, impartial and independent. Please note that you cannot go to the Ombudsman Service if a lawyer or social service is representing your interests, or if you have legal expenses insurance.`,
              },
            ],
          },
        ],
      },
      {
        topic: "Taking out, changing and cancelling health insurance",
        description: `You can change your health insurer at the end of each year. Send notice of cancellation to your current health insurer by the end-November deadline. New-borns should be registered soon after birth.`,
        infos: [
          {
            title: "Who needs health insurance?",
            content: [
              {
                subtitle: "Who needs health insurance?",
                text: `If you live in Switzerland, you must be insured with a Swiss health insurer.`,
              },
              {
                subtitle: "Health insurance for babies, arrival from abroad",
                text: `If you have just moved to Switzerland, you have three months in which to arrange health insurance cover. The same deadline applies to new-borns. You or your baby are already insured for this three-month period.`,
              },
              {
                subtitle: "Who doesn't need health insurance?",
                text: `Foreign retirees, students and diplomats do not necessarily need to take out health insurance. The relevant agency in your canton or municipality approves any exemptions.`,
              },
              {
                subtitle: "Cross-border commuters and health insurance",
                text: `As a cross-border commuter, you have the choice of taking out health insurance in Switzerland where you work, or over the border where you live.

If you don’t want to take out Swiss health insurance, you must apply for an exemption with the relevant cantonal authority within three months of starting your job.`,
              },
            ],
          },
          {
            title: "Changing health insurer",
            content: [
              {
                subtitle: "Free choice of health insurance company",
                text: `The list of authorised health insurance companies covers all insurers. You can choose any company that operates in the region where you live. Simply register, because they are required to offer everyone basic insurance.

It's also worth knowing that a child can have a different health insurer to their parents.`,
              },
              {
                subtitle: "Terminating health insurance at year end",
                text: `You can generally change your health insurer at the end of each year. To do this, you must cancel your basic insurance in writing. Your letter must reach your current health insurer by 30 November.

Your current insurer will notify you by the end of October of your premium for the next year. This is in time for you to cancel if you do not agree with it. This premium calculator (web page available in German, French and Italian) might be useful if you want to compare what different health insurers are offering.

If you have a deductible of CHF 300 under a ‹regular› insurance model, you can also cancel your basic insurance with effect from the end of June. A three-month notice period applies.`,
              },
              {
                subtitle: "Changing insurance model",
                text: `You can also change your insurance model at the end of the year. To do this, your letter must reach your health insurer by the end of November. Apart from the standard model you might like to consider the following insurance models with lower premiums (web page available in German, French and Italian):

Family doctor model: you must (almost) always go to your family doctor first. They will refer you to a specialist if necessary.
HMO model: you must almost always go to a doctor in your chosen group practice (Health Maintenance Organisation) first. They will refer you to a specialist if necessary.
Telmed: before (almost) every visit to the doctor you must call a certain number for an initial medical consultation by phone.`,
              },
            ],
          },
          {
            title: "Supplementary insurance",
            content: [
              {
                subtitle: "Health insurers do not have to accept you",
                text: `As a rule you will have to complete a questionnaire on your health before an insurer will approve supplementary health insurance for you. Your answers determine the conditions of acceptance. The insurer can also reject your application for supplementary insurance entirely.

Complete the questionnaire truthfully. If you give false information, your health insurer may refuse to pay your bill later on, or may exclude you from cover entirely.`,
              },
              {
                subtitle: "Best to register before birth",
                text: `If you want to take out supplementary insurance for your new baby, the best time to register them is before the birth. Most health insurers will accept the unborn child without any conditions or health questionnaire.

Parents often insure their children for dental treatment (orthodontics). This is also worth taking out early. From a certain age insurers will demand a check-up before accepting the child.`,
              },
              {
                subtitle: "Generally a package",
                text: `Supplementary insurance often comes only as a package. Check that you aren't insuring the same benefits twice, especially where travel insurance is concerned. In many cases you will find that you are already insured – via your credit card, for example, or a product with integrated travel cover.`,
              },
              {
                subtitle: "Cancelling can be tricky",
                text: `Do you really not want your supplementary cover any more? Think before you cancel it. Once you have, the health insurer does not have to accept you back. You should also find out what notice periods apply. Your insurance contract will contain the information you need, or simply ask your insurer.`,
              },
            ],
          },
        ],
      },
    ],
  },
];

const infomationPoticialSystem: Information[] = [
  {
    categoryId: 2,
    title: "Cantons",
    content: [
      {
        topic: "Calendar of cantonal votes",
        description:
          "Dates of all the upcoming votes and elections at the cantonal and federal levels. ",
        infos: [
          {
            title: "When are the next cantonal votes and elections?",
            content: [
              {
                text: `Popular votes on cantonal issues are usually held several times a year. Whenever possible, they are held at the same time as federal popular votes. `,
              },
            ],
          },
          {
            title: "When are the next federal votes and elections?",
            content: [
              {
                text: `There are three or four federal votes every year. 
All vote dates for the next 20 years

General parliamentary elections are held every four years. The next federal election is planned for 24 October 2027.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    categoryId: 2,
    title: "Cantons",
    content: [
      {
        topic: "Cantonal government: role and composition",
        description:
          "As at the federal level, the cantons also maintain a separation of powers between the legislature, the executive and the judiciary. The executive at cantonal level is the cantonal government.",
        infos: [
          {
            title: "Composition of the cantonal government",
            content: [
              {
                text: `There are between five and seven members in each cantonal government.`,
              },
            ],
          },
          {
            title: "Cantonal departments",
            content: [
              {
                text: `Each council member usually runs a department (such as the department of finance, department of health, department of education, etc.), just as at federal level.`,
              },
            ],
          },
          {
            title: "The main tasks",
            content: [
              {
                text: `The cantonal government’s main task is to manage cantonal affairs. It plans and implements cantonal projects and activities, while coordinating these with the activities of the Confederation and the communes.

It is also responsible for implementing cantonal and federal legislation and runs the cantonal administration by exercising the powers it is assigned by the Federal Constitution.

The cantonal government is also responsible for preparing and managing the canton’s budget.`,
              },
            ],
          },
          {
            title: "Regular meetings, collegiate decisions",
            content: [
              {
                text: `The members of the cantonal government hold regular scheduled meetings, usually behind closed doors. During these meetings, they reach decisions as a collegial body on the administration of the canton. All members of the cantonal government must defend the position of the collegial body, regardless of their personal opinion.`,
              },
            ],
          },
          {
            title: "President of the cantonal government",
            content: [
              {
                text: `Cantonal governments usually have a different president each year - the position rotating according to the length of time the government members have been in office. The president does not enjoy any special privileges or status, apart from chairing cantonal government meetings.`,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const informations: Information[] = [...informationHealth];

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
