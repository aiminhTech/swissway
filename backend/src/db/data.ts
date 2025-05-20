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
  {
    localeId: 1,
    name: "Customs",
    description:
      "Information on customs regulations, duties, and importing goods into Switzerland.",
  },
  {
    localeId: 1,
    name: "Documents and register extracts",
    description:
      "Guidance on obtaining official documents like birth certificates and residence confirmations.",
  },
  {
    localeId: 1,
    name: "Family and partnership",
    description:
      "Support and information on marriage, registered partnerships, and family life.",
  },
  {
    localeId: 1,
    name: "Foreign nationals in Switzerland",
    description:
      "Key information for immigrants, including residence permits and integration support.",
  },
  {
    localeId: 1,
    name: "Health",
    description:
      "Resources on healthcare providers, insurance, and staying healthy in Switzerland.",
  },
  {
    localeId: 1,
    name: "Housing",
    description:
      "Everything you need to know about finding, renting, or buying a home.",
  },
  {
    localeId: 1,
    name: "Insurance",
    description:
      "Overview of mandatory and optional insurances, from health to liability.",
  },
  {
    localeId: 1,
    name: "Political system",
    description:
      "Understand how Swiss democracy works, including federalism and citizen participation.",
  },
  {
    localeId: 1,
    name: "Retirement",
    description:
      "Details on pensions, retirement planning, and senior services.",
  },
  {
    localeId: 1,
    name: "Safety and justice",
    description: "Information on public safety, police, and legal rights.",
  },
  {
    localeId: 1,
    name: "School and education",
    description:
      "Educational pathways from kindergarten to university and adult learning.",
  },
  {
    localeId: 1,
    name: "Taxes and finances",
    description: "Help with taxes, financial planning, and public fees.",
  },
  {
    localeId: 1,
    name: "Travel and emigrate",
    description:
      "Advice on traveling abroad or relocating from or to Switzerland.",
  },
  {
    localeId: 1,
    name: "Vehicles and traffic",
    description: "Rules for driving, vehicle registration, and road safety.",
  },
  {
    localeId: 1,
    name: "Votes and elections",
    description:
      "Get involved in democratic processes through voting and elections.",
  },
  {
    localeId: 1,
    name: "Work",
    description:
      "Job search, labor rights, and employment regulations in Switzerland.",
  },
];

