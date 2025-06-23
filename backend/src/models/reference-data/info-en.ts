import { CategoryId, LocaleId, type Information } from "../model";

const infoCustoms: Information[] = [
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(1),
    title: "Bringing sensitive goods into Switzerland",
    description:
      "Clearing customs in Switzerland can be difficult depending on the goods and animals you are bringing into the country. This page provides helpful information on border crossing procedures and entry into Switzerland.",
    contents: [
      {
        infos: [
          {
            title: "Imported goods for personal use",
            contents: [
              {
                text: `Every person entering Switzerland must clear customs. You are required to declare all imported goods you are carrying if their total value exceeds CHF 150, and any goods that exceed the duty-free allowances for foodstuffs, alcohol and tobacco.

If you do not pay the customs duties you owe, your belongings could be seized. The customs formalities are described on the page about shopping tourism.`,
              },
            ],
          },
          {
            title: "Plants and animals",
            contents: [
              {
                subtitle: "Animals",
                text: `Border formalities vary depending on whether you bring a dog, a lizard skin or goods of animal origin into Switzerland.`,
              },
            ],
          },
          {
            title: "Plants",
            contents: [
              {
                text: `Be careful about the souvenirs you bring back from your trips. It is against the law to import a number of different plants, fruits, vegetables, cut flowers, seeds and other parts of living plants into Switzerland. This also applies to soil and certain types of wood.`,
              },
            ],
          },
          {
            title: "Weapons",
            contents: [
              {
                text: `It is prohibited to import a number of different weapons into Switzerland. You must declare all weapons and ammunition you are bringing into Switzerland at the customs office.

Weapons are not subject to customs duties, but you need to pay the value added tax (8.1%).

More information about bringing weapons into Switzerland and the required permits is available on the Federal Office for Customs and Border Security's web page about weapons and on the ch.ch page about weapons.`,
              },
            ],
          },
          {
            title: "Loaned vehicle",
            contents: [
              {
                text: `You can enter Switzerland with a loaned vehicle, but you would be well advised to have a written authorisation from the owner of the vehicle to avoid any suspicion of theft.

In principle, you may not use an uncleared vehicle in Switzerland if you are a resident of Switzerland. The Federal Office for Customs and Border Security offers further information about using an uncleared vehicle temporarily in Switzerland.`,
              },
            ],
          },
          {
            title: "Cash",
            contents: [
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(1),
    title: "Moving to Switzerland",
    description:
      "If you live abroad and are planning to move to Switzerland, you will find an overview here of the necessary formalities for seamlessly moving your furniture and other personal belongings across the border and through customs without having to pay any fees.",
    contents: [
      {
        infos: [
          {
            title: "Residence formalities",
            contents: [
              {
                text: `If you are a foreign national moving to Switzerland, you also need to complete residence formalities. ch.ch explains what you need to know about residence permits and the travel documents you need to enter Switzerland. `,
              },
            ],
          },
          {
            title: "Bringing personal belongings into Switzerland duty-free",
            contents: [
              {
                text: `People living abroad who want to move to Switzerland can move most of their personal belongings without paying customs duties. People moving to a second home in Switzerland are also exempt from paying customs duties on their personal belongings. However this does not apply to the means of transport and animals.`,
              },
            ],
          },
          {
            title: "What are the conditions?",
            contents: [
              {
                text: `In order to import your household goods, pets, personal belongings and vehicles into Switzerland free of customs duties, you need to fulfil several conditions:

- You must transfer your residence to Switzerland and provide proof. Please note: this condition does not apply to students bringing their furniture, personal belongings and school materials into Switzerland.

- You must have used the belongings for personal use for at least six months before bringing them into Switzerland and continue to use them afterwards.

- If you have merchandise to declare, make sure you cross the border during the opening hours of the appropriate customs offices for clearance of merchandise.`,
              },
            ],
          },
          {
            title: "What are the customs formalities?",
            contents: [
              {
                text: `You need to present various documents at the customs office when crossing the border:

- Full list of the imported goods (on a separate sheet of paper)

- Form (completed in duplicate) for the duty-free import of your belongings (download the form from the website of the Federal Office for Customs and Security Border)

- Identity document (passport or identity card)

- Document certifying that you have announced your departure to the authorities of the country of origin

- Swiss residence permit or other document proving the transfer of residence (such as an employment contract or a lease)

- Foreign driving licence for means of transport or vehicle registration certificate (even if it has already been cancelled)

- Proof of purchase or rental of accommodation.

If you hire a moving company to transport your household goods into Switzerland, be sure to provide these documents to the moving company.

You do not need to schedule the date and time you pass through customs ahead of time, but if you do it will speed up formalities at some customs offices when you cross the border.

The Federal Office for Customs and Security Border provides a list of the customs offices with scheduling options and additional information on its page about moving household effects`,
              },
            ],
          },
          {
            title: "What is the deadline?",
            contents: [
              {
                text: `You have two years from the date of your transfer of residence to bring your belongings into Switzerland duty-free.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(1),
    title: "Ordering goods from abroad",
    description: "Import customs duties are charged on goods ordered abroad. This page provides an overview of the customs duties for online purchases.",
    contents: [
      {
        infos: [
          {
            title: "Paying customs duties",
            contents: [
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
            contents: [
              {
                text: `Customs fees can vary widely. In Switzerland, the recipient of a package needs to pay the following fees:

- VAT on the value of the goods ordered (including shipping costs and customs duties)
- Customs duties on the gross weight
- Other fees like tobacco tax or spirits tax
- Carrier’s expense
- Postal and shipping services (including Swiss Post, DHL and UPS) take care of all the customs clearance formalities. They charge a fee for this, which may vary depending on the country of origin.

Swiss Post charges a minimum of CHF 11.50 and a maximum of CHF 70 for processing the customs clearance. Have a look at the FAQ on Swiss Post’s website about import duties for goods ordered. `,
              },
            ],
          },
          {
            title: "What about lost packages?",
            contents: [
              {
                text: `If your online purchase has not arrived, contact the seller of the product abroad or the customer service of the carrier. The Federal Office for Customs and Border Security cannot provide any information about tracking packages. When you order a product online, the seller will generally send you an email with links to track your package.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(1),
    title: "Shopping tourism",
    description:
      "When you bring purchases made abroad back to Switzerland, you may need to fill out a customs declaration form. This page will guide you through the steps to clear meat, wine and other goods through customs.",
    contents: [
      {
        infos: [
          {
            title: "When do you have to pay customs duties?",
            contents: [
              {
                subtitle: "Importing goods into Switzerland",
                text: `Goods can be imported into Switzerland free of charge if their total value does not exceed CHF 150. If the total value of goods is more than CHF 150, you will be charged Swiss VAT on the total value.

There is also a limit on the quantity of foodstuffs, alcohol and tobacco that can be imported. If you exceed the limit, you will be charged customs duties.

Examples of quantities allowed into Switzerland free of charge for:

- Alcoholic beverages with an alcohol contents of <18%: 5 litres per person per day

- Alcoholic beverages with an alcohol contents of >18%: 1 litre per person per day

- Meat: 1kg per person per day

- Cigarettes: 250 cigarettes per person per day

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
            contents: [
              {
                subtitle: "QuickZoll App",
                text: `QuickZoll is an app provided by the Federal Office for Customs and Border Security for the importation of personal goods.

The app allows you to declare your goods before you bring them into the country and to pay any customs fees directly. The goods cleared for import using QuickZoll can then be brought into Switzerland at any border crossing.

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
            contents: [
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
    isEssential: 0,
  },
];

const infoDocuments: Information[] = [
  //Certificate of inheritance
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Certificate of inheritance",
    description:
      "The certificate of inheritance (obtained in a procedure equivalent to the English or American grant of probate or Scottish confirmation) states who is entitled to inherit a deceased person's assets. This document is usually required to deal with assets in the deceased's estate, for example, to withdraw money from the deceased's bank account.",
    contents: [
      {
        infos: [
          {
            title: "Who can apply for a certificate of inheritance",
            contents: [
              {
                text: `If the deceased did not make a will or a contract of succession, the statutory heirs may apply for a certificate of inheritance; these are, depending on the case, the deceased's wife, husband, registered partner, descendants (i.e. children and their descendants) or, if applicable, parents and their children (i.e. the deceased's brothers and sisters).

If there is a will or a contract of succession, the certificate of inheritance can only be applied for after the official notice of the will or the contract is given by the competent authority.`,
              },
            ],
          },
          {
            title: "Requirements",
            contents: [
              {
                text: `In order to obtain a certificate of inheritance, you must, among other things:

- submit a copy of the death certificate (you can obtain this from the register office),

- prove that you are entitled to inherit (e.g. by providing an extract from the civil status register showing your family relationship or civil relationship with the deceased , or a copy of the will or contract of succession),

- prove that you have not renounced your inheritance (i.e. by submitting the declaration of acceptance by all heirs or

- proof that the period in which it would have been possible to renounce the inheritance has expired)`,
              },
            ],
          },
          {
            title: "Cost",
            contents: [
              {
                text: `The cost of issuing a certificate of inheritance varies from case to case; it depends on what enquiries are needed and the time the authority had to spend on them in order to be able to issue you with the certificate of inheritance. The costs can amount to several hundred or even a few thousand francs. In addition, there are the costs that the civil register office charges for issuing the documents and obtaining information in Switzerland and abroad.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  //Civil status certificates
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Civil status certificates",
    description:
      "The authorities will supply various kinds of document that certify a family relationship, for example, or your date and place of birth. This page gives a list of the civil status certificates that you can order, and where to get them from.",
    contents: [
      {
        infos: [
          {
            title: "Where and how to order",
            contents: [
              {
                text: "You can request civil status certificates directly online, or by going in person to the register office that is responsible for you. The individual office in question varies depending on the type of document you need:",
              },
              {
                text: "Birth certificate Confirmation of time of birth",
                links: [
                  {
                    text: "Register office at your place of birth",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?1",
                  },
                ],
              },
              {
                text: "Certificate of origin (for Swiss citizens), Individual civil status certificate (for Swiss citizens)",
                links: [
                  {
                    text: "Register office at your place of origin",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Confirmation of registered civil status (for foreign nationals)",
                links: [
                  {
                    text: "Register office at your (previous) place of (permanent) residence",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Family certificate for Swiss nationals (formerly family record book)",
                links: [
                  {
                    text: `If you are a Swiss citizen: register office at your place of origin. `,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                  {
                    text: `If you are a foreign national: register office at your (previous) place of residence`,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Marriage certificate",
                links: [
                  {
                    text: "Register office where your marriage took place",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Certificate of registered partnership",
                links: [
                  {
                    text: "Register office where your partnership was registered",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Death certificate",
                links: [
                  {
                    text: "Register office at your place of death",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
            ],
          },
          {
            title: "Costs",
            contents: [
              {
                text: "In Switzerland it costs CHF 30 (plus postage) to obtain a civil status certificate. Family certificates, other family records, certificates of registered partnership and certificates of registered civil status cost more.",
              },
            ],
          },
          {
            title: "Who may order a civil status certificate and that conditions apply?.",
            contents: [
              {
                text: `- You may order all civil status certificates concerning you personally.
- Family record books may be updated, but may no longer be ordered.
- You may request a civil status certificate for someone else, providing you can present power of attorney from the person concerned and a copy of their ID.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  //Criminal records extract
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Criminal records extract",
    description:
      "A prospective employer may want to ensure that you do not have a criminal past. An extract from the Register of Criminal Records will provide information on any convictions that you may have.",
    contents: [
      {
        infos: [
          {
            title: "Standard private extract: what is it?",
            contents: [
              {
                text: `A standard private extract from the Swiss Register of Criminal Records reveals whether a person has been convicted of a felony or misdemeanour over a certain period of time (the disclosure period); the length of the disclosure period for each conviction depends on the sanction imposed.

It can be requested by a prospective employer, if you are applying for a firearms licence or if you want to become a Swiss citizen, for example.`,
              },
            ],
          },
          {
            title: "Ordering the extract",
            contents: [
              {
                text: "You can order a standard private extract at a post office or on the Internet via the Federal Office of Justice website.",
                links: [
                  {
                    url: "https://www.e-service.admin.ch/crex/cms/contents/strafregister/uebersicht_fr",
                  },
                ],
              },
            ],
          },
          {
            title: "Price of the extract?",
            contents: [
              {
                text: `Each extract costs CHF 17.

If your extract is intended for a foreign authority or embassy (for a visa application for example), you will have to pay an additional 20 francs to have the certificate legalised.

Here you will find information on the procedure for legalising the extract.`,
              },
            ],
          },
          {
            title: "Special private extract",
            contents: [
              {
                text: `There is also a special private extract which only lists convictions that currently place you under a ban

-on working in a particular profession or carrying out a particular activity,
-on contacting a particular person or persons or
-on entering a particular place or area
in order to protect minors or other especially vulnerable persons.

You may only be asked to provide this extract if you are planning to be involved in an organised activity (e.g. as a sports coach or teacher) involving regular contact with minors or other especially vulnerable persons.

The procedure for ordering a special private extract is the same as for a standard private extract. However, the organisation or employer that requires your services must first complete and send you signed confirmation that the activity requires a special private extract.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Driving licence
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Driving licence///Exchanging your driving licence",
    description:
      "A Swiss driving licence does not have an expiry date, however if your driving licence is lost or stolen, you need to apply for a new one. This web page provides instructions for getting a credit-card format driving licence and changing information on your existing licence. ",
    contents: [
      {
        infos: [
          {
            title: "When do you need a new driving licence?",
            contents: [
              {
                subtitle: "Loss or theft of your driving licence",
                text: `If your driving licence has been lost or stolen, you need to get a new one.`,
              },
              {
                subtitle: "Information on your licence has changed ",
                text: `If there is a change of information on your licence, such as a name change or a change in licence category, you need to get a new licence.`,
              },
              {
                subtitle: "Drivers who still have a blue paper licence",
                text: `Paper driving licences lost their validity on 1 November 2024. Drivers who still have a blue paper licence need to exchange it for a credit-card format licence.`,
              },
              {
                subtitle: "Driving abroad",
                text: `To drive in some countries, you need an international driving licence.`,
              },
            ],
          },
          {
            title: "What you need to do if yout licence is lost or stolen?",
            contents: [
              {
                text: `If your Swiss driving licence has been stolen, you need to report the theft at a police station (website available in German, French and Italian).

You should then contact the driver and vehicle licensing office (website available in German, French and Italian), which will issue you a temporary licence authorising you to drive until you receive your new licence.

Once a new licence is issued, the old one is no longer valid. If you find your lost or stolen licence, please send it to the driver and vehicle licensing office with an explanatory note.`,
              },
            ],
          },
          {
            title: "What you need to do to get a new licence?",
            contents: [
              {
                text: `You need to contact your canton’s driver and vehicle licensing office (website available in German, French and Italian).

The new licence will be sent to you by post within one to two weeks.

The cost of a new licence varies from canton to canton. A duplicate or an updated licence costs around CHF 30. Exchanging a foreign licence for a Swiss one costs more than CHF 100.`,
              },
            ],
          },
          {
            title: "Driving with a foreign licence?",
            contents: [
              {
                text: `If you live in Switzerland, you may drive with a foreign licence for 12 months. After that, you are required to have a Swiss licence.

You need to exchange your foreign licence for a Swiss licence; this is still possible after the 12-month grace period, but you may have to pay a fine.`,
              },
              {
                subtitle: "Exchanging a foreign licence for a Swiss one",
                text: `The procedures vary depending on which country issued the foreign licence. In any case, you must produce the original driving licence and take an eye test.

If you have a licence from an EU or EEA country (Iceland, Liechtenstein, Norway), you will be issued a Swiss licence without having to take a driving test. Your foreign licence will be returned to the issuing authority.

For a licence from another country, you need to take:

-a driving test
-an additional theory exam (for professional drivers) to certify your fitness to drive.

After handing over your foreign licence and taking the necessary texts, you will be issued a Swiss driving licence on a three-year trial basis or a licence with no expiry date. The document is sent by post within a period of time that varies from canton to canton.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Driving licence///International driving licence",
    description: "If you plan to drive in a foreign country, you may need an international driving licence. Find out if you need one, and how to order one in Switzerland.  ",
    contents: [
      {
        infos: [
          {
            title: "What is an international driving licence?",
            contents: [
              {
                text: `The international driving licence is an international version of your Swiss driving licence, allowing you to drive in a foreign country. It is only valid when accompanied by your Swiss licence. You need to have both valid documents with you when you drive abroad.`,
              },
            ],
          },
          {
            title: "Which countries require an international driving livence?",
            contents: [
              {
                subtitle: "People with a Swiss driving licence",
                text: `An international driving licence is recommended when driving in countries outside the EU and EFTA. Several countries and many car-hire services require you to have an international driving licence.

Before travelling abroad, ask your travel agent, the foreign representation of your destination country or a road transport association which driving documents are required.

European countries accept the Swiss driving licence.`,
              },
              {
                subtitle: "People with a foreign driving licence",
                text: "If you live abroad, you need an international licence to drive in Switzerland only if your driving licence does not mention the authorised vehicle categories in Latin characters. If you live in Switzerland, you may have to exchange your foreign licence for a Swiss licence.",
              },
            ],
          },
          {
            title: "Ordering an international licence?",
            contents: [
              {
                text: `You can order your international driving licence at your canton’s road traffic office (website available in German, French and Italian).

In some cantons, you can also contact the Automobile Club of Switzerland or the Touring Club of Switzerland. These associations will also provide you with information on the documents required.`,
              },
            ],
          },
          {
            title: "Validity and price",
            contents: [
              {
                text: `The international driving licence is valid for three years, but not beyond the expiry date of your Swiss driving licence.

You cannot renew your international licence, but you can order a new one if it expires.

The price of an international licence varies from canton to canton. It is around CHF 30.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Extract from the debt enforcement register
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Extract from the debt enforcement register",
    description: "In order to prove that you pay your bills and have no outstanding debts, you regularly have to provide an extract from the debt enforcement register.",
    contents: [
      {
        infos: [
          {
            title: "What is the extract and when you need one?",
            contents: [
              {
                text: `An extract from the debt enforcement register states whether any debt enforcement proceedings have been opened against you in the past 5 years.

If you want to rent an apartment, for example, your prospective landlord will often ask you for an extract in order to find out whether you are likely to pay your bills. The same applies if you wish to take out a loan from the bank or buy a car on hire purchase. You will also be asked to provide an extract if you apply for Swiss citizenship.`,
              },
            ],
          },
          {
            title: "Which countries require an international driving livence?",
            contents: [
              {
                subtitle: "People with a Swiss driving licence",
                text: `An international driving licence is recommended when driving in countries outside the EU and EFTA. Several countries and many car-hire services require you to have an international driving licence.

Before travelling abroad, ask your travel agent, the foreign representation of your destination country or a road transport association which driving documents are required.

European countries accept the Swiss driving licence.`,
              },
              {
                subtitle: "People with a foreign driving licence",
                text: "If you live abroad, you need an international licence to drive in Switzerland only if your driving licence does not mention the authorised vehicle categories in Latin characters. If you live in Switzerland, you may have to exchange your foreign licence for a Swiss licence.",
              },
            ],
          },
          {
            title: "Who can request an extract?",
            contents: [
              {
                text: `You can request an extract in connection with debt enforcement proceedings that affect you or another person.

In order to request your extract, you will need to present a copy of an identity document.

To obtain an extract from the register in relation to another person, you will need signed authorisation from that person and a copy of their ID.

You can also ask for an extract from the register relating to another person without having to inform them. However, you must prove that you have a particular interest in obtaining this information. For example, you can obtain an extract for a person to whom you intend to rent an apartment or lend money. You will need to enclose documentary proof of your interest (e.g. a written offer of the lease or loan) with your request, together with a copy of your ID.`,
              },
            ],
          },
          {
            title: "Where can you request the extract?",
            contents: [
              {
                text: `You have two options for requesting the extract:

- Complete the online form and send it by post or e-mail to the debt enforcement office in your canton of residence;
- or request the extract in person at the counter of the debt enforcement office in your canton of residence.`,
              },
            ],
          },
          {
            title: "Deleting an entry from the register",
            contents: [
              {
                text: `The entry in the register is automatically deleted 5 years after the debt enforcement proceedings are concluded. Before this deadline:

- you can go directly to your creditors and ask them to abandon the enforcement proceedings and have the entry removed from the register, for example, if you have come to an arrangement with them in the meantime or paid off your debt;

- the debt enforcement office will amend incorrect entries directly or at your request;

- under certain conditions, you can ask the debt enforcement office not to include an enforced debt in the extract from the register. The relevant office will inform you of the conditions to be met and the costs involved.`,
              },
            ],
          },
          {
            title: "Costs",
            contents: [
              {
                text: `An extract from the debt enforcement register costs CHF 17 plus any postage costs.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Hunting licence
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Hunting training and licence",
    description: "If you want to hunt in Switzerland, you need hunting training. Depending on the canton, you may also need to obtain a hunting licence or become a member of a hunting association.",
    contents: [
      {
        infos: [
          {
            title: "Do i need specific traning to hunt in Switzerland?",
            contents: [
              {
                text: `Before you are allowed to hunt, you must pass an examination. The courses are regulated at the cantonal level and last up to three years. Some cantons recognise the qualifications of other cantons.

Further information on hunting training and examinations can be found at the relevant cantonal offices (many cantons have a hunting inspectorate):`,
              },
            ],
          },
          {
            title: "Hunting licences or hunting estates?",
            contents: [
              {
                text: `If you have passed the hunting test, you can obtain a hunting licence in most cantons. In other cantons, you must be a member or guest of a hunting association to be allowed to hunt on one of their hunting estates. Please check with the canton in which you wish to hunt.`,
              },
              {
                subtitle: "Which cantons offer hunting licences?",
                text: `In most cantons, you can hunt anywhere in the canton if you have purchased a cantonal hunting licence. You are allowed to shoot a certain number of animals. This number is stated on the licence, as is how long the licence is valid for.

You are not allowed to hunt in federally and cantonally protected areas such as hunting ban areas or waterfowl and migratory bird reserves.

Cantons with hunting licences are Bern, Uri, Schwyz, Obwalden, Nidwalden, Glarus, Zug, Fribourg, Appenzell Ausserrhoden, Appenzell Innerrhoden, Graubünden, Ticino, Vaud, Valais, Neuchâtel and Jura.`,
              },
              {
                subtitle: "Which cantons have hunting estates?",
                text: `In some cantons, the communes lease hunting rights to a hunting association. As a member or guest of this hunting association, you may hunt in the leased area.

Cantons with hunting estates: Zurich, Lucerne, Solothurn, Basel-Stadt, Basel-Landschaft, Schaffhausen, St Gallen, Aargau and Thurgau.`,
              },
            ],
          },
          {
            title: "Can i hunt in the canton of Geneva?",
            contents: [
              {
                text: `Hunting is not permitted in the canton of Geneva. State gamekeepers regulate game populations there.`,
              },
            ],
          },
          {
            title: "How well do i have to shoot to go hunting?",
            contents: [
              {
                text: `You must regularly prove that you can shoot accurately. Otherwise, you will not be allowed to hunt. Most cantons require you to go shooting annually at a recognised hunting shooting range and demonstrate your accuracy.

You can find more information on compulsory shooting and recognised shooting ranges from the relevant cantonal office.`,
              },
            ],
          },
          {
            title: "When does the hunting season start and when are the closed seasons?",
            contents: [
              {
                text: `The hunting season does not last the entire year. There are closed seasons during which you are not allowed to hunt. The Confederation sets the closed seasons for each animal species. The cantons can shorten the hunting season or restrict the list of species you are allowed to hunt. Check with the relevant cantonal authority to find out when you are allowed to hunt which animal.`,
              },
            ],
          },
          {
            title: "Can i hunt with huting dogs?",
            contents: [
              {
                text: `Anyone interested in using hunting dogs must take training courses and pass tests. Contact the relevant cantonal authority for more information about the requirements for using hunting dogs.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Living wills
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Living wills",
    description: "With a living will you determine the medical treatment that you want at the end of your life. Special forms are available. We explain the process, and where to find templates",
    contents: [
      {
        infos: [
          {
            title: "What is a living will?",
            contents: [
              {
                text: `With a living will (sometimes referred to as an advance care directive or a patient decree), you determine what medical treatment you want in the final stage of an illness or following a serious accident. You also determine what treatment you do not wish to have.

It ensures that as the patient your wishes will continue to be followed at the end of your life if you are no longer able to express them yourself.

You do not have to make a living will. Living wills are personal and free of charge. You can write one and change it at any time.`,
              },
            ],
          },
          {
            title: "Process and forms",
            contents: [
              {
                text: `There are two types of living will. One concentrates on general points, while the other determines what medical intervention is permitted in different situations. This is what you need to do:

1. Download a template. Forms and specimens are available from many organisations, such as the Swiss Medical Association FMH (website available in German, French and Italian), which offers both short and full versions.
2. Complete your chosen form, then date and sign it.
3. Give your living will to a close friend or family member, or to your family doctor. You can also tell them where your treatment team can find the document if they need it.
4. Keep a note in your wallet about your living will and where it is kept.

Do not hesitate to get advice on completing the form. The doctor treating you will be able to help, for example. If decisions have to be made, a clear directive setting out your wishes carries greater weight, and raises fewer questions about what those wishes are.

Review your living will regularly and amend it if necessary. The FMH recommends checking it every couple of years. Do not forget to date and sign the new version.
`,
              },
            ],
          },
          {
            title: "What conditions do I have to fulfil?",
            contents: [
              {
                text: `You do not need to be in the best of health, but you do have to have legal capacity, i.e. be able to decide for yourself.

The living will must reflect your actual wishes. It may not have been drawn up under pressure.

Doctors are bound only by living wills that have been dated and signed by hand.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Passport and identity card
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Passport and identity card///Applying for a passport or an identity card",
    description:
      "Identity documents can be ordered online or at your cantonal passport office. You can expect to receive them within about 10 working days - up to 30 working days if you live abroad. In exceptional and urgent cases, you can apply for a temporary passport.",
    contents: [
      {
        infos: [
          {
            title: "Where to a apply for an identity document",
            contents: [
              {
                subtitle: "Online",
                text: `You can apply for a passport and/or identity card online. The following link will walk you through the process:`,
                links: [
                  {
                    text: "Applying for a passport and/or identity card online.",
                    url: "https://www.ch-edoc-passantrag.admin.ch/#/antraggesuch",
                  },
                ],
              },
              {
                subtitle: "At your cantonal passport office",
                text: `You should receive the documents within 10 working days.`,
                links: [
                  {
                    text: `You can order a passport and/or identity card in person at your cantonal passport office or by contacting the office by phone.`,
                    url: "https://www.ch-edoc-passantrag.admin.ch/#/antraggesuch",
                  },
                  {
                    text: `If you only need an identity card, it is possible in some cantons, to order one at your commune of residence.`,
                    url: "https://www.fedpol.admin.ch/fedpol/en/home/pass---identitaetskarte/pass/passstellen.html",
                  },
                ],
              },
              {
                subtitle: "At a Swiss embassy or consulate",
                text: `Swiss citizens living abroad can either apply for a passport or identity card online or call the Swiss consulate or embassy in the country where they are staying
You should receive the documents within 30 working days.`,
                links: [
                  {
                    text: `Apply for a passport or identity card online`,
                    url: "https://www.ch-edoc-passantrag.admin.ch/#/antraggesuch",
                  },
                  {
                    text: `Swiss consulate or embassy`,
                    url: "https://www.eda.admin.ch/eda/en/fdfa/representations-and-travel-advice/schweizer-vertretungen-im-ausland.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Identify documents for your children",
            contents: [
              {
                text: `From the day your children are born, you can apply for a passport and/or identity card for them.

You cannot, however, simply have their names added to your own identity document.

Please note: where the parents of a child are not married, a note may be added to one of the parents’ passports to say he or she has parental authority.`,
              },
              {
                subtitle: "Please note",
                text: `- You can only apply for an identity document for your child if you have parental authority.
- If both parents have parental authority, the signature of one of the parents is sufficient to apply for an identity document.
- However, if joint parental authority is difficult to prove (e.g. if the parents live at two different addresses), you will also have to provide - the consent of the other parent.
- Children aged seven and older are required to sign their identity document.
- Children aged 12 and older are required to provide digital fingerprints for their biometric passport.
-Once your children turn 18, they have to apply for their own identity documents.`,
              },
            ],
          },
          {
            title: "Biometric data and photographs",
            contents: [
              {
                text: `Applicants for identity documents must provide biometric data (data stored on a microchip including a facial photograph and signature – and fingerprints for passports – which are protected from abuse) to the cantonal authorities or a Swiss representation abroad.

The photograph is generally taken when the biometric data is recorded. However, some cantons allow you to use your own photograph. In such cases the photograph must meet specific requirements: contact your cantonal authority for full details.`,
              },
            ],
          },
          {
            title: "Validity",
            contents: [
              {
                text: `Passports and identity cards are valid for 10 years for adults and for 5 years for children and adolescents under the age of 18.`,
              },
            ],
          },
          {
            title: "Expired identity and travel documents",
            contents: [
              {
                subtitle: "Renewing your passport or identity card",
                text: `Once your passport or identity card has expired, you have to apply for new documents.`,
              },
              {
                subtitle: "Travelling with valid or expired documents",
                text: `As a general rule, you must carry your valid identity documents with you when you travel. Find out in advance about entry conditions at the representation of your destination country in Switzerland or at the Swiss representation abroad.

Some countries require you to have a passport that is valid for at least six months beyond the date on which you plan to leave the USA.

Other countries allow you to travel for a limited period of time even after your passport or identity card has expired.`,
                links: [
                  {
                    text: "Some countries, including the USA, China and Australia, require you to apply for a visa before you travel there",
                    url: "https://www.eda.admin.ch/eda/de/home/vertretungen-und-reisehinweise/laenderunabhaengigereiseinformationen/visum-einreise.html",
                  },
                ],
              },
              {
                subtitle: "Temporary passport",
                text: `In cases of genuine urgency, you can apply for a temporary passport at your cantonal passport office or at a Swiss embassy or consulate in the country where you are located.`,
              },
              {
                subtitle: "Please note",
                text: `Unlike a normal passport, a temporary passport is not biometric and does not contain a microchip with your fingerprints and photograph. It may therefore not be accepted in all countries: foreign representations in Switzerland provide information about the entry requirements in their countries

A temporary passport is valid for a maximum of 12 months.`,
              },
            ],
          },

          {
            title: "Swiss passport for foreign nationals",
            contents: [
              {
                text: `Foreign nationals interested in obtaining a Swiss passport need to follow the steps on the page on naturalisation.`,
                links: [
                  {
                    url: "https://www.eda.admin.ch/eda/de/home/vertretungen-und-reisehinweise/laenderunabhaengigereiseinformationen/visum-einreise.html",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Passport and identity card///Lost or stolen passport or identity card",
    description: "If you lose your ID documents or if they are stolen, you must file a police report to obtain a new passport or ID card.",
    contents: [
      {
        infos: [
          {
            title: "Filing a police report",
            contents: [
              {
                subtitle: "In Switzerland",
                text: `If your passport is lost or stolen, you need to file a report at the police station. By filing a report, your passport or identity card will automatically be cancelled. Even if you find your passport or identity card, you will no longer be able to use them, and you are required to hand them over to the passport office in your canton.`,
                links: [
                  {
                    text: "Police station",
                    url: "https://www.suisse-epolice.ch/home",
                  },
                  {
                    text: "Passport office in your canton",
                    url: "https://www.fedpol.admin.ch/fedpol/en/home/pass---identitaetskarte/pass/passstellen.html",
                  },
                ],
              },
              {
                subtitle: "Abroad",
                text: `If your Swiss identity documents are lost or stolen while you are abroad, you need to file a report with the local police and notify the Swiss embassy or consulate in the country where you are staying. The embassy or consulate will, in turn, notify the police in Switzerland.

You can then order new identity documents or obtain an emergency passport if you need it right away, for example to return to Switzerland.`,
                links: [
                  {
                    text: "Swiss embassy or consulate",
                    url: "https://www.eda.admin.ch/eda/en/fdfa/representations-and-travel-advice/schweizer-vertretungen-im-ausland.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Obtaining a new passport or identity card",
            contents: [
              {
                subtitle: "In Switzerland",
                text: `After you have filed a police report, you can choose from one of the options listed on the Ordering a passport or identity card page to obtain a new passport or identity card.`,
              },
              {
                subtitle: "Abroad",
                text: `After you have filed a police report, you can apply for a new passport or identity card directly at the Swiss consulate or embassy where you filed the report, or order one online:

Keep in mind that you may need to wait up to 30 working days before receiving the new documents.

In cases of urgency - for example, if you cannot otherwise return to Switzerland - you can request a temporary passport.`,
              },
            ],
          },
          {
            title: "Obtaining a temporary passport",
            contents: [
              {
                text: `In cases of urgency, where justified, you can apply for a temporary passport at your cantonal passport office or at a Swiss embassy or consulate in the country where you are located.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  //Permits for living in Switzerland
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Permits for living in Switzerland",
    description: "All foreign nationals who remain in Switzerland for more than three months must obtain a permit. Guide to obtaining a permit.",
    contents: [
      {
        infos: [
          {
            title: "Overview of permits",
            contents: [
              {
                text: `The Agreement on the Free Movement of Persons makes it easy for EU/EFTA nationals to enter and stay in Switzerland. The rules are more restrictive for people from other countries (third countries). The permit you require differs depending on the purpose and duration of your stay.`,
              },
              {
                subtitle: "Nationals of EU-27*/EFTA** countries",
                text: `- EU/EFTA L permit (short-stay permit)
- EU/EFTA B permit (residence permit)
- EU/EFTA C permit (settlement permit)
- EU/EFTA Ci permit (residence permit with gainful employment)
- EU/EFTA G permit (cross-border commuter permit)

*The following countries belong to the EU-27: Austria, Belgium, Bulgaria, Croatia, Cyprus, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Ireland, Italy, Latvia, Lithuania, Luxembourg, Malta, Netherlands, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden.

**The following countries belong to the EFTA: Iceland, Norway, Liechtenstein, Switzerland
`,
              },
              {
                subtitle: "Third-country nationals",
                text: `- B permit (residence permit)
- C permit (settlement permit))
- Ci permit (residence permit with gainful employment)
- G permit (cross-border commuter permit)
- L permit (short-stay permit)
- F permit (for temporarily admitted foreigners)
- N permit (for asylum seekers)
- S permit (provisional status for persons in need of protection)`,
              },
            ],
          },
          {
            title: "How do I obtain a permit?",
            contents: [
              {
                text: `If you need a permit to live in Switzerland, please contact the cantonal migration or employment authorities of your commune of residence.

The requirements you need to meet depend on your nationality and the duration and purpose of your stay. ch.ch gives you more information on its pages Working in Switzerland as a foreigner and Staying in Switzerland without working.`,
              },
            ],
          },
          {
            title: "How do I obtain a permit?",
            contents: [
              {
                text: `If you need a permit to live in Switzerland, please contact the cantonal migration or employment authorities of your commune of residence.

The requirements you need to meet depend on your nationality and the duration and purpose of your stay. ch.ch gives you more information on its pages Working in Switzerland as a foreigner and Staying in Switzerland without working.`,
              },
            ],
          },
          {
            title: "Submit your application to your commune of residence. If you live in the canton of Geneva, please contact the canton.",
            contents: [
              {
                text: `Submit your application along with the following documents:

- your current permit
- a valid identity card or passport (if you are not an EU or EFTA citizen, the ID card or passport must be valid for at least three months after the expiry of the permit)
- notice of expiry of the permit if you have received one from the cantonal migration authority.

You can apply to renew your permit no earlier than three months and no later than two weeks before it expires.`,
              },
            ],
          },
          {
            title: "My permit has been lost or stolen – what should I do?",
            contents: [
              {
                text: `Report the loss of your permit to the police; they will issue you with a loss notice.

You can find a police station here.

Then go to the residents' register office in your commune (or to the cantonal migration authority) with your passport, a passport photo and the loss notice. You must pay for the duplicate or new permit. The costs vary.

If a permit reported as lost is subsequently found, you must cancel it at the residents' register office in your place of residence.`,
              },
            ],
          },
          {
            title: "Staying in Switzerland after separation, divorce or your partner's death",
            contents: [
              {
                text: `If you have obtained a permit to live in Switzerland under family reunification but you divorce the person who gave you the right of residence or this person dies, you must notify the cantonal migration authority.

If you have a residence permit (B permit), you may be permitted to stay subject to certain conditions:`,
              },
              {
                subtitle: "EU/EFTA citizens",
                text: `You can apply for a permit in your own name if you are working or have sufficient resources to ensure your financial independence.`,
              },
              {
                subtitle: "Third-country citizens",
                text: `You can have your permission to stay extended if

- you have been married for at least three years and have lived in the same household with your spouse (Swiss or foreign national),
- you are well integrated in Switzerland (respect for law and order, good oral language skills, in work or pursuing education or training), or
- you need to stay in Switzerland for important personal reasons (e.g. social reintegration in the country of origin is seriously compromised, domestic violence).`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  //Requesting an OASI card
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Requesting an OASI card",
    description: "If you do not have an OASI card or if you have lost yours, you can request one by filling out the online form and sending it to the competent authority.",
    contents: [
      {
        infos: [
          {
            title: "If you are an employee",
            contents: [
              {
                text: `If you have not yet received your OASI card or if you have lost it, you can fill out the application form available on the OASI/DI website and return it to your employer.

You will then be sent a (new) OASI card.`,
                links: [
                  {
                    text: "The application form",
                    url: "https://www.ahv-iv.ch/en/Forms/Forms/General-administration-forms",
                  },
                ],
              },
            ],
          },
          {
            title: "If you are self-employed or not working",
            contents: [
              {
                text: `If you have not yet received your OASI card or if you have lost it, you can fill out the application form available on the OASI/DI website and return it to your professional fund association or your cantonal compensation office to which you make your contributions:

You will then be sent a (new) OASI card.`,
                links: [
                  {
                    text: "The application form",
                    url: "https://www.ahv-iv.ch/en/Forms/Forms/General-administration-forms",
                  },
                  {
                    text: "Professional fund association",
                    url: "https://www.ahv-iv.ch/en/Contacts/Union-compensation-offices",
                  },
                  {
                    text: "Cantonal compensation office",
                    url: "https://www.ahv-iv.ch/en/Contacts/Cantonal-compensation-offices",
                  },
                ],
              },
            ],
          },
          {
            title: "If you live abroad",
            contents: [
              {
                text: `If you live abroad and do not work in Switzerland and have never received or have lost your OASI card, you should contact the Swiss Compensation Office, which can issue with you with one or provide a replacement.

If you live abroad but work in Switzerland, please refer to the sections ‹If you are an employee› or ‹If you are self-employed or not working› to find out how to obtain a (new) OASI card.`,
                links: [
                  {
                    text: "Swiss Compensation Office",
                    url: "https://www.ahv-iv.ch/en/Contacts/Swiss-compensation-Office-SCO",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Salary certificate
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Salary certificate",
    description: "Employees do not need to ask for a salary certificate. They get this important certificate automatically so that they can file their tax return.",
    contents: [
      {
        infos: [
          {
            title: "What is a salary certificate?",
            contents: [
              {
                text: `The Swiss salary certificate is a form given to an employee that certifies exactly what he or she has been paid by an employer. The certificate also itemises all contributions, benefits and allowances paid.

Your employer is obliged to provide you with a salary certificate each year and usually sends it to you before the end of January. If you had more than one job at any time or if you changed employers during the year in question, you will receive a certificate for each job.

The salary certificate is the most important document you need for completing your tax return. In several cantons, employers have to send a copy directly to the tax authorities. As an employee, you only need to attach a salary certificate to your tax return if you work for an employer outside your canton or if required by the competent tax authority.`,
              },
            ],
          },
          {
            title: "Is there a problem with your certificate?",
            contents: [
              {
                text: `If your employer did not send you a salary certificate, if the document you received is incorrect, or if you have lost it, you must request a new certificate directly from the employer.`,
              },
            ],
          },
          {
            title: "How do I draw up a salary certificate?",
            contents: [
              {
                text: `If you are an employer and do not know what to do, you can follow the instructions and use the forms from the Federal Tax Administration to draw up a salary certificate. The templates are available in various sizes.`,
                links: [
                  {
                    text: "Salary certificate",
                    url: "https://www.estv.admin.ch/estv/en/home/federal-direct-tax/salary-certificate-pension-statement.html",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Lost vehicle registration document
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(2),
    title: "Lost vehicle registration document",
    description: "If you have lost or need to change your vehicle registration document, contact the driver and vehicle licensing office.",
    contents: [
      {
        infos: [
          {
            title: "Lost vehicle registration document?",
            contents: [
              {
                text: `If you have lost your vehicle registration document or it has been stolen, you can apply for a replacement document. Only the owner of the vehicle can apply for a replacement document.`,
              },
              {
                subtitle: "Requesting a replacement document",
                text: `You can order a replacement document from the driver and vehicle licensing office in your canton`,
                links: [
                  {
                    url: "https://asa.ch/strassenverkehrsaemter/adressen/",
                  },
                ],
              },
              {
                subtitle: "Returning a replacement document",
                text: `If you find the original vehicle registration document, bring or send the replacement document back to the driver and vehicle licensing office.`,
              },
              {
                subtitle: "Fees",
                text: `A new vehicle registration document costs CHF 25 to CHF 50, depending on the canton. For more information, contact the driver and vehicle licensing office in your canton (website available in German, French and Italian).`,
              },
            ],
          },
          {
            title: "Changes to a vehicle registration document",
            contents: [
              {
                text: `Notify the driver and vehicle licensing office within 14 days if you have a new address or your name has changed. Your vehicle registration document will be changed or replaced.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
];

//Family and partnership
const infoFamily: Information[] = [
  //Adoption
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Adoption///Adoption",
    description: "In Switzerland you can adopt a child as either a couple or a single parent. The adoption process can take several years. The welfare of the child is always paramount.",
    contents: [
      {
        infos: [
          {
            title: "Who can I contact?",
            contents: [
              {
                text: `If you would like to adopt a child in Switzerland you should contact the central adoption authority of the canton where you live. It will provide information on exactly how to proceed.

If you would like to adopt a child from another country, we advise you to contact a specialist, federal government-approved agency. It will help you with the complex process in Switzerland and the country of adoption.`,
                links: [
                  {
                    text: "Addresses of central cantonal adoption authorities and federal government-approved agencies",
                    url: "https://www.bj.admin.ch/bj/en/home/gesellschaft/adoption.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Basic requirements for all adoptions",
            contents: [
              {
                text: `The competent cantonal authority will check that you fulfil the basic requirements to adopt, looking in particular at the following points:

1. The age difference between you and the child you want to adopt must be a minimum of 16 and a maximum of 45 years.
2. You must be able to provide proper, lasting care for the child and to ensure that they receive an appropriate education. To check this, a specialist qualified in social work or psychology will meet with you several times to provide and gather information, and to talk to you about the different aspects of adoption.
3. Adoption must be in the interests of the child. The interests of your other children must also be considered.
4. If the child is capable of doing so, they must consent to the adoption.
5. You must have been responsible for the care and upbringing of the child for at least one year.
6. If the child's biological parents are known and still alive, they must consent to the adoption unless they have been absent for a long period and their whereabouts are unknown, or they permanently lack the legal capacity to do so. The biological parents may not give their consent before the child is six weeks old. They may still revoke their consent in the six weeks after that.`,
              },
            ],
          },
          {
            title: "How can we adopt a child as a couple?",
            contents: [
              {
                text: `If you want to adopt a child as a couple, you must fulfil the basic requirements that apply to all adoptions. You must also satisfy the following criteria:

1. you are married.
2. you have been living together for at least three years.
3. you are both at least 28 years old.
4. you are registered as living in Switzerland.`,
              },
            ],
          },
          {
            title: "How can I adopt a child on my own?",
            contents: [
              {
                text: `If you want to adopt a child on your own, you must fulfil the basic requirements that apply to all adoptions. You must also satisfy the following criteria:

1. you are at least 28 years old
2. you are single.

If you are married or in a registered partnership, you can adopt a child by yourself if:

- you have been officially separated from your spouse for at least three years
- your partner permanently lacks legal capacity, or
- your partner has been absent without a fixed abode for at least two years.`,
              },
            ],
          },
          {
            title: "How can I adopt my partner's children?",
            contents: [
              {
                text: `You can adopt your partner’s children if you fulfil the basic requirements that apply to all adoptions, and you and your partner are also:

- married
- living in a registered partnership or
- actually living in the same household.

In addition, you and your partner must have been living together for at least three years.`,
              },
            ],
          },
          {
            title: "How do I adopt someone aged 18 or over?",
            contents: [
              {
                text: `You can adopt someone who is an adult if:

1. they lived with you for at least a year when they were still a minor;
2. they are in need of constant care and lived with and were cared for by you for at least a year (even if they were already of age during this time), or
3. there are other important reasons for the adoption and the person you wish to adopt has lived with you for at least a year.

The same regulations as apply to the adoption of minors also apply to the adoption of adults, apart from the need for parental consent.`,
              },
            ],
          },
          {
            title: "Adoption leave",
            contents: [
              {
                text: `Subject to certain conditions, you may be entitled to two weeks’ adoption leave. However, this does not apply if you have adopted your spouse’s or partner’s child.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Adoption///Adoption leave",
    description: "Under certain conditions, couples who adopt a child under the age of 4 may share two weeks of paid leave.",
    contents: [
      {
        infos: [
          {
            title: "Who is entitled to adoption leave?",
            contents: [
              {
                text: `If you are employed or self-employed, you are entitled to two weeks’ paid adoption leave if you meet the following conditions:

- You have been insured with OASI for the nine months preceding the child’s adoption;
- You have been employed for at least five months during this period;
- The child is under 4 years old.

If you are unemployed or unable to work when the child comes to live with you, you are not entitled to adoption allowance.

There is no paid leave for parents who adopt their spouse's or partner's child.`,
              },
            ],
          },
          {
            title: "Length of adoption leave and level of benefits",
            contents: [
              {
                text: `Adoption leave must be taken within the year following the adoption of the child. It can be taken in blocks, weeks or individual days. You can choose which of you will take the two weeks’ leave. You can also share it between you, provided you do not take the days at the same time.

The adoption allowance corresponds to 80% of the average income from gainful employment obtained before the child comes to live with you, up to a maximum of CHF 220 per day. The allowance is not paid automatically. You must explicitly request it from the federal compensation office.`,
              },
            ],
          },
          {
            title: "Unpaid leave",
            contents: [
              {
                text: `There is no legal right to extend adoption leave. As an adoptive parent, you can only extend your leave if your employer agrees.

Please note:
Check your insurance coverage before requesting unpaid leave.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Adoption///Searching for biological parents, children or siblings",
    description:
      "You want to learn about your origins, or you are searching for a child you gave up for adoption. When and how this is possible, and which authorities you can contact for assistance.",
    contents: [
      {
        infos: [
          {
            title: "Who to contact",
            contents: [
              {
                text: `Every canton operates an information service that can help adopted children to find out more about their history.

Contact the information service of your canton of residence or, as a next step, the canton where the adoption took place (addresses at the bottom of the page; web page available in German, French and Italian).`,
              },
            ],
          },
          {
            title: "Finding your biological parents",
            contents: [
              {
                text: `If you were adopted, you can request records from the cantonal information service about your biological parents and their direct descendants. You have the right to access your adoption records. However, you cannot request this information until you have reached the age of 18, except in cases of legitimate interest (e.g. when a hereditary disease is suspected).

The cantonal service will contact your biological parents and inform them of your request, provided they can be traced successfully (i.e. their identity appears in your adoption files). If this information is not available – for example, if you are a foundling – then they cannot be contacted.

If necessary, the cantonal service will also help you to arrange or facilitate a meeting with your biological parents, but they will not be obliged to meet you if they do not wish to do so, nor will they be obliged to provide you with further information.`,
              },
            ],
          },
          {
            title: "Finding your biological siblings",
            contents: [
              {
                text: `If you were adopted and want to find other children of your biological parents, or if one of your siblings was adopted and you want to find them, all three of the following conditions must be met:

- The birth siblings you are looking for are traceable. This is the case when the birth parents were Swiss citizens and their children were registered in the Swiss civil register.
- The siblings are aged 18 or over.
- They have agreed to disclose their identities.`,
              },
            ],
          },
          {
            title: "Finding children given up for adoption",
            contents: [
              {
                text: `You can request information from the cantonal service at any time regarding children you have given up for adoption. However, you only have the right to obtain this information if the adopted child agrees to disclose it to you. If the child is a minor, they must be capable of judgement and their adoptive parents must agree to disclose their identity.`,
              },
            ],
          },
          {
            title: "Research costs",
            contents: [
              {
                text: `Researching your origins involves administrative fees. These vary from canton to canton but generally amount to several hundred francs. The amount also depends on the type of request: simple file access, sending information, support from a member of the youth welfare office, etc.

You can contact the relevant cantonal offices (web page available in German, French and Italian) directly for information about the fees involved.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Civil status certificates
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Ordering civil status certificates",
    description:
      "The authorities will supply various kinds of document that certify a family relationship, for example, or your date and place of birth. This page gives a list of the civil status certificates that you can order, and where to get them from.",
    contents: [
      {
        infos: [
          {
            title: "Where and how to order",
            contents: [
              {
                text: "You can request civil status certificates directly online, or by going in person to the register office that is responsible for you. The individual office in question varies depending on the type of document you need:",
              },
              {
                text: "Birth certificate Confirmation of time of birth",
                links: [
                  {
                    text: "Register office at your place of birth",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?1",
                  },
                ],
              },
              {
                text: "Certificate of origin (for Swiss citizens), Individual civil status certificate (for Swiss citizens)",
                links: [
                  {
                    text: "Register office at your place of origin",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Confirmation of registered civil status (for foreign nationals)",
                links: [
                  {
                    text: "Register office at your (previous) place of (permanent) residence",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Family certificate for Swiss nationals (formerly family record book)",
                links: [
                  {
                    text: `If you are a Swiss citizen: register office at your place of origin. `,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                  {
                    text: `If you are a foreign national: register office at your (previous) place of residence`,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Marriage certificate",
                links: [
                  {
                    text: "Register office where your marriage took place",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Certificate of registered partnership",
                links: [
                  {
                    text: "Register office where your partnership was registered",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Death certificate",
                links: [
                  {
                    text: "Register office at your place of death",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
            ],
          },
          {
            title: "Costs",
            contents: [
              {
                text: "In Switzerland it costs CHF 30 (plus postage) to obtain a civil status certificate. Family certificates, other family records, certificates of registered partnership and certificates of registered civil status cost more.",
              },
            ],
          },
          {
            title: "Who may order a civil status certificate and that conditions apply?.",
            contents: [
              {
                text: `- You may order all civil status certificates concerning you personally.
- Family record books may be updated, but may no longer be ordered.
- You may request a civil status certificate for someone else, providing you can present power of attorney from the person concerned and a copy of their ID.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Family reunification
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Family reunification",
    description: "If you live in Switzerland and your family lives abroad, you can find more information here about the requirements for bringing your children, spouse or parents to Switzerland. ",
    contents: [
      {
        infos: [
          {
            title: "How to bring family members to Switzerland",
            contents: [
              {
                text: `If you live in Switzerland and want to bring in foreign family members who live elsewhere, you can apply for family reunification.

Depending on your nationality and your residence permit, family reunification is a right or a possibility left to the discretion of the authorities. Unlike the C permit, the B permit does not necessarily give you the right to family reunification, which may, however, also be granted by the authorities. Asylum seekers are not eligible.`,
              },
            ],
          },
          {
            title: "Who can join you in Switzerland?",
            contents: [
              {
                text: `You cannot bring all your family members to Switzerland.`,
              },
              {
                subtitle: "If you are a Swiss citizen",
                text: `You may bring the following family members to Switzerland:

- your spouse or registered partner;
- your unmarried children and grandchildren under the age of 18 (and even under the age of 21 or dependent if they have a residence permit from an EU/EFTA country);
- your dependent parents and grandparents if they have a residence permit from an EU/EFTA country (unless you are in education or training).`,
              },
              {
                subtitle: "If you are a citizen from an EU/EFTA country",
                text: `You may bring the following family members to Switzerland:

- your spouse or registered partner;
- your children and grandchildren under the age of 21 or dependent;
- your dependent parents and grandparents (unless you are in education or training).`,
              },
              {
                subtitle: "If you are a citizen from a third country",
                text: `You may bring the following family members to Switzerland:

- your spouse or registered partner;
- your unmarried children under the age of 18.`,
              },
            ],
          },
          {
            title: "Conditions to be met for family reunification in Switzerland",
            contents: [
              {
                text: `Your marriage or a registered partnership must be recognised by Switzerland. If you are part of a bi-national couple, you cannot bring your partner with you if you are not officially married.

To avoid being denied family reunification, you must have large enough accommodation (according to Swiss standards) to house the whole family.

You must not depend on social assistance. If you are self-employed or unemployed, you must also provide proof of sufficient financial resources to support your family members.

Your family members arriving in Switzerland must have:

- a valid identity card or passport;
- a visa if necessary;
- a certificate from the country of origin proving your relationship;
- for dependants, a certificate from the authorities of the country of origin or provenance proving that they are dependent on you or were living with you;
- for your spouse, a certificate of enrolment in a language course if they are not able to make themselves understood in the national language spoken where you live (A1 level at least orally).`,
              },
            ],
          },
          {
            title: "Time limits",
            contents: [
              {
                text: `You generally have five years to apply for family reunification, but only one year if the application concerns children over 12 years old. This is so that they can integrate more rapidly into Swiss society.

If you have been provisionally admitted to Switzerland (F permit), the State Secretariat for Migration can examine your application for family reunification after 18 months.`,
              },
            ],
          },
          {
            title: "Where to apply for family reunification",
            contents: [
              {
                text: `You need to contact the following cantonal immigration authorities.`,
                links: [
                  {
                    text: "Cantonal immigration authorities",
                    url: "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Rights and duties for family reunification",
            contents: [
              {
                text: `If the application for family reunification is accepted, your family members will obtain a residence permit (the type of permit generally depends on your status).

With the exception of your parents or grandparents, your family members have the right to work in Switzerland.

Only holders of a short-term residence permit (L permit) need to first apply for a work permit from the competent cantonal authority.

Children who join you in Switzerland are required to attend free compulsory schooling in Switzerland at least until the age of 16. The system varies from canton to canton. The Swiss Conference of Cantonal Ministers of Education provides an overview of the Swiss education system on its website.

Health insurance is compulsory and private in Switzerland. Don't forget to conclude a contract for each member of your family.

You will find further useful information on the page Moving to Switzerland.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  //Death
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Death///Survivors' pensions",
    description: "If your wife, husband, registered partner or parent dies, you are entitled to a pension.",
    contents: [
      {
        infos: [
          {
            title: "Purpose of the pension",
            contents: [
              {
                text: `The Swiss pension system benefits survivors to prevent a wife, husband, registered partner or children from finding themselves in a difficult financial situation if their partner or parent dies.`,
              },
            ],
          },
          {
            title: "The amount of the pension",
            contents: [
              {
                text: `The amount of the pension depends on the deceased person's number of contribution years, level of earned income and his or her parenting credits or care credits.

If your late wife, husband, registered partner or parent paid all his or her OASI contributions, i.e. from 1 January after reaching the age of 20 until death, you are entitled to a full pension.

If there are gaps in OASI contributions, you will receive a lower pension.

With a full pension, you are normally entitled to the following amounts, depending on the deceased's average income:`,
              },
              {
                subtitle: "Widow’s or widower’s pension",
                text: `Minimum in CHF / month: 1008.-
Maximum in CHF / month: 2016.-`,
              },
              {
                subtitle: "Orphan’s pension",
                text: `Minimum in CHF / month: 504.-
Maximum in CHF / month: 1008.-`,
              },
              {
                text: `If you are already receiving an old-age or disability pension, you will receive a supplement of 20 per cent on top of your OASI/DI pension if you become a widow or widower. The sum of the pension and the supplement may not exceed a maximum pension.

The deceased's OASI compensation fund can tell you exactly how much the pension will be in your case.`,
              },
            ],
          },
          {
            title: "Claiming a survivor's pension",
            contents: [
              {
                text: `You must claim a survivor's pension from the compensation fund to which the deceased last paid contributions.

For this you need to submit the pension application form, which you can download online.

If the deceased paid OASI contributions partly in Switzerland and partly in one or more EU or EFTA member states, you can send the pension application form to their last country of residence. If you do so, the procedures in the other countries are triggered automatically.

If you live abroad, you must contact the Swiss compensation fund to find out the exact procedure.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Death///What to do if someone dies",
    description:
      "If a relative or person close to you dies, there are several things you must do: obtain a death certificate, organise the funeral and notify the deceased’s insurance company, bank and landlord.",
    contents: [
      {
        infos: [
          {
            title: "Obtaining a death certificate",
            contents: [
              {
                text: `If a person dies in a hospital or a care home, the institution will issue a death certificate.

If a person dies of natural causes outside an institution, for example at home, you should call the deceased’s doctor or the emergency services. They will confirm the death and issue a death certificate.

If a person dies as the result of an accident or a crime, you must notify the police.`,
              },
            ],
          },
          {
            title: "Reporting a death: when, how and where",
            contents: [
              {
                text: `If a person dies in a hospital or a care home, the institution will report the death.

If a person dies outside of an institution, the deceased’s relatives must report the death to the appropriate authorities – usually the civil register office in the place where the person died. This must be done within two days, either in writing or in person, and the relatives must provide an original medical death certificate.

The deceased’s relatives may authorise a third party, e.g. a private funeral director or the public funeral office, to report the death and take care of the formalities. Check your canton’s or commune’s website for options.

The person reporting the death must present the following documents:

- death certificate
- deceased’s family booklet / partnership certificate
- deceased’s passport / identity card
- deceased’s settlement permit / residence permit (if the deceased is a foreign national)

The civil register office will issue written confirmation that the death has been reported and, once the death has been certified, provide a death certificate upon request. These documents are required in order to proceed with the funeral.

Note: If a foreign national who does not reside in Switzerland dies here, the death must be reported to the civil register office in the place where the person died. The civil register office may request additional documents.`,
              },
            ],
          },
          {
            title: "Organising the funeral:",
            contents: [
              {
                subtitle: "When and how",
                text: `The funeral can only take place after the civil register office has confirmed that the death has been reported.

Different funeral customs and practices exist in Switzerland. You can obtain information about this from your commune, the funeral office or a private funeral home. Discuss practical aspects such as the time and the place of the funeral and the procedure.`,
              },
              {
                subtitle: "Type of funeral",
                text: `In Switzerland you can choose to have either a cremation or a burial. Information on cremations and burial options (burial niche, columbarium or burial in a single, family or collective grave) is available from the funeral office or from the authorities in the deceased’s commune.`,
              },
              {
                subtitle: "Costs",
                text: `Many communes offer free burial or cremation for their deceased. If not, you can ask a funeral director to arrange the funeral. Request a cost estimate.`,
              },
            ],
          },
          {
            title: "If the death occurs abroad",
            contents: [
              {
                text: `If a person dies abroad, the foreign authorities or deceased’s relatives usually notify the Swiss representation abroad (consulate or embassy).

You are responsible for submitting the foreign death certificate to the Swiss embassy or consulate, who will then forward it to the civil register office of deceased’s place of origin.

If you would like the funeral to take place in Switzerland, the Swiss embassy or consulate will help you with certain formalities for repatriating the deceased. However, the deceased’s relatives are primarily responsible for repatriation.`,
              },
            ],
          },
          {
            title: "Formalities after the funeral",
            contents: [
              {
                text: `Certain matters must be regulated after the funeral. These include:

- cancelling the deceased’s insurance policies (health, household, personal liability and accident insurance…)
- cancelling the deceased’s old-age and survivors’ insurance and any life insurance, and requesting the survivors’ pension to which you may be entitled
- asking the deceased’s employer if you are entitled to a survivors’ pension from their occupational pension fund (second pillar), to any severance pay and to the remaining payment of the deceased’s salary
- notifying the deceased’s bank and the post office
- cancelling newspaper subscriptions, public transport season tickets and memberships of societies and clubs, etc.
- notifying the tax authorities
- notifying the driver and vehicle licensing office if the deceased had a driving licence and a vehicle registered in their name
- notifying the deceased’s landlord if they lived in rented accommodation. If the deceased lived alone, you must terminate the rental agreement and ensure that the apartment or house is vacated within the period provided for in the agreement.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Divorce
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Divorce///Divorce procedure",
    description:
      "In Switzerland, you can apply for divorce by mutual consent, or by unilateral petition. The conditions and duration of the procedure can vary if one of the spouses refuses a divorce",
    contents: [
      {
        infos: [
          {
            title: "Where do you get a divorce?",
            contents: [
              {
                text: `To get a divorce, you need to go to the competent cantonal court in your place of residence.`,
              },
            ],
          },
          {
            title: "If you and your spouse both agree to divorce",
            contents: [
              {
                text: `You can file a joint application (also known as divorce by mutual consent) which includes:

- A written petition (letter or pre-printed form) signed by both spouses stating you want to divorce. You do not need to explain your reasons for wanting a divorce.
- A document specifying all the consequences of the divorce on which you have agreed (agreement on how to deal with the consequences of the divorce): liquidation of the marriage, distribution of the pension fund, child custody, maintenance payments, division of property, etc.
- The court may also request other documents.

At the end of the procedure, the court grants the divorce and decides what the consequences will be for the two former spouses and the children. The court generally adopts the proposals made in the divorce agreement unless there are inconsistencies (if, for example, in haste, one spouse unwittingly gives up their pension claims acquired during the marriage) or if a provision is contrary to the interests of the children (if, for example, one spouse gives up their ex-spouse’s child support in order to have sole custody).`,
              },
            ],
          },
          {
            title: "If one of the spouses refuses to divorce",
            contents: [
              {
                text: `You can ask for a divorce even if your spouse does not agree, provided that you have lived separately for at least two years.

In exceptional cases, including domestic violence, you can also ask for a divorce before the two years have expired.

The court will inform you of the documents you need to submit. At the end of the procedure, the court grants the divorce and decides all the consequences, taking into account any points on which you and your spouse have been able to agree.`,
              },
            ],
          },
          {
            title: "How long does the divorce procedure last?",
            contents: [
              {
                text: `The duration of the divorce procedure varies. If you and your spouse agree on all the consequences of the divorce, the procedure generally takes three to four months. If, however, you are in dispute over one or more of the consequences of the divorce, the procedure can take up to several years.`,
              },
            ],
          },
          {
            title: "Divorce costs and financial aid",
            contents: [
              {
                text: `The costs of a divorce include in particular the costs of the court (ranging from CHF 1,000 to CHF 4,000 depending on the canton) and the lawyer’s fees if you hire one (ranging from a few hundred francs to several thousand depending on the complexity of the proceedings).

If you are in financial difficulties, you can apply to the state for legal aid that is free of charge or partially free of charge. In this case, the state will cover all or part of the court and a lawyer if you need one.

Ask the competent court about the possibilities of obtaining legal aid.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Divorce///Effects of divorce",
    description: "Divorce has numerous effects on your and your children’s personal, family and financial lives.",
    contents: [
      {
        infos: [
          {
            title: "Surname of former spouses",
            contents: [
              {
                text: `Once the divorce is pronounced, you may, at any time, contact the registry office of your place of residence (web page available in German, French and Italian) to change your surname back to the one you had before you were married. If you decide to do this, be sure to change your name in your official documents, in particular your passport, identity card and driving licence.

Please note: Your ex-spouse cannot force you to change your surname. The divorce has no effect on your children’s surnames.`,
              },
            ],
          },
          {
            title: "Parental responsibility and custody",
            contents: [
              {
                text: `Joint parental responsibility is also the rule if you get a divorce. The divorce court only grants sole parental authority to one parent if it is deemed necessary for the child’s sake.

Even if you have joint parental responsibility, this does not mean that you both also automatically have (alternate) custody of your children. To find out more about parental responsibility and child custody, see our page on parental responsibility.`,
              },
            ],
          },
          {
            title: "Dissolution of the marital property regime and impact on occupational pension schemes",
            contents: [
              {
                text: `One of the effects of divorce is the division of assets and debts between the two former spouses (also known as the dissolution of the marital property regime). The division of assets and debts depends on the marital property regime that existed during the marriage.

The occupational pension assets accumulated during the marriage are also divided between the spouses (web page available in German, French and Italian).

Ask a lawyer or your OASI (AHV/AVS) compensation office (1st pillar) for more information on the settlement of the marital property regime and the division of your occupational pension assets (2nd pillar).`,
              },
            ],
          },
          {
            title: "Maintenance payments for ex-spouse and children",
            contents: [
              {
                subtitle: "Maintenance payments for ex-spouse",
                text: `After a divorce, the two ex-spouses must in principle each pay for their own maintenance.

However, depending on your age, the length of the marriage, the division of family duties during the marriage (e.g. if one of the two spouses stopped working to look after the children) and above all, the financial situation of both parties. One of the two may have to pay maintenance payments at least for some time.

You can agree directly with your ex-spouse on the amount of the payment. Otherwise, the court will decide.

Please note: if you remarry, you lose the right to maintenance payments.`,
              },
              {
                subtitle: "Child maintenance",
                text: `Parents have the duty to support their children until they are of full age or have completed their education. Parents pay child support jointly, each to the extent of his or her ability.

The two ex-spouses can come to an agreement on maintenance payments. However, the final decision will be made by a court, which will take into account the needs of the children and the financial situation of each spouse.`,
              },
            ],
          },
          {
            title: "What to do if an ex-spouse does not pay child support",
            contents: [
              {
                text: `If an ex-spouse does not pay the child support determined by the divorce court, you can contact a lawyer or ask your canton for help to force the ex-spouse to meet their obligations. Each canton has one or more specialised debt collection agencies that can help you recover the money owed to you. This help is free, at least as far as child support is concerned.

Under certain conditions, the cantons can also advance child support payments (in whole or in part). This is the case, for example, when the parent who has custody of the children has too low an income to support them alone.

Contact your commune of residence for information about the possibilities of obtaining an advance on maintenance payments and cash assistance in your canton.`,
              },
            ],
          },
          {
            title: "Right of residence for foreign nationals",
            contents: [
              {
                text: `If you have a C permit, you can stay in Switzerland even if you are divorced.

If you were granted a B permit for the purpose of family reunification, you may only stay in Switzerland under certain conditions. For more information, see our text on residence permits in Switzerland.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Inheritance
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Inheritance///Gift tax",
    description: "Most cantons and some communes levy a tax on gifts. However, there is no gift tax at federal level.",
    contents: [
      {
        infos: [
          {
            title: "Taxable gifts",
            contents: [
              {
                text: `Most cantons levy a gift tax. The purpose of this tax is to prevent taxpayers from avoiding other types of tax, in particular inheritance tax, by giving their assets away.

A gift tax is levied, for example, on:

- Gifts of money above a certain value
- Gifts of real estate
- Gifts of valuables, such as works of art
- Gratuitous transfers of insurance benefits that become due during the policyholder's lifetime
- Advances on inheritances
- Assignments or waivers of rights (e.g. rights of use).`,
              },
            ],
          },
          {
            title: "Who has to pay gift tax?",
            contents: [
              {
                text: `Gift tax must be paid by the person who receives a gift.

Normally, spouses and registered partners and their descendants (children and grandchildren) do not have to pay tax on gifts to each other. Gifts to stepchildren and foster children are also exempt from the tax, but only in those cantons where they have the same status as biological children.`,
              },
            ],
          },
          {
            title: "When do you have to declare gifts?",
            contents: [
              {
                text: `In most cantons, you must report the gift to the cantonal tax administration within a certain period without having to be asked to do so.`,
              },
            ],
          },
          {
            title: "How is gift tax calculated?",
            contents: [
              {
                text: `The tax rate and thus the tax usually depends on:

- the value of the asset received as a gift
- and/or the degree of relationship of the person making the gift to the person receiving the gift: the more closely they are related, the lower the tax rate.`,
              },
            ],
          },
          {
            title: "Deducting the value of gifts in your tax return",
            contents: [
              {
                text: `If you make a gift to a charitable organisation, you can, in certain cases, deduct all or part of the amount donated in your tax return. You can find more on this in the information on the tax return`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Inheritance///Certificate of inheritance",
    description:
      "The certificate of inheritance (obtained in a procedure equivalent to the English or American grant of probate or Scottish confirmation) states who is entitled to inherit a deceased person's assets. This document is usually required to deal with assets in the deceased's estate, for example, to withdraw money from the deceased's bank account.",
    contents: [
      {
        infos: [
          {
            title: "Who can apply for a certificate of inheritance?",
            contents: [
              {
                text: `- If the deceased did not make a will or a contract of succession, the statutory heirs may apply for a certificate of inheritance; these are, depending on the case, the deceased's wife, husband, registered partner, descendants (i.e. children and their descendants) or, if applicable, parents and their children (i.e. the deceased's brothers and sisters).
- If there is a will or a contract of succession, the certificate of inheritance can only be applied for after the official notice of the will or the contract is given by the competent authority.`,
              },
            ],
          },
          {
            title: "Issuing authority",
            contents: [
              {
                text: `The authority that issues the certificate of inheritance varies from canton to canton.`,
              },
            ],
          },
          {
            title: "Requirements",
            contents: [
              {
                text: `In order to obtain a certificate of inheritance, you must, among other things:

- submit a copy of the death certificate (you can obtain this from the register office),
- prove that you are entitled to inherit (e.g. by providing an extract from the civil status register showing your family relationship or civil relationship with the deceased , or a copy of the will or contract of succession),
- prove that you have not renounced your inheritance (i.e. by submitting the declaration of acceptance by all heirs or
- proof that the period in which it would have been possible to renounce the inheritance has expired)`,
              },
            ],
          },
          {
            title: "Costs",
            contents: [
              {
                text: `The cost of issuing a certificate of inheritance varies from case to case; it depends on what enquiries are needed and the time the authority had to spend on them in order to be able to issue you with the certificate of inheritance. The costs can amount to several hundred or even a few thousand francs. In addition, there are the costs that the civil register office charges for issuing the documents and obtaining information in Switzerland and abroad.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Inheritance///Inheritance tax",
    description:
      "All the cantons apart from Obwalden and Schwyz levy an inheritance tax. The amount of tax and who has to pay varies from canton to canton. There is no inheritance tax at federal level.",
    contents: [
      {
        infos: [
          {
            title: "Who has to pay inheritance tax?",
            contents: [
              {
                text: `Inheritance tax is payable by those who inherit, i.e. the deceased's heirs.

Normally, spouses, registered partners and their descendants (children and grandchildren) are exempt from the tax. Stepchildren and foster children are also exempt from the tax, but only in those cantons where they have the same status as biological children.`,
              },
            ],
          },
          {
            title: "How is inheritance tax calculated?",
            contents: [
              {
                text: `Inheritance tax is calculated on the basis of the value of the inherited assets. Gifts of personal effects and household items are not taxed in most cantons.

The tax rate and thus the tax payable usually depends on:

the value of the inherited assets.
and/or the degree of family relationship between the heir and the deceased: the more closely they are related, the lower the tax rate. Heirs who are unrelated to the deceased pay a significantly higher amount of tax than related heirs.`,
              },
            ],
          },
          {
            title: "Taxation of inheritances from abroad",
            contents: [
              {
                text: `If the deceased lived abroad or if an heir lives abroad, and also if the inherited assets are located abroad, the question arises as to which law applies to the inheritance process. There is a real risk of having to pay taxes in more than one country on one and the same inheritance.

In order to avoid this type of double taxation, Switzerland has concluded agreements with a number of countries.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Inheritance///Renouncing an inheritance",
    description: "If you are concerned that you may inherit debts from someone who has died, or if you simply do not want to inherit anything from someone, you can renounce an inheritance.",
    contents: [
      {
        infos: [
          {
            title: "Renouncing an inheritance",
            contents: [
              {
                text: `If you do not wish to accept an inheritance, you must notify the competent authority at the deceased person's last place of residence within three months by registered letter.

In this case, your share of the estate goes to your statutory heirs, who in turn have three months to renounce it. If all the heirs renounce their inheritance, it will be liquidated by the bankruptcy office in the deceased's last canton of residence. The available assets are subsequently used to pay the deceased’s debts.

You can renounce your share of the estate even if the person whose assets you are to inherit is still alive. To do this, you need to enter into a contract of succession with the person concerned.`,
              },
            ],
          },
          {
            title: "Finding out how much an inheritance is worth",
            contents: [
              {
                text: `You can obtain information about a deceased person's financial situation, for example, from their last tax return, or from their bank statements or an extract from the debt enforcement register. You will normally receive this information by presenting a certificate of inheritance.

If you are not sure how large the estate is, you can request the competent authority to make a public inventory.`,
              },
            ],
          },
          {
            title: "Public inventory",
            contents: [
              {
                text: `In a public inventory, the authority draws up a publicly accessible list of the assets and debts that make up the estate. To arrange this, you must, within one month of learning of the death of the person concerned, request the inventory from the authority responsible for inheritance matters in the deceased's last place of residence.

The authority will make the necessary enquiries and draw up the inventory. Depending on what assets make up the estate and the deceased's financial circumstances, these enquiries can take several months.

The inventory gives you a complete overview of the assets that make up the estate. This allows you and the other heirs to decide individually whether or not to accept your respective inheritances.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Inheritance///Succession: who inherits what?",
    description: "In Switzerland, the law is clear about who your heirs will be. However, in a will or contract of succession you can influence how at least part of your estate will be distributed.",
    contents: [
      {
        infos: [
          {
            title: "I have not made a will or a contract of succession: who will inherit from me?",
            contents: [
              {
                subtitle: "The estate goes to your legal heirs",
                text: `If you have not made a will (known as being ‘intestate’ or a contract of succession), your estate will be divided among your legal heirs, i.e. the persons that the law says have the right to inherit your assets. Your legal heirs are your spouse or partner (husband, wife or registered partner) and your closest relatives (your children, or if you have no children, your parents or even your grandparents). They inherit in a predetermined order, according to their statutory succession rights.

- If you have children: your estate is divided between your spouse or partner (husband, wife or registered partner) and your children (or if they predecease you, their children, if they have any).
- If you do not have any children: your estate is divided between your spouse or partner and your parents (or your siblings if your parents have already died).
- If you have no relatives - neither on your parents' side (e.g. brothers or sisters) nor on your grandparents' side (their brothers and sisters or their descendants), your entire estate goes to your spouse or partner.
- If you are not married or in a registered partnership and you have no relatives, your estate goes to the canton or commune of your last place of residence.

Please note: If your partner is not married to or in a registered partnership with you, he or she is not your legal heir. If you want your partner to inherit from you, you must expressly provide for this in your will or in a contract of succession.`,
              },
              {
                subtitle: "How much legal heirs are entitled to on intestacy: their statutory succession rights",
                text: `
If you are married or in a registered partnership, have children, your estate goes:
- 50% to your children (possibly grandchildren)
- 50% to your spouse or partner

If you are married or in a registered partnership, don't have children, your estate goes:
- 75% to your spouse or partner
- 25% to your relatives and their descendants (parents, brothers, sisters, grandchildren, etc.)

You are neither married nor in a registered partnership, have children, your estate goes:
- 100% to your children (or, if any predecease you, to their descendants)

You are neither married nor in a registered partnership, dont't have children, your estate goes:
- 100% to your parents or their descendants
- 100% to your grandparents if you no longer have parents or their descendants
- 100% to the commune or canton if you have no children, parents or siblings

Example: Your estate amounts to CHF 100,000. You have not made a will or a contract of succession:

a) You have a husband, a son, a brother and a mother.
- Your husband inherits CHF 50,000.
- Your son inherits CHF 50,000.

b) You have a wife and a brother.
- Your wife inherits CHF 75,000.
- Your brother inherits CHF 25,000.

c) You have one son and three sisters.
- Your son inherits CHF 100,000.
`,
              },
            ],
          },
          {
            title: "You have made a will or a contract of succession: who inherits what?",
            contents: [
              {
                subtitle: "Freedom of choice",
                text: `By making a will or a contract of succession, you can decide on your heirs and how your estate is distributed, but only within the limits of the law. For example, you can:

- Favour one or more legal heirs over others. e.g., you can leave more to your spouse or registered partner than to your children.
- You can provide for other heirs in addition to those provided for by law. e.g. for your partner.`,
              },
              {
                subtitle: "Limits to your freedom of choice",
                text: `Some of your legal heirs cannot be totally excluded from inheriting a share of your estate. They are:

- your spouse or registered partner
- your children, or if your children have predeceased you, their descendants (children and possibly their children)

Even if you do not want them to receive anything, these heirs are entitled to half of their share of your estate, known as their statutory entitlement. This does not apply to your brothers, sisters or cousins. You can exclude them from inheriting a share of your estate by providing in your will that your assets will go to others.

Heirs who have a statutory entitlement can decide not to accept it:

- by renouncing the inheritance
- by not contesting a will that does not give them their statutory entitlement; or
- by entering into an inheritance agreement (contract of succession)with you while you are still alive in which they renounce their statutory entitlement

Contact a lawyer or notary to find out more about this.`,
              },
              {
                subtitle: "What you can freely dispose of in your wil",
                text: `In your will, you are only free to leave a certain portion of your estate to whom you please; this portion is known as the disposable part. The amount of the disposable part depends on who your legal heirs are when you die. If you have no partner or descendants (children or grandchildren), you can dispose of your assets as you wish. If you do have legal heirs, the freedom to dispose of your assets is limited, and what their statutory succession rights would have been if you had not made a will.
                `,
              },
            ],
          },
          {
            title: "Inheritance taxes",
            contents: [
              {
                text: `Most cantons impose an inheritance tax. Husbands, wives and registered partners are often exempt from this tax.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Inheritance///Wills and contracts of succession",
    description: "You have several options for determining who gets your assets after you die and how that should happen. However, your freedom to dispose of your assets as you please is limited. ",
    contents: [
      {
        infos: [
          {
            title: "Contents of a will",
            contents: [
              {
                text: `By making a will, you can decide for yourself what should happen to your assets and at least partially change the distribution of your estate from what the law otherwise stipulates.

In particular, you have the following options:

- You can stipulate that your assets be divided among your statutory heirs in a different way from that specified by the law.
- You can leave your assets to other persons or institutions.
- You can leave valuable items (e.g. jewellery, collections) or assets (sums of money, real estate) to specific persons or institutions.
- You can specify certain conditions and obligations (for example, that an heir will receive a certain amount of money if they have graduated at the time of your death, or that the person who inherits your house must take care of your pet).
`,
              },
            ],
          },
          {
            title: "Types of will",
            contents: [
              {
                subtitle: "Handwritten will",
                text: `A handwritten will, also known as a holographic will, is the simplest way to arrange the distribution of your estate yourself, because this way you do not need to use a notary.
Procedure:
Write out your will entirely by hand; it must contain the following elements:

- The heading «Will»
- Your first name(s), surname, date of birth and, if applicable, place of origin.
- Your wishes (see above: What do I want to include in my will?)
- If you want to appoint an executor: the name of the person who will deal with the distribution of your estate and execute your will. This can be a person you trust (one of your heirs or another person), a lawyer or notary, or even a bank or accountancy firm. It can be helpful to appoint an executor in advance, as this can speed up the distribution of the estate and helps to avoid disputes about who gets what. Keep in mind, however, that the executor is entitled to a fee and this can be quite expensive, especially if the division of the estate is complex.
- Place and date
- Your signature at the end of the will

Amending a will

You can change your will at any time. An amendment must always be handwritten and be signed and dated. You can also revoke a will by destroying it or replacing it with another one. To avoid misunderstandings, you should expressly state in your new will that you have revoked all your previous wills.
`,
              },
              {
                subtitle: "Will by public deed",
                text: `A will by public deed is signed before a public official, usually a notary, and in the presence of two witnesses.

Generally, this form of will is chosen to ensure that it does not contain any errors and that it really does reflect the testator's wishes. It is worth seeking the advice of a professional, especially if the estate or its distribution is complex.

Procedure:
The public official that you consult will explain the procedure.
`,
              },
              {
                subtitle: "Oral will",
                text: `An oral will is only possible in exceptional circumstances, i.e. when it is not possible to draw up or sign the will in any other form. This is the case, for example, when the testator is facing imminent death.

Procedure:
You must state what your wishes are for your will in front of two witnesses. The witnesses must immediately write down what you said and add the place and date. They must also explain what the exceptional circumstances were. They must then sign the document and deliver it to the competent court.
                `,
              },
            ],
          },
          {
            title: "Contract of succession",
            contents: [
              {
                subtitle: "contentss of a contract of succession",
                text: `By entering into a contract of succession, you can agree with other people on how your estate or part of it should be distributed.

In contrast to a will, which you can revoke or amend yourself at any time, a contract of succession can only be amended with the consent of all the parties who signed it.

In a contract of succession, you can regulate the following points in particular:

You agree with a statutory heir that they will renounce their inheritance. This may be appropriate, for example, if:
- one of your children waives their right to inherit because they have already received a substantial level of financial support from you; or
- you and your wife, husband or registered partner renounce each other's inheritance shares in order to leave everything to your children. Heirs who have renounced their inheritance in a contract of succession can no longer claim their statutory entitlement after your death.

You undertake to leave all or part of your estate to your legal heirs or to a third person. For example, you can provide in the contract of succession:
- that you undertake to leave the house that you live in with the family to one of your children; or
- that you and your wife, husband, or registered partner are the sole beneficiaries of each other's estate.`,
              },
              {
                subtitle: "Contract of succession: Procedure",
                text: `The following steps are required in order to draw up or amend a contract of succession:

- Contact a notary. Swiss Notaries Association
- The notary will draw up the contract of succession according to the wishes expressed jointly by you and the other persons who are parties to the contract and who will sign it.
- The subsequent amendment of the contract is only possible with the consent of all contracting parties.`,
              },
            ],
          },
          {
            title: "Gifts",
            contents: [
              {
                text: `A gift allows you to transfer a portion of your assets and property to someone else during your lifetime. The person receiving the gift becomes the owner of the items concerned in all respects.

Please note:

Certain gifts, particularly those made in the five years before your death, may be taken into account when your estate is distributed. Your statutory legal heirs can assert their related rights. For more information, it is best to contact a specialist.
You should keep a written record of any gifts that you make. This will help to avoid any disputes among your heirs after your death`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },

  // Marriage - living together as an unmarried couple
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Marriage///Same-sex partnership",
    description: "Since 1 July 2022, two people of the same sex can marry, however, they can no longer enter into a registered partnership.",
    contents: [
      {
        infos: [
          {
            title: "Maintaining a registered partnership or converting it into marriage",
            contents: [
              {
                text: `TIn Switzerland, only same-sex couples have always been able to enter into a registered partnership. Since 1 July 2022, two people of the same sex can no longer enter into a registered partnership. This is because they now have the possibility to marry.

If you entered into a registered partnership before this date, you can decide to keep your registered partnership.

If you want to convert your registered partnership into a marriage, you can do so at any civil register office in Switzerland or at a Swiss representation abroad.

Please note: The legal differences between a registered partnership and marriage mainly concern naturalisation, adoption and reproductive medicine. Only married couples benefit from facilitated naturalisation, joint adoption and access to reproductive medicine.`,
              },
            ],
          },
          {
            title: "Main consequences",
            contents: [
              {
                text: `The law considers two people who cohabit as two single persons and not a couple.

This means in particular that:

- You cannot take the surname of your partner.
- Each member of the couple must complete their own tax declaration individually.
- If your partner purchases property in their name, you have no rights to it.
- If you separate, you are not entitled to maintenance payments, even - if you have reduced or given up gainful employment during your partnership in order to look after the joint children or the household.
- If you separate, you have no entitlement to OASI (AHV/AVS) contributions paid by your partner during your cohabitation.
- Neither partner is subject to a legal obligation to help the other partner (as in the event of illness) or to support the other partner. In some cases, however, the financial situation of one partner does have an influence (e.g. as far as social assistance and enforcement proceedings are concerned).
- Each partner will receive a full OASI pension upon retirement, unlike married couples or registered partners who are only entitled to a shared pension equal to 150% of a full pension[BTFB2] .
`,
              },
            ],
          },
          {
            title: "Recognition of a marriage concluded abroad between two persons of the same sex",
            contents: [
              {
                text: `Marriages concluded abroad by two people of the same sex have been recognised as marriages in Switzerland since 1 July 2022, and they are entered into the Swiss civil register as such (available in German, French and Italian).

Marriages concluded abroad before 1 July 2022, however, were not recognised in Switzerland as marriages, but rather as registered partnerships. It is now possible to request that the entry in the civil register be updated. You can do so by contacting your canton of origin’s supervisory authority for civil status matters (available in German, French and Italian).  If you are resident abroad, you can request the update at the relevant Swiss representation abroad.`,
              },
            ],
          },
          {
            title: "Consequences",
            contents: [
              {
                subtitle: "Surname",
                text: `In principle, each partner kept their own surname.

It was also possible for two people of the same sex entering into a registered partnership to choose the surname of either partner as the common surname.`,
              },
              {
                subtitle: "Citizenship",
                text: `Unlike marriage, a registered partnership does not entitle the foreign partner of a Swiss citizen to simplified naturalisation.

However, if you are the foreign partner of a Swiss citizen, you have advantages under the ordinary naturalisation procedure. You can apply for ordinary naturalisation after three years of registered partnership if you have lived in Switzerland for five years including the year preceding your naturalisation application. The cantonal migration authority can provide you with detailed information on this subject.`,
              },
              {
                subtitle: "Children",
                text: `If you are living in a registered partnership, you and your partner are not permitted to adopt a child together or use medically assisted reproductive techniques to become parents together.

However, you can adopt your partner's child if you have been living in a registered partnership for at least three years and have provided for the child's care and upbringing for at least one year.

If your partner has children, you must in any case support him or her as a parent and can also act on your partner's behalf if he or she is ill or temporarily absent.

If you and your partner are both parents because you have adopted your partner's child, you have the same parental rights as a married couple.`,
              },

              {
                subtitle: "Property and debts",
                text: `In principle, the assets (and debts) of the two partners remain separate.

However, you and your partner can enter into a property agreement, which must be certified by a notary, in which you can regulate how your assets are managed.`,
              },
              {
                subtitle: "Taxes",
                text: `Partners in a registered partnership must fill in their tax returns together and pay taxes together.`,
              },
              {
                subtitle: "Death",
                text: `In the event of the death of your partner, you have the same rights as a widow or widower in a marriage:

- If you have minor children, you receive a widow(er)'s pension from the OASI.
- You are also entitled to a pension from your partner's occupational pension fund if you have to support a child or if you are over 45 years old and your registered partnership lasted for at least 5 years.
- You are your deceased partner's legal heir. For further information, you should consult the page on Succession.`,
              },
            ],
          },
          {
            title: "Recognising a same-sex marriage celebrated abroad",
            contents: [
              {
                text: `A marriage between two persons of the same sex that has been celebrated abroad according to the rules in force in the country concerned is currently recognised in Switzerland as a registered partnership.`,
                links: [
                  {
                    url: "https://www.bj.admin.ch/bj/de/home/gesellschaft/zivilstand/faq/partnerschaft.html",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Marriage///Getting married",
    description: "In order to get married, you must meet certain requirements and submit an official application to the civil register office, which will tell you how to prepare for the ceremony.",
    contents: [
      {
        infos: [
          {
            title: "How to prepare for getting married",
            contents: [
              {
                text: `In Switzerland, in order to get married, you and your future spouse must first meet a number of conditions:

- you must be at least 18 years old
- you must have legal capacity
- you must not already be married or be in a registered partnership
- If you are not Swiss, you must have the correct entry visa for your country of origin in order to stay in Switzerland legally until you are married

If you fulfil these conditions, you can notify the civil register office at your place of residence of your intention to get married.

The civil register office will ask you to fill in a marriage application form and will tell you what other documents you need to submit.`,
              },
            ],
          },
          {
            title: "The marriage ceremony",
            contents: [
              {
                text: `After completing the necessary paperwork for your civil marriage, if everything is in order, you will receive a marriage licence from the civil register office. The licence is valid for three months.

You can get married at the civil register office at your place of residence or at a Swiss civil register office of your choice.

The ceremony must be attended by two witnesses, who must be over the age of 18 and have legal capacity.

At the end of the ceremony, you will receive a marriage certificate; this document certifies in particular the names of the bride and groom before and after the marriage ceremony, as well as the place and the date of the wedding.

After the civil ceremony, if you wish, you can also have a religious ceremony. Ask your religious community about this.`,
              },
            ],
          },
          {
            title: "Wedding costs",
            contents: [
              {
                text: `In Switzerland, the costs of a civil ceremony are between 300 and 400 francs (documents, civil ceremony). If you have special requests, such as getting married on a Saturday, the costs may increase.

To find out how much a religious ceremony costs, you must ask your religious community.`,
              },
            ],
          },
          {
            title: "Surname after marriage",
            contents: [
              {
                text: `Switzerland has complex rules about names: spouses can keep their surnames even after marriage, or decide to share a surname, choosing that of either one of the spouses.

NB:

- A double surname (both the wife and the husband's surname, such as "Rossi Bernasconi") is not permitted.
- However, adding a hyphen between the surname of the wife and that of the husband (e.g. Rossi-Bernasconi) makes a difference: the surname is permitted, but may not be entered in the civil status register. You can use your hyphenated double surname in your everyday life and, if you request it, it can even be entered on your passport and other identity documents.`,
              },
            ],
          },
          {
            title: "What do you have to do after the wedding?",
            contents: [
              {
                text: `After the wedding, your new civil status will be «married».

You must give notice of your change of civil status, as well as any change of surname, to the communal administration, the cantonal tax authorities, your employer, your bank, the post office and your insurance companies.

If you have changed your surname, do not forget to change your identity card and passport as well as your driving licence and bank and credit cards.`,
              },
            ],
          },
          {
            title: "Marriage and Swiss citizenship",
            contents: [
              {
                text: `Marrying a Swiss citizen does not automatically entitle you to Swiss citizenship. However, it makes you eligible for the simplified naturalisation procedure.`,
              },
            ],
          },
          {
            title: "Getting married abroad",
            contents: [
              {
                subtitle: "Preparations",
                text: `If you live in Switzerland, but decide to get married abroad, you must follow a specific procedure. In particular, you must:

Ask the civil register office at the place where you want to get married which documents you need to bring from Switzerland.
Inform the Swiss embassy/consulate in the foreign country concerned that you intend to get married there.
Ask the authority responsible for migration in your canton of residence or the Swiss embassy or consulate abroad about the conditions of entry and residence in Switzerland that will apply to your future spouse if they are not Swiss and do not already live in Switzerland.`,
              },
            ],
          },
          {
            title: "Recognition of marriage in Switzerland",
            contents: [
              {
                text: `If either you or your spouse are Swiss, you must send the documents received at the end of the ceremony abroad to the Swiss embassy or consulate in the country concerned, which will forward them to the civil status office in your commune of origin.

If you or your spouse are not Swiss, additional documents are generally required. Ask the Swiss representation in the country in which you wish to get married in good time about the documents that are needed.

If neither you nor your spouse are Swiss, you should contact the migration authority in your canton of residence, which is responsible for the procedure for recognising your marriage.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(3),
    title: "Marriage///Financial consequences",
    description:
      "Marriage has an impact on a couple’s finances. By choosing a marital property regime, the couple decide what belongs to whom during the marriage and how their property will be divided in the event of divorce or death.",
    contents: [
      {
        infos: [
          {
            title: "Marital property regime",
            contents: [
              {
                text: `In Switzerland, there are three different marital property regimes: participation in acquired property, community of property and separation of property.`,
              },
              {
                subtitle: "Participation in acquired property",
                text: `If the couple do not sign a marital agreement, the ‹participation in acquired property› regime applies.

Specifically:

- Each spouse keeps the assets he or she owned before getting married, as well as any assets received as gifts or inherited during the marriage (their ‘own property’).
- Each person also independently manages the assets accumulated during the marriage (their ‹acquired property› such as a salary or bank interest)
- In the event of separation or divorce, death or changing to another marital property regime, the ‹acquired property› is divided equally between the ex-spouses.`,
              },
              {
                subtitle: "Separation of property",
                text: `If the couple decides to keep their property separate, they must enter into a marital agreement.

If they opt for a separation of property, they must sign a marital agreement in the form of a public deed, which in most cases must be drawn up by a notary.

In this case, none of their assets are pooled, leaving no assets to divide in the event of separation/divorce.`,
              },
              {
                subtitle: "Community of property",
                text: `If a couple decides to pool their assets, they must enter into a marital agreement.

If they opt for a community of property, they must sign a martial agreement in the form of a public deed, which in most cases must be drawn up by a notary.

In this case, their assets will be managed jointly and will be divided in half in the event of divorce/separation.`,
              },
            ],
          },
          {
            title: "Taxation of the married couples",
            contents: [
              {
                text: `Regardless of the type of property regime chosen, all married couples and couples in a registered partnership must complete their tax return jointly and will be taxed as a couple.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
];

//Foreign nationals in Switzerland
const infoForeignNationals: Information[] = [
  //Entry and stay in Switzerland
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(4),
    title: "Entry and stay in Switzerland///Applying for asylum in Switzerland",
    description: "Switzerland can grant asylum to people who are persecuted. Here is some information on how to apply.",
    contents: [
      {
        infos: [
          {
            title: "Who can apply for asylum in Switzerland?",
            contents: [
              {
                text: `You can apply for asylum in Switzerland if you are persecuted in your native country (or last country of residence) on account of your race, religion, nationality, political opinions or membership of a particular social group, or if you fear for your liberty.`,
              },
            ],
          },
          {
            title: "Where can you submit an asylum application?",
            contents: [
              {
                text: `You can submit an asylum application, orally or in writing, at an open border crossing, at the customs checkpoint of a Swiss airport or at one of the State Secretariat for Migration’s (SEM) federal asylum centres. You cannot submit an application for asylum in Switzerland if you are abroad. However, you can apply for a humanitarian visa from a Swiss embassy or consulate in order to enter Switzerland, but you will only be granted a visa if there is a direct, serious and specific threat to your life or physical integrity. Crisis or conflict in your country is not reason enough, and the chances of obtaining a humanitarian visa are slim.`,
                links: [
                  {
                    text: "State Secretariat for Migration’s (SEM) federal asylum centres",
                    url: "https://www.sem.admin.ch/sem/en/home/asyl/adressen.html",
                  },
                ],
              },
            ],
          },
          {
            title: "What you need to consider",
            contents: [
              {
                text: `There are no formal legal requirements for an asylum application. To be granted asylum, you must explain your reasons for fleeing and provide evidence if possible.`,
              },
              {
                subtitle: "Multiple applications in different countries",
                text: `Switzerland is a signatory to the Dublin Agreement, which aims to prevent a person from applying for asylum in multiple EU/EFTA states.* Under this agreement, only one country is responsible for examining a person’s asylum application. If you have already submitted an asylum application in another Dublin country, you will be sent back to that country.

(*EFTA states: Iceland, Liechtenstein, Norway, Switzerland)`,
              },
              {
                subtitle: "Threat to security",
                text: `Asylum seekers who commit criminal offences or threaten the security of Switzerland will not be granted asylum. Unless there are reasons to the contrary, their application will be rejected and they must leave the country.`,
              },
              {
                subtitle: "Asylum procedure",
                text: `On its website, the State Secretariat for Migration (SEM) describes the asylum procedure in detail and which requirements you must fulfil to be granted refugee status. If you disagree with SEM’s decision, you can appeal.

Usually the entire asylum procedure takes place in a federal asylum centre. You can find out more about the centres, where asylum seekers also live, on SEM's web page of FAQs about the federal asylum centres (in French, German and Italian).`,
                links: [
                  {
                    text: "Asylum procedure",
                    url: "https://www.sem.admin.ch/sem/en/home/asyl/asylverfahren.html",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(4),
    title: "Entry and stay in Switzerland///Living in Switzerland without gainful employment",
    description:
      "Foreign nationals such as students, pensioners or those of private means can take up residence in Switzerland without gainful employment. However, they must meet certain criteria depending on their nationality.",
    contents: [
      {
        infos: [
          {
            title: "Citizens of EU/EFTA countries",
            contents: [
              {
                text: `You can take up residence in Switzerland without gainful employment if:

- you have sufficient financial resources to support yourself and are not dependent on social welfare assistance,
- you have adequate accident and health insurance,
- you would like to study and can show proof  that you have been admitted to an educational institution (matriculation certificate).
You can stay in Switzerland for up to 90 days within a six-month period without a permit. For longer stays you must register as a person without gainful employment with the appropriate cantonal immigration and employment market authorities.

The EU/EFTA residence permit is valid for five years and is extended automatically if you continue to meet the criteria. Students are issued either with a residence permit for the duration of their studies or with a permit for one year with annual renewal until the end of their education.`,
              },
            ],
          },
          {
            title: "UK nationals",
            contents: [
              {
                text: `From 1 January 2021, UK nationals are no longer EU citizens and are subject to the following regulations.

If you already had rights of residence in Switzerland before 2021, you may still benefit from special provisions under the agreement between Switzerland and the United Kingdom on acquired rights.

You can find further information on what conditions apply to UK nationals on the SEM’s United Kingdom web page and in the following section (Citizens of non-EU/EFTA countries).`,
              },
            ],
          },
          {
            title: "Citizens of non EU/EFTA countries",
            contents: [
              {
                text: `If you wish to settle in Switzerland without taking up gainful employment, you must apply for a residence permit from the cantonal immigration and employment market authorities before you arrive in Switzerland. Depending on your nationality, you must also obtain a visa from your local Swiss representation abroad.

If you don’t need a visa and you’re not working in Switzerland, you can stay for up to three months without a permit. You can use this calculator to check whether or not your stay exceeds the short-term limit.

Like citizens of EU/EFTA countries, you must:

- have sufficient financial resources to support yourself and not be dependent on social welfare assistance,
- have adequate accident and health insurance.

Students must also submit the following documents with their application for a residence permit:

- a personal study plan indicating the goal of their studies,
- proof of admission to a recognised educational institution (matriculation certificate),
- curriculum vitae,
- confirmation that they will leave Switzerland at the end of their studies.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(4),
    title: "Entry and stay in Switzerland///Visas for foreign nationals",
    description:
      "Some foreigners cannot enter Switzerland without a visa. Some citizens of non-European countries who live in Switzerland require a visa to travel abroad. Here you can find out more about whether this applies to you and how you can obtain a visa. ",
    contents: [
      {
        infos: [
          {
            title: "Who needs a visa?",
            contents: [
              {
                text: `Citizens of EU and EFTA (Iceland, Liechtenstein, Norway, Switzerland) member states do not require a visa to enter Switzerland.

If you come from another country, whether or not you need a visa depends on your nationality. The website of the State Secretariat for Migration provides you with an overview of ID and visa provisions according to nationality.

Switzerland belongs to the Schengen Area*. If you have a visa issued by a Schengen member state, you generally do not require an additional tourist visa to enter Switzerland or any other Schengen country. Your stay must not exceed 90 days in any 180-day period. You can use this calculator to check whether or not your stay exceeds the short-term limit.

If you have one of the following Swiss residence permits, you do not require a visa to enter Switzerland or another Schengen country for a maximum of 90 days in any 180-day period. This applies regardless of your nationality:

- B permit (residence permit)
- C permit (settlement permit)
- L permit (short-term residence permit)
- Ci permit (resident permit with gainful employment)
- G permit (cross-border commuter permit)
- S permit (for people in need of protection)
- Legitimation card issued by the Federal Department of Foreign Affairs

*The 29 Schengen member states are:
Austria, Belgium, Bulgaria, Croatia, Czech Republic, Denmark, Estonia, Finland, France, Greece, Germany, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Romania, Slovakia, Slovenia, Spain, Sweden, Switzerland.`,
              },
            ],
          },
          {
            title: "How can I obtain a visa?",
            contents: [
              {
                subtitle: "Complete a form",
                text: `There two types of visa application form.

Schengen visa for up to 90 days (Type C): This type of visa is for a stay of up to 90 days, for example for tourist purposes, to study or to participate in a cultural or sporting event. It is valid for travel throughout the Schengen Area.

If you wish to work in Switzerland, you must additionally apply for a work permit.

Long-stay visa for more than 90 days (Type D): If you wish to stay for longer than 90 days, you must apply for a Type D visa.`,
              },
              {
                subtitle: "Submitting a visa application",
                text: `You must submit a visa application to a Swiss consulate or embassy, preferably at least two months but no longer than six months before you travel.

In certain cases, you can submit your application via the online visa system.

To travel abroad from Switzerland, you must submit your visa application to the consulate or embassy of the appropriate country in Switzerland.`,
              },
              {
                subtitle: "Additional documents",
                text: `Depending on your country of origin, the Swiss consulate or embassy where you submit your visa application may request additional documents, even if you are only applying for a tourist visa. The documents may include:

1. Letter of invitation:
The letter must be in German, French or Italian and confirm that your Swiss host (private individual or company) is expecting you. It must contain information on the length of and reason for your stay, your personal data (first name(s), surname, date of birth, nationality) and the personal data of your host. The letter must be dated and signed by your host. Further information on the letter of invitation is available in the SEM factsheet.

2. Declaration of sponsorship:
If the Swiss consulate or embassy doubts you have sufficient financial means for your stay in Switzerland, you may have to submit a declaration of sponsorship before you are granted a visa. In this declaration, your host must confirm that they will pay for uncovered costs up to a maximum of CHF 30,000. Your host must sign the declaration and deposit it with the communal authority of his or her place of residence or with the cantonal migration authority. Further information on the declaration of sponsorship is available on the SEM website.

3. Travel health insurance:
For a short-term visa (maximum of 90 days) you must prove that you have travel health insurance that covers costs of up to EUR 30,000. The insurance policy must be with an insurance company that is recognised by the consulate or embassy processing your visa application`,
              },
            ],
          },

          {
            title: "How much does a visa cost?",
            contents: [
              {
                text: `A visa for an adult costs EUR 90.
- A visa for a child (6 to 12 years) costs EUR 45.
- Visas for children under 6 are free of charge.
- In certain cases, the cost of a visa may be lowered or lifted completely.`,
              },
            ],
          },
          {
            title: "What to do if you lose your travel document",
            contents: [
              {
                text: `If you lose your travel document, you must report the loss immediately to the nearest police station (web page in German, French and Italian) where you are staying. You can speed up the procedure by providing a copy of your travel document.

A leaflet describes what to do if you lose your travel document in Switzerland and how to replace your visa.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Living in Switzerland
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(4),
    title: "Living in Switzerland///Purchasing property",
    description: "Not all foreign nationals are free to purchase property in Switzerland. Some need authorisation to become the owner of a house or land.",
    contents: [
      {
        infos: [
          {
            title: "Who needs a visa?",
            contents: [
              {
                subtitle: "Why is there a need for authorisation?",
                text: `Authorisation to purchase property is intended to prevent Swiss territory from falling into foreign hands. Not all foreign nationals require authorisation. It depends on their nationality and/or their residence status in Switzerland.`,
              },
            ],
          },
          {
            title: "Do you need authorisation?",
            contents: [
              {
                subtitle: "Nationals of EU/EFTA states living in Switzerland",
                text: `You have the same rights as Swiss citizens to purchase real estate; you do not need a permit to purchase a house or land.`,
              },
              {
                subtitle: "UK nationals resident in Switzerland",
                text: `If you are covered by the Agreement on Acquired Citizens’ Rights, you do not need authorisation to purchase a house or land. If you are not sure about your status, contact the competent authority in the canton where the property is located.

If you are not covered by Agreement on Acquired Citizens’ Rights, you are subject to the conditions that apply to non-EU/EFTA citizens who are resident in Switzerland.`,
                links: [
                  {
                    text: "Agreement on Acquired Citizens’ Rights",
                    url: "https://www.fedlex.admin.ch/eli/cc/2020/1059/fr",
                  },
                ],
              },
              {
                subtitle: "Non-EU/EFTA nationals living in Switzerland",
                text: `You need authorisation to purchase the following types of real estate:

- a holiday home (which can be rented out temporarily),
- residential units in a serviced apartment building,
- a second home (which cannot be rented out).

You do not need authorisation to buy your main residence and building land if you meet the following conditions:

- you have a valid residence permit (usually a B permit (different rules apply to C permit holders, see below),
- you will live in the home and do not rent it out,
- you plan to build your home and can start work within one year of acquiring the land.`,
              },
              {
                subtitle: "Holders of a C permit",
                text: `If you have a permanent residence permit (C permit), you have the same rights as Swiss citizens to purchase real estate. You do not need authorisation to purchase a house or land.`,
              },
              {
                subtitle: "Cross-border commuters",
                text: `If you are a foreign national of an EU/EFTA country working as a cross-border commuter in Switzerland (G permit), you can buy a second home in the area where you work without authorisation. However, you may not rent out this property as long as you work in the region as a cross-border commuter.`,
              },
              {
                subtitle: "Other foreign nationals living abroad",
                text: `Apart from cross-border commuters, foreign nationals living outside of Switzerland require authorisation to buy property.

This rule also applies to UK nationals who are covered by the Agreement on Acquired Citizens’ Rights`,
                links: [
                  {
                    text: "Agreement on Acquired Citizens’ Rights",
                    url: "https://www.fedlex.admin.ch/eli/cc/2020/1059/fr",
                  },
                ],
              },
            ],
          },
          {
            title: "What you need to do",
            contents: [
              {
                text: `If you need or think you need authorisation to buy a property, you need to contact the competent authority in the canton where the property is located.

You will find a list of these authorities at the end of the Guidelines that you can download from the webpage Acquisition of real estate by persons abroad on the Federal Office of Justice’s website. If you are not satisfied by the decision taken by the cantonal authority, you have a right of appeal.

The conditions for obtaining authorisation to purchase property vary according to the canton and the type of property. Authorisation is granted for a specific form of use and the property may not be used for a different purpose.
Unless an exception is granted, authorisation is valid for three years.`,
                links: [{ text: "Acquisition of property by foreign non-residents", url: "https://www.bj.admin.ch/bj/en/home/wirtschaft/grundstueckerwerb.html" }],
              },
            ],
          },
          {
            title: "Restrictions on holiday homes",
            contents: [
              {
                text: `In Switzerland, the number of holiday homes or units in a serviced apartment building that can be sold to foreign nationals is subject to a national quota (currently 1,500 per year) allocated between the cantons.

In some cantons, such as Geneva and Zurich, the sale of this type of real estate to foreign nationals is not possible at all. A list of the quotas per canton can be found in the annex to the Ordinance on the Acquisition of Real Estate by Non-Residents (webpage available in German, French and Italian).

If you live abroad, you may only buy a second home in a place with which you have exceptionally close ties worthy of protection. The cantons are not always consistent in their interpretation of this legal requirement.

In any case, you must meet a number of conditions:

- The property must be located in a tourist area.
- The living area may not exceed 200m2 and the area of ground is limited to 1000m2.
- You cannot rent out the property all year round; only temporarily if it is a holiday home, and not at all if it is a second home.
- You may not own more than one holiday home or second home in Switzerland.

Like Swiss citizens, foreign nationals cannot build a second home in a commune where more than 20% of properties are already second homes.`,
              },
            ],
          },
          {
            title: "Real estate for professional use",
            contents: [
              {
                text: `No category of foreign national needs authorisation to acquire real estate for professional, commercial or industrial purposes (with the exception of real estate slated for construction, trade or rental accommodation).`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(4),
    title: "Living in Switzerland///Taking out health insurance",
    description:
      "You can change your health insurer at the end of each year. Send notice of cancellation to your current health insurer by the end-November deadline. New-borns should be registered soon after birth.",
    contents: [
      {
        infos: [
          {
            title: "Who needs health insurance?",
            contents: [
              {
                text: `If you live in Switzerland, you must be insured with a Swiss health insurer.`,
              },
              {
                subtitle: "Health insurance for babies, arrival from abroad",
                text: `If you have just moved to Switzerland, you have three months in which to arrange health insurance cover. The same deadline applies to new-borns. You or your baby are already insured for this three-month period.`,
              },
              {
                subtitle: "Who doesn't need health insurance?",
                text: `Foreign retirees, students and diplomats do not necessarily need to take out health insurance. The relevant agency in your canton or municipality approves any exemptions.`,
                links: [
                  {
                    text: "Relevant agency in your canton",
                    url: "https://www.kvg.org/wp-content/uploads/website_kantonale-stellen_10_2023_en.pdf",
                  },
                ],
              },
              {
                subtitle: "Cross-border commuters and health insurance",
                text: `As a cross-border commuter, you have the choice of taking out health insurance in Switzerland where you work, or over the border where you live.

If you don’t want to take out Swiss health insurance, you must apply for an exemption with the relevant cantonal authority within three months of starting your job.`,
                links: [
                  {
                    text: "Cantonal authority",
                    url: "https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung/krankenversicherung-versicherte-mit-wohnsitz-im-ausland/versicherungspflicht/grenzgaengerinnen-ch.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Changing health insurer",
            contents: [
              {
                subtitle: "Free choice of health insurance company",
                text: `The list of authorised health insurance companies covers all insurers. You can choose any company that operates in the region where you live. Simply register, because they are required to offer everyone basic insurance.

It's also worth knowing that a child can have a different health insurer to their parents.`,
                links: [
                  {
                    text: "Free choice of health insurance company",
                    url: "https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung/krankenversicherung-versicherer-aufsicht/verzeichnisse-krankenundrueckversicherer.html",
                  },
                ],
              },
              {
                subtitle: "Terminating health insurance at year end",
                text: `You can generally change your health insurer at the end of each year. To do this, you must cancel your basic insurance in writing. Your letter must reach your current health insurer by 30 November.

Your current insurer will notify you by the end of October of your premium for the next year. This is in time for you to cancel if you do not agree with it. This premium calculator (web page available in German, French and Italian) might be useful if you want to compare what different health insurers are offering.

If you have a deductible of CHF 300 under a ‹regular› insurance model, you can also cancel your basic insurance with effect from the end of June. A three-month notice period applies.`,
                links: [
                  {
                    text: "Premium calculator",
                    url: "https://www.priminfo.admin.ch/de/praemien",
                  },
                ],
              },
              {
                subtitle: "Changing insurance model",
                text: `You can also change your insurance model at the end of the year. To do this, your letter must reach your health insurer by the end of November. Apart from the standard model you might like to consider the following insurance models with lower premiums (web page available in German, French and Italian):

Family doctor model: you must (almost) always go to your family doctor first. They will refer you to a specialist if necessary.
HMO model: you must almost always go to a doctor in your chosen group practice (Health Maintenance Organisation) first. They will refer you to a specialist if necessary.
Telmed: before (almost) every visit to the doctor you must call a certain number for an initial medical consultation by phone.`,
                links: [
                  {
                    text: "Insurance models with lower premiums",
                    url: "https://www.priminfo.admin.ch/de/versicherungen/grundversicherung#modelle",
                  },
                ],
              },
            ],
          },
          {
            title: "Supplementary insurance",
            contents: [
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(4),
    title: "Living in Switzerland///Tax at source",
    description: "Tax at source is deducted directly from your salary. In Switzerland, this form of taxation mainly concerns foreign residents who do not hold a C permit.",
    contents: [
      {
        infos: [
          {
            title: "Who pays tax at source?",
            contents: [
              {
                text: `All foreign workers resident in Switzerland - with the exception of those who hold a settlement permit (C permit) and those with a Swiss spouse, or whose spouse holds a settlement permit (C permit).
Persons resident abroad who receive income from an activity carried out in Switzerland (e.g. cross-border commuters, weekly residents, lecturers, professional sportsmen and women, artists).
Other taxpayers file a tax return and are taxed according to the standard taxation procedure.`,
              },
            ],
          },
          {
            title: "How is tax deducted at source?",
            contents: [
              {
                text: `Your employer - or your insurance or pension fund - deducts the tax at source from your salary (or benefits) every month and sends the money to the cantonal tax authorities. The tax deducted at source covers your federal, cantonal and communal income taxes. This means that you do not need to fill out a tax return.`,
              },
            ],
          },
          {
            title: "How much can you expect to pay?",
            contents: [
              {
                text: `The rate of tax deducted at source varies from canton to canton. For more information, you should speak to your cantonal tax authorities (web page available in German, French and Italian).`,
                links: [
                  {
                    text: "Cantonal tax authorities ",
                    url: "https://www.estv.admin.ch/estv/fr/accueil/impot-federal-direct/impot-a-la-source/liens-cantons.html",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Naturalisation
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(4),
    title: "Naturalisation in Switzerland",
    description: "Naturalisation allows a foreign citizen to obtain Swiss citizenship. The procedure varies from case to case. A brief guide to help you become Swiss.",
    contents: [
      {
        infos: [
          {
            title: "What is naturalisation?",
            contents: [
              {
                text: `Naturalisation is the final step in the process of integrating into the Swiss way of life. It gives you the right to vote and to stand for election.

Since Switzerland recognises dual nationality, applicants for a Swiss passport do not risk losing their original nationality, provided their country of origin also permits dual nationality.

There is an ordinary naturalisation procedure and a simplified naturalisation procedure for people who are already part of a Swiss family.`,
              },
            ],
          },
          {
            title: "Ordinary naturalisation",
            contents: [
              {
                subtitle: "Who can apply?",
                text: `Holders of a settlement permit (C permit).`,
              },
              {
                subtitle: "What are the residence requirements??",
                text: `Federal legislation requires you to have lived at least ten years in Switzerland, including three of the five years prior to the application being made.

The time spent in Switzerland between the ages of 8 and 18 counts double, but you cannot apply for naturalisation until you have lived in the country for at least six years.

Depending on the canton, you must also have lived for between two and five years in your commune or canton of residence before you can apply for naturalisation.`,
              },
              {
                subtitle: "What are the individual requirements?",
                text: `Swiss law provides that Swiss citizenship may be granted to persons

- who are successfully integrated into Swiss society,
- who are familiar with the way of life in Switzerland,
- who do not pose a danger to Switzerland's internal or external security.

You can find detailed information on ordinary naturalisation on the State Secretariat for Migration website.

The requirements for obtaining the citizenship rights in a canton or a commune vary considerably from one canton and commune to another.`,
              },
              {
                subtitle: "How much does it cost?",
                text: `The bill can vary substantially depending on the commune and canton, but on average the fees are as follows:

- Commune: from 500 to 1,000 francs per person
- Canton: up to 2,000 francs per person
- Confederation:
  - couple with or without minor children: 150 francs
  - single person with or without minor children: 100 francs
  - single minor: 50 francs

In addition, there is a charge for the documents required (residence certificate, extract from criminal records, extract from the debt enforcement register, etc.).`,
              },
              {
                subtitle: "What is the procedure?",
                text: `You have to apply to the canton or commune where you live. To find out where to obtain the form, consult the website of your canton of residence.

Once you have submitted your application, you will be invited to a personal interview where you will be told what the next steps are.

The procedures vary considerably from canton to canton, but you will need to prove that you have sufficient language skills to communicate in a national language. Some authorities require you to take written or oral naturalisation tests to check your knowledge of Switzerland and your canton.`,
              },
              {
                subtitle: "How long does the procedure take?",
                text: `The length of the naturalisation process varies greatly. For more information, please contact your local cantonal or communal authority.`,
              },
            ],
          },
          {
            title: "Simplified naturalisation",
            contents: [
              {
                subtitle: "Who can apply?",
                text: `- The husband or wife of a Swiss citizen.
- The child of a Swiss citizen.
- A person under the age of 25 who is a member of a foreign family that has lived in Switzerland for three generations.
- A stateless minor child.
- A person who has lost their Swiss citizenship (e.g. by marrying a foreign national).`,
              },
              {
                subtitle: "What are the residence requirements?",
                text: `To apply for simplified naturalisation, you do not need to have lived in Switzerland for as long as for ordinary naturalisation. The period of residence required varies from case to case.`,
              },
              {
                subtitle: "What are the individual requirements?",
                text: `The basic requirements are the same as for ordinary naturalisation. In addition, there are conditions that vary according to your case; you can find out more on the State Secretariat for Migration's webpage How do I become a Swiss citizen?`,
                links: [
                  {
                    text: "How do I become a Swiss citizen",
                    url: "https://www.sem.admin.ch/sem/en/home/integration-einbuergerung/schweizer-werden.html",
                  },
                ],
              },
              {
                subtitle: "How much does it cost?",
                text: `The cost of the simplified naturalisation procedure in Switzerland varies according to age:

- 250 francs for minors under the age of 12
- 650 francs for minors aged 12 and over
- 900 francs for adults.

The full amount must be paid in advance and is not refunded if the application is refused.`,
              },
              {
                subtitle: "What is the procedure?",
                text: `The application for simplified naturalisation must be sent to the State Secretariat for Migration using the official form. You can order this form by sending an email to sending an email to SEM, and it will be delivered by post to your home address.

The documents that also have to be provided vary according to the case. You can find more information on the State Secretariat for Migration's webpage How do I become a Swiss citizen?`,
                links: [
                  {
                    text: "How do I become a Swiss citizen",
                    url: "https://www.sem.admin.ch/sem/en/home/integration-einbuergerung/schweizer-werden.html",
                  },
                ],
              },
              {
                subtitle: "How long does the procedure take?",
                text: `The simplified naturalisation procedure takes an average of one and a half years.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Working in Switzerland as a foreign national
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(4),
    title: "Working in Switzerland as a foreign national",
    description: "Most foreign nationals require a permit to work in Switzerland. The procedure for obtaining a permit depends on your nationality and type of employment.",
    contents: [
      {
        infos: [
          {
            title: "Citizens of EU/EFTA member states",
            contents: [
              {
                text: `Thanks to freedom of movement, citizens of EU/EFTA member states can enter, live and work in Switzerland.`,
              },
              {
                subtitle: "Short-term employment",
                text: `You do not need a residence permit if you work for an employer in Switzerland for up to 3 months, or if you provide a service in Switzerland for a maximum of 90 days per calendar year.

However, your employer must register your paid employment through the notification procedure for short-term work in Switzerland at least one day before employment is due to begin.`,
              },
              {
                subtitle: "Employment longer than 3 months",
                text: `You must apply for a residence permit from the Swiss commune in which you are living before starting work. You will be have to submit the following documents:

a valid identity card or passport
confirmation of employment from your employer or a certificate of employment (e.g. an employment contract).
The residence permit is valid throughout Switzerland and allows you to change your job or employer. Its period of validity depends on the length of your employment.`,
              },
              {
                subtitle: "Self-employment",
                text: `You must register your arrival in Switzerland within 14 days and apply for a residence permit from the commune where you are living. You will have to submit the following documents:

a valid identity card or passport
documents proving that you are or will be self-employed and can support yourself and your family (e.g. your accounting records).`,
              },
              {
                subtitle: "Looking for work in Switzerland",
                text: `You can come to Switzerland and look for work for up to 6 months. For the first 3 months you do not need a permit. After that, you can obtain a short-term EU/EFTA residence permit, which is valid for 3 months per year, provided you have the necessary financial means to support yourself.

For more information see EU/EFTA Citizens: Living and Working in Switzerland on the website of the State Secretariat for Migration (SEM) or contact the cantonal immigration and employment market authorities.`,
              },
            ],
          },
          {
            title: "UK nationals",
            contents: [
              {
                text: `TSince 1 January 2021, UK nationals are no longer citizens of the EU and are therefore subject to the same rules that apply to third-country nationals, including quotas.

If you are a UK national and already had residence rights in Switzerland before 2021, you benefit from special provisions under the agreement between Switzerland and the UK on acquired rights.

Switzerland and the UK have also concluded an agreement on mobility for service providers. Until the end of 2025, service providers from the UK must notify the Swiss authorities of short-term work in Switzerland of up to 90 days via the online notification procedure.

You can find further information on the United Kingdom web page of the State Secretariat for Migration (SEM) under the title ‹Non-EU/EFTA nationals›.`,
                links: [
                  {
                    text: "Acquired rights",
                    url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/uk/erworbene-rechte.html",
                  },
                  {
                    text: "Online notification procedure",
                    url: "https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/meldeverfahren.html",
                  },
                  {
                    text: "United Kingdom web page",
                    url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/uk.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Non-EU/EFTA nationals",
            contents: [
              {
                subtitle: "Who can work in Switzerland?",
                text: `Only qualified non-EU/EFTA nationals, for example managers, specialists or university graduates with several years of professional experience, may work in Switzerland.

Non-EU/EFTA nationals require a work permit, even for short-term employment. The number of permits issued is limited.

A work permit may also be issued for self-employment. Spouses of Swiss nationals or of persons with a settlement permit do not require a work permit.`,
              },
              {
                subtitle: "Requirements",
                text: `Your future employer must demonstrate that your employment is in the economic interests of Switzerland and that they are unable to recruit the necessary personnel in Switzerland or from an EU/EFTA member state.

Your employer must provide you with the same working conditions and remuneration as for Swiss nationals.`,
              },
              {
                subtitle: "How do I obtain a permit?",
                text: `It is up to your future employer to take the necessary steps to obtain a work permit from the cantonal immigration and employment market authorities. However, if you are self-employed it is up to you to take the necessary steps.

Further information on the procedure for non-EU/EFTA nationals is available on the website of the State Secretariat for Migration (SEM).

A work permit alone does not necessarily entitle you to enter Switzerland. Depending on your nationality, you may also require a visa. To find out if this applies to you and how to obtain a visa, see the visa page for foreigners.

On arrival in Switzerland, you must register with the communal authorities in the place where you are living within 14 days. You cannot start work before then.`,
              },
            ],
          },
          {
            title: "Remember to take out insurance",
            contents: [
              {
                text: `Working in Switzerland brings you into the Swiss social insurance system. Not all contributions are deducted from your salary.

Health insurance is compulsory but private. You must take out health insurance for you and your family no later than 3 months after arriving or beginning work in Switzerland.

You only need to worry about private accident insurance if you work less than eight hours a week. Above this threshold, your employer is obliged to insure you, and the contribution is deducted from your salary.`,
                links: [{ text: "Social insurance system", url: "https://www.ahv-iv.ch/en/Social-insurances" }],
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
];

//Health
const infoHealth: Information[] = [
  //Health insurance
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(5),
    title: "Health insurance///Health insurance costs",
    description:
      "Health insurance costs are a major budget item for many. However, if you are a low earner you will pay a reduced premium. You can also save with your choice of deductible and retention fee.",
    contents: [
      {
        infos: [
          {
            title: "The costs to you",
            contents: [
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
            contents: [
              {
                text: `Anyone who is a low earner or has a large number of children may be eligible to have their premiums subsidised by their canton. Many cantons notify those concerned automatically. In others, you must apply for the reduction yourself every year. For details, please contact the competent agency in your canton (web page available in German, French and Italian).`,
                links: [
                  {
                    text: "Competent agency in your canton",
                    url: "https://www.priminfo.admin.ch/de/versicherungen/verbilligung",
                  },
                ],
              },
            ],
          },
          {
            title: "Save on premiums",
            contents: [
              {
                text: `There are a number of ways to save on your premiums (web page available in German, French and Italian):

Choose a low-premium health insurer
Choose a family doctor or other insurance model with a low premium
Choose a high deductible and pay lower premiums in return
If you are employed for more than eight hours per week you are covered by compulsory accident insurance. You do not need to include accident cover additionally in your compulsory health insurance`,
                links: [
                  {
                    text: "Ways to save on your premiums ",
                    url: "https://www.priminfo.admin.ch/de/sparen/grundversicherung",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(5),
    title: "Health insurance///Health insurance benefits",
    description: "All health insurers must pay the same benefits under basic insurance. If you are pregnant, you will generally not have to pay a deductible. But what happens if you fall ill abroad?",
    contents: [
      {
        infos: [
          {
            title: "Benefits under basic insurance",
            contents: [
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
            title: "Benefits under supplementary insurance",
            contents: [
              {
                text: `If you want cover for additional benefits, you can take out supplementary insurance. These extra benefits may include complementary medicine such as osteopathy, or orthodontic treatment for children. Other supplementary insurance products afford you a greater level of comfort in hospital, or ensure that you have a free choice of doctor.`,
              },
            ],
          },
          {
            title: "Benefits during pregnancy",
            contents: [
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

- Two ultrasounds (more if the pregnancy is deemed high risk)
- First-trimester screening to determine the risk of trisomies 21, 18 and 13, and
- If the first-trimester test indicates a high risk, then non-invasive prenatal testing (NIFT) and if necessary amniocentesis and chorionic villus sampling.

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
            contents: [
              {
                text: `If you fall ill on holiday abroad, your health insurer will pay for your emergency treatment. The level of cover depends on the country you are in.`,
              },
              {
                subtitle: "Health insurance abroad – EU",
                text: `In the EU, Norway, Iceland and Liechtenstein you are entitled to the same benefits as local residents. It is important to remember that your health insurance card also serves as a European health insurance card. Always take it on holiday. Your health insurer can issue you with a temporary replacement certificate if you do not have your health insurance card with you.`,
              },
              {
                subtitle: "Health insurance abroad – world-wide",
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
            contents: [
              {
                text: `In the event of a conflict with your health insurance company, you can contact the Health Insurance Ombudsman Service (website available in German, French and Italian). It will attempt to reach an agreement between you and your insurer. The service is free, impartial and independent. Please note that you cannot go to the Ombudsman Service if a lawyer or social service is representing your interests, or if you have legal expenses insurance.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(5),
    title: "Health insurance///Taking out, changing and cancelling health insurance",
    description:
      "You can change your health insurer at the end of each year. Send notice of cancellation to your current health insurer by the end-November deadline. New-borns should be registered soon after birth.",
    contents: [
      {
        infos: [
          {
            title: "Who needs health insurance?",
            contents: [
              {
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
            contents: [
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

- Family doctor model: you must (almost) always go to your family doctor first. They will refer you to a specialist if necessary.
- HMO model: you must almost always go to a doctor in your chosen group practice (Health Maintenance Organisation) first. They will refer you to a specialist if necessary.
- Telmed: before (almost) every visit to the doctor you must call a certain number for an initial medical consultation by phone.`,
              },
            ],
          },
          {
            title: "Supplementary insurance",
            contents: [
              {
                subtitle: "Health insurers do not have to accept you",
                text: `As a rule you will have to complete a questionnaire on your health before an insurer will approve supplementary health insurance for you. Your answers determine the conditions of acceptance. The insurer can also reject your application for supplementary insurance entirely.

Complete the questionnaire truthfully. If you give false information, your health insurer may refuse to pay your bill later on, or may exclude you from cover entirely.`,
              },
              {
                subtitle: "Best to register before birth",
                text: `If you want to take out supplementary insurance for your new baby, the best time to register them is before the birth. Most health insurers will accept the unborn child without any conditions or health questionnaire.

Parents often insure their children for dental treatment (orthodontics). This is also worth taking out early. From a certain age insurers will demand a check-up before accepting the child..`,
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
    isEssential: 0,
  },
  //Medicines and narcotic substances
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(5),
    title: "Medicines and narcotic substances///Cannabis",
    description:
      "Cannabis is a banned drug in Switzerland. Cannabis products are only permitted if they contain less than one per cent of the active substance THC. But even then, some rules must be observed.",
    contents: [
      {
        infos: [
          {
            title: "When is cannabis an illegal drug?",
            contents: [
              {
                text: `Cannabis is often traded illegally as marijuana/weed (dried cannabis flowers) or hashish (cannabis resin). These banned substances contain tetrahydrocannabinol (THC).

THC has an intoxicating effect and can be hazardous to health.

The decisive factor for classification as a banned drug is how much THC is contained in a cannabis product. If the THC content exceeds one per cent, the product is prohibited.

If you are caught using cannabis, you may be given a fixed penalty fine of 100 francs.`,
              },
              {
                subtitle: "What is tolerated?",
                text: `If you are caught in possession of a small amount of cannabis (no more than 10 grams) for your own consumption, you will not be fined. In addition, if you supply (but do not sell) up to 10 grams to an adult, e.g. when sharing joints, you will not be fined.`,
              },
            ],
          },
          {
            title: "When are you allowed to use cannabis?",
            contents: [
              {
                text: `Cannabis products are allowed if they contain less than one per cent THC. Examples are hemp flowers, scented oils, ointments and drops that are ingested.

You are also allowed to grow hemp privately provided the THC content of the cannabis strain is less than one per cent.

In addition, cannabis users can legally obtain cannabis products subject to strict conditions as part of scientific pilot trials involving cannabis.`,
              },
              {
                subtitle: "Rules for low-THC cannabis and CBD",
                text: `Even in the case of low-THC cannabis products, suppliers in particular have to comply with a range of regulations. The rules also apply to the non-intoxicating active ingredient cannabidiol (CBD). The Confederation has produced a leaflet on products containing CBD, aimed primarily at suppliers.`,
              },
              {
                subtitle: "Issues related to legal cannabis",
                text: `Even legal cannabis with a total THC content of less than one per cent can get you into trouble with the law.

- When abroad: In some other countries, including countries neighbouring Switzerland, stricter laws and lower maximum THC levels apply. This means cannabis products that are legal in Switzerland may be prohibited abroad. Please check directly with the authorities of the countries concerned if you intend to take cannabis or related products abroad.

- When driving: You are not allowed to drive if you have THC in your bloodstream. Even the use of legal cannabis can result in a measurable level of THC in your blood. So you should not drive after consuming cannabis or related products.`,
              },
            ],
          },
          {
            title: "Are cannabis-based medicines allowed?",
            contents: [
              {
                text: `Cannabis-based medicines (‘medical cannabis’) are permitted, provided they are prescribed by a doctor. You may be prescribed medical cannabis if you suffer from severe chronic pain and muscle spasms. However, you usually have to pay for medical cannabis yourself. Compulsory health insurance only covers the cost in exceptional cases.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Protection against ticks
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(5),
    title: "Protection against ticks",
    description: "Ticks are widespread in Switzerland. Tick bites can be dangerous and cause Lyme disease or meningitis. Protect yourself, children and pets when you are outdoors.",
    contents: [
      {
        infos: [
          {
            title: "Ticks in Switzerland: Where are they? What time of year do you need to watch out for them?",
            contents: [
              {
                text: `With the exception of the cantons of Geneva and Ticino, the whole of Switzerland is considered a risk area. The map of the Federal Office of Public Health (FOPH) shows in detail where ticks occur.

They live in forests of the Central Plateau in the undergrowth, at forest edges, on forest clearings and also near rivers and in parks close to forests up to an altitude of about 1,500 metres above sea level.

Ticks become active as soon as it becomes warm and humid outside, so it is especially important to protect yourself outdoors from March to November.`,
              },
            ],
          },
          {
            title: "Tick bites: What can you do to protect yourself?",
            contents: [
              {
                text: `Keep in mind the following when you are in a high-risk area:

- Wear clothing that covers the entire body.
- Ticks live on the ground, so children are more vulnerable because of their size and should wear something to cover their heads.
- Use an anti-tick spray on shoes and the parts of the body that come into contact with grass and bushes.
- Protect your dog or cat with an anti-tick product. Stay on wide paths and avoid contact with grass and bushes.
- Check your clothing and uncovered body regularly; light-coloured clothing makes it easier to find ticks.
- Check body and clothes for ticks at home. Check children’s heads especially carefully, and also pets. Ticks can suck blood anywhere on the body: they like warm, moist and thin areas of skin such as the back of the knees, groin, inner thigh, buttocks, neck and armpits. In children, ticks sometimes even sit at the hairline.

Please note: If you live in a risk area, a vaccination against meningitis (TBE) may be worthwhile. Discuss this with your doctor or pharmacist.`,
              },
            ],
          },
          {
            title: "What do you need to do if you’ve been bitten by a tick?",
            contents: [
              {
                text: `Tick bites often go unnoticed, because the ticks release an anaesthetic when they bite. This is why the bite area rarely hurts or itches, giving the tick free rein to suck blood. Ticks fall off the bite area on their own once they’ve had their fill of blood. Tick bites are not always recognisable, often leaving only a small dark spot.`,
              },
              {
                subtitle: "Removing ticks quickly and correctly",
                text: `Remove ticks as quickly as possible with fine tweezers or tick tweezers (available in pharmacies). Grasp the tick as close to the skin as possible to avoid crushing the tick, then slowly twist the tweezers while pulling to remove the tick. Disinfect the bite area and note the date.

Detailed instructions with photos and videos are available in the Tick app.`,
                links: [
                  {
                    text: "Tick App",
                    url: "https://www.zhaw.ch/de/lsfm/ueber-uns/aktuell-medien/medienmitteilungen/detailansicht/event-news/neue-praeventions-app-schuetzt-vor-zecken",
                  },
                ],
              },
              {
                subtitle: "When do you need to see a doctor?",
                text: `Not every tick bite is dangerous. The first sign of an infection can be discolouration of the affected skin area. However, reddening of the skin does not necessarily mean there is an infection with a pathogen, nor does no redness necessarily mean there is no infection.

A visit to your doctor to remove a tick is not necessary and the head of the tick does not necessarily need to be removed, except to avoid an infection. However, in the following cases it is recommended to see a doctor:

- The head of the tick is stuck and the area has become infected. Sometimes the head tears off during removal. This is usually not a problem; only rarely does an infection develop.
- The bite area becomes inflamed.
- There is an expanding rash. A circular rash appears a few days after the tick bite and continues to spread. This indicates Lyme disease.
- You run a fever, have a headache or aching limbs and feel run down 5 to 14 days after removing the tick. These symptoms are typical for both TBE and Lyme disease.`,
              },
            ],
          },
          {
            title: "What do you need to do if you’ve been bitten by a tick?",
            contents: [
              {
                text: `In Switzerland, ticks transmit three main diseases:

Lyme disease is caused by bacteria. It is the most common tick-borne disease in Switzerland. A common sign of Lyme disease is the symptom of expanding rash that can appear 1 to 30 days after a tick bite. A common symptom of Lyme disease is "erythema migrans", which is a reddening of the skin that can occur between 1 and 30 days after the bite and near the bite.Lyme disease can be treated with antibiotics, but cannot be prevented by vaccination.

Meningitis is also known by the abbreviation TBE, which stands for tick-borne encephalitis. TBE is an inflammation of the brain and its lining. If a tick transmits the virus, it can lead to serious disease. TBE cannot be treated with antibiotics, but it can be prevented by vaccination.

Tularaemia (rabbit fever) is a bacterial infection. In Switzerland, about half of the cases are caused by tick bites. Although still rather rare, the number of tularaemia cases has increased in recent years. The signs and symptoms are varied and are reminiscent of flu or skin ulcers. Tularaemia can be treated with antibiotics, but cannot be prevented by vaccination.`,
              },
            ],
          },
          {
            title: "Vaccination against meningitis (TBE)",
            contents: [
              {
                text: `The Federal Office of Public Health (FOPH) recommends vaccination for all adults and children (generally over the age of three) who live or temporarily stay in risk areas. In Switzerland, this applies to all cantons except the canton of Ticino.

The vaccination costs around CHF 120 and is available at a doctor’s office or certain pharmacies.

The cost of vaccination is covered by the compulsory health insurance. If you are occupationally exposed (work in forests, at the edge of forests, etc.) it is covered by the employer. You can check whether vaccination is available in a pharmacy in your canton on the website of the Swiss Pharmacists Association (website available in German, French and Italian). Vaccination in pharmacies is only reimbursed if it is prescribed by a doctor. If you have yourself vaccinated as a preventive measure, you pay the costs yourself.

The ideal time for vaccination is winter, but it can be done all year round. Full immunisation requires three vaccination doses. Full immunisation requires three vaccination doses. The first two vaccinations are usually given one month apart. The third vaccination, which ensures long-term protection of at least 10 years, is given after 5 to 12 months, depending on the vaccine. The FOPH recommends a booster every 10 years.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Vaccinations
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(5),
    title: "Vaccinations",
    description: "By getting vaccinated, you protect yourself and others. Many vaccinations are recommended for (almost) everyone. It often makes sense to get the flu jab and other vaccinations too.",
    contents: [
      {
        infos: [
          {
            title: "Why get vaccinated?",
            contents: [
              {
                text: `If you get vaccinated against a disease, you usually don't get ill with that disease again. In addition, you rarely transmit the pathogen to others. If enough people are vaccinated, a disease becomes rare or even disappears altogether.

Certain vaccinations protect mainly against severe complications of the disease; the disease can still be transmitted, but is less common.`,
              },
            ],
          },
          {
            title: "How do vaccines work?",
            contents: [
              {
                text: `A vaccine enters the body by injection into the bloodstream, as an oral vaccination through the mouth, or as a nasal spray. The vaccine allows the body to practise for the real situation: it simulates an invasion of harmful bacteria or viruses by means of harmless pathogens (or pathogen components). The immune system is thereby activated and so trained and optimally prepared to fend off these pathogens. If our body later actually comes into contact with bacteria or viruses that threaten our health, it can target them and fight them off quickly before serious complications arise.`,
              },
            ],
          },
          {
            title: "Are vaccines dangerous?",
            contents: [
              {
                text: `All vaccines are thoroughly tested before they are approved. The health risk associated with vaccination is extremely small, and serious side effects occur very rarely. This means that vaccination is much less dangerous for you than suffering the disease.

Some people may have health reasons for not getting vaccinated. If you are concerned, you should talk to your doctor about this.`,
              },
            ],
          },
          {
            title: "Which vaccinations are recommended?",
            contents: [
              {
                text: `The federal government recommends a wide range of vaccinations.`,
              },
              {
                subtitle: "What vaccinations are recommended for children?",
                text: `The Federal Office of Public Health recommends around a dozen vaccinations for infants and children. Depending on the safety needs and status of the child, further vaccinations are advisable. You will find further details on the Vaccinations for infants and children page (not in English). Your doctor will also be able to advise you.

The costs of the recommended vaccinations and certain other vaccinations are covered by your health insurance, subject to your deductible and excess.`,
              },
              {
                subtitle: "What vaccinations are recommended for adolescents?",
                text: `Children between the ages of 11 and 15 should receive a repeat or booster vaccination for certain diseases. Certain other vaccinations should be given for the first time. The reason for this is that adolescents are more likely to contract certain diseases or may face a more severe form of a disease than younger children if they are infected. The main focus is on vaccination against human papilloma viruses (HPV), which can cause cervical cancer and other types of cancer. Vaccination against hepatitis B is recommended for all adolescents who have not already received this vaccine as an infant. Adolescents who did not have chickenpox as a child should also get vaccinated against this disease. Depending on the situation, other vaccinations may be useful. You will find further details on the page Vaccinations for adolescents (not in English).`,
              },
              {
                subtitle: "What vaccinations are recommended for adults?",
                text: `Even as an adult, you should renew your vaccinations from time to time. In particular, you are recommended to get booster jabs for diphtheria, whooping cough and tetanus. You can also catch up on important vaccinations that you have missed, especially those against measles, mumps and rubella.

If you belong to a risk group, further vaccinations are recommended. You will find further details on the Vaccinations for adults page (not in English).`,
              },
            ],
          },
          {
            title: "Coronavirus: Vaccination",
            contents: [
              {
                text: `The COVID-19 vaccination is recommended in autumn/winter for people at especially high risk.

You will find the latest detailed information at COVID-19: Vaccination.`,
                links: [{ text: "COVID-19: Vaccination", url: "https://www.bag.admin.ch/bag/en/home/krankheiten/krankheiten-im-ueberblick/coronavirus/covid-19.html#1916431492" }],
              },
            ],
          },
          {
            title: "Vaccination against the flu",
            contents: [
              {
                text: `TFlu can be serious for infants, the elderly (65 years and older), pregnant women, and people with a chronic illness. The best protection is the flu jab. The federal government therefore recommends the flu vaccine for all persons in the risk groups mentioned (except for infants up to six months of age) and for those who are in close contact with them. You can find out whether it makes sense for you to get vaccined at Flu vaccination check.

Because flu viruses are constantly changing, you should get re-vaccinated every autumn. Ideally, you should get the jab in the period between mid-October and the start of the flu season, which is usually in January. A national flu vaccination day is held each November. Even if you get a flu jab in December or later, there is still plenty of time for your immune system to build up protection. In recent decades, the seasonal flu epidemic has tended to begin sometime between December and March.`,
              },
            ],
          },
          {
            title: "Ticks: TBE vaccination",
            contents: [
              {
                text: `You can protect yourself against meningitis and encephalitis (also known as tick-borne encephalitis (TBE) by getting a TBE vaccination. This viral disease is transmitted through a bite from an infectious tick.

Tick vaccination is recommended for everyone over the age of three who spends time in high-risk areas. Children can be vaccinated from the age of one if they are regularly exposed to the risk of bites from infectious ticks. The whole of Switzerland is considered a risk area, apart from the canton of Ticino. The vaccine protects only the person vaccinated, as FSME cannot be transmitted from person to person.

Please note: The tick vaccine does NOT protect you against Lyme disease (borreliosis), which is also transmitted by ticks. However, Lyme disease can be treated with antibiotics.`,
              },
            ],
          },
          {
            title: "Vaccination and travel, protection against malaria",
            contents: [
              {
                text: `You should find out what you need to do no later than four weeks before a trip. Which vaccinations are necessary and should you seek protection against malaria? You will find information at www.healthytravel.ch. If you are travelling to a country or region with an increased health risk, you should seek advice from a doctor about the precautions and medicines required.

NB: In some countries, certain vaccinations are mandatory.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
];

const infoWork: Information[] = [
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Working in Switzerland as a Foreigner",
    description: "Most foreigners require a permit to work in Switzerland. The process for obtaining such a permit depends on nationality and the type of work being pursued.",
    contents: [
      {
        infos: [
          {
            title: "EU/EFTA Nationals",
            contents: [
              {
                text: `Thanks to the free movement of persons with the EU/EFTA, you can enter Switzerland, reside here, and work.`,
              },
              {
                subtitle: "What needs to be done for short-term employment?",
                text: `You do not need a residence permit if you work for an employer in Switzerland for a maximum of three months. This also applies if you provide a service in Switzerland for up to 90 days per calendar year.

However, your employer must report your employment using the notification procedure for short-term employment at least one day before you start working.`,
                links: [
                  {
                    text: "Notification procedure for short-term employment",
                    url: "https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/meldeverfahren.html",
                  },
                ],
              },
              {
                subtitle: "What needs to be done for employment longer than three months?",
                text: `You must apply for a residence permit at your municipality of residence in Switzerland before starting your employment. You need to submit the following documents:

- Valid identity card or valid passport
- A statement from your employer confirming they will hire you, or proof of employment (e.g., employment contract).

The residence permit is valid throughout Switzerland; it allows you to change jobs or employers. Its validity depends on the duration of your employment.`,
              },
              {
                subtitle: "What do self-employed individuals need to do?",
                text: `You must report your arrival within 14 days at your municipality of residence and apply for a residence permit there.

You need to submit the following documents:

- Valid identity card or valid passport
- Documents proving that you are or will be engaged in self-employed activity with income sufficient to support yourself and your family (e.g., business or accounting records).`,
              },
              {
                subtitle: "How to find a job in Switzerland?",
                text: `You can enter Switzerland and search for a job for up to six months. For the first three months, you do not need a permit. Afterward, you can apply for an EU/EFTA short-term residence permit, valid for three months per year, provided you can support yourself financially.

Further information is available on the page EU/EFTA Citizens: Living and Working in Switzerland from the State Secretariat for Migration, or you can contact the cantonal migration or labor market authorities.`,
                links: [
                  {
                    text: "EU/EFTA Citizens: Living and Working in Switzerland",
                    url: "https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/eu-efta_buerger_schweiz.html",
                  },
                  {
                    text: "Cantonal Migration and Labor Market Authorities",
                    url: "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html",
                  },
                ],
              },
            ],
          },
          {
            title: "UK Nationals",
            contents: [
              {
                text: `Since January 1, 2021, UK nationals are no longer EU citizens. They are now subject to quotas and other regulations for third-country nationals.

If you had residence rights in Switzerland before 2021, you may benefit from special provisions in the agreement between Switzerland and the UK on acquired citizens' rights.

Switzerland and the UK have also concluded an agreement on the mobility of service providers. Until the end of 2025, UK service providers working in Switzerland for short-term activities, i.e., up to 90 days per calendar year, must register via the notification procedure for short-term employment.

Further information is available on the United Kingdom page of the State Secretariat for Migration and under the section You are not an EU/EFTA citizen.`,
                links: [
                  {
                    text: "UK Nationals with Acquired Rights",
                    url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/uk/erworbene-rechte.html",
                  },
                  {
                    text: "Notification procedure for short-term employment",
                    url: "https://www.sem.admin.ch/sem/en/home/themen/fza_schweiz-eu-efta/meldeverfahren.html",
                  },
                  {
                    text: "United Kingdom",
                    url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/uk.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Non-EU/EFTA Nationals",
            contents: [
              {
                subtitle: "Who can work in Switzerland?",
                text: `Nationals of countries outside the EU/EFTA can only work in Switzerland if they are highly qualified. This includes, for example, executives, specialists, or individuals with a teaching diploma for higher education and several years of professional experience.

A work permit is required even for short-term employment, and the number of permits is limited.

A permit may also be granted for self-employed activities. Spouses of Swiss citizens or individuals with a settlement permit do not need a permit.`,
                links: [
                  {
                    text: "QuickZoll App",
                    url: "https://www.bazg.admin.ch/bazg/en/home/services/services-private/services-private-einfuhr/quickzoll-app.html",
                  },
                ],
              },
              {
                subtitle: "Requirements?",
                text: `Your future employer must demonstrate that hiring you is in Switzerland's economic interest and that no suitable personnel could be found in the Swiss or EU/EFTA labor market.

The employer must employ you under the same wage and working conditions as Swiss nationals.`,
              },
              {
                subtitle: "How to obtain a permit?",
                text: `In Switzerland, your future employer must take the necessary steps to obtain a work permit from the cantonal migration and labor market authority.

If you wish to engage in self-employed activity, you must apply for the permit yourself.

You can learn more about the procedure for non-EU/EFTA nationals on the State Secretariat for Migration website.

The work permit does not automatically grant the right to enter Switzerland. Depending on your nationality, you may also need a visa.

Check whether this applies to you and how to proceed. Consult the Visa for Foreigners page for details.

Upon arrival in Switzerland, you must register with the residents' registration office in your municipality within 14 days. You may not start work until you have done so.`,
                links: [
                  {
                    text: "Cantonal Migration and Labor Market Authorities",
                    url: "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html",
                  },
                  {
                    text: "Procedure for Non-EU/EFTA Nationals",
                    url: "https://www.sem.admin.ch/sem/en/home/themen/arbeit/nicht-eu_efta-angehoerige/verfahrensablauf.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Don't Forget to Get Insured",
            contents: [
              {
                text: `When you come to Switzerland to work, you enter the Swiss social insurance system. Not all insurance contributions are deducted directly from your salary.

Health insurance is mandatory but private. You must take out a policy with a private health insurance company for yourself and your family within three months of entering Switzerland or starting employment. Further information is available on the page Taking Out Health Insurance.

You only need to take out private accident insurance if you work less than eight hours per week. If you work more, your employer must insure you, and the insurance premium will be deducted from your salary.`,
                links: [
                  {
                    text: "Swiss Social Insurance System",
                    url: "https://www.ahv-iv.ch/en/Sozialversicherungen",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Retirement Planning///How Does Retirement Planning Work?",
    description:
      "In Switzerland, retirement planning consists of three pillars. The goal is to ensure that people in retirement can cover their basic costs and maintain an appropriate standard of living:",
    contents: [
      {
        infos: [
          {
            title: "The 3-Pillar System",
            contents: [
              {
                text: `The Swiss retirement planning system consists of: state pension (1st pillar), occupational pension (2nd pillar), and private pension (3rd pillar).

Each of the three pillars serves a specific purpose.`,
              },
            ],
          },
          {
            title: "The First Pillar",
            contents: [
              {
                text: `The first (mandatory) pillar primarily consists of the old-age pension. It aims to ensure you have a minimum income to cover basic costs when you reach retirement age.

The first pillar is based on the principle of solidarity: The working population pays contributions, financing the pensions of the retired population. Those who earn more and thus pay higher contributions support less affluent insured individuals who pay lower contributions.

Thanks to the survivors' insurance, you also receive benefits if your spouse or a parent (or both parents) dies, preventing financial hardship.

If the old-age and survivors' insurance (AHV) is insufficient to cover your basic costs, additional benefits are provided under the first pillar: supplementary benefits.`,
                links: [
                  {
                    text: "Principle of Solidarity",
                    url: "https://www.ahv-iv.ch/en/Sozialversicherungen/Alters-und-Hinterlassenenversicherung-AHV/Allgemeines#qa-730",
                  },
                  {
                    text: "Supplementary Benefits EL",
                    url: "https://www.bsv.admin.ch/bsv/en/home/sozialversicherungen/ergaenzungsleistungen.html",
                  },
                ],
              },
            ],
          },
          {
            title: "The Second Pillar",
            contents: [
              {
                text: `The occupational pension, also called the pension fund or BVG, is mandatory for most employed individuals. It supplements the AHV pension and aims to enable you to maintain an appropriate standard of living after retirement.

The combined amount from the first and second pillars guarantees you an income of approximately 60 percent of your pre-retirement income.`,
              },
            ],
          },
          {
            title: "The Third Pillar",
            contents: [
              {
                text: `The third pillar allows you to enhance your retirement pension.

Unlike the other two pillars, the third pillar is not mandatory. It is an individual and private, voluntary insurance. You can take out insurance as long as you are employed and intend to save additional money for retirement. The combined amount from the first and second pillars guarantees you an income of approximately 60 percent of your pre-retirement income.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Retirement Planning///1st Pillar (AHV)",
    description:
      "The first pillar, commonly referred to as 'AHV,' is the state old-age, survivors', and disability insurance (AHV/IV). It forms the foundation of the Swiss pension system and aims to provide benefits that ensure a basic standard of living. These are paid out as old-age, disability, or survivors' pensions.",
    contents: [
      {
        infos: [
          {
            title: "AHV Card",
            contents: [
              {
                subtitle: "Ordering the AHV Card",
                text: `If you do not yet have an AHV card or have lost your AHV card, you can apply for one by filling out the form available online and submitting it to the relevant authority.`,
              },
              {
                subtitle: "You are employed",
                text: `If you do not yet have an AHV card or have lost your AHV card, you can fill out the corresponding form available on the AHV/IV Information Center website and submit it to your employer.

This way, you will receive a (new) AHV card.`,
                links: [
                  {
                    text: "Corresponding Form",
                    url: "https://www.ahv-iv.ch/en/Formulare/Formulare/Allgemeine-Verwaltungsformulare",
                  },
                ],
              },
              {
                subtitle: "You are self-employed or not working",
                text: `If you do not yet have an AHV card or have lost your AHV card, you can fill out the corresponding form available on the AHV/IV Information Center website and submit it to your professional association compensation fund or the cantonal compensation fund responsible for collecting insurance contributions.

This way, you will receive a (new) AHV card.`,
                links: [
                  {
                    text: "Corresponding Form",
                    url: "https://www.ahv-iv.ch/en/Formulare/Formulare/Allgemeine-Verwaltungsformulare",
                  },
                  {
                    text: "Professional Association Compensation Fund",
                    url: "https://www.ahv-iv.ch/en/Kontakte/Verbandsausgleichskassen",
                  },
                  {
                    text: "Cantonal Compensation Funds",
                    url: "https://www.ahv-iv.ch/en/Kontakte/Kantonale-Ausgleichskassen",
                  },
                ],
              },
              {
                subtitle: "You live abroad",
                text: `If you do not yet have an AHV card or have lost your AHV card and live abroad, you must contact the Swiss Compensation Fund (SAK), which will issue you a (new) card.

If you live abroad and work in Switzerland, refer to the sections 'You are employed' or 'You are self-employed or not working' to obtain a (new) AHV card.`,
                links: [
                  {
                    text: "Swiss Compensation Fund SAK",
                    url: "https://www.ahv-iv.ch/en/Kontakte/Schweizerische-Ausgleichskasse-SAK",
                  },
                ],
              },
            ],
          },
          {
            title: "AHV Contributions",
            contents: [
              {
                text: `In Switzerland, you are required to pay AHV contributions until retirement age (more precisely, the reference age) to ensure an old-age pension. If you have not always paid contributions, you may be able to make up for missing contributions in certain cases.`,
              },
              {
                subtitle: "Who must pay AHV contributions?",
                text: `All individuals living or working in Switzerland must pay AHV contributions starting January 1 after their 20th birthday until retirement age (more precisely, the reference age). This obligation begins at age 17 if you are already working and continues if you remain employed after retirement age.

The old-age pension you receive after retirement depends on the total amount of AHV contributions you have paid during your lifetime.`,
                links: [
                  {
                    text: "Reference Age",
                    url: "https://www.ahv-iv.ch/en/Sozialversicherungen/Glossar/term/referenzalter",
                  },
                ],
              },
              {
                subtitle: "How much are the contributions?",
                text: ``,
              },
              {
                subtitle: "You are not employed",
                text: `If you are not employed, you must pay an AHV contribution of at least 530 francs per year (depending on your situation). This applies, for example, if you are studying, retired early, receiving a disability pension, health or accident benefits, or are unemployed and no longer entitled to benefits. This amount also includes mandatory contributions for disability insurance and income replacement compensation.

Please note: Married individuals who are not employed do not have to pay anything if their spouse is employed and pays at least double the annual minimum amount (i.e., 530 francs x 2 = 1,060 francs). The same applies to partners in a registered partnership.

On the Federal Social Insurance Office website, you can calculate the contributions you need to pay in your case online.`,
                links: [
                  {
                    text: "Not Employed",
                    url: "https://www.ahv-iv.ch/p/2.03.e",
                  },
                  {
                    text: "Calculate contributions online",
                    url: "https://www.bsv.admin.ch/bsv/en/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "You are employed",
                text: `AHV contributions (8.7 percent of your salary) are split equally between you and your employer. Your employer handles everything; they deduct the AHV contributions directly from your payroll and transfer them to the compensation fund.

Please note: In addition to AHV contributions, you and your employer must also pay mandatory contributions for disability insurance, income replacement compensation, and unemployment insurance.`,
                links: [
                  {
                    text: "Calculate contributions online",
                    url: "https://www.bsv.admin.ch/bsv/en/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "You are self-employed",
                text: `If you are self-employed, you must pay the AHV contributions yourself (usually 8.1 percent of your income). Contact a compensation fund to find out how to proceed.

Please note: In addition to AHV contributions, you must also pay mandatory contributions for disability insurance and income replacement compensation.

On the Federal Social Insurance Office website, you can calculate the contributions you need to pay in your case online.`,
                links: [
                  {
                    text: "Calculate contributions online",
                    url: "https://www.bsv.admin.ch/bsv/en/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "You work beyond retirement age",
                text: `If you work beyond your retirement age, you must continue to pay AHV/IV/EO contributions.

However, you no longer have to pay unemployment insurance contributions, as you are no longer entitled to unemployment benefits after the standard retirement age.

Contributions are levied on the portion of your salary that exceeds a certain exemption amount (currently 16,800 francs per year). You can choose to waive this exemption to have contributions calculated on your entire income. If you work for multiple employers, the exemption applies to each employment relationship separately.

If you are not employed for the entire year, the annual exemption is calculated proportionally.

On the Federal Social Insurance Office website, you can calculate the contributions you need to pay in your case online.`,
                links: [
                  {
                    text: "Calculate contributions online",
                    url: "https://www.bsv.admin.ch/bsv/en/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "You move abroad",
                text: `If you move abroad, you generally no longer pay AHV contributions in Switzerland.

In certain cases (e.g., if you are abroad for a limited time or work for a Swiss employer) and under certain conditions, you can continue to pay mandatory AHV contributions in Switzerland or at least join the voluntary AHV (e.g., if you move to a country outside the EU/EFTA).

To find out the options available in your case, contact your AHV compensation fund or the Swiss representation in your future country of residence directly.`,
                links: [
                  {
                    text: "Calculate contributions online",
                    url: "https://www.bsv.admin.ch/bsv/en/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "Ordering a statement of your AHV contributions",
                text: `You can request a statement of your AHV contributions at any time. If you notice errors or inaccuracies, you can ask the compensation fund to correct the statement within 30 days of receiving it.`,
              },
              {
                subtitle: "Gaps in AHV contribution payments",
                text: `Paying AHV contributions is mandatory. However, for various reasons, you may not have always paid contributions, resulting in contribution gaps.

Example: Missing contributions during studies.

If you have not always paid contributions, you will receive a lower AHV pension. For example, if you are missing one contribution year, your pension will be approximately 2.3 percent lower.

You can generally make up for missing contributions, but this is only possible for gaps in the last five years. Earlier gaps cannot be compensated through back payments.

If you continue working after reaching the reference age, you can, under certain conditions, use the contributions paid to fill gaps and potentially increase your pension.

Contact your responsible compensation fund; they will explain how to proceed.`,
              },
            ],
          },
          {
            title: "AHV Number",
            contents: [
              {
                text: `If you do not know your AHV number, you can ask your health insurance provider or employer.`,
              },
              {
                subtitle: "What is the AHV number?",
                text: `An AHV number is assigned to all individuals living or working in Switzerland: It serves as a social insurance number; you also need it in other administrative areas.

The number consists of 13 digits. It is anonymous, randomly generated, and it is not possible to identify a person based on the number.`,
                links: [
                  {
                    text: "Social Insurance",
                    url: "https://www.bsv.admin.ch/bsv/en/home/sozialversicherungen/ahv/grundlagen-gesetze/ahv-nummer.html",
                  },
                ],
              },
              {
                subtitle: "Living or working in Switzerland",
                text: `If you live or work in Switzerland, you receive an AHV number regardless of whether you have Swiss or another nationality. Cross-border commuters also receive an AHV number.

You can find your AHV number on your Swiss health insurance card.

If you are employed, you can also ask your employer for your AHV number.

If you are self-employed, you can contact your compensation fund (professional association compensation fund or the compensation fund of your canton of residence).`,
                links: [
                  {
                    text: "Professional Association Compensation Fund",
                    url: "https://www.ahv-iv.ch/en/Kontakte/Verbandsausgleichskassen",
                  },
                  {
                    text: "Cantonal Compensation Funds",
                    url: "https://www.ahv-iv.ch/en/Kontakte/Kantonale-Ausgleichskassen",
                  },
                ],
              },
              {
                subtitle: "Living abroad",
                text: `The AHV number remains valid for life. If you have left Switzerland and do not work for a Swiss company but need to know your AHV number, you can order a duplicate of your insurance certificate using this form.`,
                links: [
                  {
                    text: "Form",
                    url: "https://www.zas.admin.ch/zas/en/home/services-en-ligne/particuliers/duplicata-du-certificat-d-assurance.html",
                  },
                ],
              },
              {
                subtitle: "The AHV number of your children",
                text: `Every child living in Switzerland receives an AHV number.

You can find your children's AHV number on their health insurance card or by asking their health insurance provider.`,
              },
              {
                subtitle: "If you are studying in Switzerland",
                text: `Contact your university or educational institution directly to find out your AHV number. You can also request an insurance certificate from the cantonal compensation fund at your place of study using this form.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Retirement Planning///2nd Pillar (Pension Fund)",
    description:
      "The 2nd pillar is designed to complement the 1st pillar, ensuring you receive an adequate pension in retirement. If you leave Switzerland, become self-employed, or buy property, you can also withdraw the capital you have saved up to that point early.",
    contents: [
      {
        infos: [
          {
            title: "Purpose of the 2nd Pillar",
            contents: [
              {
                text: `The Swiss retirement planning system consists of three pillars. The 2nd pillar, together with the 1st pillar, primarily aims to secure you an adequate income in retirement. To benefit from it, you must pay monthly contributions during your working life. Under certain circumstances, you can also access this money before retirement.`,
              },
            ],
          },
          {
            title: "Insured Persons",
            contents: [
              {
                text: `Contributions to the 2nd pillar are mandatory if you meet all of the following conditions:

- You are at least 17 years old.
- You are insured under the 1st pillar (AHV).
- You are employed and earn at least 22,680 francs per year.

Please note: If you do not meet these conditions, you can also take out voluntary insurance:

- If your income is less than 22,680 francs per year, your employer can voluntarily insure you with a 2nd pillar institution.
- If you are self-employed or have a fixed-term employment contract of up to three months, you are not required to pay contributions. However, you can choose to do so voluntarily.`,
              },
            ],
          },
          {
            title: "Contributions to the 2nd Pillar",
            contents: [
              {
                text: `You and your employer must each pay half of the contributions to the 2nd pillar. Your employer may also choose to pay more than half.

You do not need to worry about anything. Your employer deducts your contributions directly from your salary and transfers them to your account at the pension institution of their choice.

If you are self-employed and decide to pay BVG contributions voluntarily, you can contact a pension institution of your choice to find out how to proceed.

Since the 2nd pillar is managed by private pension institutions, each with its own regulations, the amount you must pay is not fixed and may vary depending on the institution.`,
              },
            ],
          },
          {
            title: "The 2nd Pillar and the Vested Benefits Account",
            contents: [
              {
                text: `If your annual income falls below 22,680 francs (entry threshold), you become unemployed, move abroad for some time, or stop working due to training, you are no longer required to pay contributions to the 2nd pillar.

Please note: In this case, you cannot freely dispose of the capital saved up to that point but must transfer it to a vested benefits account at a bank or financial institution of your choice. Your BVG balance is temporarily 'parked' and held there.

If or when you meet the conditions for contributing to the 2nd pillar again, you must transfer the money from the vested benefits account to your new BVG account with your new employer's pension fund.

If you do not open a vested benefits account, your 2nd pillar funds will automatically be transferred to an account with the national pension institution, the BVG Substitute Institution. Contact the BVG Substitute Institution if you want to invest your 2nd pillar funds elsewhere with a better interest rate.`,
              },
            ],
          },
          {
            title: "Investing in the 2nd Pillar (Buy-In)",
            contents: [
              {
                text: `When you change jobs, your new salary may be higher than your previous one, or your new employer's pension fund may offer more favorable conditions.

You may also have contribution gaps because you have not paid contributions to the 2nd pillar throughout your life.

In these cases, you can invest in your 2nd pillar by buying additional contribution years. The conditions of the new pension fund apply.

The amount you contribute to the 2nd pillar can be deducted from your taxes.

You can obtain information about the possibilities and conditions for investing in the 2nd pillar from your new pension fund. Your employer can provide you with their contact details.`,
              },
            ],
          },
          {
            title: "Early Withdrawal of the 2nd Pillar",
            contents: [
              {
                subtitle: "For purchasing a home",
                text: `You can use your 2nd pillar before retirement to buy property, pay off a mortgage, or acquire shares in housing cooperatives.

The following conditions apply:

- The purchase is for your primary residence.
- Up to the age of 50, you can withdraw the entire capital.
- From age 50, you can only withdraw a partial amount.
- An early withdrawal can be requested at most every five years.
- If you are married or in a registered partnership, you need the consent of your spouse or partner.
- If you sell your property, you are usually required to repay the 2nd pillar funds you withdrew for the purchase.

You can obtain information about the modalities of an early withdrawal for purchasing property from your pension institution.`,
              },
              {
                subtitle: "When starting self-employment",
                text: `If you intend to become self-employed, you are no longer required to pay contributions to the 2nd pillar. You can have the capital saved up to that point paid out. However, the following conditions apply:

- You must submit the request for the early withdrawal within the first year after starting your new activity.
- You must prove that you have started a self-employed activity, e.g., with an extract from the commercial register or AHV documents.
- If you are married or in a registered partnership, you need the consent of your spouse or partner.

You can obtain information about the modalities of an early withdrawal for starting self-employment from your pension institution.`,
              },
              {
                subtitle: "When permanently leaving Switzerland",
                text: `If you permanently leave Switzerland, you can have your 2nd pillar paid out early.

An early withdrawal of this capital is not possible if you intend to settle in an EU/EFTA country. If one of these countries becomes your new place of residence, you are mandatorily insured there for old age, disability, and survivors' benefits.

In this case, part of your occupational pension (the so-called mandatory part) must remain in a blocked account in Switzerland; it can only be paid out when you reach the standard retirement age (65 years). However, you can have the remaining part of your 2nd pillar (the so-called non-mandatory part) paid out in cash.

You can obtain information about the modalities of an early withdrawal for permanently moving abroad from your pension institution.

Please note: If you permanently leave Switzerland and still have a vested benefits account, do not forget to take this balance with you.`,
              },
            ],
          },
          {
            title: "Payout of the 2nd Pillar at Retirement",
            contents: [
              {
                text: `At age 65, you can withdraw the money you have saved during your working life. With some pension funds, withdrawal is possible from age 58 in case of early retirement, or it can be deferred until age 70 if you work beyond retirement age.

Take care of the withdrawal of your 2nd pillar benefits in good time: You can find out more on the page Planning Retirement. Your pension fund can also provide detailed information on how to proceed in your case.`,
              },
            ],
          },
          {
            title: "The 2nd Pillar in Case of Divorce",
            contents: [
              {
                text: `If you get divorced or dissolve a registered partnership, only the portion of the 2nd pillar capital accumulated during the marriage or registered partnership is divided between the spouses or partners.

The 2nd pillar is also divided if one of the two individuals is already retired and receiving an old-age pension from the 2nd pillar.`,
              },
            ],
          },
          {
            title: "The 2nd Pillar in Case of Death",
            contents: [
              {
                text: `In a marriage or registered partnership, the surviving person receives a pension in the event of a death.

If your spouse or registered partner dies, you are entitled to a pension under the following conditions:

- You are at least 45 years old.
- Your marriage or partnership lasted at least five years.
- You are caring for at least one child.

If you do not meet any of these conditions, you are entitled to a one-time settlement equal to three annual pensions.

Children who have lost one or both parents through death receive a half-orphan or orphan pension until they are 18 years old. If they are studying or in training, they receive the pension until they are 25 years old.

Your pension fund can provide detailed information on pensions.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Retirement Planning///3rd Pillar (Private Pension)",
    description: "To prepare for retirement, you can enhance the retirement income already secured by the 1st and 2nd pillars with a voluntary insurance: the private pension (3rd pillar).",
    contents: [
      {
        infos: [
          {
            title: "Private Pension",
            contents: [
              {
                subtitle: "Purpose of the 3rd Pillar",
                text: `If you want to supplement your 1st and 2nd pillars and ensure you receive additional funds after retirement, you can voluntarily set up a 3rd pillar. There are two types of 3rd pillar: tied pension provision (Pillar 3a) and untied pension provision (Pillar 3b).`,
              },
              {
                subtitle: "Tied Pension Provision (Pillar 3a)",
                text: `With Pillar 3a, you can accumulate savings with a bank or insurance company during your working life until retirement.

Key features of Pillar 3a:

- You can pay a maximum annual amount into your account.
- The interest rates are higher than those of a savings account.
- The contributions you pay can be deducted from your taxes each year.
- Certain conditions apply to withdrawing the balance.
- A one-time tax is due upon withdrawal, based on your income at the time of withdrawal.`,
              },
              {
                subtitle: "Untied Pension Provision (Pillar 3b)",
                text: `Pillar 3b consists of savings deposits in the form of cash, savings accounts, life insurance, or investments.

Key features of Pillar 3b:

- You can pay any amount annually.
- You must declare the saved balance in your tax return each year.
- The balance is generally taxed annually.
- You can withdraw the money at any time.
- You do not have to pay additional taxes when withdrawing the saved funds.`,
              },
            ],
          },
          {
            title: "Who Can Take Out a 3rd Pillar",
            contents: [
              {
                text: `You can take out and maintain a Pillar 3a in the following cases:

- You pay contributions to the 2nd pillar (employees).
- You are not insured with a BVG pension institution (self-employed).
- You live abroad but work in Switzerland (e.g., cross-border commuters).
- You receive daily benefits from the AHV-mandatory disability insurance.
- You receive daily benefits from the disability insurance subject to AHV.
- You receive daily benefits from Swiss unemployment insurance.
- You are a partially disabled insured person with an AHV-mandatory income from employment.
- If you work beyond the standard retirement age, you can continue to pay contributions until five years after your 65th birthday.
- You can also continue to pay contributions if you temporarily interrupt your employment (e.g., civil or military service, unemployment, illness).

There are no special requirements for Pillar 3b.

Pension institutions can provide detailed information on taking out a 3rd pillar.`,
              },
            ],
          },
          {
            title: "3rd Pillar: Annual Contribution",
            contents: [
              {
                text: `You can pay a maximum annual amount into Pillar 3a.

For employees, this is a maximum of 7,258 francs in 2025.

For self-employed individuals without a 2nd pillar, this is up to twenty percent of income and a maximum of 36,288 francs.

There are no annual limits for Pillar 3b.`,
              },
            ],
          },
          {
            title: "Tax Advantages of the 3rd Pillar",
            contents: [
              {
                text: `If you opt for a Pillar 3a, you benefit from tax advantages: You can deduct the paid contributions in your annual tax return.

Employees can deduct the maximum amount for the current tax year (2025 amount: 7,258 francs).

Self-employed individuals without a 2nd pillar can deduct up to twenty percent of their income, up to a maximum of 36,288 francs (2025 amount).

Please note: A one-time lump-sum tax is due upon withdrawal of the balance.

There are generally no tax advantages for Pillar 3b.

However, unlike Pillar 3a, you do not have to pay taxes when withdrawing the entire saved balance.

Your pension institution or the tax authority of your canton can provide detailed information on this topic.`,
              },
            ],
          },
          {
            title: "Withdrawal of the Balance: Possible Timing",
            contents: [
              {
                text: `Normally, you can withdraw the 3rd pillar funds at the time of your retirement or, at the earliest, five years before the standard retirement age (65 years).

In the following exceptional cases, you can withdraw the capital early:

- You plan to buy or build property.
- You permanently leave Switzerland.
- You intend to become self-employed.
- You intend to start a new self-employed activity.
- You want to buy additional contribution years with a 2nd pillar pension institution.
- You receive a full disability insurance (IV) pension, and the disability risk is not insured.

If you decide to work beyond the standard retirement age (65 years), you can continue to pay contributions and defer the withdrawal for up to five years.

When withdrawing, you must withdraw the entire balance at once.

The withdrawal of Pillar 3b capital is not subject to conditions and can occur at any time.

Your pension institution can provide detailed information on the conditions and modalities for capital withdrawal.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Unemployment Insurance",
    description:
      "If you lose your job, you can receive unemployment benefits for a certain period. You must meet specific conditions and make every reasonable effort to find a new job as quickly as possible.",
    contents: [
      {
        infos: [
          {
            title: "Check Whether the Termination is Valid",
            contents: [
              {
                text: `If you receive a termination notice from your employer, first check whether the termination complies with legal requirements. In particular, verify the following: Was the notice period respected? Were you terminated while on sick leave or pregnant?`,
              },
            ],
          },
          {
            title: "Am I Entitled to Unemployment Benefits?",
            contents: [
              {
                text: `If you have lost your job, you are entitled to unemployment benefits in Switzerland as soon as you meet the following conditions:

- You are fully or partially unemployed.
- You were employed for at least 12 months in the last 2 years (possible exceptions in FAQ point 2).
- Your main residence is in Switzerland. If not, refer to the section 'Unemployment for Foreign Nationals and Cross-Border Commuters'.
- You have completed compulsory schooling and have not yet reached the AHV retirement age.

Additionally, the following applies:

- You must register with the Regional Employment Office (RAO).
- You must be willing to accept a job that matches your professional profile and be immediately available.
- You must start looking for a job during the notice period.
- If you have a fixed-term employment contract, you must begin your job search three months before the end of the employment relationship.

Keep careful records of your job search (applications, rejection letters, etc.). You must present them to the regional employment agency.`,
              },
            ],
          },
          {
            title: "Where Do I Register for Unemployment?",
            contents: [
              {
                text: `Register as unemployed as early as possible, but no later than the first day for which you wish to receive unemployment benefits. You must register in person—either via the eService 'Registration for Employment Services (RAV)' or by visiting the regional employment agency (RAV).

Within the first 15 days after your registration, the responsible RAV will invite you to an initial interview.

Please have the following documents ready:

- AHV/IV insurance card or health insurance card
- Identity card or passport
- Proof of job search efforts already undertaken (applications, responses, etc.)
- Additional information requested by the RAV.
- Form PD U2, if you are a citizen of an EU or EFTA state, already receiving unemployment benefits from an EU or EFTA state, and looking for a job in Switzerland.

Choose an unemployment fund in your region. This fund will pay you the unemployment benefits monthly. You must submit the following documents to your unemployment fund:

- The 'Application for Unemployment Benefits' form,
- 'Employer Certificate' forms for employments in the last two years.
- Additional information requested by the unemployment fund,
- Form PD U1, if you come from an EU or EFTA state.`,
              },
            ],
          },
          {
            title: "Unemployment Benefits",
            contents: [
              {
                subtitle: "How Much Unemployment Benefit Will I Receive?",
                text: `Generally, you receive unemployment benefits equal to 70 percent of your insured salary. This is, simplified, the average salary of the last 6 months—or the last 12 months if this is more advantageous for you.

You receive 80 percent of the insured salary if one of the following conditions is met:

- You have children under 25 years old for whom you are responsible.
- Your insured income does not exceed 3,797 francs.
- You have a disability degree of at least 40 percent.`,
              },
              {
                subtitle: "How Long Will I Receive Unemployment Benefits?",
                text: `The following table shows how long you are entitled to unemployment benefits, depending on your situation:

Contribution Period      Age/Maintenance Obligation        Conditions                               Daily Benefits
12 to 24                Up to 25 without maintenance obligation                                     200
12 to <18               25 and older                                                        2601
12 to <18               With maintenance obligation                                         2601
18 to 24                25 and older                                                        4001
18 to 24                With maintenance obligation                                         4001
22 to 24                55 and older                                                        5201
22 to 24                25 and older                      Receiving a disability pension           5201
                                                          corresponding to at least 40% disability
22 to 24                With maintenance obligation       Receiving a disability pension           5201
                                                          corresponding to at least 40% disability

Contribution-exempt                                                                      90/1802

1 These insured categories are entitled to an additional 120 daily benefits if they become unemployed within the last 4 years before reaching the AHV retirement age.

2 Individuals whose disability pension has been reduced or canceled by the IV and who therefore need to look for work or increase their workload are entitled to a maximum of 180 daily benefits.

Source of the table: SECO Unemployment - A Guide for Insured Persons`,
              },
            ],
          },
          {
            title: "Unemployment for Foreign Nationals and Cross-Border Commuters",
            contents: [
              {
                subtitle: "Foreigners in Switzerland",
                text: `If you are a foreigner and have worked in Switzerland, you need a residence or settlement permit to receive unemployment benefits in Switzerland. Apply for an extension in good time before it expires.`,
              },
              {
                subtitle: "Cross-Border Commuters",
                text: `If you are a cross-border commuter (G permit), you generally receive unemployment benefits in your country of residence. However, you can use the services of the regional employment agency (RAV) to search for a new job in Switzerland. To do so, you must register with the RAV in the region where you had your last job in Switzerland.`,
              },
            ],
          },
          {
            title: "Self-Employed Individuals and Unemployment",
            contents: [
              {
                text: `As a self-employed person, you are not insured against unemployment. Therefore, you are not entitled to unemployment benefits if you no longer have work.`,
              },
            ],
          },
          {
            title: "Bridging Benefits for Older Unemployed Individuals",
            contents: [
              {
                text: `If you lose your job before you can receive your old-age pension and cannot find a new job, you may be eligible for 'Bridging Benefits for Older Unemployed Individuals (ÜL)'. These benefits cover your living expenses until you reach the AHV retirement age.

To be eligible for bridging benefits, you must meet several conditions, including:

- Having been fully unemployed no earlier than the month in which you reach age 60.
- Having been insured with the AHV for at least 20 years, including at least five years after your 50th birthday.
- Having worked and earned an income of at least 75 percent of the maximum AHV pension annually (2024: 22,050 francs) or having been entitled to education and care credits of this amount.
- Living in Switzerland or an EU or EFTA member state.
- Having basic expenses that exceed your countable income (legally defined limits).

To receive bridging benefits, you must submit an application to your municipality or the cantonal implementing authority.

You must fill out the corresponding form 'Application for Bridging Benefits for Older Unemployed Individuals'. The form is available online.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Inability to Work",
    description: "If you are sick or have had an accident, you continue to receive your salary for a certain period. Additionally, you cannot be terminated during this time.",
    contents: [
      {
        infos: [
          {
            title: "In Case of Illness",
            contents: [
              {
                subtitle: "Procedure",
                text: `If you are sick or feel unwell during pregnancy, you must inform your employer as soon as possible.

You generally need to provide a medical certificate from the third day of absence. Check with your employer which rules apply to you.

If you can only work a reduced schedule due to illness or pregnancy, the doctor must indicate on the medical certificate the maximum number of hours you can work per day or per week.`,
              },
              {
                subtitle: "Illness and Salary",
                text: `There are two cases to distinguish:

1. Your employer has taken out a daily sickness benefit insurance for their employees. Most employers have such insurance. In this case, you continue to receive your salary for 720 or 730 sick days within 900 days, depending on the insurance. Check with your employer. Please note: As long as you are on sick leave, you may not work. If you do, the insurance will file a claim and demand repayment of the paid daily benefits.

2. Your employer has not taken out daily sickness benefit insurance for their employees. In this case, they must continue to pay your salary for a certain period. In the first year of employment, this period is three weeks, increasing with more years of employment up to a maximum of four months. The exact duration of salary continuation varies by region.`,
              },
              {
                subtitle: "Illness and Termination",
                text: `While you are on sick leave, your employer may not terminate you. A termination protection applies during the so-called lockout period:

- For 30 days in the first year of employment
- For 90 days from the second to the fifth year of employment
- For 180 days from the sixth year of employment

Please note: During the probation period, your employer can terminate you even if you are on sick leave.

As an employee, you can submit your termination notice even while on sick leave.

If you fall ill after receiving a termination notice, the notice period is suspended during the sick leave. It resumes only when you can return to work.`,
              },
            ],
          },
          {
            title: "Accident",
            contents: [
              {
                subtitle: "Procedure",
                text: `In case of an accident, you must inform your employer as soon as possible, regardless of whether the accident occurred during working hours or in your free time.

The employer must immediately notify their insurance company. The insurance company will provide you with a form in which you and your doctor must provide details about the accident and your health condition.`,
              },
              {
                subtitle: "Accident and Salary",
                text: `In Switzerland, employers must insure their employees against the consequences of accidents.

From the third day after the accident, you receive a daily benefit equal to 80 percent of your salary.

The daily benefit is paid regardless of whether the accident occurred at the workplace (occupational accident) or in your free time (non-occupational accident).

The only exception: If you are employed and your weekly working hours are less than 8 hours, only occupational accidents and accidents on the way to work are insured.

Daily benefits are paid for a certain period. Check with your employer about the conditions that apply to you.

Please note: If your doctor declares you unable to work due to an accident, you must comply. If you work anyway, the insurance will file a claim and demand repayment of the paid daily benefits.`,
              },
              {
                subtitle: "Accident and Termination",
                text: `While you are on sick leave due to an accident, your employer may not terminate you. A termination protection applies during the so-called lockout period:

- For 30 days in the first year of employment
- For 90 days from the second to the fifth year of employment
- For 180 days from the sixth year of employment

Please note: During the probation period, your employer can terminate you even if you are on sick leave due to an accident.

As an employee, you can submit your termination notice while recovering from an accident.

If you have an accident after receiving a termination notice, the notice period is suspended during the sick leave. It resumes only when you can return to work.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Employment Contract",
    description:
      "The employee and the employer must sign an employment contract that regulates the working conditions. Specific rules apply to certain industries, laid down in national or regional collective labor agreements.",
    contents: [
      {
        infos: [
          {
            title: "Individual Employment Contract",
            contents: [
              {
                text: `When you are hired by an employer (or when you, as an employer, hire a new person), you must sign an employment contract. This sets out the rights and obligations regarding the employment relationship for both parties.

The employment contract is signed by both parties. It must include at least the following points:

- The name of the employee and the name of the employer
- The start date of the employment relationship
- The employee's position
- The salary and any salary supplements
- The weekly working hours

For fixed-term employment contracts, the employer must clearly indicate the end date of the employment relationship.

Special provisions, such as a non-compete clause or overtime regulations, must also be included in the employment contract.`,
              },
            ],
          },
          {
            title: "Collective Labor Agreements",
            contents: [
              {
                text: `A collective labor agreement (CLA) is a contract concluded between employer associations and employee associations/unions. Both parties establish the minimum requirements to be observed (e.g., the minimum wage). In Switzerland, there are numerous CLAs, for example, for the hairdressing industry, construction industry, private security services, or the bakery, confectionery, and patisserie industry.

Most are national CLAs, whose conditions apply to the respective industry throughout Switzerland. However, there are also company-specific CLAs (e.g., for Migros and Coop) or regional CLAs, whose conditions apply only to a specific company or region.`,
              },
            ],
          },
          {
            title: "Standard Employment Contracts",
            contents: [
              {
                text: `In industries without a collective labor agreement, federal or cantonal authorities can issue a standard employment contract (SEC) that sets binding minimum wages. The SEC conditions can only be amended by the employer in favor of the employees.

An SEC is used when industry or local wage conditions have been repeatedly disregarded. The SEC aims to prevent this.

An example of a national SEC is the SEC for domestic work. This and examples of cantonal SECs are listed on the State Secretariat for Economic Affairs (SECO) website.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Work Certificate",
    description: "When your employment relationship ends, your supervisor usually issues you a work certificate. This is useful when applying for a new job.",
    contents: [
      {
        infos: [
          {
            title: "Content of the Work Certificate",
            contents: [
              {
                text: `The work certificate must include the following points:

- Start and end of the employment relationship
- Position and tasks performed
- Percentage of employment
- Assessment of the quality of your work
- Assessment of your behavior
- Reason for issuing the work certificate (termination, change of supervisor, new position, etc.)`,
              },
            ],
          },
          {
            title: "Form of the Work Certificate",
            contents: [
              {
                text: `Your employer must issue the work certificate in writing.

They must describe the employment relationship completely and truthfully and provide a benevolent assessment. If you notice inaccuracies, errors, or falsehoods in the work certificate, you can request that your supervisor revise the text.

The work certificate must not contain ambiguous formulations or codes that could be interpreted in different ways.

It should also not list individual negative incidents (e.g., a single instance of tardiness) or incidents that have no direct impact on the employment relationship.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Working Hours///Overtime and Extra Hours",
    description: "Every employee must work a certain number of hours per week, as specified in the employment contract. It is possible to exceed this threshold if certain conditions are met.",
    contents: [
      {
        infos: [
          {
            title: "Overtime",
            contents: [
              {
                subtitle: "What is overtime?",
                text: `Your employment contract specifies how many hours per week you must work.

If you work more than the contractually agreed hours but do not exceed the weekly maximum working hours, these additional hours are considered overtime. The weekly maximum working hours are:

- 45 hours for employees in industrial companies, office staff, technical employees, and sales staff in large retail companies;
- 50 hours for all other employees.`,
              },
              {
                subtitle: "What conditions apply to working overtime?",
                text: `If your employer requires you to work overtime or you work overtime on your own initiative, the following conditions must be met:

- The overtime is necessary.
- The overtime is not physically or mentally excessively demanding.
- Working hours and daily rest periods are observed.`,
              },
              {
                subtitle: "How is overtime compensated?",
                text: `- Overtime must be compensated with a wage supplement of 25 percent.
- Instead of a wage supplement, overtime can be compensated with time off of at least the same duration. However, this requires your consent and a written agreement between you and your employer.
- Managers generally have no entitlement to a wage supplement. This must be regulated in the employment contract. It can also be agreed in writing that overtime is compensated without a supplement or with a supplement of less than 25 percent.`,
              },
            ],
          },
          {
            title: "Extra Hours",
            contents: [
              {
                subtitle: "What are extra hours?",
                text: `The law specifies a weekly maximum working time:

- 45 hours for employees in industrial companies, office staff, technical employees, and sales staff in large retail companies;
- 50 hours for all other employees.

If you work more than the legally specified weekly maximum working time, you are working extra hours.`,
              },
              {
                subtitle: "What conditions apply to working extra hours?",
                text: `More than the weekly maximum working time may be worked:

- Due to urgent work or extraordinary workload;
- For inventory, accounting, or liquidation tasks;
- To prevent or address operational disruptions.
- It must not exceed two hours per day.
- It must not exceed 170 hours per year (for a weekly maximum working time of 45 hours) or 140 hours (for a weekly maximum working time of 50 hours).`,
              },
              {
                subtitle: "How are extra hours compensated?",
                text: `For extra hours, a wage supplement of at least 25 percent is paid. It can be agreed that extra hours are compensated with time off instead of a wage supplement; in this case, compensation is provided with time off of the same duration within 14 weeks or within a period agreed with your employer (not exceeding 12 months).

For office staff and some other categories of employees, no supplement is owed for the first 60 hours of extra work.`,
              },
            ],
          },
          {
            title: "Please Note: Rules for Young People",
            contents: [
              {
                text: `If you are under 18 years old, you may not work more hours than other employees in the company. The daily working time must not exceed nine hours and must, including breaks, be within twelve hours.

Days spent at vocational school count as working time.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Working Hours///Short-Time Work",
    description: "If your company is temporarily in a difficult situation, you can reduce or completely stop work in the company without laying off your employees.",
    contents: [
      {
        infos: [
          {
            title: "What is Short-Time Work?",
            contents: [
              {
                text: `Short-time work primarily aims to prevent you from having to lay off your employees due to a short but unavoidable work stoppage.

The unemployment insurance covers part of your employees' wages for a certain period if they are affected by work interruptions. You can apply for short-time work compensation under the following conditions: Your company temporarily interrupts or reduces operations while employment contracts continue. The interruption is due to economic factors, measures imposed by authorities, or other developments your company cannot directly influence.`,
              },
            ],
          },
          {
            title: "Pre-Registering Short-Time Work: Where, How, and When?",
            contents: [
              {
                subtitle: "Where and How?",
                text: `The authority responsible for approving short-time work is the office of the canton where your company is based.

The competent authority will provide you with the form for pre-registering short-time work. Fill it out and return it to the authority. You can find all forms on travail.swiss. You can also use the eService on www.job-room.ch to send the pre-registration form to the competent cantonal authority.

Note: Employees must agree to work short-time. The employer must obtain the employees' consent in advance and confirm this during pre-registration.`,
              },
              {
                subtitle: "When to Register?",
                text: `You must pre-register the planned short-time work at least 10 days before it begins.

The registration period is exceptionally 3 days if you can prove that short-time work must be introduced very urgently due to sudden, unforeseeable circumstances.

If you need to extend short-time work beyond the already approved duration, you must submit a new pre-registration at least 10 days before the approval expires.`,
              },
            ],
          },
          {
            title: "How Much is the Short-Time Work Compensation?",
            contents: [
              {
                subtitle: "Compensation and Salary",
                text: `- The short-time work compensation is 80 percent of the loss of earnings, i.e., 80 percent of the temporary work stoppage.
- For the part of the work not subject to short-time work, the salary is paid by the employer.
- Apprentices, temporary employees, and individuals with fixed-term contracts do not receive short-time work compensation. They receive their full salary. If your employment contract is fixed-term, it generally cannot be terminated early.`,
              },
              {
                subtitle: "Compensation and Social Insurance",
                text: `Short-time work does not affect contributions to social insurance such as AHV/IV/Income Replacement Ordinance, unemployment insurance, accident insurance, and pension funds: Both the employer and the employees must continue to pay the full contributions. Employees are insured for their normal salary.`,
              },
            ],
          },
          {
            title: "Short-Time Work and Termination",
            contents: [
              {
                text: `Short-time work compensation is primarily intended to avoid terminations and maintain employment relationships.

Nevertheless, during the short-time work phase, both the employer and the employee have the right to terminate the employment relationship. Regardless of who issued the termination, the company can no longer claim short-time work compensation from the start of the notice period.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Working Hours///Rest Periods and Work Breaks",
    description:
      "You have the right to take breaks during work. Depending on how many hours you need to work in a day, your break is more or less long. Between two working days, you are entitled to a certain minimum number of rest hours.",
    contents: [
      {
        infos: [
          {
            title: "How Long Can I Take a Break at Work?",
            contents: [
              {
                text: `All employees are entitled to breaks. Breaks are primarily intended for rest and meals.

The duration of the break depends on the actual working hours:

- 15 minutes for a daily working time of more than five and a half hours,
- 30 minutes for a daily working time of more than seven hours,
- 1 hour for a daily working time of more than nine hours; in this case, the break can be split.

Your employer may also grant you longer breaks.

If you have flexible working hours and the daily working time is between less than seven and more than nine hours, the break duration is determined by the average weekly working time.

Please note:

Your employer may issue break regulations. For example, they may require you to take your break at a specific time or place.

Smokers are not entitled to additional breaks for smoking.`,
              },
            ],
          },
          {
            title: "Are Breaks Considered Working Time?",
            contents: [
              {
                text: `Breaks are not considered working time. Therefore, they do not have to be paid.

There are the following exceptions:

- If you cannot leave your workplace during the break, the break counts as working time.
- Technically induced work interruptions (e.g., a machine shutdown) are not considered breaks, as you cannot rest during this time. Such interruptions are too short, and you cannot know in advance when you will resume work.`,
              },
            ],
          },
          {
            title: "Can I Work Through Instead of Taking a Break?",
            contents: [
              {
                text: `Breaks usually take place around the middle of the daily working time. They are intended for recovery and meals. Therefore, you cannot skip the break, as this could lead to errors and accidents.

For the same reason, you may not work through to leave earlier or start later.`,
              },
            ],
          },
          {
            title: "Daily Rest Period",
            contents: [
              {
                text: `The break serves for recovery during the workday. The daily rest period, on the other hand, is the legally prescribed recovery time after a workday:

- It must be at least 11 hours.
- It begins at the end of the workday and ends at the start of work.

Your employer may reduce the daily rest period to 8 hours once a week. This is only permissible if the 11-hour duration is maintained on average over two weeks.

Please note: For young people up to 18 years, the daily rest period must be at least 12 hours in any case.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Working Hours///Sunday and Night Work",
    description:
      "In Switzerland, night work and Sunday work are prohibited. Certain sectors are exempt from this prohibition. Other sectors can apply for a permit for temporary or permanent night and Sunday work.",
    contents: [
      {
        infos: [
          {
            title: "Night Work: Regulations and Permits",
            contents: [
              {
                subtitle: "Temporary and Permanent Night Work",
                text: `In Switzerland, it is legally prohibited to employ employees between 11:00 PM and 6:00 AM.

If an employer wishes to employ employees during this time, they need a permit and the employee's consent.

For night work, the daily working time for the employee must not exceed nine hours; it must, including breaks, be within a ten-hour period.

Please note: In Switzerland, a distinction is made between temporary and permanent night work.

- Temporary night work refers to pre-scheduled assignments that do not last longer than 6 months per assignment.
- Permanent night work refers to work exceeding this duration. Note that night work consisting of regular, recurring assignments over several years for the same reason is also considered permanent night work.`,
              },
              {
                subtitle: "Applying for a Permit",
                text: `If you, as an employer, want to introduce temporary night work, you must submit a justified application for a work time permit to the responsible cantonal authority.

If you want to introduce night work for a longer period, you must obtain a permit for permanent night work. Apply for your work time permit via EasyGov.swiss - The Online Portal for Companies.

Please note: If an employee works night shifts for 25 nights or more per year, they are entitled to have their suitability for night work medically assessed every two years. In certain cases, such a medical examination is mandatory, for example, for young people employed at night or for employees working under difficult conditions (extreme temperatures, noise, vibrations, physical work, working alone, etc.). From age 45, employees can request that the examination be conducted annually.`,
              },
            ],
          },
          {
            title: "Night Work: Compensation",
            contents: [
              {
                subtitle: "Temporary Night Work",
                text: `Employees who work fewer than 25 nights per calendar year between 11:00 PM and 6:00 AM are entitled to a wage supplement of at least 25 percent.`,
              },
              {
                subtitle: "Permanent Night Work",
                text: `Employees who work 25 or more nights per calendar year are entitled to compensation of 10 percent of the time they performed night work.

It is not permissible to replace this time supplement with a wage supplement, as the compensatory rest period is intended to allow the employee to recover and make up for sleep deprivation.

SECO provides a fact sheet detailing compensation for permanent night work.`,
              },
            ],
          },
          {
            title: "Sunday Work: Regulations and Permits",
            contents: [
              {
                subtitle: "Temporary and Permanent Sunday Work",
                text: `In Switzerland, Sunday work is generally prohibited. If an employer wishes to employ employees on Sundays, they need a permit and the employee's consent.

Please note: In Switzerland, a distinction is made between temporary and permanent Sunday work.

- Temporary Sunday work refers to pre-scheduled assignments that do not last longer than 6 months. Work on a public holiday is also considered Sunday work.
- Permanent Sunday work refers to work exceeding this limit. Note that Sunday work consisting of regular, recurring assignments over several years for the same reason is also considered permanent Sunday work.`,
              },
              {
                subtitle: "Applying for a Permit",
                text: `To allow temporary employment of employees on Sundays, you, as an employer, must submit an application for a work time permit to the responsible cantonal authority. They will provide you with the necessary information and forms for submitting the application.

If you want to apply for a permit for permanent Sunday work, apply for your work time permit via EasyGov.swiss - The Online Portal for Companies.`,
              },
            ],
          },
          {
            title: "Sunday Work: Compensation",
            contents: [
              {
                subtitle: "Temporary Sunday Work",
                text: `Employees who work up to six Sundays per year are entitled to a wage supplement of 50 percent and time compensation. This varies depending on the situation as follows:

- Sunday work lasting up to five hours must be compensated with time off of the same duration within four weeks.
- If Sunday work lasts longer than five hours, a rest day of at least 24 consecutive hours must be granted in the preceding or following week (in addition to the daily rest period, i.e., the rest period between two working days, which must be at least 11 hours; the total compensation must therefore be 35 hours).`,
              },
              {
                subtitle: "Permanent Sunday Work",
                text: `Employees who perform permanent Sunday work are entitled to time compensation.

This varies depending on the situation as follows:

- Sunday work lasting up to five hours must be compensated with time off of the same duration within four weeks.
- If Sunday work lasts longer than five hours, a rest day of at least 24 consecutive hours must be granted in the preceding or following week (in addition to the daily rest period, i.e., the rest period between two working days, which must be at least 11 hours; the total compensation must therefore be 35 hours).

It is not permissible to replace this time compensation with a wage supplement, as the compensatory rest period is intended to allow the employee to recover and make up for missed Sunday and holiday rest.`,
              },
            ],
          },
          {
            title: "Night and Sunday Work: Exceptions",
            contents: [
              {
                text: `In certain professions and occupational categories, employees can be employed at night and on Sundays without a permit, for example, in healthcare, hospitality, kiosks, bakeries, theaters, and newspaper editorial offices.

SECO provides an up-to-date list of occupational categories for which night and Sunday work is permitted without a permit.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(6),
    title: "Working Hours///Vacations, Holidays, and Absences",
    description: "In Switzerland, all employees are entitled to at least 4 weeks of vacation per year. For special occasions, they also have days or hours off.",
    contents: [
      {
        infos: [
          {
            title: "Vacations",
            contents: [
              {
                subtitle: "How Many Weeks?",
                text: `Regardless of your work schedule, you are entitled to at least four weeks of vacation per year.

Up to the age of 20, you have at least five weeks of vacation.

Depending on your employer (or collective labor agreement), you may be granted more vacation.`,
              },
              {
                subtitle: "How Do I Schedule My Vacation?",
                text: `Your employer's consent is required regarding when you take your vacation. If your vacation is not compatible with the company's organization or needs and interests, your supervisor may require you to reschedule your vacation.`,
              },
              {
                subtitle: "Vacation and Illness",
                text: `Vacations are intended for recovery. If you are unable to recover during your vacation due to illness or a serious accident, you have the right to reschedule your vacation; you must provide a medical certificate.`,
              },
              {
                subtitle: "Vacation and Termination",
                text: `In principle, you can take any remaining vacation during the notice period. However, your employer may refuse to allow you to take the remaining vacation days if an exceptional business situation exists.

In certain cases, you can agree with your employer that the remaining vacation days will be paid out.`,
              },
            ],
          },
          {
            title: "Holidays",
            contents: [
              {
                text: `August 1 (Swiss National Day) is the only federal holiday.

Cantons may designate up to eight additional holidays as equivalent to Sundays. Cantonal holidays therefore vary from canton to canton.

If a holiday falls on a non-working day (e.g., Saturday or Sunday), there is no entitlement to compensate for it during the week. If a holiday falls during your vacation, it does not count as a vacation day.`,
              },
            ],
          },
          {
            title: "Absences / Leave",
            contents: [
              {
                text: `In certain cases, you can be absent from work without having to make up for the hours or days you were absent. This applies, for example, in the following cases:

- Fulfillment of legal obligations
- Exercise of a public office (member of a municipal parliament or executive, etc.)
- Wedding
- Death of a close relative
- Moving
- Birth of your own children
- Care of a close relative
- Childcare

The number of free hours and days available in these cases is not clearly regulated by law. Ask your employer which rules apply in your company or check the Leisure and Holidays page of the State Secretariat for Economic Affairs (SECO).

Please note: If you are late for work or absent entirely due to external circumstances such as traffic jams, road closures, or flight or train cancellations, your employer is not obliged to grant you these hours, and you must make up for the missed working time.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
];

export const infoEN = [...infoCustoms, ...infoDocuments, ...infoFamily, ...infoForeignNationals, ...infoHealth, ...infoWork];
