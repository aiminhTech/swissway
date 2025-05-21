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
                text: `You may order all civil status certificates concerning you personally.

    Family record books may be updated, but may no longer be ordered.

    You may request a civil status certificate for someone else, providing you can present power of attorney from the person concerned and a copy of their ID.`
              }]
          },

        ]
      }
    ]
  },
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
  {
    localeId: 1,
    categoryId: 2,
    title: "Driving licence/Exchanging your driving licence",
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
    title: "Driving licence/International driving licence",
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