const infoCustoms: Information[] = [
  {
    localeId: 1,
    categoryId: 1,
    title: "Bringing sensitive goods into Switzerland",
    description:
      "Clearing customs in Switzerland can be difficult depending on the goods and animals you are bringing into the country. This page provides helpful information on border crossing procedures and entry into Switzerland.",
    content: [
      {
        infos: [
          {
            title: "Imported goods for personal use",
            content: [
              {
                text: `Every person entering Switzerland must clear customs. You are required to declare all imported goods you are carrying if their total value exceeds CHF 150, and any goods that exceed the duty-free allowances for foodstuffs, alcohol and tobacco.

If you do not pay the customs duties you owe, your belongings could be seized. The customs formalities are described on the page about shopping tourism.`,
              },
            ],
          },
          {
            title: "Plants and animals",
            content: [
              {
                subtitle: "Animals",
                text: `Border formalities vary depending on whether you bring a dog, a lizard skin or goods of animal origin into Switzerland.`,
              },
            ],
          },
          {
            title: "Plants",
            content: [
              {
                text: `Be careful about the souvenirs you bring back from your trips. It is against the law to import a number of different plants, fruits, vegetables, cut flowers, seeds and other parts of living plants into Switzerland. This also applies to soil and certain types of wood.`,
              },
            ],
          },
          {
            title: "Weapons",
            content: [
              {
                text: `It is prohibited to import a number of different weapons into Switzerland. You must declare all weapons and ammunition you are bringing into Switzerland at the customs office.

Weapons are not subject to customs duties, but you need to pay the value added tax (8.1%).

More information about bringing weapons into Switzerland and the required permits is available on the Federal Office for Customs and Border Security's web page about weapons and on the ch.ch page about weapons.`,
              },
            ],
          },
          {
            title: "Loaned vehicle",
            content: [
              {
                text: `You can enter Switzerland with a loaned vehicle, but you would be well advised to have a written authorisation from the owner of the vehicle to avoid any suspicion of theft. 
                
In principle, you may not use an uncleared vehicle in Switzerland if you are a resident of Switzerland. The Federal Office for Customs and Border Security offers further information about using an uncleared vehicle temporarily in Switzerland.`,
              },
            ],
          },
          {
            title: "Cash",
            content: [
              {
                text: `You can enter Switzerland with as much cash (in the form of cash, foreign currencies or securities) as you like. However, customs officials may ask you questions if you're carrying CHF 10,000 or more.

They will make a note in the computer system of the Federal Office for Customs and Border Security. If there is any suspicion of money laundering or terrorist financing, customs officials may seize the cash temporarily and hand it over to the police.

More information is available on the Federal Office for Customs and Border Security's web page about cash, foreign currencies and securities.`,
              },
            ],
          },
        ],
      },
      {
        infos: [
          {
            title: "Imported goods for personal use",
            content: [
              {
                text: `Every person entering Switzerland must clear customs. You are required to declare all imported goods you are carrying if their total value exceeds CHF 150, and any goods that exceed the duty-free allowances for foodstuffs, alcohol and tobacco.

If you do not pay the customs duties you owe, your belongings could be seized. The customs formalities are described on the page about shopping tourism.`,
              },
            ],
          },
          {
            title: "Plants and animals",
            content: [
              {
                subtitle: "Animals",
                text: `Border formalities vary depending on whether you bring a dog, a lizard skin or goods of animal origin into Switzerland.`,
              },
            ],
          },
          {
            title: "Plants",
            content: [
              {
                text: `Be careful about the souvenirs you bring back from your trips. It is against the law to import a number of different plants, fruits, vegetables, cut flowers, seeds and other parts of living plants into Switzerland. This also applies to soil and certain types of wood.`,
              },
            ],
          },
          {
            title: "Weapons",
            content: [
              {
                text: `It is prohibited to import a number of different weapons into Switzerland. You must declare all weapons and ammunition you are bringing into Switzerland at the customs office.

Weapons are not subject to customs duties, but you need to pay the value added tax (8.1%).

More information about bringing weapons into Switzerland and the required permits is available on the Federal Office for Customs and Border Security's web page about weapons and on the ch.ch page about weapons.`,
              },
            ],
          },
          {
            title: "Loaned vehicle",
            content: [
              {
                text: `You can enter Switzerland with a loaned vehicle, but you would be well advised to have a written authorisation from the owner of the vehicle to avoid any suspicion of theft. 
                
In principle, you may not use an uncleared vehicle in Switzerland if you are a resident of Switzerland. The Federal Office for Customs and Border Security offers further information about using an uncleared vehicle temporarily in Switzerland.`,
              },
            ],
          },
          {
            title: "Cash",
            content: [
              {
                text: `You can enter Switzerland with as much cash (in the form of cash, foreign currencies or securities) as you like. However, customs officials may ask you questions if you're carrying CHF 10,000 or more.

They will make a note in the computer system of the Federal Office for Customs and Border Security. If there is any suspicion of money laundering or terrorist financing, customs officials may seize the cash temporarily and hand it over to the police.

More information is available on the Federal Office for Customs and Border Security's web page about cash, foreign currencies and securities.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 1,
    categoryId: 1,
    title: "Moving to Switzerland",
    description:
      "If you live abroad and are planning to move to Switzerland, you will find an overview here of the necessary formalities for seamlessly moving your furniture and other personal belongings across the border and through customs without having to pay any fees.",
    content: [
      {
        infos: [
          {
            title: "Residence formalities",
            content: [
              {
                text: `If you are a foreign national moving to Switzerland, you also need to complete residence formalities. ch.ch explains what you need to know about residence permits and the travel documents you need to enter Switzerland. `,
              },
            ],
          },
          {
            title: "Bringing personal belongings into Switzerland duty-free",
            content: [
              {
                text: `People living abroad who want to move to Switzerland can move most of their personal belongings without paying customs duties. People moving to a second home in Switzerland are also exempt from paying customs duties on their personal belongings. However this does not apply to the means of transport and animals.`,
              },
            ],
          },
          {
            title: "What are the conditions?",
            content: [
              {
                text: `In order to import your household goods, pets, personal belongings and vehicles into Switzerland free of customs duties, you need to fulfil several conditions:

You must transfer your residence to Switzerland and provide proof. Please note: this condition does not apply to students bringing their furniture, personal belongings and school materials into Switzerland.
You must have used the belongings for personal use for at least six months before bringing them into Switzerland and continue to use them afterwards.
If you have merchandise to declare, make sure you cross the border during the opening hours of the appropriate customs offices for clearance of merchandise.`,
              },
            ],
          },
          {
            title: "What are the customs formalities?",
            content: [
              {
                text: `You need to present various documents at the customs office when crossing the border:

Full list of the imported goods (on a separate sheet of paper),
Form (completed in duplicate) for the duty-free import of your belongings (download the form from the website of the Federal Office for Customs and Security Border),
Identity document (passport or identity card),
Document certifying that you have announced your departure to the authorities of the country of origin,
Swiss residence permit or other document proving the transfer of residence (such as an employment contract or a lease)
Foreign driving licence for means of transport or vehicle registration certificate (even if it has already been cancelled),
Proof of purchase or rental of accommodation.
If you hire a moving company to transport your household goods into Switzerland, be sure to provide these documents to the moving company.

You do not need to schedule the date and time you pass through customs ahead of time, but if you do it will speed up formalities at some customs offices when you cross the border.

The Federal Office for Customs and Security Border provides a list of the customs offices with scheduling options and additional information on its page about moving household effects`,
              },
            ],
          },
          {
            title: "What is the deadline?",
            content: [
              {
                text: `You have two years from the date of your transfer of residence to bring your belongings into Switzerland duty-free.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 1,
    categoryId: 1,
    title: "Ordering goods from abroad",
    description:
      "Import customs duties are charged on goods ordered abroad. This page provides an overview of the customs duties for online purchases.",
    content: [
      {
        infos: [
          {
            title: "Paying customs duties",
            content: [
              {
                text: `In principle, you need to pay customs duties and Swiss VAT on any product you order from abroad.

In most cases, only the shipping costs are paid by the sender. Customs duties, VAT and customs clearance charges, on the other hand, are automatically charged to the recipient unless the sender has clearly specified otherwise in the waybill.

In practice, customs duties and VAT below CHF 5 are not invoiced. You can also avoid these charges if the value of your order does not exceed CHF 193 (incl. packaging and delivery). This applies to books and other goods subject to a reduced VAT rate of 2.6%. However, the value of orders of goods subject to a VAT rate of 8.1% must be below CHF 62.

Gifts sent to you by a private individual abroad are also exempt from customs fees if their value does not exceed CHF 100. This exemption does not apply to tobacco or alcohol. Gifts must be declared as such on the outside of the parcel or letter.`,
              },
            ],
          },
          {
            title: "How much are customs fees?",
            content: [
              {
                text: `Customs fees can vary widely. In Switzerland, the recipient of a package needs to pay the following fees:

VAT on the value of the goods ordered (including shipping costs and customs duties)
Customs duties on the gross weight
Other fees like tobacco tax or spirits tax
Carrier’s expense
Postal and shipping services (including Swiss Post, DHL and UPS) take care of all the customs clearance formalities. They charge a fee for this, which may vary depending on the country of origin.
Swiss Post charges a minimum of CHF 11.50 and a maximum of CHF 70 for processing the customs clearance. Have a look at the FAQ on Swiss Post’s website about import duties for goods ordered. `,
              },
            ],
          },
          {
            title: "What about lost packages?",
            content: [
              {
                text: `If your online purchase has not arrived, contact the seller of the product abroad or the customer service of the carrier. The Federal Office for Customs and Border Security cannot provide any information about tracking packages. When you order a product online, the seller will generally send you an email with links to track your package.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 1,
    categoryId: 1,
    title: "Shopping tourism",
    description:
      "When you bring purchases made abroad back to Switzerland, you may need to fill out a customs declaration form. This page will guide you through the steps to clear meat, wine and other goods through customs.",
    content: [
      {
        infos: [
          {
            title: "When do you have to pay customs duties?",
            content: [
              {
                subtitle: "Importing goods into Switzerland",
                text: `Goods can be imported into Switzerland free of charge if their total value does not exceed CHF 150. If the total value of goods is more than CHF 150, you will be charged Swiss VAT on the total value.

There is also a limit on the quantity of foodstuffs, alcohol and tobacco that can be imported. If you exceed the limit, you will be charged customs duties.

Examples of quantities allowed into Switzerland free of charge for:

Alcoholic beverages with an alcohol content of <18%: 5 litres per person per day
Alcoholic beverages with an alcohol content of >18%: 1 litre per person per day
Meat: 1kg per person per day
Cigarettes: 250 cigarettes per person per day
If you bring goods purchased abroad to Switzerland, you often have the option of claiming a refund of foreign VAT.

Be careful, there are sensitive goods to bring into Switzerland.`,
              },
              {
                subtitle: "Transit of goods through Switzerland",
                text: `Anyone travelling through Switzerland with personal goods must declare these goods when entering Switzerland. Any customs duties payable will be reimbursed to you (in Swiss francs) when you leave Switzerland.

If you are simply leaving Switzerland with personal goods, you do not need to complete any special customs export formalities. But don’t forget to check the import rules of your destination country.`,
              },
            ],
          },
          {
            title: "How to clear goods through customs",
            content: [
              {
                subtitle: "QuickZoll App",
                text: `QuickZoll is an app provided by the Federal Office for Customs and Border Security for the importation of personal goods. The app allows you to declare your goods before you bring them into the country and to pay any customs fees directly. The goods cleared for import using QuickZoll can then be brought into Switzerland at any border crossing.

You can download the QuickZoll app to your mobile phone free of charge and do not need to register to use it.`,
              },
              {
                subtitle: "Verbal customs declaration",
                text: `If there are customs officials stationed at the Swiss border crossing, you need to spontaneously declare the goods you are carrying. In airports choose the red exit to declare your goods.

If you are travelling by rail, you can make a verbal declaration to a customs official on the train. If there are no customs officials on the train, you can declare your goods at any customs office during business hours within seven days of your arrival in Switzerland.`,
              },
              {
                subtitle: "Written self-declaration",
                text: `If you enter the country at an unmanned border crossing, you can fill out a self-declaration form. These forms are available in the declaration box. However, this option is not available for declaring goods that are to be sold or traded.`,
              },
            ],
          },
          {
            title: "Refund of foreign VAT",
            content: [
              {
                text: `If you bring goods purchased abroad to Switzerland, you often have the option of having the foreign VAT refunded. The Federal Office for Customs and Border Security is not authorised to make this refund and is unable to provide any information on how to proceed.

Foreign VAT refunds are made by the seller abroad or by a VAT refund company. Different rules apply to VAT refunds in different countries. Sellers abroad generally provide you with a refund form on which the foreign customs authority can confirm the exportation of your purchase to Switzerland.

Swiss VAT must be paid on goods of a total value exceeding CHF 150 on import even if the foreign VAT is not refunded.`,
              },
            ],
          },
        ],
      },
    ],
  },
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
];

export const informations: Information[] = [
  ...informationWorkAbscenceDueToIllnes,
  ...infoCustoms,
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
