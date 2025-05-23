import type { Information } from "../model";

const foo: Information = {
  localeId: 1,
  categoryId: 2,
  title: "",
  description: "",
  content: [
    {
      infos: [
        {
          title: "",
          content: [{
            subtitle: "",
            text: ``
          }]
        }
      ]
    }
  ]
}

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

const infoDocuments: Information[] = [
  //Certificate of inheritance
  {
    localeId: 1,
    categoryId: 2,
    title: "Certificate of inheritance",
    description: "The certificate of inheritance (obtained in a procedure equivalent to the English or American grant of probate or Scottish confirmation) states who is entitled to inherit a deceased person's assets. This document is usually required to deal with assets in the deceased's estate, for example, to withdraw money from the deceased's bank account.",
    content: [
      {
        infos: [
          {
            title: "Who can apply for a certificate of inheritance",
            content: [
              {
                text: `If the deceased did not make a will or a contract of succession, the statutory heirs may apply for a certificate of inheritance; these are, depending on the case, the deceased's wife, husband, registered partner, descendants (i.e. children and their descendants) or, if applicable, parents and their children (i.e. the deceased's brothers and sisters).

If there is a will or a contract of succession, the certificate of inheritance can only be applied for after the official notice of the will or the contract is given by the competent authority.`
              },
            ]
          },
          {
            title: "Requirements",
            content: [
              {
                text: `In order to obtain a certificate of inheritance, you must, among other things:

    submit a copy of the death certificate (you can obtain this from the register office),

    prove that you are entitled to inherit (e.g. by providing an extract from the civil status register showing your family relationship or civil relationship with the deceased , or a copy of the will or contract of succession),

    prove that you have not renounced your inheritance (i.e. by submitting the declaration of acceptance by all heirs or

    proof that the period in which it would have been possible to renounce the inheritance has expired)`
              },
            ]
          },
          {
            title: "Cost",
            content: [
              {
                text: `The cost of issuing a certificate of inheritance varies from case to case; it depends on what enquiries are needed and the time the authority had to spend on them in order to be able to issue you with the certificate of inheritance. The costs can amount to several hundred or even a few thousand francs. In addition, there are the costs that the civil register office charges for issuing the documents and obtaining information in Switzerland and abroad.`
              },
            ]
          },
        ]
      }
    ]
  },
  //Civil status certificates
  {
    localeId: 1,
    categoryId: 2,
    title: "Civil status certificates",
    description: "The authorities will supply various kinds of document that certify a family relationship, for example, or your date and place of birth. This page gives a list of the civil status certificates that you can order, and where to get them from.",
    content: [
      {
        infos: [
          {
            title: "Where and how to order",
            content: [
              {
                text: "You can request civil status certificates directly online, or by going in person to the register office that is responsible for you. The individual office in question varies depending on the type of document you need:",
              },
              {
                subtitle: "Birth certificate Confirmation of time of birth",
                links: [
                  {
                    text: "Register office at your place of birth",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?1"
                  },
                ],
              },
              {
                subtitle: "Certificate of origin (for Swiss citizens), Individual civil status certificate (for Swiss citizens)",
                links: [
                  {
                    text: "Register office at your place of origin",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
              {
                subtitle: "Confirmation of registered civil status (for foreign nationals)",
                links: [
                  {
                    text: "Register office at your (previous) place of (permanent) residence",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
              {
                subtitle: "Family certificate for Swiss nationals (formerly family record book)",
                links: [
                  {
                    text: `If you are a Swiss citizen: register office at your place of origin. `,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                  {
                    text: `If you are a foreign national: register office at your (previous) place of residence`,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  }
                ],
              },
              {
                subtitle: "Marriage certificate",
                links: [
                  {
                    text: "Register office where your marriage took place",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
              {
                subtitle: "Certificate of registered partnership",
                links: [
                  {
                    text: "Register office where your partnership was registered",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
              {
                subtitle: "Death certificate",
                links: [
                  {
                    text: "Register office at your place of death",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
            ]
          },
          {
            title: "Costs",
            content: [
              {
                text: "In Switzerland it costs CHF 30 (plus postage) to obtain a civil status certificate. Family certificates, other family records, certificates of registered partnership and certificates of registered civil status cost more."
              },
            ]
          },
          {
            title: "Who may order a civil status certificate and that conditions apply?.",
            content: [
              {
                text: `- You may order all civil status certificates concerning you personally.
- Family record books may be updated, but may no longer be ordered.
- You may request a civil status certificate for someone else, providing you can present power of attorney from the person concerned and a copy of their ID.`
              }]
          },

        ]
      }
    ]
  },
  //Criminal records extract
  {
    localeId: 1,
    categoryId: 2,
    title: "Criminal records extract",
    description: "A prospective employer may want to ensure that you do not have a criminal past. An extract from the Register of Criminal Records will provide information on any convictions that you may have.",
    content: [
      {
        infos: [
          {
            title: "Standard private extract: what is it?",
            content: [
              {
                text: `A standard private extract from the Swiss Register of Criminal Records reveals whether a person has been convicted of a felony or misdemeanour over a certain period of time (the disclosure period); the length of the disclosure period for each conviction depends on the sanction imposed.

It can be requested by a prospective employer, if you are applying for a firearms licence or if you want to become a Swiss citizen, for example.`
              }
            ]
          },
          {
            title: "Ordering the extract",
            content: [
              {
                links: [
                  {
                    text: "You can order a standard private extract at a post office or on the Internet via the Federal Office of Justice website.",
                    url: "https://www.e-service.admin.ch/crex/cms/content/strafregister/uebersicht_fr"
                  }
                ]
              }
            ]
          },
          {
            title: "Price of the extract?",
            content: [
              {
                text: `Each extract costs CHF 17.

If your extract is intended for a foreign authority or embassy (for a visa application for example), you will have to pay an additional 20 francs to have the certificate legalised.

Here you will find information on the procedure for legalising the extract.`
              }
            ]
          },
          {
            title: "Special private extract",
            content: [
              {
                text: `There is also a special private extract which only lists convictions that currently place you under a ban

    on working in a particular profession or carrying out a particular activity,

    on contacting a particular person or persons or

    on entering a particular place or area

in order to protect minors or other especially vulnerable persons.

You may only be asked to provide this extract if you are planning to be involved in an organised activity (e.g. as a sports coach or teacher) involving regular contact with minors or other especially vulnerable persons.

The procedure for ordering a special private extract is the same as for a standard private extract. However, the organisation or employer that requires your services must first complete and send you signed confirmation that the activity requires a special private extract.`
              }
            ]
          }
        ]
      }
    ]
  },
  //Driving licence
  {
    localeId: 1,
    categoryId: 2,
    title: "Driving licence///Exchanging your driving licence",
    description: "A Swiss driving licence does not have an expiry date, however if your driving licence is lost or stolen, you need to apply for a new one. This web page provides instructions for getting a credit-card format driving licence and changing information on your existing licence. ",
    content: [
      {
        infos: [
          {
            title: "When do you need a new driving licence?",
            content: [
              {
                subtitle: "Loss or theft of your driving licence",
                text: `If your driving licence has been lost or stolen, you need to get a new one.`
              },
              {
                subtitle: "Information on your licence has changed ",
                text: `If there is a change of information on your licence, such as a name change or a change in licence category, you need to get a new licence.`
              },
              {
                subtitle: "Drivers who still have a blue paper licence",
                text: `Paper driving licences lost their validity on 1 November 2024. Drivers who still have a blue paper licence need to exchange it for a credit-card format licence.`
              },
              {
                subtitle: "Driving abroad",
                text: `To drive in some countries, you need an international driving licence.`
              },

            ]
          },
          {
            title: "What you need to do if yout licence is lost or stolen?",
            content: [
              {
                text: `If your Swiss driving licence has been stolen, you need to report the theft at a police station (website available in German, French and Italian).

You should then contact the driver and vehicle licensing office (website available in German, French and Italian), which will issue you a temporary licence authorising you to drive until you receive your new licence.

Once a new licence is issued, the old one is no longer valid. If you find your lost or stolen licence, please send it to the driver and vehicle licensing office with an explanatory note.`
              }
            ]
          },
          {
            title: "What you need to do to get a new licence?",
            content: [
              {
                text: `You need to contact your canton’s driver and vehicle licensing office (website available in German, French and Italian).

The new licence will be sent to you by post within one to two weeks.

The cost of a new licence varies from canton to canton. A duplicate or an updated licence costs around CHF 30. Exchanging a foreign licence for a Swiss one costs more than CHF 100.`
              }
            ]
          },
          {
            title: "Driving with a foreign licence?",
            content: [
              {
                text: `If you live in Switzerland, you may drive with a foreign licence for 12 months. After that, you are required to have a Swiss licence.

You need to exchange your foreign licence for a Swiss licence; this is still possible after the 12-month grace period, but you may have to pay a fine.`
              },
              {
                subtitle: "Exchanging a foreign licence for a Swiss one",
                text: `The procedures vary depending on which country issued the foreign licence. In any case, you must produce the original driving licence and take an eye test.

If you have a licence from an EU or EEA country (Iceland, Liechtenstein, Norway), you will be issued a Swiss licence without having to take a driving test. Your foreign licence will be returned to the issuing authority.

For a licence from another country, you need to take:

    a driving test

    an additional theory exam (for professional drivers)

to certify your fitness to drive.

After handing over your foreign licence and taking the necessary texts, you will be issued a Swiss driving licence on a three-year trial basis or a licence with no expiry date. The document is sent by post within a period of time that varies from canton to canton.`
              },
            ]
          },
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 2,
    title: "Driving licence///International driving licence",
    description: "If you plan to drive in a foreign country, you may need an international driving licence. Find out if you need one, and how to order one in Switzerland.  ",
    content: [
      {
        infos: [
          {
            title: "What is an international driving licence?",
            content: [
              {
                text: `The international driving licence is an international version of your Swiss driving licence, allowing you to drive in a foreign country. It is only valid when accompanied by your Swiss licence. You need to have both valid documents with you when you drive abroad.`
              },
            ]
          },
          {
            title: "Which countries require an international driving livence?",
            content: [
              {
                subtitle: "People with a Swiss driving licence",
                text: `An international driving licence is recommended when driving in countries outside the EU and EFTA. Several countries and many car-hire services require you to have an international driving licence.

Before travelling abroad, ask your travel agent, the foreign representation of your destination country or a road transport association which driving documents are required.

European countries accept the Swiss driving licence.`
              },
              {
                subtitle: "People with a foreign driving licence",
                text: "If you live abroad, you need an international licence to drive in Switzerland only if your driving licence does not mention the authorised vehicle categories in Latin characters. If you live in Switzerland, you may have to exchange your foreign licence for a Swiss licence.",
              }
            ]
          },
          {
            title: "Ordering an international licence?",
            content: [
              {
                text: `You can order your international driving licence at your canton’s road traffic office (website available in German, French and Italian).

In some cantons, you can also contact the Automobile Club of Switzerland or the Touring Club of Switzerland. These associations will also provide you with information on the documents required.`
              }
            ]
          },
          {
            title: "Validity and price",
            content: [
              {
                text: `The international driving licence is valid for three years, but not beyond the expiry date of your Swiss driving licence.

You cannot renew your international licence, but you can order a new one if it expires.

The price of an international licence varies from canton to canton. It is around CHF 30.`
              },
            ]
          },
        ]
      }
    ]
  },
  //Extract from the debt enforcement register
  {
    localeId: 1,
    categoryId: 2,
    title: "Extract from the debt enforcement register",
    description: "In order to prove that you pay your bills and have no outstanding debts, you regularly have to provide an extract from the debt enforcement register.",
    content: [
      {
        infos: [
          {
            title: "What is the extract and when you need one?",
            content: [
              {
                text: `An extract from the debt enforcement register states whether any debt enforcement proceedings have been opened against you in the past 5 years.

If you want to rent an apartment, for example, your prospective landlord will often ask you for an extract in order to find out whether you are likely to pay your bills. The same applies if you wish to take out a loan from the bank or buy a car on hire purchase. You will also be asked to provide an extract if you apply for Swiss citizenship.`
              },
            ]
          },
          {
            title: "Which countries require an international driving livence?",
            content: [
              {
                subtitle: "People with a Swiss driving licence",
                text: `An international driving licence is recommended when driving in countries outside the EU and EFTA. Several countries and many car-hire services require you to have an international driving licence.

Before travelling abroad, ask your travel agent, the foreign representation of your destination country or a road transport association which driving documents are required.

European countries accept the Swiss driving licence.`
              },
              {
                subtitle: "People with a foreign driving licence",
                text: "If you live abroad, you need an international licence to drive in Switzerland only if your driving licence does not mention the authorised vehicle categories in Latin characters. If you live in Switzerland, you may have to exchange your foreign licence for a Swiss licence.",
              }
            ]
          },
          {
            title: "Who can request an extract?",
            content: [
              {
                text: `You can request an extract in connection with debt enforcement proceedings that affect you or another person.

    In order to request your extract, you will need to present a copy of an identity document.

    To obtain an extract from the register in relation to another person, you will need signed authorisation from that person and a copy of their ID.

    You can also ask for an extract from the register relating to another person without having to inform them. However, you must prove that you have a particular interest in obtaining this information. For example, you can obtain an extract for a person to whom you intend to rent an apartment or lend money. You will need to enclose documentary proof of your interest (e.g. a written offer of the lease or loan) with your request, together with a copy of your ID.`
              }
            ]
          },
          {
            title: "Where can you request the extract?",
            content: [
              {
                text: `You have two options for requesting the extract:

    Complete the online form and send it by post or e-mail to the debt enforcement office in your canton of residence;

    or request the extract in person at the counter of the debt enforcement office in your canton of residence.`
              },
            ]
          },
          {
            title: "Deleting an entry from the register",
            content: [
              {
                text: `The entry in the register is automatically deleted 5 years after the debt enforcement proceedings are concluded. Before this deadline:

    you can go directly to your creditors and ask them to abandon the enforcement proceedings and have the entry removed from the register, for example, if you have come to an arrangement with them in the meantime or paid off your debt;

    the debt enforcement office will amend incorrect entries directly or at your request;

    under certain conditions, you can ask the debt enforcement office not to include an enforced debt in the extract from the register. The relevant office will inform you of the conditions to be met and the costs involved.`
              },
            ]
          },
          {
            title: "Costs",
            content: [
              {
                text: `An extract from the debt enforcement register costs CHF 17 plus any postage costs.`
              },
            ]
          },
        ]
      }
    ]
  },
  //Hunting licence
  {
    localeId: 1,
    categoryId: 2,
    title: "Hunting training and licence",
    description: "If you want to hunt in Switzerland, you need hunting training. Depending on the canton, you may also need to obtain a hunting licence or become a member of a hunting association.",
    content: [
      {
        infos: [
          {
            title: "Do i need specific traning to hunt in Switzerland?",
            content: [
              {
                text: `Before you are allowed to hunt, you must pass an examination. The courses are regulated at the cantonal level and last up to three years. Some cantons recognise the qualifications of other cantons.

Further information on hunting training and examinations can be found at the relevant cantonal offices (many cantons have a hunting inspectorate):`
              },
            ]
          },
          {
            title: "Hunting licences or hunting estates?",
            content: [
              {
                text: `If you have passed the hunting test, you can obtain a hunting licence in most cantons. In other cantons, you must be a member or guest of a hunting association to be allowed to hunt on one of their hunting estates. Please check with the canton in which you wish to hunt.`
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
            ]
          },
          {
            title: "Can i hunt in the canton of Geneva?",
            content: [
              {
                text: `Hunting is not permitted in the canton of Geneva. State gamekeepers regulate game populations there.`
              }
            ]
          },
          {
            title: "How well do i have to shoot to go hunting?",
            content: [
              {
                text: `You must regularly prove that you can shoot accurately. Otherwise, you will not be allowed to hunt. Most cantons require you to go shooting annually at a recognised hunting shooting range and demonstrate your accuracy.

You can find more information on compulsory shooting and recognised shooting ranges from the relevant cantonal office.`
              },
            ]
          },
          {
            title: "When does the hunting season start and when are the closed seasons?",
            content: [
              {
                text: `The hunting season does not last the entire year. There are closed seasons during which you are not allowed to hunt. The Confederation sets the closed seasons for each animal species. The cantons can shorten the hunting season or restrict the list of species you are allowed to hunt. Check with the relevant cantonal authority to find out when you are allowed to hunt which animal.`
              },
            ]
          },
          {
            title: "Can i hunt with huting dogs?",
            content: [
              {
                text: `Anyone interested in using hunting dogs must take training courses and pass tests. Contact the relevant cantonal authority for more information about the requirements for using hunting dogs.`
              },
            ]
          },
        ]
      }
    ]
  },
  //Living wills
  {
    localeId: 1,
    categoryId: 2,
    title: "Living wills",
    description: "With a living will you determine the medical treatment that you want at the end of your life. Special forms are available. We explain the process, and where to find templates",
    content: [
      {
        infos: [
          {
            title: "What is a living will?",
            content: [
              {
                text: `With a living will (sometimes referred to as an advance care directive or a patient decree), you determine what medical treatment you want in the final stage of an illness or following a serious accident. You also determine what treatment you do not wish to have.

It ensures that as the patient your wishes will continue to be followed at the end of your life if you are no longer able to express them yourself.

You do not have to make a living will. Living wills are personal and free of charge. You can write one and change it at any time.`
              },
            ]
          },
          {
            title: "Process and forms",
            content: [
              {
                text: `There are two types of living will. One concentrates on general points, while the other determines what medical intervention is permitted in different situations. This is what you need to do:

1. Download a template. Forms and specimens are available from many organisations, such as the Swiss Medical Association FMH (website available in German, French and Italian), which offers both short and full versions.
2. Complete your chosen form, then date and sign it.
3. Give your living will to a close friend or family member, or to your family doctor. You can also tell them where your treatment team can find the document if they need it.
4. Keep a note in your wallet about your living will and where it is kept.

Do not hesitate to get advice on completing the form. The doctor treating you will be able to help, for example. If decisions have to be made, a clear directive setting out your wishes carries greater weight, and raises fewer questions about what those wishes are.

Review your living will regularly and amend it if necessary. The FMH recommends checking it every couple of years. Do not forget to date and sign the new version.
`
              }
            ]
          },
          {
            title: "What conditions do I have to fulfil?",
            content: [
              {
                text: `You do not need to be in the best of health, but you do have to have legal capacity, i.e. be able to decide for yourself.

The living will must reflect your actual wishes. It may not have been drawn up under pressure.

Doctors are bound only by living wills that have been dated and signed by hand.`
              }
            ]
          }
        ]
      }
    ]
  },
  //Passport and identity card
  {
    localeId: 1,
    categoryId: 2,
    title: "Passport and identity card///Applying for a passport or an identity card",
    description: "Identity documents can be ordered online or at your cantonal passport office. You can expect to receive them within about 10 working days - up to 30 working days if you live abroad. In exceptional and urgent cases, you can apply for a temporary passport.",
    content: [
      {
        infos: [
          {
            title: "Where to a apply for an identity document",
            content: [
              {
                subtitle: "Online",
                text: `You can apply for a passport and/or identity card online. The following link will walk you through the process:`,
                links: [
                  {
                    text: "Applying for a passport and/or identity card online.",
                    url: "https://www.ch-edoc-passantrag.admin.ch/#/antraggesuch"
                  }
                ]
              },
              {
                subtitle: "At your cantonal passport office",
                text: `You should receive the documents within 10 working days.`,
                links: [
                  {
                    text: `You can order a passport and/or identity card in person at your cantonal passport office or by contacting the office by phone.`,
                    url: "https://www.ch-edoc-passantrag.admin.ch/#/antraggesuch"
                  },
                  {
                    text: `If you only need an identity card, it is possible in some cantons, to order one at your commune of residence.`,
                    url: "https://www.fedpol.admin.ch/fedpol/en/home/pass---identitaetskarte/pass/passstellen.html"
                  },
                ]
              },
              {
                subtitle: "At a Swiss embassy or consulate",
                text: `Swiss citizens living abroad can either apply for a passport or identity card online or call the Swiss consulate or embassy in the country where they are staying
You should receive the documents within 30 working days.`,
                links: [
                  {
                    text: `Apply for a passport or identity card online`,
                    url: "https://www.ch-edoc-passantrag.admin.ch/#/antraggesuch"
                  },
                  {
                    text: `Swiss consulate or embassy`,
                    url: "https://www.eda.admin.ch/eda/en/fdfa/representations-and-travel-advice/schweizer-vertretungen-im-ausland.html"
                  },
                ]
              },
            ]
          },
          {
            title: "Identify documents for your children",
            content: [
              {
                text: `From the day your children are born, you can apply for a passport and/or identity card for them.

You cannot, however, simply have their names added to your own identity document.

Please note: where the parents of a child are not married, a note may be added to one of the parents’ passports to say he or she has parental authority.`
              },
              {
                subtitle: "Please note",
                text: `- You can only apply for an identity document for your child if you have parental authority.
- If both parents have parental authority, the signature of one of the parents is sufficient to apply for an identity document.
- However, if joint parental authority is difficult to prove (e.g. if the parents live at two different addresses), you will also have to provide - the consent of the other parent.
- Children aged seven and older are required to sign their identity document.
- Children aged 12 and older are required to provide digital fingerprints for their biometric passport.
-Once your children turn 18, they have to apply for their own identity documents.`
              },
            ]
          },
          {
            title: "Biometric data and photographs",
            content: [
              {
                text: `Applicants for identity documents must provide biometric data (data stored on a microchip including a facial photograph and signature – and fingerprints for passports – which are protected from abuse) to the cantonal authorities or a Swiss representation abroad.

The photograph is generally taken when the biometric data is recorded. However, some cantons allow you to use your own photograph. In such cases the photograph must meet specific requirements: contact your cantonal authority for full details.`
              }
            ]
          },
          {
            title: "Validity",
            content: [
              {
                text: `Passports and identity cards are valid for 10 years for adults and for 5 years for children and adolescents under the age of 18.`
              }
            ]
          },
          {
            title: "Expired identity and travel documents",
            content: [
              {
                subtitle: "Renewing your passport or identity card",
                text: `Once your passport or identity card has expired, you have to apply for new documents.`
              },
              {
                subtitle: "Travelling with valid or expired documents",
                text: `As a general rule, you must carry your valid identity documents with you when you travel. Find out in advance about entry conditions at the representation of your destination country in Switzerland or at the Swiss representation abroad.

Some countries require you to have a passport that is valid for at least six months beyond the date on which you plan to leave the USA.

Other countries allow you to travel for a limited period of time even after your passport or identity card has expired.`,
                links: [
                  {
                    text: "Some countries, including the USA, China and Australia, require you to apply for a visa before you travel there",
                    url: "https://www.eda.admin.ch/eda/de/home/vertretungen-und-reisehinweise/laenderunabhaengigereiseinformationen/visum-einreise.html"
                  }
                ]
              },
              {
                subtitle: "Temporary passport",
                text: `In cases of genuine urgency, you can apply for a temporary passport at your cantonal passport office or at a Swiss embassy or consulate in the country where you are located .

Please note:

Unlike a normal passport, a temporary passport is not biometric and does not contain a microchip with your fingerprints and photograph. It may therefore not be accepted in all countries: foreign representations in Switzerland provide information about the entry requirements in their countries

A temporary passport is valid for a maximum of 12 months.`
              },
            ]
          },

          {
            title: "Swiss passport for foreign nationals",
            content: [
              {
                text: `Foreign nationals interested in obtaining a Swiss passport need to follow the steps on the page on naturalisation.`,
                links: [
                  {
                    url: "https://www.eda.admin.ch/eda/de/home/vertretungen-und-reisehinweise/laenderunabhaengigereiseinformationen/visum-einreise.html"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 2,
    title: "Passport and identity card///Lost or stolen passport or identity card",
    description: "If you lose your ID documents or if they are stolen, you must file a police report to obtain a new passport or ID card.",
    content: [
      {
        infos: [
          {
            title: "Filing a police report",
            content: [
              {
                subtitle: "In Switzerland",
                text: `If your passport is lost or stolen, you need to file a report at the police station. By filing a report, your passport or identity card will automatically be cancelled. Even if you find your passport or identity card, you will no longer be able to use them, and you are required to hand them over to the passport office in your canton.`,
                links: [
                  {
                    text: "Police station",
                    url: "https://www.suisse-epolice.ch/home"
                  },
                  {
                    text: "Passport office in your canton",
                    url: "https://www.fedpol.admin.ch/fedpol/en/home/pass---identitaetskarte/pass/passstellen.html"
                  },
                ]
              },
              {
                subtitle: "Abroad",
                text: `If your Swiss identity documents are lost or stolen while you are abroad, you need to file a report with the local police and notify the Swiss embassy or consulate in the country where you are staying. The embassy or consulate will, in turn, notify the police in Switzerland.

You can then order new identity documents or obtain an emergency passport if you need it right away, for example to return to Switzerland.`,
                links: [
                  {
                    text: "Swiss embassy or consulate",
                    url: "https://www.eda.admin.ch/eda/en/fdfa/representations-and-travel-advice/schweizer-vertretungen-im-ausland.html"
                  },
                ]
              }
            ]
          },
          {
            title: "Obtaining a new passport or identity card",
            content: [
              {
                subtitle: "In Switzerland",
                text: `After you have filed a police report, you can choose from one of the options listed on the Ordering a passport or identity card page to obtain a new passport or identity card.`
              },
              {
                subtitle: "Abroad",
                text: `After you have filed a police report, you can apply for a new passport or identity card directly at the Swiss consulate or embassy where you filed the report, or order one online:

Keep in mind that you may need to wait up to 30 working days before receiving the new documents.

In cases of urgency - for example, if you cannot otherwise return to Switzerland - you can request a temporary passport.`
              },
            ]
          },
          {
            title: "Obtaining a temporary passport",
            content: [
              {
                text: `In cases of urgency, where justified, you can apply for a temporary passport at your cantonal passport office or at a Swiss embassy or consulate in the country where you are located.`
              }
            ]
          }
        ]
      }
    ]
  },
  //Permits for living in Switzerland
  {
    localeId: 1,
    categoryId: 2,
    title: "Permits for living in Switzerland",
    description: "All foreign nationals who remain in Switzerland for more than three months must obtain a permit. Guide to obtaining a permit.",
    content: [
      {
        infos: [
          {
            title: "Overview of permits",
            content: [
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
            ]
          },
          {
            title: "How do I obtain a permit?",
            content: [
              {
                text: `If you need a permit to live in Switzerland, please contact the cantonal migration or employment authorities of your commune of residence.

The requirements you need to meet depend on your nationality and the duration and purpose of your stay. ch.ch gives you more information on its pages Working in Switzerland as a foreigner and Staying in Switzerland without working.`
              }
            ]
          },
          {
            title: "How do I obtain a permit?",
            content: [
              {
                text: `If you need a permit to live in Switzerland, please contact the cantonal migration or employment authorities of your commune of residence.

The requirements you need to meet depend on your nationality and the duration and purpose of your stay. ch.ch gives you more information on its pages Working in Switzerland as a foreigner and Staying in Switzerland without working.`
              }
            ]
          },
          {
            title: "Submit your application to your commune of residence. If you live in the canton of Geneva, please contact the canton.",
            content: [
              {
                text: `Submit your application along with the following documents:

- your current permit
- a valid identity card or passport (if you are not an EU or EFTA citizen, the ID card or passport must be valid for at least three months after the expiry of the permit)
- notice of expiry of the permit if you have received one from the cantonal migration authority.

You can apply to renew your permit no earlier than three months and no later than two weeks before it expires.`
              }
            ]
          },
          {
            title: "My permit has been lost or stolen – what should I do?",
            content: [
              {
                text: `Report the loss of your permit to the police; they will issue you with a loss notice.

You can find a police station here.

Then go to the residents' register office in your commune (or to the cantonal migration authority) with your passport, a passport photo and the loss notice. You must pay for the duplicate or new permit. The costs vary.

If a permit reported as lost is subsequently found, you must cancel it at the residents' register office in your place of residence.`
              }
            ]
          },
          {
            title: "Staying in Switzerland after separation, divorce or your partner's death",
            content: [
              {
                text: `If you have obtained a permit to live in Switzerland under family reunification but you divorce the person who gave you the right of residence or this person dies, you must notify the cantonal migration authority.

If you have a residence permit (B permit), you may be permitted to stay subject to certain conditions:`
              },
              {
                subtitle: "EU/EFTA citizens",
                text: `You can apply for a permit in your own name if you are working or have sufficient resources to ensure your financial independence.`
              },
              {
                subtitle: "Third-country citizens",
                text: `You can have your permission to stay extended if

- you have been married for at least three years and have lived in the same household with your spouse (Swiss or foreign national),
- you are well integrated in Switzerland (respect for law and order, good oral language skills, in work or pursuing education or training), or
- you need to stay in Switzerland for important personal reasons (e.g. social reintegration in the country of origin is seriously compromised, domestic violence).`
              },
            ]
          },
        ]
      }
    ]
  },
  //Requesting an OASI card
  {
    localeId: 1,
    categoryId: 2,
    title: "Requesting an OASI card",
    description: "If you do not have an OASI card or if you have lost yours, you can request one by filling out the online form and sending it to the competent authority.",
    content: [
      {
        infos: [
          {
            title: "If you are an employee",
            content: [
              {
                text: `If you have not yet received your OASI card or if you have lost it, you can fill out the application form available on the OASI/DI website and return it to your employer.

You will then be sent a (new) OASI card.`,
                links: [
                  {
                    text: "The application form",
                    url: "https://www.ahv-iv.ch/en/Forms/Forms/General-administration-forms"
                  }
                ]
              }
            ]
          },
          {
            title: "If you are self-employed or not working",
            content: [
              {
                text: `If you have not yet received your OASI card or if you have lost it, you can fill out the application form available on the OASI/DI website and return it to your professional fund association or your cantonal compensation office to which you make your contributions:

You will then be sent a (new) OASI card.`,
                links: [
                  {
                    text: "The application form",
                    url: "https://www.ahv-iv.ch/en/Forms/Forms/General-administration-forms"
                  },
                  {
                    text: "Professional fund association",
                    url: "https://www.ahv-iv.ch/en/Contacts/Union-compensation-offices"
                  },
                  {
                    text: "Cantonal compensation office",
                    url: "https://www.ahv-iv.ch/en/Contacts/Cantonal-compensation-offices"
                  },
                ]
              }
            ]
          },
          {
            title: "If you live abroad",
            content: [
              {
                text: `If you live abroad and do not work in Switzerland and have never received or have lost your OASI card, you should contact the Swiss Compensation Office, which can issue with you with one or provide a replacement.

If you live abroad but work in Switzerland, please refer to the sections ‹If you are an employee› or ‹If you are self-employed or not working› to find out how to obtain a (new) OASI card.`,
                links: [
                  {
                    text: "Swiss Compensation Office",
                    url: "https://www.ahv-iv.ch/en/Contacts/Swiss-compensation-Office-SCO"
                  }
                ]

              },
            ]
          }
        ]
      }
    ]
  },
  //Salary certificate
  {
    localeId: 1,
    categoryId: 2,
    title: "Salary certificate",
    description: "Employees do not need to ask for a salary certificate. They get this important certificate automatically so that they can file their tax return.",
    content: [
      {
        infos: [
          {
            title: "What is a salary certificate?",
            content: [
              {
                text: `The Swiss salary certificate is a form given to an employee that certifies exactly what he or she has been paid by an employer. The certificate also itemises all contributions, benefits and allowances paid.

Your employer is obliged to provide you with a salary certificate each year and usually sends it to you before the end of January. If you had more than one job at any time or if you changed employers during the year in question, you will receive a certificate for each job.

The salary certificate is the most important document you need for completing your tax return. In several cantons, employers have to send a copy directly to the tax authorities. As an employee, you only need to attach a salary certificate to your tax return if you work for an employer outside your canton or if required by the competent tax authority.`,
              }
            ]
          },
          {
            title: "Is there a problem with your certificate?",
            content: [
              {
                text: `If your employer did not send you a salary certificate, if the document you received is incorrect, or if you have lost it, you must request a new certificate directly from the employer.`,
              }
            ]
          },
          {
            title: "How do I draw up a salary certificate?",
            content: [
              {
                text: `If you are an employer and do not know what to do, you can follow the instructions and use the forms from the Federal Tax Administration to draw up a salary certificate. The templates are available in various sizes.`,
                links: [
                  {
                    text: "Salary certificate",
                    url: "https://www.estv.admin.ch/estv/en/home/federal-direct-tax/salary-certificate-pension-statement.html"
                  }
                ]

              },
            ]
          }
        ]
      }
    ]
  },
  //Lost vehicle registration document
  {
    localeId: 1,
    categoryId: 2,
    title: "Lost vehicle registration document",
    description: "If you have lost or need to change your vehicle registration document, contact the driver and vehicle licensing office.",
    content: [
      {
        infos: [
          {
            title: "Lost vehicle registration document?",
            content: [
              {
                text: `If you have lost your vehicle registration document or it has been stolen, you can apply for a replacement document. Only the owner of the vehicle can apply for a replacement document.`,
              },
              {
                subtitle: "Requesting a replacement document",
                text: `You can order a replacement document from the driver and vehicle licensing office in your canton`,
                links: [
                  {
                    url: "https://asa.ch/strassenverkehrsaemter/adressen/"
                  }
                ]
              },
              {
                subtitle: "Returning a replacement document",
                text: `If you find the original vehicle registration document, bring or send the replacement document back to the driver and vehicle licensing office.`,
              },
              {
                subtitle: "Fees",
                text: `A new vehicle registration document costs CHF 25 to CHF 50, depending on the canton. For more information, contact the driver and vehicle licensing office in your canton (website available in German, French and Italian).`,
              },
            ]
          },
          {
            title: "Changes to a vehicle registration document",
            content: [
              {
                text: `Notify the driver and vehicle licensing office within 14 days if you have a new address or your name has changed. Your vehicle registration document will be changed or replaced.`,
              }
            ]
          }
        ]
      }
    ]
  },
]

//Family and partnership
const infoFamily: Information[] = [
  //Adoption
  {
    localeId: 1,
    categoryId: 3,
    title: "Adoption///Adoption",
    description: "In Switzerland you can adopt a child as either a couple or a single parent. The adoption process can take several years. The welfare of the child is always paramount.",
    content: [
      {
        infos: [
          {
            title: "Who can I contact?",
            content: [
              {
                text: `If you would like to adopt a child in Switzerland you should contact the central adoption authority of the canton where you live. It will provide information on exactly how to proceed.

If you would like to adopt a child from another country, we advise you to contact a specialist, federal government-approved agency. It will help you with the complex process in Switzerland and the country of adoption.`,
                links: [
                  {
                    text: "Addresses of central cantonal adoption authorities and federal government-approved agencies",
                    url: "https://www.bj.admin.ch/bj/en/home/gesellschaft/adoption.html"
                  }
                ]
              },
            ]
          },
          {
            title: "Basic requirements for all adoptions",
            content: [
              {
                text: `The competent cantonal authority will check that you fulfil the basic requirements to adopt, looking in particular at the following points:

1. The age difference between you and the child you want to adopt must be a minimum of 16 and a maximum of 45 years.
2. You must be able to provide proper, lasting care for the child and to ensure that they receive an appropriate education. To check this, a specialist qualified in social work or psychology will meet with you several times to provide and gather information, and to talk to you about the different aspects of adoption.
3. Adoption must be in the interests of the child. The interests of your other children must also be considered.
4. If the child is capable of doing so, they must consent to the adoption.
5. You must have been responsible for the care and upbringing of the child for at least one year.
6. If the child's biological parents are known and still alive, they must consent to the adoption unless they have been absent for a long period and their whereabouts are unknown, or they permanently lack the legal capacity to do so. The biological parents may not give their consent before the child is six weeks old. They may still revoke their consent in the six weeks after that.`
              },
            ]
          },
          {
            title: "How can we adopt a child as a couple?",
            content: [
              {
                text: `If you want to adopt a child as a couple, you must fulfil the basic requirements that apply to all adoptions. You must also satisfy the following criteria:

1. you are married.
2. you have been living together for at least three years.
3. you are both at least 28 years old.
4. you are registered as living in Switzerland.`
              },
            ]
          },
          {
            title: "How can I adopt a child on my own?",
            content: [
              {
                text: `If you want to adopt a child on your own, you must fulfil the basic requirements that apply to all adoptions. You must also satisfy the following criteria:

1. you are at least 28 years old
2. you are single.

If you are married or in a registered partnership, you can adopt a child by yourself if:

- you have been officially separated from your spouse for at least three years
- your partner permanently lacks legal capacity, or
- your partner has been absent without a fixed abode for at least two years.`
              },
            ]
          },
          {
            title: "How can I adopt my partner's children?",
            content: [
              {
                text: `You can adopt your partner’s children if you fulfil the basic requirements that apply to all adoptions, and you and your partner are also:

- married
- living in a registered partnership or
- actually living in the same household.

In addition, you and your partner must have been living together for at least three years.`
              },
            ]
          },
          {
            title: "How do I adopt someone aged 18 or over?",
            content: [
              {
                text: `You can adopt someone who is an adult if:

1. they lived with you for at least a year when they were still a minor;
2. they are in need of constant care and lived with and were cared for by you for at least a year (even if they were already of age during this time), or
3. there are other important reasons for the adoption and the person you wish to adopt has lived with you for at least a year.

The same regulations as apply to the adoption of minors also apply to the adoption of adults, apart from the need for parental consent.`
              },
            ]
          },
          {
            title: "Adoption leave",
            content: [
              {
                text: `Subject to certain conditions, you may be entitled to two weeks’ adoption leave. However, this does not apply if you have adopted your spouse’s or partner’s child.`
              },
            ]
          },
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 3,
    title: "Adoption///Adoption leave",
    description: "Under certain conditions, couples who adopt a child under the age of 4 may share two weeks of paid leave.",
    content: [
      {
        infos: [
          {
            title: "Who is entitled to adoption leave?",
            content: [
              {
                text: `If you are employed or self-employed, you are entitled to two weeks’ paid adoption leave if you meet the following conditions:

- You have been insured with OASI for the nine months preceding the child’s adoption;
- You have been employed for at least five months during this period;
- The child is under 4 years old.

If you are unemployed or unable to work when the child comes to live with you, you are not entitled to adoption allowance.

There is no paid leave for parents who adopt their spouse's or partner's child.`,
              },
            ]
          },
          {
            title: "Length of adoption leave and level of benefits",
            content: [
              {
                text: `Adoption leave must be taken within the year following the adoption of the child. It can be taken in blocks, weeks or individual days. You can choose which of you will take the two weeks’ leave. You can also share it between you, provided you do not take the days at the same time.

The adoption allowance corresponds to 80% of the average income from gainful employment obtained before the child comes to live with you, up to a maximum of CHF 220 per day. The allowance is not paid automatically. You must explicitly request it from the federal compensation office.`
              },
            ]
          },
          {
            title: "Unpaid leave",
            content: [
              {
                text: `There is no legal right to extend adoption leave. As an adoptive parent, you can only extend your leave if your employer agrees.

Please note:
Check your insurance coverage before requesting unpaid leave.`
              },
            ]
          }
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 3,
    title: "Adoption///Searching for biological parents, children or siblings",
    description: "You want to learn about your origins, or you are searching for a child you gave up for adoption. When and how this is possible, and which authorities you can contact for assistance.",
    content: [
      {
        infos: [
          {
            title: "Who to contact",
            content: [
              {
                text: `Every canton operates an information service that can help adopted children to find out more about their history.

Contact the information service of your canton of residence or, as a next step, the canton where the adoption took place (addresses at the bottom of the page; web page available in German, French and Italian).`,
              },
            ]
          },
          {
            title: "Finding your biological parents",
            content: [
              {
                text: `If you were adopted, you can request records from the cantonal information service about your biological parents and their direct descendants. You have the right to access your adoption records. However, you cannot request this information until you have reached the age of 18, except in cases of legitimate interest (e.g. when a hereditary disease is suspected).

The cantonal service will contact your biological parents and inform them of your request, provided they can be traced successfully (i.e. their identity appears in your adoption files). If this information is not available – for example, if you are a foundling – then they cannot be contacted.

If necessary, the cantonal service will also help you to arrange or facilitate a meeting with your biological parents, but they will not be obliged to meet you if they do not wish to do so, nor will they be obliged to provide you with further information.`
              },
            ]
          },
          {
            title: "Finding your biological siblings",
            content: [
              {
                text: `If you were adopted and want to find other children of your biological parents, or if one of your siblings was adopted and you want to find them, all three of the following conditions must be met:

- The birth siblings you are looking for are traceable. This is the case when the birth parents were Swiss citizens and their children were registered in the Swiss civil register.
- The siblings are aged 18 or over.
- They have agreed to disclose their identities.`
              },
            ]
          },
          {
            title: "Finding children given up for adoption",
            content: [
              {
                text: `You can request information from the cantonal service at any time regarding children you have given up for adoption. However, you only have the right to obtain this information if the adopted child agrees to disclose it to you. If the child is a minor, they must be capable of judgement and their adoptive parents must agree to disclose their identity.`
              },
            ]
          },
          {
            title: "Research costs",
            content: [
              {
                text: `Researching your origins involves administrative fees. These vary from canton to canton but generally amount to several hundred francs. The amount also depends on the type of request: simple file access, sending information, support from a member of the youth welfare office, etc.

You can contact the relevant cantonal offices (web page available in German, French and Italian) directly for information about the fees involved.`
              },
            ]
          },
        ]
      }
    ]
  },
  //Civil status certificates
  {
    localeId: 1,
    categoryId: 3,
    title: "Ordering civil status certificates",
    description: "The authorities will supply various kinds of document that certify a family relationship, for example, or your date and place of birth. This page gives a list of the civil status certificates that you can order, and where to get them from.",
    content: [
      {
        infos: [
          {
            title: "Where and how to order",
            content: [
              {
                text: "You can request civil status certificates directly online, or by going in person to the register office that is responsible for you. The individual office in question varies depending on the type of document you need:",
              },
              {
                subtitle: "Birth certificate Confirmation of time of birth",
                links: [
                  {
                    text: "Register office at your place of birth",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?1"
                  },
                ],
              },
              {
                subtitle: "Certificate of origin (for Swiss citizens), Individual civil status certificate (for Swiss citizens)",
                links: [
                  {
                    text: "Register office at your place of origin",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
              {
                subtitle: "Confirmation of registered civil status (for foreign nationals)",
                links: [
                  {
                    text: "Register office at your (previous) place of (permanent) residence",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
              {
                subtitle: "Family certificate for Swiss nationals (formerly family record book)",
                links: [
                  {
                    text: `If you are a Swiss citizen: register office at your place of origin. `,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                  {
                    text: `If you are a foreign national: register office at your (previous) place of residence`,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  }
                ],
              },
              {
                subtitle: "Marriage certificate",
                links: [
                  {
                    text: "Register office where your marriage took place",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
              {
                subtitle: "Certificate of registered partnership",
                links: [
                  {
                    text: "Register office where your partnership was registered",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
              {
                subtitle: "Death certificate",
                links: [
                  {
                    text: "Register office at your place of death",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0"
                  },
                ],
              },
            ]
          },
          {
            title: "Costs",
            content: [
              {
                text: "In Switzerland it costs CHF 30 (plus postage) to obtain a civil status certificate. Family certificates, other family records, certificates of registered partnership and certificates of registered civil status cost more."
              },
            ]
          },
          {
            title: "Who may order a civil status certificate and that conditions apply?.",
            content: [
              {
                text: `- You may order all civil status certificates concerning you personally.
- Family record books may be updated, but may no longer be ordered.
- You may request a civil status certificate for someone else, providing you can present power of attorney from the person concerned and a copy of their ID.`
              }]
          },

        ]
      }
    ]
  },
  //Family reunification
  {
    localeId: 1,
    categoryId: 3,
    title: "Family reunification",
    description: "If you live in Switzerland and your family lives abroad, you can find more information here about the requirements for bringing your children, spouse or parents to Switzerland. ",
    content: [
      {
        infos: [
          {
            title: "How to bring family members to Switzerland",
            content: [
              {
                text: `If you live in Switzerland and want to bring in foreign family members who live elsewhere, you can apply for family reunification.

Depending on your nationality and your residence permit, family reunification is a right or a possibility left to the discretion of the authorities. Unlike the C permit, the B permit does not necessarily give you the right to family reunification, which may, however, also be granted by the authorities. Asylum seekers are not eligible.`
              }
            ]
          },
          {
            title: "Who can join you in Switzerland?",
            content: [
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
            ]
          },
          {
            title: "Conditions to be met for family reunification in Switzerland",
            content: [
              {
                text: `Your marriage or a registered partnership must be recognised by Switzerland. If you are part of a bi-national couple, you cannot bring your partner with you if you are not officially married.

To avoid being denied family reunification, you must have large enough accommodation (according to Swiss standards) to house the whole family.

You must not depend on social assistance. If you are self-employed or unemployed, you must also provide proof of sufficient financial resources to support your family members.

Your family members arriving in Switzerland must have:

- a valid identity card or passport;
- a visa if necessary;
- a certificate from the country of origin proving your relationship;
- for dependants, a certificate from the authorities of the country of origin or provenance proving that they are dependent on you or were living with you;
- for your spouse, a certificate of enrolment in a language course if they are not able to make themselves understood in the national language spoken where you live (A1 level at least orally).`
              }
            ]
          },
          {
            title: "Time limits",
            content: [
              {
                text: `You generally have five years to apply for family reunification, but only one year if the application concerns children over 12 years old. This is so that they can integrate more rapidly into Swiss society.

If you have been provisionally admitted to Switzerland (F permit), the State Secretariat for Migration can examine your application for family reunification after 18 months.`
              }
            ]
          },
          {
            title: "Where to apply for family reunification",
            content: [
              {
                text: `You need to contact the following cantonal immigration authorities.`,
                links: [
                  {
                    text: "Cantonal immigration authorities",
                    url: "https://www.sem.admin.ch/sem/en/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html"
                  }
                ]
              }
            ]
          },
          {
            title: "Rights and duties for family reunification",
            content: [
              {
                text: `If the application for family reunification is accepted, your family members will obtain a residence permit (the type of permit generally depends on your status).

With the exception of your parents or grandparents, your family members have the right to work in Switzerland.

Only holders of a short-term residence permit (L permit) need to first apply for a work permit from the competent cantonal authority.

Children who join you in Switzerland are required to attend free compulsory schooling in Switzerland at least until the age of 16. The system varies from canton to canton. The Swiss Conference of Cantonal Ministers of Education provides an overview of the Swiss education system on its website.

Health insurance is compulsory and private in Switzerland. Don't forget to conclude a contract for each member of your family.

You will find further useful information on the page Moving to Switzerland.`
              }
            ]
          },
        ]
      }
    ]
  },
  //Death
  {
    localeId: 1,
    categoryId: 3,
    title: "Death///Survivors' pensions",
    description: "If your wife, husband, registered partner or parent dies, you are entitled to a pension.",
    content: [
      {
        infos: [
          {
            title: "Purpose of the pension",
            content: [
              {
                text: `The Swiss pension system benefits survivors to prevent a wife, husband, registered partner or children from finding themselves in a difficult financial situation if their partner or parent dies.`
              }
            ]
          },
          {
            title: "The amount of the pension",
            content: [
              {
                text: `The amount of the pension depends on the deceased person's number of contribution years, level of earned income and his or her parenting credits or care credits.

If your late wife, husband, registered partner or parent paid all his or her OASI contributions, i.e. from 1 January after reaching the age of 20 until death, you are entitled to a full pension.

If there are gaps in OASI contributions, you will receive a lower pension.

With a full pension, you are normally entitled to the following amounts, depending on the deceased's average income:`
              },
              {
                subtitle: "Widow’s or widower’s pension",
                text: `Minimum in CHF / month: 1008.-
Maximum in CHF / month: 2016.-`
              },
              {
                subtitle: "Orphan’s pension",
                text: `Minimum in CHF / month: 504.-
Maximum in CHF / month: 1008.-`
              },
              {
                text: `If you are already receiving an old-age or disability pension, you will receive a supplement of 20 per cent on top of your OASI/DI pension if you become a widow or widower. The sum of the pension and the supplement may not exceed a maximum pension.

The deceased's OASI compensation fund can tell you exactly how much the pension will be in your case.`
              },
            ]
          },
          {
            title: "Claiming a survivor's pension",
            content: [
              {
                text: `You must claim a survivor's pension from the compensation fund to which the deceased last paid contributions.

For this you need to submit the pension application form, which you can download online.

If the deceased paid OASI contributions partly in Switzerland and partly in one or more EU or EFTA member states, you can send the pension application form to their last country of residence. If you do so, the procedures in the other countries are triggered automatically.

If you live abroad, you must contact the Swiss compensation fund to find out the exact procedure.`,
              }
            ]
          },
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 3,
    title: "Death///What to do if someone dies",
    description: "If a relative or person close to you dies, there are several things you must do: obtain a death certificate, organise the funeral and notify the deceased’s insurance company, bank and landlord.",
    content: [
      {
        infos: [
          {
            title: "Obtaining a death certificate",
            content: [
              {
                text: `If a person dies in a hospital or a care home, the institution will issue a death certificate.

If a person dies of natural causes outside an institution, for example at home, you should call the deceased’s doctor or the emergency services. They will confirm the death and issue a death certificate.

If a person dies as the result of an accident or a crime, you must notify the police.`
              },
            ]
          },
          {
            title: "Reporting a death: when, how and where",
            content: [
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

Note: If a foreign national who does not reside in Switzerland dies here, the death must be reported to the civil register office in the place where the person died. The civil register office may request additional documents.`
              },
            ]
          },
          {
            title: "Organising the funeral:",
            content: [
              {
                subtitle: "When and how",
                text: `The funeral can only take place after the civil register office has confirmed that the death has been reported.

Different funeral customs and practices exist in Switzerland. You can obtain information about this from your commune, the funeral office or a private funeral home. Discuss practical aspects such as the time and the place of the funeral and the procedure.`
              },
              {
                subtitle: "Type of funeral",
                text: `In Switzerland you can choose to have either a cremation or a burial. Information on cremations and burial options (burial niche, columbarium or burial in a single, family or collective grave) is available from the funeral office or from the authorities in the deceased’s commune.`
              },
              {
                subtitle: "Costs",
                text: `Many communes offer free burial or cremation for their deceased. If not, you can ask a funeral director to arrange the funeral. Request a cost estimate.`
              },
            ]
          },
          {
            title: "If the death occurs abroad",
            content: [
              {
                text: `If a person dies abroad, the foreign authorities or deceased’s relatives usually notify the Swiss representation abroad (consulate or embassy).

You are responsible for submitting the foreign death certificate to the Swiss embassy or consulate, who will then forward it to the civil register office of deceased’s place of origin.

If you would like the funeral to take place in Switzerland, the Swiss embassy or consulate will help you with certain formalities for repatriating the deceased. However, the deceased’s relatives are primarily responsible for repatriation.`
              },
            ]
          },
          {
            title: "Formalities after the funeral",
            content: [
              {
                text: `Certain matters must be regulated after the funeral. These include:

- cancelling the deceased’s insurance policies (health, household, personal liability and accident insurance…)
- cancelling the deceased’s old-age and survivors’ insurance and any life insurance, and requesting the survivors’ pension to which you may be entitled
- asking the deceased’s employer if you are entitled to a survivors’ pension from their occupational pension fund (second pillar), to any severance pay and to the remaining payment of the deceased’s salary
- notifying the deceased’s bank and the post office
- cancelling newspaper subscriptions, public transport season tickets and memberships of societies and clubs, etc.
- notifying the tax authorities
- notifying the driver and vehicle licensing office if the deceased had a driving licence and a vehicle registered in their name
- notifying the deceased’s landlord if they lived in rented accommodation. If the deceased lived alone, you must terminate the rental agreement and ensure that the apartment or house is vacated within the period provided for in the agreement.`
              },
            ]
          },
        ]
      }
    ]
  },
  //Divorce
  {
    localeId: 1,
    categoryId: 3,
    title: "Divorce///Divorce procedure",
    description: "In Switzerland, you can apply for divorce by mutual consent, or by unilateral petition. The conditions and duration of the procedure can vary if one of the spouses refuses a divorce",
    content: [
      {
        infos: [
          {
            title: "Where do you get a divorce?",
            content: [
              {
                text: `To get a divorce, you need to go to the competent cantonal court in your place of residence.`,
              },
            ]
          },
          {
            title: "If you and your spouse both agree to divorce",
            content: [
              {
                text: `You can file a joint application (also known as divorce by mutual consent) which includes:

- A written petition (letter or pre-printed form) signed by both spouses stating you want to divorce. You do not need to explain your reasons for wanting a divorce.
- A document specifying all the consequences of the divorce on which you have agreed (agreement on how to deal with the consequences of the divorce): liquidation of the marriage, distribution of the pension fund, child custody, maintenance payments, division of property, etc.
- The court may also request other documents.

At the end of the procedure, the court grants the divorce and decides what the consequences will be for the two former spouses and the children. The court generally adopts the proposals made in the divorce agreement unless there are inconsistencies (if, for example, in haste, one spouse unwittingly gives up their pension claims acquired during the marriage) or if a provision is contrary to the interests of the children (if, for example, one spouse gives up their ex-spouse’s child support in order to have sole custody).`
              },
            ]
          },
          {
            title: "If one of the spouses refuses to divorce",
            content: [
              {
                text: `You can ask for a divorce even if your spouse does not agree, provided that you have lived separately for at least two years.

In exceptional cases, including domestic violence, you can also ask for a divorce before the two years have expired.

The court will inform you of the documents you need to submit. At the end of the procedure, the court grants the divorce and decides all the consequences, taking into account any points on which you and your spouse have been able to agree.`
              }
            ]
          },
          {
            title: "How long does the divorce procedure last?",
            content: [
              {
                text: `The duration of the divorce procedure varies. If you and your spouse agree on all the consequences of the divorce, the procedure generally takes three to four months. If, however, you are in dispute over one or more of the consequences of the divorce, the procedure can take up to several years.`
              },
            ]
          },
          {
            title: "Divorce costs and financial aid",
            content: [
              {
                text: `The costs of a divorce include in particular the costs of the court (ranging from CHF 1,000 to CHF 4,000 depending on the canton) and the lawyer’s fees if you hire one (ranging from a few hundred francs to several thousand depending on the complexity of the proceedings).

If you are in financial difficulties, you can apply to the state for legal aid that is free of charge or partially free of charge. In this case, the state will cover all or part of the court and a lawyer if you need one.

Ask the competent court about the possibilities of obtaining legal aid.`
              },
            ]
          },
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 3,
    title: "Divorce///Effects of divorce",
    description: "Divorce has numerous effects on your and your children’s personal, family and financial lives.",
    content: [
      {
        infos: [
          {
            title: "Surname of former spouses",
            content: [
              {
                text: `Once the divorce is pronounced, you may, at any time, contact the registry office of your place of residence (web page available in German, French and Italian) to change your surname back to the one you had before you were married. If you decide to do this, be sure to change your name in your official documents, in particular your passport, identity card and driving licence.

Please note: Your ex-spouse cannot force you to change your surname. The divorce has no effect on your children’s surnames.`,
              },
            ]
          },
          {
            title: "Parental responsibility and custody",
            content: [
              {
                text: `Joint parental responsibility is also the rule if you get a divorce. The divorce court only grants sole parental authority to one parent if it is deemed necessary for the child’s sake.

Even if you have joint parental responsibility, this does not mean that you both also automatically have (alternate) custody of your children. To find out more about parental responsibility and child custody, see our page on parental responsibility.`
              },
            ]
          },
          {
            title: "Dissolution of the marital property regime and impact on occupational pension schemes",
            content: [
              {
                text: `One of the effects of divorce is the division of assets and debts between the two former spouses (also known as the dissolution of the marital property regime). The division of assets and debts depends on the marital property regime that existed during the marriage.

The occupational pension assets accumulated during the marriage are also divided between the spouses (web page available in German, French and Italian).

Ask a lawyer or your OASI (AHV/AVS) compensation office (1st pillar) for more information on the settlement of the marital property regime and the division of your occupational pension assets (2nd pillar).`
              }
            ]
          },
          {
            title: "Maintenance payments for ex-spouse and children",
            content: [
              {
                subtitle: "Maintenance payments for ex-spouse",
                text: `After a divorce, the two ex-spouses must in principle each pay for their own maintenance.

However, depending on your age, the length of the marriage, the division of family duties during the marriage (e.g. if one of the two spouses stopped working to look after the children) and above all, the financial situation of both parties. One of the two may have to pay maintenance payments at least for some time.

You can agree directly with your ex-spouse on the amount of the payment. Otherwise, the court will decide.

Please note: if you remarry, you lose the right to maintenance payments.`
              },
              {
                subtitle: "Child maintenance",
                text: `Parents have the duty to support their children until they are of full age or have completed their education. Parents pay child support jointly, each to the extent of his or her ability.

The two ex-spouses can come to an agreement on maintenance payments. However, the final decision will be made by a court, which will take into account the needs of the children and the financial situation of each spouse.`
              },
            ]
          },
          {
            title: "What to do if an ex-spouse does not pay child support",
            content: [
              {
                text: `If an ex-spouse does not pay the child support determined by the divorce court, you can contact a lawyer or ask your canton for help to force the ex-spouse to meet their obligations. Each canton has one or more specialised debt collection agencies that can help you recover the money owed to you. This help is free, at least as far as child support is concerned.

Under certain conditions, the cantons can also advance child support payments (in whole or in part). This is the case, for example, when the parent who has custody of the children has too low an income to support them alone.

Contact your commune of residence for information about the possibilities of obtaining an advance on maintenance payments and cash assistance in your canton.`
              },
            ]
          },
          {
            title: "Right of residence for foreign nationals",
            content: [
              {
                text: `If you have a C permit, you can stay in Switzerland even if you are divorced.

If you were granted a B permit for the purpose of family reunification, you may only stay in Switzerland under certain conditions. For more information, see our text on residence permits in Switzerland.`
              },
            ]
          },
        ]
      }
    ]
  },
  //Inheritance
  {
    localeId: 1,
    categoryId: 3,
    title: "Inheritance///Gift tax",
    description: "Most cantons and some communes levy a tax on gifts. However, there is no gift tax at federal level.",
    content: [
      {
        infos: [
          {
            title: "Taxable gifts",
            content: [
              {
                text: `Most cantons levy a gift tax. The purpose of this tax is to prevent taxpayers from avoiding other types of tax, in particular inheritance tax, by giving their assets away.

A gift tax is levied, for example, on:

- Gifts of money above a certain value
- Gifts of real estate
- Gifts of valuables, such as works of art
- Gratuitous transfers of insurance benefits that become due during the policyholder's lifetime
- Advances on inheritances
- Assignments or waivers of rights (e.g. rights of use).`
              },
            ]
          },
          {
            title: "Who has to pay gift tax?",
            content: [
              {
                text: `Gift tax must be paid by the person who receives a gift.

Normally, spouses and registered partners and their descendants (children and grandchildren) do not have to pay tax on gifts to each other. Gifts to stepchildren and foster children are also exempt from the tax, but only in those cantons where they have the same status as biological children.`
              },
            ]
          },
          {
            title: "When do you have to declare gifts?",
            content: [
              {
                text: `In most cantons, you must report the gift to the cantonal tax administration within a certain period without having to be asked to do so.`
              }
            ]
          },
          {
            title: "How is gift tax calculated?",
            content: [
              {
                text: `The tax rate and thus the tax usually depends on:

- the value of the asset received as a gift
- and/or the degree of relationship of the person making the gift to the person receiving the gift: the more closely they are related, the lower the tax rate.`
              },
            ]
          },
          {
            title: "Deducting the value of gifts in your tax return",
            content: [
              {
                text: `If you make a gift to a charitable organisation, you can, in certain cases, deduct all or part of the amount donated in your tax return. You can find more on this in the information on the tax return`
              },
            ]
          },
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 3,
    title: "Inheritance///Certificate of inheritance",
    description: "The certificate of inheritance (obtained in a procedure equivalent to the English or American grant of probate or Scottish confirmation) states who is entitled to inherit a deceased person's assets. This document is usually required to deal with assets in the deceased's estate, for example, to withdraw money from the deceased's bank account.",
    content: [
      {
        infos: [
          {
            title: "Who can apply for a certificate of inheritance?",
            content: [
              {
                text: `- If the deceased did not make a will or a contract of succession, the statutory heirs may apply for a certificate of inheritance; these are, depending on the case, the deceased's wife, husband, registered partner, descendants (i.e. children and their descendants) or, if applicable, parents and their children (i.e. the deceased's brothers and sisters).
- If there is a will or a contract of succession, the certificate of inheritance can only be applied for after the official notice of the will or the contract is given by the competent authority.`
              },
            ]
          },
          {
            title: "Issuing authority",
            content: [
              {
                text: `The authority that issues the certificate of inheritance varies from canton to canton.`
              },
            ]
          },
          {
            title: "Requirements",
            content: [
              {
                text: `In order to obtain a certificate of inheritance, you must, among other things:

- submit a copy of the death certificate (you can obtain this from the register office),
- prove that you are entitled to inherit (e.g. by providing an extract from the civil status register showing your family relationship or civil relationship with the deceased , or a copy of the will or contract of succession),
- prove that you have not renounced your inheritance (i.e. by submitting the declaration of acceptance by all heirs or
- proof that the period in which it would have been possible to renounce the inheritance has expired)`
              }
            ]
          },
          {
            title: "Costs",
            content: [
              {
                text: `The cost of issuing a certificate of inheritance varies from case to case; it depends on what enquiries are needed and the time the authority had to spend on them in order to be able to issue you with the certificate of inheritance. The costs can amount to several hundred or even a few thousand francs. In addition, there are the costs that the civil register office charges for issuing the documents and obtaining information in Switzerland and abroad.`
              },
            ]
          }
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 3,
    title: "Inheritance///Inheritance tax",
    description: "All the cantons apart from Obwalden and Schwyz levy an inheritance tax. The amount of tax and who has to pay varies from canton to canton. There is no inheritance tax at federal level.",
    content: [
      {
        infos: [
          {
            title: "Who has to pay inheritance tax?",
            content: [
              {
                text: `Inheritance tax is payable by those who inherit, i.e. the deceased's heirs.

Normally, spouses, registered partners and their descendants (children and grandchildren) are exempt from the tax. Stepchildren and foster children are also exempt from the tax, but only in those cantons where they have the same status as biological children.`
              },
            ]
          },
          {
            title: "How is inheritance tax calculated?",
            content: [
              {
                text: `Inheritance tax is calculated on the basis of the value of the inherited assets. Gifts of personal effects and household items are not taxed in most cantons.

The tax rate and thus the tax payable usually depends on:

the value of the inherited assets.
and/or the degree of family relationship between the heir and the deceased: the more closely they are related, the lower the tax rate. Heirs who are unrelated to the deceased pay a significantly higher amount of tax than related heirs.`
              },
            ]
          },
          {
            title: "Taxation of inheritances from abroad",
            content: [
              {
                text: `If the deceased lived abroad or if an heir lives abroad, and also if the inherited assets are located abroad, the question arises as to which law applies to the inheritance process. There is a real risk of having to pay taxes in more than one country on one and the same inheritance.

In order to avoid this type of double taxation, Switzerland has concluded agreements with a number of countries.`
              }
            ]
          }
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 3,
    title: "Inheritance///Renouncing an inheritance",
    description: "If you are concerned that you may inherit debts from someone who has died, or if you simply do not want to inherit anything from someone, you can renounce an inheritance.",
    content: [
      {
        infos: [
          {
            title: "Renouncing an inheritance",
            content: [
              {
                text: `If you do not wish to accept an inheritance, you must notify the competent authority at the deceased person's last place of residence within three months by registered letter.

In this case, your share of the estate goes to your statutory heirs, who in turn have three months to renounce it. If all the heirs renounce their inheritance, it will be liquidated by the bankruptcy office in the deceased's last canton of residence. The available assets are subsequently used to pay the deceased’s debts.

You can renounce your share of the estate even if the person whose assets you are to inherit is still alive. To do this, you need to enter into a contract of succession with the person concerned.`
              },
            ]
          },
          {
            title: "Finding out how much an inheritance is worth",
            content: [
              {
                text: `You can obtain information about a deceased person's financial situation, for example, from their last tax return, or from their bank statements or an extract from the debt enforcement register. You will normally receive this information by presenting a certificate of inheritance.

If you are not sure how large the estate is, you can request the competent authority to make a public inventory.`
              },
            ]
          },
          {
            title: "Public inventory",
            content: [
              {
                text: `In a public inventory, the authority draws up a publicly accessible list of the assets and debts that make up the estate. To arrange this, you must, within one month of learning of the death of the person concerned, request the inventory from the authority responsible for inheritance matters in the deceased's last place of residence.

The authority will make the necessary enquiries and draw up the inventory. Depending on what assets make up the estate and the deceased's financial circumstances, these enquiries can take several months.

The inventory gives you a complete overview of the assets that make up the estate. This allows you and the other heirs to decide individually whether or not to accept your respective inheritances.`
              }
            ]
          }
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 3,
    title: "Inheritance///Succession: who inherits what?",
    description: "In Switzerland, the law is clear about who your heirs will be. However, in a will or contract of succession you can influence how at least part of your estate will be distributed.",
    content: [
      {
        infos: [
          {
            title: "I have not made a will or a contract of succession: who will inherit from me?",
            content: [
              {
                subtitle: "The estate goes to your legal heirs",
                text: `If you have not made a will (known as being ‘intestate’ or a contract of succession), your estate will be divided among your legal heirs, i.e. the persons that the law says have the right to inherit your assets. Your legal heirs are your spouse or partner (husband, wife or registered partner) and your closest relatives (your children, or if you have no children, your parents or even your grandparents). They inherit in a predetermined order, according to their statutory succession rights.

- If you have children: your estate is divided between your spouse or partner (husband, wife or registered partner) and your children (or if they predecease you, their children, if they have any).
- If you do not have any children: your estate is divided between your spouse or partner and your parents (or your siblings if your parents have already died).
- If you have no relatives - neither on your parents' side (e.g. brothers or sisters) nor on your grandparents' side (their brothers and sisters or their descendants), your entire estate goes to your spouse or partner.
- If you are not married or in a registered partnership and you have no relatives, your estate goes to the canton or commune of your last place of residence.

Please note: If your partner is not married to or in a registered partnership with you, he or she is not your legal heir. If you want your partner to inherit from you, you must expressly provide for this in your will or in a contract of succession.`
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
`
              },
            ]
          },
          {
            title: "You have made a will or a contract of succession: who inherits what?",
            content: [
              {
                subtitle: "Freedom of choice",
                text: `By making a will or a contract of succession, you can decide on your heirs and how your estate is distributed, but only within the limits of the law. For example, you can:

- Favour one or more legal heirs over others. e.g., you can leave more to your spouse or registered partner than to your children.
- You can provide for other heirs in addition to those provided for by law. e.g. for your partner.`
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

Contact a lawyer or notary to find out more about this.`
              },
              {
                subtitle: "What you can freely dispose of in your wil",
                text: `In your will, you are only free to leave a certain portion of your estate to whom you please; this portion is known as the disposable part. The amount of the disposable part depends on who your legal heirs are when you die. If you have no partner or descendants (children or grandchildren), you can dispose of your assets as you wish. If you do have legal heirs, the freedom to dispose of your assets is limited, and what their statutory succession rights would have been if you had not made a will.
                `
              },
            ]
          },
          {
            title: "Inheritance taxes",
            content: [
              {
                text: `Most cantons impose an inheritance tax. Husbands, wives and registered partners are often exempt from this tax.`
              }
            ]
          }
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 3,
    title: "Inheritance///Wills and contracts of succession",
    description: "You have several options for determining who gets your assets after you die and how that should happen. However, your freedom to dispose of your assets as you please is limited. ",
    content: [
      {
        infos: [
          {
            title: "Contents of a will",
            content: [
              {
                text: `By making a will, you can decide for yourself what should happen to your assets and at least partially change the distribution of your estate from what the law otherwise stipulates.

In particular, you have the following options:

- You can stipulate that your assets be divided among your statutory heirs in a different way from that specified by the law.
- You can leave your assets to other persons or institutions.
- You can leave valuable items (e.g. jewellery, collections) or assets (sums of money, real estate) to specific persons or institutions.
- You can specify certain conditions and obligations (for example, that an heir will receive a certain amount of money if they have graduated at the time of your death, or that the person who inherits your house must take care of your pet).

Please note:
- Seek advice from a professional to make sure that your estate will actually be distributed the way you really want it to be.
- Make sure that your will is not the only source of instructions on your funeral arrangements, as it is sometimes the case that the will is not found and opened until after the funeral. It is better to tell those closest to you or your chosen undertaker what your wishes are in this regard.`
              }
            ]
          },
          {
            title: "Types of will",
            content: [
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
`
              },
              {
                subtitle: "Will by public deed",
                text: `A will by public deed is signed before a public official, usually a notary, and in the presence of two witnesses.

Generally, this form of will is chosen to ensure that it does not contain any errors and that it really does reflect the testator's wishes. It is worth seeking the advice of a professional, especially if the estate or its distribution is complex.

Procedure:
The public official that you consult will explain the procedure.
`
              },
              {
                subtitle: "Oral will",
                text: `An oral will is only possible in exceptional circumstances, i.e. when it is not possible to draw up or sign the will in any other form. This is the case, for example, when the testator is facing imminent death.

Procedure:
You must state what your wishes are for your will in front of two witnesses. The witnesses must immediately write down what you said and add the place and date. They must also explain what the exceptional circumstances were. They must then sign the document and deliver it to the competent court.
                `
              },
            ]
          },
          {
            title: "Contract of succession",
            content: [
              {
                subtitle: "Contents of a contract of succession",
                text: `By entering into a contract of succession, you can agree with other people on how your estate or part of it should be distributed.

In contrast to a will, which you can revoke or amend yourself at any time, a contract of succession can only be amended with the consent of all the parties who signed it.

In a contract of succession, you can regulate the following points in particular:

You agree with a statutory heir that they will renounce their inheritance. This may be appropriate, for example, if:
- one of your children waives their right to inherit because they have already received a substantial level of financial support from you; or
- you and your wife, husband or registered partner renounce each other's inheritance shares in order to leave everything to your children. Heirs who have renounced their inheritance in a contract of succession can no longer claim their statutory entitlement after your death.

You undertake to leave all or part of your estate to your legal heirs or to a third person. For example, you can provide in the contract of succession:
- that you undertake to leave the house that you live in with the family to one of your children; or
- that you and your wife, husband, or registered partner are the sole beneficiaries of each other's estate.`
              },
              {
                subtitle: "Contract of succession: Procedure",
                text: `The following steps are required in order to draw up or amend a contract of succession:

- Contact a notary. Swiss Notaries Association
- The notary will draw up the contract of succession according to the wishes expressed jointly by you and the other persons who are parties to the contract and who will sign it.
- The subsequent amendment of the contract is only possible with the consent of all contracting parties.`
              }
            ]
          },
          {
            title: "Gifts",
            content: [
              {
                text: `A gift allows you to transfer a portion of your assets and property to someone else during your lifetime. The person receiving the gift becomes the owner of the items concerned in all respects.

Please note:

Certain gifts, particularly those made in the five years before your death, may be taken into account when your estate is distributed. Your statutory legal heirs can assert their related rights. For more information, it is best to contact a specialist.
You should keep a written record of any gifts that you make. This will help to avoid any disputes among your heirs after your death`
              }
            ]
          }
        ]
      }
    ]
  },


  //Living wills
  {
    localeId: 1,
    categoryId: 2,
    title: "Living wills",
    description: "With a living will you determine the medical treatment that you want at the end of your life. Special forms are available. We explain the process, and where to find templates",
    content: [
      {
        infos: [
          {
            title: "What is a living will?",
            content: [
              {
                text: `With a living will (sometimes referred to as an advance care directive or a patient decree), you determine what medical treatment you want in the final stage of an illness or following a serious accident. You also determine what treatment you do not wish to have.

It ensures that as the patient your wishes will continue to be followed at the end of your life if you are no longer able to express them yourself.

You do not have to make a living will. Living wills are personal and free of charge. You can write one and change it at any time.`
              },
            ]
          },
          {
            title: "Process and forms",
            content: [
              {
                text: `There are two types of living will. One concentrates on general points, while the other determines what medical intervention is permitted in different situations. This is what you need to do:

1. Download a template. Forms and specimens are available from many organisations, such as the Swiss Medical Association FMH (website available in German, French and Italian), which offers both short and full versions.
2. Complete your chosen form, then date and sign it.
3. Give your living will to a close friend or family member, or to your family doctor. You can also tell them where your treatment team can find the document if they need it.
4. Keep a note in your wallet about your living will and where it is kept.

Do not hesitate to get advice on completing the form. The doctor treating you will be able to help, for example. If decisions have to be made, a clear directive setting out your wishes carries greater weight, and raises fewer questions about what those wishes are.

Review your living will regularly and amend it if necessary. The FMH recommends checking it every couple of years. Do not forget to date and sign the new version.
`
              }
            ]
          },
          {
            title: "What conditions do I have to fulfil?",
            content: [
              {
                text: `You do not need to be in the best of health, but you do have to have legal capacity, i.e. be able to decide for yourself.

The living will must reflect your actual wishes. It may not have been drawn up under pressure.

Doctors are bound only by living wills that have been dated and signed by hand.`
              }
            ]
          }
        ]
      }
    ]
  },
  //Passport and identity card
  {
    localeId: 1,
    categoryId: 2,
    title: "Passport and identity card///Applying for a passport or an identity card",
    description: "Identity documents can be ordered online or at your cantonal passport office. You can expect to receive them within about 10 working days - up to 30 working days if you live abroad. In exceptional and urgent cases, you can apply for a temporary passport.",
    content: [
      {
        infos: [
          {
            title: "Where to a apply for an identity document",
            content: [
              {
                subtitle: "Online",
                text: `You can apply for a passport and/or identity card online. The following link will walk you through the process:`,
                links: [
                  {
                    text: "Applying for a passport and/or identity card online.",
                    url: "https://www.ch-edoc-passantrag.admin.ch/#/antraggesuch"
                  }
                ]
              },
              {
                subtitle: "At your cantonal passport office",
                text: `You should receive the documents within 10 working days.`,
                links: [
                  {
                    text: `You can order a passport and/or identity card in person at your cantonal passport office or by contacting the office by phone.`,
                    url: "https://www.ch-edoc-passantrag.admin.ch/#/antraggesuch"
                  },
                  {
                    text: `If you only need an identity card, it is possible in some cantons, to order one at your commune of residence.`,
                    url: "https://www.fedpol.admin.ch/fedpol/en/home/pass---identitaetskarte/pass/passstellen.html"
                  },
                ]
              },
              {
                subtitle: "At a Swiss embassy or consulate",
                text: `Swiss citizens living abroad can either apply for a passport or identity card online or call the Swiss consulate or embassy in the country where they are staying
You should receive the documents within 30 working days.`,
                links: [
                  {
                    text: `Apply for a passport or identity card online`,
                    url: "https://www.ch-edoc-passantrag.admin.ch/#/antraggesuch"
                  },
                  {
                    text: `Swiss consulate or embassy`,
                    url: "https://www.eda.admin.ch/eda/en/fdfa/representations-and-travel-advice/schweizer-vertretungen-im-ausland.html"
                  },
                ]
              },
            ]
          },
          {
            title: "Identify documents for your children",
            content: [
              {
                text: `From the day your children are born, you can apply for a passport and/or identity card for them.

You cannot, however, simply have their names added to your own identity document.

Please note: where the parents of a child are not married, a note may be added to one of the parents’ passports to say he or she has parental authority.`
              },
              {
                subtitle: "Please note",
                text: `- You can only apply for an identity document for your child if you have parental authority.
- If both parents have parental authority, the signature of one of the parents is sufficient to apply for an identity document.
- However, if joint parental authority is difficult to prove (e.g. if the parents live at two different addresses), you will also have to provide - the consent of the other parent.
- Children aged seven and older are required to sign their identity document.
- Children aged 12 and older are required to provide digital fingerprints for their biometric passport.
-Once your children turn 18, they have to apply for their own identity documents.`
              },
            ]
          },
          {
            title: "Biometric data and photographs",
            content: [
              {
                text: `Applicants for identity documents must provide biometric data (data stored on a microchip including a facial photograph and signature – and fingerprints for passports – which are protected from abuse) to the cantonal authorities or a Swiss representation abroad.

The photograph is generally taken when the biometric data is recorded. However, some cantons allow you to use your own photograph. In such cases the photograph must meet specific requirements: contact your cantonal authority for full details.`
              }
            ]
          },
          {
            title: "Validity",
            content: [
              {
                text: `Passports and identity cards are valid for 10 years for adults and for 5 years for children and adolescents under the age of 18.`
              }
            ]
          },
          {
            title: "Expired identity and travel documents",
            content: [
              {
                subtitle: "Renewing your passport or identity card",
                text: `Once your passport or identity card has expired, you have to apply for new documents.`
              },
              {
                subtitle: "Travelling with valid or expired documents",
                text: `As a general rule, you must carry your valid identity documents with you when you travel. Find out in advance about entry conditions at the representation of your destination country in Switzerland or at the Swiss representation abroad.

Some countries require you to have a passport that is valid for at least six months beyond the date on which you plan to leave the USA.

Other countries allow you to travel for a limited period of time even after your passport or identity card has expired.`,
                links: [
                  {
                    text: "Some countries, including the USA, China and Australia, require you to apply for a visa before you travel there",
                    url: "https://www.eda.admin.ch/eda/de/home/vertretungen-und-reisehinweise/laenderunabhaengigereiseinformationen/visum-einreise.html"
                  }
                ]
              },
              {
                subtitle: "Temporary passport",
                text: `In cases of genuine urgency, you can apply for a temporary passport at your cantonal passport office or at a Swiss embassy or consulate in the country where you are located .

Please note:

Unlike a normal passport, a temporary passport is not biometric and does not contain a microchip with your fingerprints and photograph. It may therefore not be accepted in all countries: foreign representations in Switzerland provide information about the entry requirements in their countries

A temporary passport is valid for a maximum of 12 months.`
              },
            ]
          },

          {
            title: "Swiss passport for foreign nationals",
            content: [
              {
                text: `Foreign nationals interested in obtaining a Swiss passport need to follow the steps on the page on naturalisation.`,
                links: [
                  {
                    url: "https://www.eda.admin.ch/eda/de/home/vertretungen-und-reisehinweise/laenderunabhaengigereiseinformationen/visum-einreise.html"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    localeId: 1,
    categoryId: 2,
    title: "Passport and identity card///Lost or stolen passport or identity card",
    description: "If you lose your ID documents or if they are stolen, you must file a police report to obtain a new passport or ID card.",
    content: [
      {
        infos: [
          {
            title: "Filing a police report",
            content: [
              {
                subtitle: "In Switzerland",
                text: `If your passport is lost or stolen, you need to file a report at the police station. By filing a report, your passport or identity card will automatically be cancelled. Even if you find your passport or identity card, you will no longer be able to use them, and you are required to hand them over to the passport office in your canton.`,
                links: [
                  {
                    text: "Police station",
                    url: "https://www.suisse-epolice.ch/home"
                  },
                  {
                    text: "Passport office in your canton",
                    url: "https://www.fedpol.admin.ch/fedpol/en/home/pass---identitaetskarte/pass/passstellen.html"
                  },
                ]
              },
              {
                subtitle: "Abroad",
                text: `If your Swiss identity documents are lost or stolen while you are abroad, you need to file a report with the local police and notify the Swiss embassy or consulate in the country where you are staying. The embassy or consulate will, in turn, notify the police in Switzerland.

You can then order new identity documents or obtain an emergency passport if you need it right away, for example to return to Switzerland.`,
                links: [
                  {
                    text: "Swiss embassy or consulate",
                    url: "https://www.eda.admin.ch/eda/en/fdfa/representations-and-travel-advice/schweizer-vertretungen-im-ausland.html"
                  },
                ]
              }
            ]
          },
          {
            title: "Obtaining a new passport or identity card",
            content: [
              {
                subtitle: "In Switzerland",
                text: `After you have filed a police report, you can choose from one of the options listed on the Ordering a passport or identity card page to obtain a new passport or identity card.`
              },
              {
                subtitle: "Abroad",
                text: `After you have filed a police report, you can apply for a new passport or identity card directly at the Swiss consulate or embassy where you filed the report, or order one online:

Keep in mind that you may need to wait up to 30 working days before receiving the new documents.

In cases of urgency - for example, if you cannot otherwise return to Switzerland - you can request a temporary passport.`
              },
            ]
          },
          {
            title: "Obtaining a temporary passport",
            content: [
              {
                text: `In cases of urgency, where justified, you can apply for a temporary passport at your cantonal passport office or at a Swiss embassy or consulate in the country where you are located.`
              }
            ]
          }
        ]
      }
    ]
  },
  //Permits for living in Switzerland
  {
    localeId: 1,
    categoryId: 2,
    title: "Permits for living in Switzerland",
    description: "All foreign nationals who remain in Switzerland for more than three months must obtain a permit. Guide to obtaining a permit.",
    content: [
      {
        infos: [
          {
            title: "Overview of permits",
            content: [
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
            ]
          },
          {
            title: "How do I obtain a permit?",
            content: [
              {
                text: `If you need a permit to live in Switzerland, please contact the cantonal migration or employment authorities of your commune of residence.

The requirements you need to meet depend on your nationality and the duration and purpose of your stay. ch.ch gives you more information on its pages Working in Switzerland as a foreigner and Staying in Switzerland without working.`
              }
            ]
          },
          {
            title: "How do I obtain a permit?",
            content: [
              {
                text: `If you need a permit to live in Switzerland, please contact the cantonal migration or employment authorities of your commune of residence.

The requirements you need to meet depend on your nationality and the duration and purpose of your stay. ch.ch gives you more information on its pages Working in Switzerland as a foreigner and Staying in Switzerland without working.`
              }
            ]
          },
          {
            title: "Submit your application to your commune of residence. If you live in the canton of Geneva, please contact the canton.",
            content: [
              {
                text: `Submit your application along with the following documents:

- your current permit
- a valid identity card or passport (if you are not an EU or EFTA citizen, the ID card or passport must be valid for at least three months after the expiry of the permit)
- notice of expiry of the permit if you have received one from the cantonal migration authority.

You can apply to renew your permit no earlier than three months and no later than two weeks before it expires.`
              }
            ]
          },
          {
            title: "My permit has been lost or stolen – what should I do?",
            content: [
              {
                text: `Report the loss of your permit to the police; they will issue you with a loss notice.

You can find a police station here.

Then go to the residents' register office in your commune (or to the cantonal migration authority) with your passport, a passport photo and the loss notice. You must pay for the duplicate or new permit. The costs vary.

If a permit reported as lost is subsequently found, you must cancel it at the residents' register office in your place of residence.`
              }
            ]
          },
          {
            title: "Staying in Switzerland after separation, divorce or your partner's death",
            content: [
              {
                text: `If you have obtained a permit to live in Switzerland under family reunification but you divorce the person who gave you the right of residence or this person dies, you must notify the cantonal migration authority.

If you have a residence permit (B permit), you may be permitted to stay subject to certain conditions:`
              },
              {
                subtitle: "EU/EFTA citizens",
                text: `You can apply for a permit in your own name if you are working or have sufficient resources to ensure your financial independence.`
              },
              {
                subtitle: "Third-country citizens",
                text: `You can have your permission to stay extended if

- you have been married for at least three years and have lived in the same household with your spouse (Swiss or foreign national),
- you are well integrated in Switzerland (respect for law and order, good oral language skills, in work or pursuing education or training), or
- you need to stay in Switzerland for important personal reasons (e.g. social reintegration in the country of origin is seriously compromised, domestic violence).`
              },
            ]
          },
        ]
      }
    ]
  },
  //Requesting an OASI card
  {
    localeId: 1,
    categoryId: 2,
    title: "Requesting an OASI card",
    description: "If you do not have an OASI card or if you have lost yours, you can request one by filling out the online form and sending it to the competent authority.",
    content: [
      {
        infos: [
          {
            title: "If you are an employee",
            content: [
              {
                text: `If you have not yet received your OASI card or if you have lost it, you can fill out the application form available on the OASI/DI website and return it to your employer.

You will then be sent a (new) OASI card.`,
                links: [
                  {
                    text: "The application form",
                    url: "https://www.ahv-iv.ch/en/Forms/Forms/General-administration-forms"
                  }
                ]
              }
            ]
          },
          {
            title: "If you are self-employed or not working",
            content: [
              {
                text: `If you have not yet received your OASI card or if you have lost it, you can fill out the application form available on the OASI/DI website and return it to your professional fund association or your cantonal compensation office to which you make your contributions:

You will then be sent a (new) OASI card.`,
                links: [
                  {
                    text: "The application form",
                    url: "https://www.ahv-iv.ch/en/Forms/Forms/General-administration-forms"
                  },
                  {
                    text: "Professional fund association",
                    url: "https://www.ahv-iv.ch/en/Contacts/Union-compensation-offices"
                  },
                  {
                    text: "Cantonal compensation office",
                    url: "https://www.ahv-iv.ch/en/Contacts/Cantonal-compensation-offices"
                  },
                ]
              }
            ]
          },
          {
            title: "If you live abroad",
            content: [
              {
                text: `If you live abroad and do not work in Switzerland and have never received or have lost your OASI card, you should contact the Swiss Compensation Office, which can issue with you with one or provide a replacement.

If you live abroad but work in Switzerland, please refer to the sections ‹If you are an employee› or ‹If you are self-employed or not working› to find out how to obtain a (new) OASI card.`,
                links: [
                  {
                    text: "Swiss Compensation Office",
                    url: "https://www.ahv-iv.ch/en/Contacts/Swiss-compensation-Office-SCO"
                  }
                ]

              },
            ]
          }
        ]
      }
    ]
  },
  //Salary certificate
  {
    localeId: 1,
    categoryId: 2,
    title: "Salary certificate",
    description: "Employees do not need to ask for a salary certificate. They get this important certificate automatically so that they can file their tax return.",
    content: [
      {
        infos: [
          {
            title: "What is a salary certificate?",
            content: [
              {
                text: `The Swiss salary certificate is a form given to an employee that certifies exactly what he or she has been paid by an employer. The certificate also itemises all contributions, benefits and allowances paid.

Your employer is obliged to provide you with a salary certificate each year and usually sends it to you before the end of January. If you had more than one job at any time or if you changed employers during the year in question, you will receive a certificate for each job.

The salary certificate is the most important document you need for completing your tax return. In several cantons, employers have to send a copy directly to the tax authorities. As an employee, you only need to attach a salary certificate to your tax return if you work for an employer outside your canton or if required by the competent tax authority.`,
              }
            ]
          },
          {
            title: "Is there a problem with your certificate?",
            content: [
              {
                text: `If your employer did not send you a salary certificate, if the document you received is incorrect, or if you have lost it, you must request a new certificate directly from the employer.`,
              }
            ]
          },
          {
            title: "How do I draw up a salary certificate?",
            content: [
              {
                text: `If you are an employer and do not know what to do, you can follow the instructions and use the forms from the Federal Tax Administration to draw up a salary certificate. The templates are available in various sizes.`,
                links: [
                  {
                    text: "Salary certificate",
                    url: "https://www.estv.admin.ch/estv/en/home/federal-direct-tax/salary-certificate-pension-statement.html"
                  }
                ]

              },
            ]
          }
        ]
      }
    ]
  },
  //Lost vehicle registration document
  {
    localeId: 1,
    categoryId: 2,
    title: "Lost vehicle registration document",
    description: "If you have lost or need to change your vehicle registration document, contact the driver and vehicle licensing office.",
    content: [
      {
        infos: [
          {
            title: "Lost vehicle registration document?",
            content: [
              {
                text: `If you have lost your vehicle registration document or it has been stolen, you can apply for a replacement document. Only the owner of the vehicle can apply for a replacement document.`,
              },
              {
                subtitle: "Requesting a replacement document",
                text: `You can order a replacement document from the driver and vehicle licensing office in your canton`,
                links: [
                  {
                    url: "https://asa.ch/strassenverkehrsaemter/adressen/"
                  }
                ]
              },
              {
                subtitle: "Returning a replacement document",
                text: `If you find the original vehicle registration document, bring or send the replacement document back to the driver and vehicle licensing office.`,
              },
              {
                subtitle: "Fees",
                text: `A new vehicle registration document costs CHF 25 to CHF 50, depending on the canton. For more information, contact the driver and vehicle licensing office in your canton (website available in German, French and Italian).`,
              },
            ]
          },
          {
            title: "Changes to a vehicle registration document",
            content: [
              {
                text: `Notify the driver and vehicle licensing office within 14 days if you have a new address or your name has changed. Your vehicle registration document will be changed or replaced.`,
              }
            ]
          }
        ]
      }
    ]
  },
]

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

export const infoEN = [
  ...informationWorkAbscenceDueToIllnes,
  ...infoCustoms,
  ...infoDocuments
]
