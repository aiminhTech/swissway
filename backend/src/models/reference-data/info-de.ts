import type { Information } from "../model";

const infoZoll: Information[] = [
  {
    localeId: 2,
    categoryId: 17,
    title: "Einkaufstourismus",
    description:
      "Wenn Sie Waren in die Schweiz einführen, die Sie im Ausland gekauft haben, müssen Sie dies beim Zoll möglicherweise deklarieren. Anleitung zur Verzollung von Fleisch, Wein und anderen Waren",
    contents: [
      {
        infos: [
          {
            title: "Wann muss man beim Zoll Abgaben zahlen?",
            contents: [
              {
                subtitle: "Einfuhr von Waren in die Schweiz",
                text: `Waren dürfen in die Schweiz mehrwertsteuerfrei eingeführt werden, wenn ihr Gesamtwert 150 Franken nicht übersteigt. Wenn dieser Wert überschritten wird, müssen Sie für den Gesamtwert der Waren die Schweizer Mehrwertsteuer bezahlen.

Für Lebensmittel, alkoholische Getränke und Tabakprodukte muss zudem die Menge der einzuführenden Ware beachtet werden. Wenn Sie die festgelegte Menge überschreiten, müssen Sie Zollabgaben zahlen.

Beispiele für Warenmengen, die zollfrei in die Schweiz eingeführt werden können:

- <18 % Alkohol: 5 Liter/Person/Tag
- >18 % Alkohol: 1 Liter/Person/Tag
- Fleisch: 1kg/Person/Tag
- Zigaretten: 250 Stück/Person/Tag

Wenn Sie Waren, die Sie im Ausland gekauft haben, in die Schweiz einführen, haben Sie oftmals die Möglichkeit, sich die ausländische Mehrwertsteuer rückerstatten zu lassen.`,
              },
              {
                subtitle: "Durchfuhr von Waren / Ausfuhr aus der Schweiz",
                text: `Wenn Sie mit Ihrer privaten Ware lediglich durch die Schweiz hindurchfahren wollen, müssen Sie diese beim Grenzübertritt in die Schweiz anmelden. Falls Sie dann Zollabgaben zu zahlen haben, bekommen Sie den Betrag (in Schweizerfranken) beim Verlassen der Schweiz wieder zurück.

Wenn Sie die Schweiz mit privater Ware ganz einfach verlassen, so müssen Sie keine speziellen Ausfuhr-Zollformalitäten ausfüllen. Aber vergessen Sie nicht, sich über die Einfuhrbestimmungen Ihres Ziellandes kundig zu machen.`,
                links: [
                  {
                    text: "Speziellen Ausfuhr-Zollformalitäten",
                    url: "https://www.bazg.admin.ch/bazg/de/home/information-private/reisen-und-einkaufen--freimengen-und-wertfreigrenze/ausfuhr-aus-der-schweiz/ausreise-aus-der-schweiz-mit-privatwaren.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Wie viele kostet es?",
            contents: [
              {
                text: `Die Zollabgaben sind sehr verschieden. Wenn Sie bei Lebensmitteln, alkoholischen Getränken und Tabakwaren die zollfreien Mengen überschreiten, hängen die Zollabgaben von der Menge ab, um die Sie die Freimengen überschreiten.`,
              },
            ],
          },
          {
            title: "Wie können Sie Ihre Waren verzollen?",
            contents: [
              {
                subtitle: "QuickZoll-App",
                text: `QuickZoll ist die Verzollungs-App des Bundesamtes für Zoll und Grenzsicherheit für den privaten Reiseverkehr. Mit der App können Sie Ihre Waren zur Einfuhr anmelden und anfallende Abgaben direkt bezahlen. Die mit QuickZoll verzollten Waren können Sie danach über einen beliebigen Grenzübergang in die Schweiz einführen.

Sie können die QuickZoll-App kostenlos auf Ihr Mobiltelefon herunterladen. Für die Benutzung ist keine Registrierung erforderlich.`,
                links: [
                  {
                    text: "QuickZoll-App",
                    url: "https://www.bazg.admin.ch/bazg/de/home/services/services-private/services-private-einfuhr/quickzoll-app.html",
                  },
                ],
              },
              {
                subtitle: "Mündliche Zollanmeldung",
                text: `Wenn der Schweizer Grenzposten mit Zollpersonal besetzt ist, müssen Sie sämtliche Waren unaufgefordert anmelden. Auf den Flughäfen benutzen Sie dazu die roten Durchgänge «Waren anzumelden».

Wenn Sie mit der Bahn reisen, können Sie Ihre Waren mündlich beim Zollpersonal im Zug anmelden. Wenn kein Zollpersonal im Zug ist, können Sie die Verzollung innerhalb von sieben Tagen nach der Ankunft in der Schweiz bei einer beliebigen Zollstelle zu den angegebenen Öffnungszeiten vornehmen.`,
                links: [
                  {
                    text: "Bahnreise",
                    url: "https://www.bazg.admin.ch/bazg/de/home/information-private/waren-anmelden/einfuhr-in-die-schweiz/bahnreise.html",
                  },
                ],
              },
              {
                subtitle: "Schriftliche Selbstanmeldung",
                text: `Wenn Sie über einen unbesetzten Grenzübergang in die Schweiz einreisen, können Sie Ihre Waren schriftlich anmelden, indem Sie das Formular benützen, das am Grenzübergang bei der Anmeldebox bereitliegt. Diese Zollanmeldung ist jedoch nicht möglich für Waren, die für den Handel bestimmt sind.`,
                links: [
                  {
                    text: "Anmeldebox",
                    url: "https://www.bazg.admin.ch/bazg/de/home/information-private/waren-anmelden/einfuhr-in-die-schweiz/anmeldebox.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Rückerstattung der ausländischen Mehrwersteuer",
            contents: [
              {
                text: `Wenn Sie Waren, die Sie im Ausland gekauft haben, in die Schweiz einführen, haben Sie oftmals die Möglichkeit, sich die ausländische Mehrwertsteuer rückerstatten zu lassen.

Das Bundesamt für Zoll und Grenzsicherheit ist allerdings nicht zuständig für diese Rückerstattung und kann Ihnen zu dieser Rückerstattung auch keine Auskünfte geben.

Zuständig ist vielmehr der ausländische Verkäufer oder ein Tax-Refund-Unternehmen. Die Regeln für die Rückerstattung sind von Land zu Land verschieden. In der Regel händigt Ihnen der Verkäufer ein Rückerstattungsformular aus, auf dem die ausländische Zollbehörde die Ausfuhr der Ware in die Schweiz bestätigen muss.

Wenn die eingeführte Ware einen Gesamtwert von 150 Franken überschreitet, muss bei der Einfuhr in die Schweiz die schweizerische Mehrwertsteuer bezahlt werden, auch wenn die ausländische Mehrwertsteuer nicht rückerstattet wird.`,
                links: [
                  {
                    text: "Rückerstattung der ausländischen Mehrwertsteuer",
                    url: "https://www.bazg.admin.ch/bazg/de/home/information-private/reisen-und-einkaufen--freimengen-und-wertfreigrenze/einfuhr-in-die-schweiz/rueckerstattung-der-auslaendischen-mehrwertsteuer.html",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 17,
    title: "Heikle Waren bei der Einfuhr in die Schweiz",
    description:
      "Je nach Art der Waren oder der Tiere, die Sie bei der Einreise in die Schweiz mitführen, kann es für Sie am Zoll heikel werden. Angaben, die Ihnen bei der Erledigung der Formalitäten an der Grenze und bei der Einreise in die Schweiz helfen können.",
    contents: [
      {
        infos: [
          {
            title: "Private Waren",
            contents: [
              {
                text: `Wenn Sie in die Schweiz einreisen, müssen Sie mitgeführte Waren im Wert von mehr als 150 Franken sowie Lebensmittel, Alkohol oder Tabak über einem für diese Produkte geltenden Wert an der Grenze anmelden.`,
              },
            ],
          },
          {
            title: "Tiere und Pflanzen",
            contents: [
              {
                subtitle: "Tiere",
                text: `Die Zollformalitäten sind verschieden, je nachdem, ob Sie einen Hund, Eidechsenleder oder Waren tierischen Ursprungs in die Schweiz einführen wollen.

Wenn Sie hierzu mehr erfahren möchten, so konsultieren Sie die besonderen Vorschriften über die Einfuhr von Tieren, Tierprodukten und den Artenschutz.`,
                links: [
                  {
                    text: "Vorschriften über die Einfuhr von Tieren, Tierprodukten und den Artenschutz",
                    url: "https://www.bazg.admin.ch/bazg/de/home/information-private/tiere-und-pflanzen/tiere--tierprodukte-und-artenschutz-cites.html",
                  },
                ],
              },
              {
                subtitle: "Pflanzen",
                text: `Aufgepasst bei Feriensouvenirs: Es ist in vielen Fällen verboten, Pflanzen, Früchte, Gemüse, Schnittblumen, Samen oder andere Teile lebender Pflanzen in die Schweiz einzuführen. Erde und bestimmte Holzarten sind ebenfalls betroffen.

Wenn Sie hierzu mehr erfahren möchten, konsultieren Sie die Vorschriften über die Einfuhr von Pflanzen, Schnittblumen und den Artenschutz oder die Informationen zur Pflanzengesundheit.`,
                links: [
                  {
                    text: "Vorschriften über die Einfuhr von Pflanzen, Schnittblumen und den Artenschutz",
                    url: "https://www.bazg.admin.ch/bazg/de/home/information-private/tiere-und-pflanzen/pflanzen--schnittblumen-und-artenschutz-cites.html",
                  },
                  {
                    text: "Informationen zur Pflanzengesundheit",
                    url: "https://www.blw.admin.ch/de/pflanzengesundheit",
                  },
                ],
              },
            ],
          },
          {
            title: "Waffen",
            contents: [
              {
                text: `Zahlreiche Arten von Waffen dürfen nicht in die Schweiz eingeführt werden. Waffen und Munition müssen Sie bei der Einfuhr in die Schweiz bei einer geöffneten Zollstelle anmelden.

Für diese Produkte müssen keine Zollabgaben entrichtet werden, jedoch muss dafür die Mehrwertsteuer (8,1%) bezahlt werden.

Weitere Informationen über die Einfuhr von Waffen und über erforderliche Bewilligungen finden Sie auf der Seite des Bundesamtes für Zoll und Grenzsicherheit über Waffen`,
                links: [
                  {
                    text: "Seite des Bundesamtes für Zoll und Grenzsicherheit über Waffen",
                    url: "https://www.ch.ch/de/zoll/heikle-waren-bei-der-einfuhr-in-die-schweiz/#waffen",
                  },
                ],
              },
            ],
          },
          {
            title: "Geliehendes Fahrzeug",
            contents: [
              {
                text: `Sie können die Schweizer Grenze mit einem geliehenen Fahrzeug überqueren. Um aber zu vermeiden, dass Sie des Diebstahls verdächtigt werden, empfiehlt es sich, eine schriftliche Ermächtigung der Eigentümerin oder des Eigentümers des Fahrzeugs mitzuführen. Sie können zu diesem Zweck ein entsprechendes Bewilligungsformular online herunterladen.

Wenn Sie Ihren Wohnsitz in der Schweiz haben, dürfen Sie grundsätzlich kein unverzolltes Fahrzeug benutzen. Das Bundesamt für Zoll und Grenzsicherheit bietet mehr Informationen über die vorübergehende Verwendung eines unverzollten Fahrzeugs in der Schweiz. `,
                links: [
                  {
                    text: "Bewilligungsformular",
                    url: "https://www.tcs.ch/mam/Digital-Media/PDF/Info-Sheet/bewilligung-zur-benutzung-eines-fahrzeugs-durch-drittpersonen.pdf",
                  },
                  {
                    text: "Unverzolltes Fahrzeug vorübergehend in der Schweiz benutzen",
                    url: "https://www.bazg.admin.ch/bazg/de/home/information-private/strassen--und-wasserfahrzeuge/einfuhr-in-die-schweiz/unverzollte-fahrzeuge-voruebergehende-in-der-schweiz-benutzen.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Bargeld",
            contents: [
              {
                text: `Sie können die Schweizer Grenze mit so viel Barmitteln (Bargeld und Wertpapiere) überqueren, wie Sie wollen. Wenn Sie aber mit mindestens  10 000 Schweizer Franken in bar in die Schweiz einreisen ober bei Verdacht, kann Sie das Zollpersonal befragen. 

Ihre Angaben werden im Informationssystem des Bundesamtes für Zoll und Grenzsicherheit erfasst. Besteht ein Verdacht auf Geldwäscherei oder Terrorismusfinanzierung, kann das Zollpersonal die Barmittel vorläufig sicherstellen und der Polizei übergeben. Weitere Informationen finden Sie auf der Seite Bargeld, Fremdwährung, Wertpapiere.`,
                links: [
                  {
                    text: "Bargeld, Fremdwährung, Wertpapiere",
                    url: "https://www.bazg.admin.ch/bazg/de/home/information-private/verbote--beschraenkungen-und-bewilligungen/bargeld--fremdwaehrung--wertpapiere.html",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 17,
    title: "Umzug in die Schweiz",
    description:
      "Sie leben im Ausland und planen einen Umzug in die Schweiz ­– welche Formalitäten Sie erledigen müssen, damit Ihre Möbel und anderen persönlichen Gegenstände die Grenze problemlos und zollfrei überqueren.",
    contents: [
      {
        infos: [
          {
            title: "Formalitäten für einen Aufenthalt",
            contents: [
              {
                text: `Sind Sie Ausländerin oder Ausländer, so zieht ein Umzug in die Schweiz auch Formalitäten für einen Aufenthalt nach sich. Auf ch.ch finden Sie Informationen zur Aufenthaltsbewilligungen und die Reisedokumente, die Sie für die Einreise in die Schweiz benötigen.`,
              },
            ],
          },
          {
            title: "Wer darf Besitz zollfrei einführen?",
            contents: [
              {
                text: `Im Ausland lebende Personen, die in der Schweiz Wohnsitz nehmen wollen dürfen einen Grossteil ihres Hab und Guts in die Schweiz einführen, ohne dafür Zoll zahlen zu müssen.

Diese Regelung gilt auch, wenn Sie einen Umzug an einen Zweitwohnsitz in der Schweiz planen. Für Fahrzeuge und für Tiere müssen Sie jedoch Zoll zahlen.`,
              },
            ],
          },
          {
            title: "Unter welchen Voraussetzungen?",
            contents: [
              {
                text: `Damit Sie Mobiliar, Haustiere, Sammlungen und Fahrzeuge in die Schweiz einführen können, ohne Zollabgaben zu entrichten, müssen mehrere Voraussetzungen erfüllt sein:

- Sie müssen Ihren Wohnsitz in die Schweiz verlegen und dies beglaubigen lassen. Achtung: Studierende müssen diese Voraussetzung nicht erfüllen, wenn sie ihre Möbel, ihre üblichen persönlichen Gegenstände und ihr Unterrichtsmaterial mitbringen wollen.
- Sie müssen Ihr mitgebrachtes Hab und Gut vor dem Umzug mindestens sechs Monate für Ihren persönlichen Gebrauch verwendet haben und auch zukünftig weiterverwenden.
- Sie müssen während der Öffnungszeiten einer Zollstelle, die für Handelsware zuständig ist, umziehen.`,
                links: [
                  {
                    text: "Öffnungszeiten und Feiertage",
                    url: "https://www.bazg.admin.ch/bazg/de/home/informationen-firmen/oeffnungszeiten-und-feiertage.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Welche Zollformalitäten gibt es?",
            contents: [
              {
                text: `Beim Grenzübertritt müssen Sie an der Zollstelle mehrere Dokumente vorweisen:


- vollständige Auflistung aller einzuführenden Güter (auf einem gesonderten Blatt),
- Formular (im Doppel) für die zollfreie Einfuhr von Umzugsgut, das Sie auf der Website des Bundesamtes für Zoll und Grenzsicherheit herunterladen können,
- Ausweisdokument (Pass oder Identitätskarte),
- ein Dokument, das belegt, dass Sie sich bei den Behörden Ihres Herkunftsstaates abgemeldet haben,
- eine Aufenthaltsbewilligung der Schweiz oder ein anderes Dokument, das den Wohnsitzwechsel belegt (z. B. ein Arbeitsvertrag oder ein Mietvertrag),
- ausländischer Fahrzeugausweis für Fahrzeuge oder eine Zulassungsbestätigung
- Beleg für den Kauf oder die Miete einer Unterkunft.

Vergessen Sie nicht, diese Dokumente einer allfällig von Ihnen beauftragten Umzugsfirma auszuhändigen.

Sie müssen den Grenzübertritt nicht vorgängig dem Zoll ankündigen; dieser Schritt ist aber empfehlenswert, um an gewissen Zollstellen den Ablauf der Formalitäten zu beschleunigen. Das Bundesamt für Zoll und Grenzsicherheit stellt eine Liste der infragekommenden Zollstellen und weitere Informationen auf der Webseite Umzug (Übersiedlungsgut) zur Verfügung.`,
                links: [
                  {
                    text: "Umzug (Übersiedlungsgut)",
                    url: "https://www.bazg.admin.ch/bazg/de/home/information-private/uebersiedlung--studium--feriendomizil--heirat-und-erbschaft/einfuhr-in-die-schweiz/umzug--uebersiedlungsgut-.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Welche Fristen gelten?",
            contents: [
              {
                text: `Wollen Sie Ihr Hab und Gut zollfrei einführen, müssen Sie dies innert zwei Jahren ab dem Zeitpunkt des Umzugs tun.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 17,
    title: "Waren im Ausland bestellen",
    description:
      "Wenn Sie Waren im Ausland bestellen, müssen Sie damit rechnen, dass Sie bei der Einfuhr in die Schweiz Zollabgaben entrichten müssen. Übersicht über die bei Online-Käufen zu erwartenden Kosten.  ",
    contents: [
      {
        infos: [
          {
            title: "Welche Sendungen sind zollpflichtig?",
            contents: [
              {
                subtitle: "Warenimport in die Schweiz",
                text: `Grundsätzlich sind für jede Warensendung aus dem Ausland Zollabgaben und die schweizerische Mehrwertsteuer zu bezahlen.

In den meisten Fällen bezahlt der Absender nur die Transportkosten. Die Zollabgaben, die Mehrwertsteuer und die Kosten für die Verzollung gehen automatisch zulasten der Empfängerin oder des Empfängers, wenn der Absender auf den Begleitpapieren zur Ware nicht ausdrücklich andere Handelsbedingungen vermerkt hat.

In der Praxis werden Steuerbeträge bis 5 Franken nicht erhoben. Somit müssen Sie keine Steuer bezahlen, wenn der Wert des Pakets unter 193 Franken liegt (inklusive Transport- und Verpackungskosten). Dies gilt für Bücher und andere Waren mit reduziertem Mehrwertsteuersatz von 2,6 %. Bei Waren, für die ein Mehrwertsteuersatz von 8,1 % gilt, muss der Wert des Pakets dafür unter 62 Franken liegen.

Sie müssen auch keine Abgaben bezahlen, wenn Sie von einer Privatperson im Ausland ein Geschenk im Wert von höchstens 100 Franken erhalten. Diese Ausnahme gilt aber nicht für Tabak und Alkohol. Absender müssen Geschenksendungen als solche deklarieren.`,
              },
              {
                subtitle: "Durchreise durch die Schweiz",
                text: `Wer mit persönlichen Waren durch die Schweiz reist, muss diese bei der Einreise deklarieren. Zollabgaben werden bei der Ausreise (in CHF) zurückerstattet.

Wenn Sie die Schweiz verlassen, brauchen Sie keine Ausfuhrformalitäten. Prüfen Sie aber die Einfuhrregeln Ihres Ziellands.`,
              },
            ],
          },
          {
            title: "Wie viel kostet es?",
            contents: [
              {
                text: `Der Betrag kann sehr variieren. Als Empfängerin oder Empfänger einer Paketsendung in der Schweiz müssen Sie folgende Kosten tragen:

- Mehrwertsteuer auf dem Wert der Ware (einschliesslich Versandkosten und Zollabgaben)
- Zollabgaben auf dem Bruttogewicht
- Andere Abgaben wie Zum Beispiel Tabaksteuer oder Spirituosensteuer
- Kosten für den Transport der Ware

Im Post- und Kurierverkehr erledigen die Transporteure (z. B. Post, DHL, UPS) die Formalitäten der Verzollung. Sie verlangen eine entsprechende Entschädigung; diese kann je nach Herkunftsland der Ware variieren. Die schweizerische Post verlangt mindestens 11.50 Franken und höchstens 70 Franken für die Verzollung.
Sie hat FAQ zu den Kosten bei der Einfuhr von Paketsendung publiziert.`,
                links: [
                  {
                    text: "FAQ zu den Kosten bei der Einfuhr von Paketsendung",
                    url: "https://www.post.ch/de/geschaeftsloesungen/export-import-und-verzollung/import/faq-import-zoll-und-mwst",
                  },
                ],
              },
            ],
          },
          {
            title: "Wo bleibt mein Paket?",
            contents: [
              {
                text: `Wenn die von Ihnen online bestellte Ware nicht ankommt, wenden Sie sich an den Verkäufer der Ware im Ausland oder an den Kundendienst des Transporteurs. Das Bundesamt für Zoll und Grenzsicherheit kann Ihnen bei diesen Fragen nicht weiterhelfen. Online-Verkaufsplattformen versenden in der Regel eine Mitteilung mit einem Link, über den Sie den Weg der bestellten Waren zu Ihnen in Echtzeit nachverfolgen können.
`,
              },
            ],
          },
        ],
      },
    ],
  },
];

const infoArbeit: Information[] = [
  {
    localeId: 2,
    categoryId: 18,
    title: "Als Ausländer/in in der Schweiz arbeiten",
    description:
      "Die meisten Ausländerinnen und Ausländer benötigen eine Erlaubnis, wenn sie in der Schweiz arbeiten wollen. Wie man zu einer solchen Erlaubnis kommt, hängt von der Staatsangehörigkeit und der Art der angestrebten Arbeit ab.",
    contents: [
      {
        infos: [
          {
            title: "Staatsangehörige der EU/EFTA",
            contents: [
              {
                text: `Dank der Personenfreizügigkeit mit der EU/EFTA können Sie in die Schweiz einreisen, hier wohnen und arbeiten.`,
              },
              {
                subtitle: "Was ist zu tun für eine Tätigkeit von kurzer Dauer?",
                text: `Sie benötigen keine Aufenthaltsbewilligung, wenn Sie für einen Arbeitgeber in der Schweiz maximal drei Monate arbeiten. Das gilt auch, wenn Sie eine Dienstleistung in der Schweiz während maximal 90 Tage pro Kalenderjahr erbringen.

Ihr Arbeitgeber muss jedoch Ihre Erwerbstätigkeit mit dem Meldeverfahren für kurzfristige Erwerbstätigkeit spätestens einen Tag vor Beginn Ihrer Tätigkeit anzeigen.`,
                links: [
                  {
                    text: "Meldeverfahren für kurzfristige Erwerbstätigkeit",
                    url: "https://www.sem.admin.ch/sem/de/home/themen/fza_schweiz-eu-efta/meldeverfahren.html",
                  },
                ],
              },
              {
                subtitle: "Was ist zu tun für eine Tätigkeit von mehr als drei Monaten?",
                text: `Sie müssen vor Aufnahme Ihrer Erwerbstätigkeit eine Aufenthaltsbewilligung bei Ihrer Wohnsitzgemeinde in der Schweiz beantragen. Dazu müssen Sie folgende Dokumente vorlegen:

- gültige Identitätskarte oder gültigen Pass
- eine Erklärung Ihres Arbeitgebers, dass er Sie anstellen wird, oder eine Arbeitsbestätigung (z. B. Arbeitsvertrag).

Die Aufenthaltsbewilligung ist für die ganze Schweiz gültig; sie erlaubt es, die Arbeit oder den Arbeitgeber zu wechseln. Ihre Gültigkeitsdauer hängt von der Dauer der Anstellung ab.`,
              },
              {
                subtitle: "Was müssen Selbstständigerwerbende tun?",
                text: `Sie müssen Ihre Ankunft innert 14 Tagen bei der Wohnsitzgemeinde melden und dort eine Aufenthaltsbewilligung beantragen.

Dazu müssen Sie folgende Dokumente vorlegen:

- gültige Identitätskarte oder gültigen Pass
- Dokumente, die belegen, dass Sie eine selbstständige Erwerbstätigkeit ausüben oder ausüben werden, deren Einnahmen es Ihnen erlaubt, für Ihren Lebensunterhalt und denjenigen Ihrer Familie aufzukommen (z. B. Geschäfts- oder Rechnungsbücher).
`,
              },
              {
                subtitle: "Wie sucht man eine Anstellung in der Schweiz?",
                text: `Sie können in die Schweiz einreisen und während höchstens sechs Monate eine Anstellung suchen. Für die ersten drei Monate benötigen Sie keine Bewilligung. Anschliessend können Sie eine Kurzaufenthaltsbewilligung EU/EFTA beantragen. Diese gilt für drei Monate pro Jahr; vorausgesetzt ist aber, dass Sie für Ihren Lebensunterhalt aufkommen können.

Weitere Informationen finden Sie auf der Seite EU/EFTA-Bürgerinnen und -Bürger: Leben und Arbeiten in der Schweiz des Staatssekretariats für Migration, oder Sie wenden sich an die kantonalen Migrations- oder Arbeitsmarktbehörden`,
                links: [
                  {
                    text: "EU/EFTA-Bürgerinnen und -Bürger: Leben und Arbeiten in der Schweiz",
                    url: "https://www.sem.admin.ch/sem/de/home/themen/fza_schweiz-eu-efta/eu-efta_buerger_schweiz.html",
                  },
                  {
                    text: "Kantonale Migrations- und Arbeitsmarktbehörden",
                    url: "https://www.sem.admin.ch/sem/de/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html",
                  },
                ],
              },
            ],
          },
          {
            title: "UK-Staatsangehörige",
            contents: [
              {
                text: `Seit dem 1. Januar 2021 sind Staatsangehörige des Vereinigten Königreichs (UK) nicht mehr EU-Bürgerinnen und -Bürger. Für Sie gelten nun die Kontingente und die übrigen Bestimmungen für Personen aus Drittstaaten.

Falls Sie bereits vor 2021 ein Aufenthaltsrecht in der Schweiz hatten, können Sie von den besonderen Bestimmungen im Abkommen zwischen der Schweiz und dem Vereinigten Königreich über die erworbenen Rechte der Bürgerinnen und Bürger profitieren.

Dier Schweiz und das Vereinigte Königreich haben zudem ein Abkommen geschlossen über die Freizügigkeit von Dienstleistungserbringern. Bis Ende 2025 melden sich Dienstleistungserbringer aus dem Vereinigten Königreich für eine Tätigkeit von kurzer Dauer in der Schweiz, das heisst von nicht mehr als 90 Tagen pro Kalenderjahr, über das Meldeverfahren für kurzfristige Erwerbstätigkeit an.

Weitere Informationen finden Sie auf der Seite Vereinigtes Königreich des Staatssekretariats für Migration sowie unter der Rubrik Sie sind nicht Bürger/in der EU/EFTA.`,
                links: [
                  {
                    text: "UK-Staatsangehörige mit erworbenen Rechten",
                    url: "https://www.sem.admin.ch/sem/de/home/themen/arbeit/uk/erworbene-rechte.html",
                  },
                  {
                    text: "Meldeverfahren für kurzfristige Erwerbstätigkeit",
                    url: "https://www.sem.admin.ch/sem/de/home/themen/fza_schweiz-eu-efta/meldeverfahren.html",
                  },
                  {
                    text: "Vereinigtes Königreich",
                    url: "https://www.sem.admin.ch/sem/de/home/themen/arbeit/uk.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Nicht-EU/EFTA-Angehörige",
            contents: [
              {
                subtitle: "Wer kann in der Schweiz arbeiten?",
                text: `Staatsangehörige von Staaten ausserhalb von EU/EFTA können in der Schweiz nur arbeiten, wenn sie besonders qualifiziert sind. Darunter fallen etwa Kaderleute, Fachkräfte, Personen mit einem Lehrdiplom für höhere Schulen mit mehrjähriger Berufserfahrung.

Eine Arbeitsbewilligung ist auch für eine Erwerbstätigkeit von kurzer Dauer nötig, und die Anzahl Bewilligungen, ist beschränkt.

Eine Bewilligung kann auch für die Ausübung einer selbstständigen Erwerbstätigkeit erteilt werden. Die Ehepartner von Personen mit Schweizer Bürgerrecht oder mit einer Niederlassungsbewilligung brauchen keine Bewilligung.`,
                links: [
                  {
                    text: "QuickZoll-App",
                    url: "https://www.bazg.admin.ch/bazg/de/home/services/services-private/services-private-einfuhr/quickzoll-app.html",
                  },
                ],
              },
              {
                subtitle: "Voraussetzungen?",
                text: `Ihr künftiger Arbeitgeber muss aufzeigen, dass es im wirtschaftli­chen Interesse der Schweiz ist, wenn er Sie anstellt, und dass er auf dem Arbeitsmarkt der Schweiz und der EU/EFTA kein geeig­netes Personal finden konnte.

Der Arbeitgeber muss Sie zu den gleichen Lohn- und Arbeitsbedingungen beschäftigen wie Schweizer Staatsangehörige.`,
              },
              {
                subtitle: "Wie bekommt man eine Bewilligung?",
                text: `In der Schweiz muss Ihr künftiger Arbeitgeber die nötigen Schritte unternehmen, um bei der kantonalen Migrations- und Arbeitsmarkt­behörde eine Arbeitsbewilligung zu bekommen.

Fall Sie aber eine selbstständige Erwerbstätigkeit ausüben wollen, müssen Sie sich selber um die Bewilligung kümmern.

Sie erfahren mehr über das Verfahren für Nicht-EU/EFTA-Angehörige auf der Seite des Staatssekretariats für Migration.

Die Arbeitsbewilligung gibt nicht unbedingt das Recht auf Einreise in die Schweiz. Je nach Staatsangehörigkeit brauchen Sie auch noch ein Visum.

Klären Sie ab, ob Sie das betrifft und wie Sie vorgehen müssen. Konsultieren Sie dazu die Seite Visa für Ausländer/innen.

Nach Ihrer Ankunft in der Schweiz müssen Sie sich innert 14 Tagen bei der Einwohnerkontrolle Ihrer Wohnsitzgemeinde anmelden. Bevor Sie das nicht gemacht haben, dürfen Sie Ihre Arbeit nicht aufnehmen.`,
                links: [
                  {
                    text: "Kantonale Migrations- und Arbeitsmarktbehörden",
                    url: "https://www.sem.admin.ch/sem/de/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html",
                  },
                  {
                    text: "Verfahren für Nicht-EU/EFTA-Angehörige",
                    url: "https://www.sem.admin.ch/sem/de/home/themen/arbeit/nicht-eu_efta-angehoerige/verfahrensablauf.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Vergessen Sie nicht, sich zu versichern",
            contents: [
              {
                text: `Wenn Sie in die Schweiz kommen, um zu arbeiten, treten Sie ein in das Schweizer System der Sozialversicherungen. Nicht alle Versicherungsbeiträge werden direkt vom Lohn abgezogen.

Die Krankenversicherung ist obligatorisch, aber privat. Sie müssen für sich und ihre Familie bei einer privaten Krankenkasse einen Vertrag abschliessen, und zwar innert drei Monaten seit Ihrer Einreise oder seit Aufnahme der Erwerbstätigkeit in der Schweiz. Weitere Informationen finden Sie auf der Seite Eine Krankenversicherung abschliessen.

Eine private Unfallversicherung müssen Sie nur dann abschliessen, wenn Sie weniger als acht Stunden pro Woche arbeiten. Arbeiten Sie mehr, so muss Ihr Arbeitgeber Sie versichern, und die Versicherungsprämie wird Ihnen vom Lohn abgezogen.`,
                links: [
                  {
                    text: "Schweizer System der Sozialversicherung",
                    url: "https://www.ahv-iv.ch/de/Sozialversicherungen",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Altersvorsorge///Wie funktioniert die Altersvorsorge?",
    description:
      "In der Schweiz besteht die Altersvorsorge aus drei Säulen. Ziel ist, dass Menschen im Rentenalter ihre Grundkosten decken können und ihnen ein angemessener Lebensstandard garantiert ist:",
    contents: [
      {
        infos: [
          {
            title: "Das 3-Säulen-System",
            contents: [
              {
                text: `Das schweizerische System der Altersvorsorge besteht aus: der staatlichen Vorsorge (1. Säule), der beruflichen Vorsorge (2. Säule) und der privaten Vorsorge (3. Säule).

Jede der drei Säulen hat ihren eigenen Zweck.`,
              },
            ],
          },
          {
            title: "Die erste Säule",
            contents: [
              {
                text: `Die erste (obligatorische) Säule besteht namentlich aus der Altersversicherung. Mit ihr soll sichergestellt werden, dass Sie ein minimales Einkommen haben, das die Grundkosten deckt, wenn Sie das Rentenalter erreichen.

Die erste Säule basiert auf dem Grundsatz der Solidarität: Die berufstätige Bevölkerung bezahlt die Beiträge und finanziert damit die Renten der pensionierten Bevölkerung. Wer besser verdient und somit höhere Beiträge bezahlt, unterstützt die weniger wohlhabenden Versicherten, die tiefere Beiträge bezahlen.

Dank der Hinterlassenenversicherung erhalten Sie auch Hilfeleistungen, wenn Ihr Ehemann oder Ihre Ehefrau oder aber ein Elternteil oder beide Eltern sterben; so soll verhindert werden, dass Sie in finanzielle Schwierigkeiten geraten.

Reicht die Alters- und Hinterlassenenversicherung (AHV) nicht aus, um Ihre Grundkosten zu decken, sind in der ersten Säule weitere Hilfeleistungen vorgesehen: die Ergänzungsleistungen.`,
                links: [
                  {
                    text: "Grundsatz der Solidarität",
                    url: "https://www.ahv-iv.ch/de/Sozialversicherungen/Alters-und-Hinterlassenenversicherung-AHV/Allgemeines#qa-730",
                  },
                  {
                    text: "Ergänzungsleistungen EL",
                    url: "https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ergaenzungsleistungen.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Die zweite Säule",
            contents: [
              {
                text: `Die berufliche Vorsorgen, auch Pensionskasse oder BVG genannt, ist für die meisten erwerbstätigen Menschen obligatorisch. Sie ergänzt die AHV-Rente und soll es Ihnen ermöglichen, auch nach der Pensionierung einen angemessenen Lebensstandard aufrechtzuerhalten.

Der Betrag aus der ersten und der zweiten Säule garantiert Ihnen ein Einkommen, das in etwa 60 Prozent des Einkommens vor der Pensionierung entspricht.`,
              },
            ],
          },
          {
            title: "Die dritte Säule",
            contents: [
              {
                text: `Mit der dritten Säule haben Sie die Möglichkeit, Ihre Altersrente zu verbessern.

Im Gegensatz zu den beiden anderen Säulen ist die dritte Säule nicht obligatorisch. Es handelt sich um eine individuelle und private, freiwillige Versicherung. Versichern können Sie sich, solange Sie erwerbstätig sind und wenn Sie beabsichtigen, im Hinblick auf die Pensionierung zusätzliches Geld auf die Seite zu legen. und der zweiten Säule garantiert Ihnen ein Einkommen, das in etwa 60 Prozent des Einkommens vor der Pensionierung entspricht.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Altersvorsorge///1. Säule (AHV)",
    description:
      "Die erste Säule oder umgangssprachlich «die AHV» ist die staatliche Alters-, Hinterlassenen- und Invalidenversicherung (AHV/IV). Sie bildet die Basis des Schweizer Vorsorgesystems und soll existenzsichernde Leistungen auszahlen. Diese werden in Form von Alters-, Invaliden- oder Hinterbliebenen-Renten erbracht.",
    contents: [
      {
        infos: [
          {
            title: "AHV-Ausweis",
            contents: [
              {
                subtitle: "Den AHV-Ausweis bestellen",
                text: `Wenn Sie noch keinen AHV-Ausweis besitzen oder Ihren AHV-Ausweis verloren haben, können Sie einen solchen beantragen, indem Sie das Formular, das Sie im Internet finden, ausfüllen und dieses bei der zuständigen Stelle einreichen.`,
              },
              {
                subtitle: "Sie sind angestellt",
                text: `Falls Sie noch keinen AHV-Ausweis besitzen oder Ihren AHV-Ausweis verloren haben, können Sie das entsprechende Formular ausfüllen, das Sie auf der Internetsite des Informationsstelle der AHV/IV finden, und dieses bei ihrem Arbeitgeber einreichen.

So werden Sie eine (neue) AHV-Karte erhalten.`,
                links: [
                  {
                    text: "Entsprechende Formular ",
                    url: "https://www.ahv-iv.ch/de/Formulare/Formulare/Allgemeine-Verwaltungsformulare",
                  },
                ],
              },
              {
                subtitle: "Sie sind selbstständig oder Sie arbeiten nicht",
                text: `Falls Sie noch keinen AHV-Ausweis besitzen oder Ihren AHV-Ausweis verloren haben, können Sie das entsprechende Formular ausfüllen, das Sie auf der Internetsite des Informationsstelle der AHV/IV finden, und dieses bei Ihrer Verbandsausgleichskasse oder bei der kantonalen Ausgleichskasse, die für die Erhebung der Versicherungsbeiträge zuständig ist, einreichen.

So werden Sie eine (neue) AHV-Karte erhalten.`,
                links: [
                  {
                    text: "Entsprechende Formular",
                    url: "https://www.ahv-iv.ch/de/Formulare/Formulare/Allgemeine-Verwaltungsformulare",
                  },
                  {
                    text: "Verbandsausgleichskasse",
                    url: "https://www.ahv-iv.ch/de/Kontakte/Verbandsausgleichskassen",
                  },
                  {
                    text: "Kantonale Ausgleichskassen",
                    url: "https://www.ahv-iv.ch/de/Kontakte/Kantonale-Ausgleichskassen",
                  },
                ],
              },
              {
                subtitle: "Sie leben im Ausland",
                text: `Falls Sie noch keinen AHV-Ausweis besitzen oder Ihren AHV-Ausweis verloren haben und im Ausland leben, müssen Sie sich an die Schweizerische Ausgleichskasse SAK wenden, die Ihnen einen (neuen) Ausweis ausstellen wird.

Wenn Sie im Ausland leben und in der Schweiz arbeiten, lesen Sie die Kapitel «Sie sind angestellt oder "Sie sind selbstständig oder Sie arbeiten nicht», um einen (neuen) AHV-Ausweis zu erhalten.`,
                links: [
                  {
                    text: "Schweizerische Ausgleichskasse SAK",
                    url: "https://www.ahv-iv.ch/de/Kontakte/Schweizerische-Ausgleichskasse-SAK",
                  },
                ],
              },
            ],
          },
          {
            title: "AHV-Beiträge",
            contents: [
              {
                text: `In der Schweiz sind Sie verpflichtet, bis zum Pensionsalter (genauer Referenzalter) AHV-Beiträge zu bezahlen, damit Ihnen eine Altersrente sicher ist. Falls Sie die Beiträge nicht immer bezahlt haben, können Sie die fehlenden Beiträge in gewissen Fällen noch nachzahlen.`,
              },
              {
                subtitle: "Wer muss AHV-Beiträge bezahlen?",
                text: `Alle Personen, die in der Schweiz leben oder arbeiten, müssen ab dem 1. Januar, nachdem sie das 20. Lebensjahr vollendet haben, bis zum Pensionsalter (genauer Referenzalter) AHV-Beiträge bezahlen. Diese Pflicht beginnt mit 17 Jahren, falls Sie bereits arbeiten, und besteht weiterhin, wenn Sie nach dem Pensionsalter erwerbstätig bleiben.

Die Altersrente, die Sie nach der Pensionierung erhaltenen, ist abhängig von der Gesamtsumme der AHV-Beiträge, die Sie während Ihres Lebens einbezahlt haben.`,
                links: [
                  {
                    text: "Referenzalter",
                    url: "https://www.ahv-iv.ch/de/Sozialversicherungen/Glossar/term/referenzalter",
                  },
                ],
              },
              {
                subtitle: "Wie hoch die Beiträge sind",
                text: ``,
              },
              {
                subtitle: "Sie gehen keiner Erwerbsstätigkeit nach",
                text: `Falls Sie keiner Erwerbstätigkeit nachgehen, müssen Sie der AHV einen Beitrag von mindestens 530 Franken pro Jahr bezahlen (abhängig von Ihrer Situation). Dies ist beispielsweise der Fall, wenn Sie studieren oder frühpensioniert sind, wenn Sie eine Rente der Invalidenversicherung oder Kranken- oder Unfalltaggelder erhalten oder wenn Sie arbeitslos und bereits ausgesteuert sind. In diesem Betrag sind auch die obligatorischen Beiträge für die Invalidenversicherung und die Erwerbsersatzentschädigung enthalten.

Bitte beachten Sie: Verheiratete Personen, die nicht erwerbstätig sind, müssen nichts bezahlen, wenn ihre Ehefrau oder ihr Ehemann erwerbstätig ist und mindestens das Doppelte des jährlichen Mindestbetrags bezahlt (also 530 Franken x 2 = 1060 Franken). Dasselbe gilt für die Partnerin oder den Partner in einer eingetragenen Partnerschaft.

Auf der Internetsite des Bundesamtes für Sozialversicherungen können Sie online die Beiträge berechnen, die Sie in Ihrem Fall entrichten müssen.`,
                links: [
                  {
                    text: "Keiner Erwerbstätigkeit nachgehen",
                    url: "https://www.ahv-iv.ch/p/2.03.d",
                  },
                  {
                    text: "Online die Beiträge berechnen, die Sie in Ihrem Fall entrichten müssen.",
                    url: "https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "Sie sind angestellt",
                text: `Die AHV-Beiträge (8,7 Prozent des Lohns) werden je zur Hälfte von Ihnen und von Ihrem Arbeitgeber bezahlt. Dieser kümmert sich um alles; er zieht die AHV-Beiträge direkt auf Ihrer Lohnabrechnung ab und überweist sie an die Ausgleichskasse.

Bitte beachten Sie: Neben den AHV-Beiträgen müssen Sie und Ihr Arbeitgeber auch die obligatorischen Beiträge für die Invalidenversicherung und die Erwerbsersatzentschädigung sowie für die Arbeitslosenversicherung bezahlen.
`,
                links: [
                  {
                    text: "Online die Beiträge berechnen, die Sie in Ihrem Fall entrichten müssen.",
                    url: "https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "Sie üben eine selbstständige Erwerbstätigkeit aus",
                text: `Falls Sie eine selbstständige Erwerbstätigkeit ausüben, müssen Sie die AHV-Beiträge selber bezahlen (gewöhnlich 8,1 Prozent Ihres Einkommens). Wenden Sie sich an eine Ausgleichskasse, um zu wissen, wie sie vorgehen müssen.

Bitte beachten Sie: Neben den AHV-Beiträgen müssen Sie auch die obligatorischen Beiträge für die Invalidenversicherung und die Erwerbsersatzschädigung bezahlen.

Auf der Internetsite des Bundesamtes für Sozialversicherungen können Sie online die Beiträge berechnen, die Sie in Ihrem Fall entrichten müssen.`,
                links: [
                  {
                    text: "Online die Beiträge berechnen, die Sie in Ihrem Fall entrichten müssen.",
                    url: "https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "Sie arbeiten über das Pensionsalter hinaus",
                text: `Falls sie über Ihr Pensionsalter hinaus arbeiten, müssen Sie weiterhin AHV/IV/EO-Beiträge bezahlen.

Arbeitslosenversicherungsbeiträge müssen Sie hingegen nicht mehr entrichten: Ab dem ordentlichen Pensionsalter haben sie nämlich keinen Anspruch mehr auf Arbeitslosenentschädigung.

Die Beiträge, die Sie in dieser Zeit leisten, werden auf dem Teil ihres Lohns erhoben, der einen bestimmten Freibetrag übersteigt (gegenwärtig 16 800 Franken pro Jahr). Auf die Anwendung des Freibetrags können Sie jedoch verzichten, um auf das gesamte Einkommen Beiträge abzurechnen. Falls Sie für verschiedene Arbeitgeber tätig sind, gilt der Freibetrag für jedes einzelne Arbeitsverhältnis.

Sind Sie nicht während des ganzen Jahres erwerbstätig, wird der jährliche Freibetrag anteilsmässig erhoben.

Auf der Internetsite des Bundesamtes für Sozialversicherungen können Sie online die Beiträge berechnen, die Sie in Ihrem Fall entrichten müssen.
`,
                links: [
                  {
                    text: "Online die Beiträge berechnen",
                    url: "https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "Sie gehen ins Ausland",
                text: `Wenn Sie ins Ausland gehen, zahlen sie gewöhnlich keine AHV-Beiträge mehr in der Schweiz.

In gewissen Fällen (beispielsweise wenn Sie nur für eine begrenzte Zeit weg sind oder wenn Sie für einen Schweizer Arbeitgeber arbeiten) und unter Einhaltung gewisser Bedingungen, können Sie weiterhin die obligatorischen AHV-Beiträge in der Schweiz bezahlen oder aber wenigstens der freiwilligen AHV beitreten (beispielsweise wenn sie sich in ein Land begeben, das nicht zu den EU-/EFTA-Staaten gehört).

Um im Detail zu wissen, welche Möglichkeiten sich Ihnen in Ihrem Fall bieten, wenden Sie sich direkt an Ihre AHV-Ausgleichskasse oder an die schweizerische Auslandvertretung in ihrem künftigen Wohnsitzland.
`,
                links: [
                  {
                    text: "Online die Beiträge berechnen",
                    url: "https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ueberblick/beitraege.html",
                  },
                ],
              },
              {
                subtitle: "Einen Kontoauszug Ihrer geleisteten AHV-Beiträge bestellen",
                text: `Sie können zu jedem Zeitpunkt einen Kontoauszug Ihrer AHV-Beiträge bestellen. Falls Sie Fehler oder Ungenauigkeiten feststellen, können Sie von der Ausgleichskasse verlangen, dass sie den Auszug innerhalb von 30 Tagen, nachdem Sie ihn erhalten haben, korrigiert.`,
              },
              {
                subtitle: "Lücken bei den AHV-Beitragszahlungen",
                text: `Das Bezahlen der AHV-Beiträge ist obligatorisch. Dennoch ist es aus verschiedenen Gründen möglich, dass Sie die Beiträge nicht immer bezahlt und daher Beitragslücken haben.

Beispiel: fehlende Beitragszahlungen während dem Studium.

Wenn Sie die Beiträge nicht immer bezahlt haben, erhalten Sie eine tiefere AHV-Rente. Wenn Ihnen zum Beispiel ein Beitragsjahr fehlt, wird Ihre Rente rund 2,3 Prozent tiefer ausfallen.

Sie können grundsätzlich die fehlenden Beiträge nachzahlen. Dies ist jedoch nur für Lücken in den letzten fünf Jahren möglich. Beitragslücken, die früher entstanden sind, können nicht mittels Nachzahlungen wettgemacht werden.

Wenn Sie hingegen nach Erreichen des Referenzalters weiterarbeiten, können Sie unter gewissen Voraussetzungen mit den bezahlten Beiträgen Lücken füllen und allenfalls ihre Rente verbessern.

Wenden Sie sich an die für sie zuständige Ausgleichskasse; sie wird Ihnen erklären, wie Sie vorgehen müssen.`,
              },
            ],
          },
          {
            title: "AHV-Nummer",
            contents: [
              {
                text: `Falls Sie nicht wissen, wie Ihre AHV-Nummer lautet, können Sie bei Ihrer Krankenkasse oder bei Ihrem Arbeitgeber nachfragen.`,
              },
              {
                subtitle: "Was ist die AHV-Nummer?",
                text: `Eine AHV-Nummer erhalten alle Menschen, die in der Schweiz leben oder arbeiten: Sie dient als Sozialversicherungsnummer; Sie benötigen sie aber auch in anderen administrativen Bereichen.

Die Nummer besteht aus 13 Ziffern. Sie ist anonym, wird zufällig generiert und es ist nicht möglich, anhand der Nummer auf eine Person zu schliessen.`,
                links: [
                  {
                    text: "Sozialversicherung",
                    url: "https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ahv/grundlagen-gesetze/ahv-nummer.html",
                  },
                ],
              },
              {
                subtitle: "Leben oder arbeiten in der Schweiz",
                text: `Falls Sie in der Schweiz leben oder arbeiten, erhalten Sie eine AHV-Nummer unabhängig davon, ob Sie die Schweizer oder eine andere Staatsbürgerschaft haben. Auch Grenzgängerinnen und Grenzgänger erhalten eine AHV-Nummer.

Sie finden Ihre AHV-Nummer auf Ihrer schweizerischen Krankenversicherungskarte.

Falls Sie angestellt sind, können Sie Ihre AHV-Nummer auch bei Ihrem Arbeitgeber erfragen.

Falls Sie selbstständig sind, können Sie sich auch an Ihre Ausgleichskasse (Verbandsausgleichskasse oder Ausgleichskasse Ihres Wohnkantons) wenden.`,
                links: [
                  {
                    text: "Verbandsausgleichskasse",
                    url: "https://www.ahv-iv.ch/de/Kontakte/Verbandsausgleichskassen",
                  },
                  {
                    text: "Kantonale Ausgleichskassen",
                    url: "https://www.ahv-iv.ch/de/Kontakte/Kantonale-Ausgleichskassen",
                  },
                ],
              },
              {
                subtitle: "Leben im Ausland",
                text: `Die AHV-Nummer bleibt ein Leben lang gültig. Wenn Sie die Schweiz verlassen haben und im Ausland nicht für ein Schweizer Unternehmen arbeiten, aber Ihre AHV-Nummer trotzdem kennen sollten, können Sie mit diesem Formular ein Duplikat Ihres Versicherungsausweises bestellen.`,
                links: [
                  {
                    text: "Formular",
                    url: "https://www.zas.admin.ch/zas/de/home/services-en-ligne/particuliers/duplicata-du-certificat-d-assurance.html",
                  },
                ],
              },
              {
                subtitle: "Die AHV-Nummer Ihrer Kinder",
                text: `Jedes Kind, das in der Schweiz lebt, erhält eine AHV-Nummer.

Die AHV-Nummer Ihrer Kinder finden Sie daher auf der Krankenversicherungskarte oder indem Sie bei der Krankenkasse Ihres Kindes nachfragen.`,
              },
              {
                subtitle: "Wenn Sie in der Schweiz studieren",
                text: `Wenden Sie sich direkt an Ihre Hochschule oder Bildungsinstitution, um Ihre AHV-Nummer zu erfahren. Sie können bei der kantonalen Ausgleichskasse am Ort Ihres Studiums auch ein Versicherungszertifikat verlangen - und zwar mit diesem Formular.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Altersvorsorge///2. Säule (Pensionskasse)",
    description:
      "Die 2. Säule ist als Ergänzung zur 1. Säule gedacht, damit Sie sicher sein können, im Ruhestand eine angemessene Rente zu erhalten. Wenn Sie die Schweiz verlassen, sich selbstständig machen oder Wohneigentum kaufen, können Sie sich das Kapital, das Sie bis zu diesem Zeitpunkt angespart haben, auch vorzeitig auszahlen lassen.",
    contents: [
      {
        infos: [
          {
            title: "Zweck der 2. Säule",
            contents: [
              {
                text: `Das schweizerische System der Altersvorsorge besteht aus drei Säulen. Die 2. Säule hat zusammen mit der 1. Säule den Hauptzweck, Ihnen im Ruhestand ein angemessenes Einkommen zu sichern. Um davon profitieren zu können, müssen Sie während Ihres Erwerbslebens monatliche Beiträge bezahlen. Unter bestimmten Umständen können Sie dieses Geld auch schon vor der Pensionierung beziehen.`,
              },
            ],
          },
          {
            title: "Versicherte Personen",
            contents: [
              {
                text: `Die Beiträge an die 2. Säule sind für Sie obligatorisch, wenn Sie sämtliche der folgenden Voraussetzungen erfüllen:

- Sie sind mindestens 17 Jahre alt.
- Sie sind bei der 1. Säule (AHV) versichert.
- Sie sind angestellt und verdienen mindestens 22 680 Franken im Jahr.

Bitte beachten Sie: Falls Sie die Bedingungen nicht erfüllen, können Sie sich auch freiwillig versichern lassen:

- Falls ihr Einkommen tiefer ist als 22 680 Franken pro Jahr, kann Ihr Arbeitgeber Sie freiwillig bei einer Einrichtung der 2. Säule versichern.
- Falls Sie selbstständigerwerbend sind oder falls Sie einen befristeten Arbeitsvertrag mit kurzer Dauer (höchstens drei Monate) haben, sind Sie nicht verpflichtet, Beiträge zu bezahlen. Sie können sich aber entscheiden, dies auf freiwilliger Basis zu tun.`,
              },
            ],
          },
          {
            title: "Die Beiträge an die 2. Säule",
            contents: [
              {
                text: `Die Beiträge an die 2. Säule müssen Sie und Ihr Arbeitgeber je zur Hälfte bezahlen. Ihr Arbeitgeber kann auch entscheiden, mehr als die Hälfte zu übernehmen.

Sie brauchen sich um nichts zu kümmern. Ihr Arbeitgeber zieht Ihre Beiträge direkt von Ihrem Lohn ab und überweist sie auf Ihr Konto bei der Vorsorgeeinrichtung seiner Wahl.

Falls Sie selbstständigerwerbend sind und sich entscheiden, freiwillig BVG-Beiträge zu zahlen, können Sie sich an eine Vorsorgeeinrichtung Ihrer Wahl wenden, um das Vorgehen in Erfahrung zu bringen.

Da die 2. Säule von privaten Vorsorgeeinrichtungen geführt wird, von denen jede ihr eigenes Reglement hat, ist die Summe, die Sie überweisen müssen, kein fixer Betrag, sondern kann je nach Einrichtung verschieden sein.`,
              },
            ],
          },
          {
            title: "Die 2. Säule und das Freizügigkeitskonto",
            contents: [
              {
                text: `Falls Ihr Jahreseinkommen unter 22 680 Franken (Eintrittsschwelle) sinkt, Sie arbeitslos werden oder Sie für einige Zeit ins Ausland gehen oder wenn Sie wegen einer Ausbildung mit Arbeiten aussetzen, sind Sie nicht mehr verpflichtet, die Beiträge an die 2. Säule zu bezahlen.

Bitte beachten Sie: In diesem Fall können Sie nicht frei über das bis dahin angesparte Kapital verfügen, sondern müssen es bei einer Bank oder einem Finanzinstitut Ihrer Wahl auf ein Freizügigkeitskonto einzahlen. Dort wird ihr BVG-Guthaben vorübergehend «parkiert» und aufbewahrt.

Wenn oder falls Sie Bedingungen für die Beitragszahlungen an die 2. Säule wieder erfüllen, müssen Sie das Geld vom Freizügigkeitskonto auf Ihr neues BVG-Konto bei der Pensionskasse des neuen Arbeitgebers überweisen.

Falls Sie kein Freizügigkeitskonto eröffnen, wird ihre 2. Säule automatisch auf ein Konto bei der nationalen Vorsorgeeinrichtung, der Stiftung Auffangeinrichtung BVG überwiesen. Wenden Sie sich an die Stiftung Auffangeinrichtung BVG, wenn Sie die Gelder Ihrer 2. Säule selber anderswo mit einem besseren Zins anlegen wollen.`,
              },
            ],
          },
          {
            title: "Investieren in die 2. Säule (Einkauf)",
            contents: [
              {
                text: `Wenn Sie Ihre Arbeitsstelle wechseln, kann es sein, dass Ihr neuer Lohn höher ist als der alte oder dass die Pensionskasse Ihres neuen Arbeitgebers vorteilhaftere Bedingungen anbietet.

Es kann auch sein, dass Sie Beitragslücken haben, weil Sie nicht Ihr ganzes Leben Beiträge an die 2. Säule bezahlt haben.

In diesen Fällen haben Sie die Möglichkeit, in die eigene zweite Säule zu investieren, indem Sie zusätzliche Beitragsjahre hinzukaufen. Dabei gelten die Bedingungen der neuen Pensionskasse.

Den Betrag, den Sie in die 2. Säule einbezahlt haben, können Sie von den Steuern abziehen.

Informationen über die Möglichkeiten und die Bedingungen in Bezug auf eine Investition in die 2. Säule erhalten Sie bei Ihrer neuen Pensionskasse. Deren Koordinaten erfahren Sie von Ihrem Arbeitgeber.`,
              },
            ],
          },
          {
            title: "Vorzeitige Auszahlung der 2. Säule",
            contents: [
              {
                subtitle: "Für den Kauf eines Eigenheims",
                text: `Sie können Ihre 2. Säule schon vor der Pensionierung nutzen, um Wohneigentum zu kaufen, eine Hypothek zu amortisieren oder um Anteilscheine von Wohnbaugenossenschaften zu erwerben.

Dabei gelten die folgenden Bedingungen:

- Beim Erwerb handelt es sich um Ihre Hauptwohnung.
- Bis zum Alter von 50 Jahren können Sie das gesamte Kapital beziehen.
- Ab 50 Jahren können Sie nur noch einen Teilbetrag beziehen.
- Ein Vorbezug kann höchstens alle fünf Jahre beantragt werden.
- Falls Sie verheiratet sind oder in einer eingetragenen Partnerschaft leben, benötigen die Zustimmung der Ehefrau, des Ehemannes, der Partnerin oder des Partners.
- Falls Sie ihr Wohneigentum wieder verkaufen, sind Sie gewöhnlich verpflichtet, die 2. Säule, die Sie für den Kauf vorbezogen haben, zurückzuzahlen

Informationen über die Modalitäten eines Vorbezugs im Hinblick auf den Kauf von Wohneigentum erhalten Sie bei Ihrer Vorsorgeeinrichtung.`,
              },
              {
                subtitle: "Bei der Aufnahme einer selbstständigen Erwerbstätigkeit",
                text: `Falls Sie beabsichtigen, sich selbstständig zu machen, sind Sie nicht mehr verpflichtet, Beiträge an die zweite Säule zu zahlen. Sie können sich das bis dahin angesparte Geld der 2. Säule auszahlen lassen. Dabei gelten jedoch die folgenden Bedingungen:

- Sie müssen den Antrag für den Vorbezug des Kapitals innerhalb des ersten Jahres nach der Aufnahme der neuen Tätigkeit einreichen.
- Sie müssen nachweisen, dass Sie eine selbstständige Erwerbstätigkeit aufgenommen haben, z. B. anhand des Auszuges aus dem Handelsregister oder der Unterlagen der AHV.
- Falls Sie verheiratet sind oder in einer eingetragenen Partnerschaft leben, benötigen Sie die Zustimmung der Ehefrau, des Ehemannes, der Partnerin oder des Partners

Informationen über die Modalitäten eines Vorbezugs im Hinblick auf die Aufnahme einer selbstständigen Erwerbstätigkeit erhalten Sie bei Ihrer Vorsorgeeinrichtung.`,
              },
              {
                subtitle: "Bei einer endgültigen Ausreise aus der Schweiz",
                text: `Wenn Sie die Schweiz endgültig verlassen, können Sie sich ihre zweite Säule vorzeitig auszahlen lassen.

Nicht möglich ist der vorzeitige Bezug dieses Kapitals, wenn Sie beabsichtigen, sich in einem EU/EFTA-Land niederzulassen. Wird einer dieser Staaten Ihr neues Wohnsitzland, sind Sie dort nämlich obligatorisch für Alter, Invalidität und Hinterlassenenleistungen versichert.

In diesem Fall muss ein Teil Ihrer beruflichen Vorsorge (der sogenannte obligatorische Teil) auf einem Sperrkonto in der Schweiz verbleiben; er kann erst ausbezahlt werden, wenn Sie das ordentliche Rentenalter erreichen (65 Jahre). Den restlichen Teil Ihrer 2. Säule (der sogenannte überobligatorische Teil) können Sie sich jedoch bar auszahlen lassen.

Informationen über die Modalitäten eines Vorbezugs im Hinblick auf einen endgültigen Wegzug ins Ausland erhalten Sie bei Ihrer Vorsorgeeinrichtung.

Bitte beachten Sie: Falls Sie endgültig aus der Schweiz wegziehen und noch ein Freizügigkeitskonto haben, vergessen Sie nicht, dieses Guthaben mitzunehmen.`,
              },
            ],
          },
          {
            title: "Auszahlung der 2. Säule zum Zeitpunkt der Pensionierung",
            contents: [
              {
                text: `Mit 65 Jahren können Sie das Geld beziehen, das Sie während Ihres Erwerbslebens angespart haben. Bei gewissen Pensionskassen ist der Bezug – bei einer Frühpensionierung – schon ab 58 Jahren möglich, oder er kann – wenn Sie über das Pensionsalter hinaus arbeiten – bis zum Alter von 70 Jahren aufgeschoben werden.

Kümmern Sie sich rechtzeitig um den Bezug der Leistungen Ihrer 2. Säule: Auf der Seite Die Pensionierung planen erfahren sie mehr zu diesem Thema. Ihre Pensionskasse kann Sie zudem im Detail darüber informieren, wie Sie in Ihrem Fall vorgehen müssen.`,
              },
            ],
          },
          {
            title: "Die 2. Säule bei einer Scheidung",
            contents: [
              {
                text: `Falls Sie sich scheiden lassen oder eine eingetragene Partnerschaft auflösen, wird nur derjenige Teil des Kapitals der 2. Säule zwischen den Eheleuten oder den Partnerinnen oder den Partnern +aufgeteilt, der während der Ehe oder der eingetragenen Partnerschaft angespart wurde.

Die 2. Säule wird auch dann aufgeteilt, wenn eine der beiden Personen bereits pensioniert ist und eine Altersrente aus der 2. Säule erhält.`,
              },
            ],
          },
          {
            title: "Die 2. Säule bei einem Todesfall",
            contents: [
              {
                text: `In einer Ehe oder einer eingetragenen Partnerschaft erhält bei einem Todesfall die hinterbliebene Person eine Rente.

Beim Tod Ihres Ehemannes, Ihrer Ehefrau, Ihrer eingetragenen Partnerin oder Ihres eingetragenen Partners erhalten Sie unter den folgenden Voraussetzungen eine Rente:

- Sie sind mindestens 45 Jahre alt.
- Ihre Ehe oder ihre Partnerschaft hat mindestens fünf Jahre gedauert.
- Sie betreuen mindestens ein Kind.

Wenn Sie keine der genannten Bedingungen erfüllen, haben Sie Anspruch auf eine einmalige Abfindung in der Höhe von drei Jahresrenten.

Kinder, die einen Elternteil oder beide Eltern durch Tod verloren haben, erhalten als Halbwaisen oder Waisen ebenfalls eine Rente, bis sie 18 Jahre alt sind. Falls sie studieren oder eine Lehre machen, erhalten se die Rente bis sie 25 Jahre alt sind.

Ihre Pensionskasse kann Sie im Detail über das Thema Rente informieren.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Altersvorsorge///3. Säule (private Vorsorge)",
    description:
      "Im Hinblick auf die Pensionierung können Sie das Alterseinkommen, das bereits mit der 1. und der 2. Säule gesichert ist, mit einer freiwilligen Versicherung verbessern: mit der privaten Vorsorge (3. Säule).",
    contents: [
      {
        infos: [
          {
            title: "Die private Vorsorge",
            contents: [
              {
                subtitle: "Zweck der 3. Säule",
                text: `Wenn sie Ihre 1. und 2. Säule ergänzen und so sicherstellen wollen, dass Sie nach der Pensionierung zusätzlich Geld erhalten, können Sie freiwillig eine 3. Säule einrichten. Es gibt zwei Arten der 3. Säule: die gebundene Selbstvorsorge (Säule 3a) und die ungebundene Selbstvorsorge (Säule 3b).`,
              },
              {
                subtitle: "Gebundene Selbstvorsorge (Säule 3a)",
                text: `Mit der Säule 3a können Sie im Verlauf Ihres Erwerbslebens bis zur Pensionierung bei einer Bank oder einer Versicherung ein Sparguthaben anhäufen.

Wichtigste Merkmale der Säule 3a:

- Sie können jährlich einen Maximalbetrag auf ihr Konto einzahlen.
- Die Zinsen sind höher als bei einem Sparkonto.
- Die Beiträge, die Sie überweisen, können jedes Jahr von den Steuern abgezogen werden.
- Für den  Bezug des Guthabens gelten bestimmte Bedingungen.
- Bei der Auszahlung des Guthabens wird eine einmalige Steuer fällig, die sich nach dem Einkommen zum Zeitpunkt des Bezugs richtet. 
`,
              },
              {
                subtitle: "Ungebundene Selbstvorsorge (Säule 3b)",
                text: `Bei der Säule 3b handelt es sich um Spareinlagen in Form von Bargeld, Sparbüchlein, Lebensversicherungen oder Investitionen.

Wichtigste Merkmale der Säule 3b:

- Sie können jährlich Beträge in beliebiger Höhe einzahlen.
- Sie müssen das angesparte Guthaben jedes Jahr in der Steuererklärung angeben.
- Das Guthaben muss in der Regel jährlich versteuert werden.
- Sie können sich das Geld zu jedem Zeitpunkt auszahlen lassen.
- Sie müssen keine zusätzlichen Steuern bezahlen, wenn Sie das angesparte Geld beziehen.`,
              },
            ],
          },
          {
            title: "Wer eine 3. Säule abschliessen kann",
            contents: [
              {
                text: `Eine Säule 3a können Sie in den nachstehenden Fällen abschliessen und weiterführen:

- Sie leisten Beiträge an die 2. Säule (Angestellte).
- Sie sind nicht bei einer Vorsorgeeinrichtung gemäss BVG versichert (Selbstständigerwerbende).
- Sie wohnen im Ausland, arbeiten aber in der Schweiz (z. B Grenzgängerinnen und Grenzgänger).
- Sie erhalten Taggelder der AHV-pflichtigen Invalidenversicherung.
- Sie erhalten ein Taggeld der Invalidenversicherung, das der AHV unterliegt.
- Sie erhalten Taggelder aus der schweizerischen Arbeitslosenversicherung.
- Sie sind eine teilinvalide versicherte Person mit einem AHV-pflichtigen Einkommen aus einer Erwerbstätigkeit.
- Falls Sie über das ordentliche Rentenalter hinaus arbeiten, können Sie bis fünf Jahre nach Ihrem 65. Geburtstag weiterhin Beiträge leisten.
- Sie können auch dann weiterhin Beiträge leisten, wenn Sie Ihre Erwerbsarbeit vorübergehend unterbrechen (z. B. Zivil- oder Militärdienst, Arbeitslosigkeit, Krankheit).

Für die Säule 3b gibt es keine besonderen Erfordernisse.

Die Vorsorgeeinrichtungen können Sie im Detail über den Abschluss einer 3. Säule informieren.`,
              },
            ],
          },
          {
            title: "3. Säule: jährliche Einzahlung",
            contents: [
              {
                text: `Sie können jedes Jahr einen Maximalbetrag in die Säule 3a einzahlen.

Für Angestellte sind dies 2025 maximal 7 258 Franken.

Für Selbstständigerwerbende ohne 2. Säule sind dies bis zu zwanzig Prozent des Einkommens und maximal 36 288 Franken.

Für die Säule 3b gibt es keine jährlichen Obergrenzen.`,
              },
            ],
          },
          {
            title: "Steuervorteile der 3. Säule",
            contents: [
              {
                text: `Wenn Sie sich für eine Säule 3a entscheiden, kommen Sie in den Genuss von Steuervorteilen: Sie können nämlich in der jährlichen Steuererklärung die einbezahlten Beträge in Abzug bringen.

Angestellte können den Maximalbetrag für das laufende Steuerjahr abziehen (Betrag 2025: 7258 Franken).

Selbstständigerwerbende ohne 2. Säule können bis zu zwanzig Prozent des Einkommens und höchstens 36 288 Franken (Betrag 2025) in Abzug bringen.

Bitte beachten Sie: Bei der Auszahlung des Guthabens wird eine einmalige Pauschalsteuer fällig.

Für die Säule 3b sind in der Regel keine Steuervorteile vorgesehen.

Dafür müssen Sie – anders als bei der Säule 3a – keine Steuern bezahlen, wenn sie sich das gesamte angesparte Guthaben auszahlen lassen.

Ihre Vorsorgeeinrichtung oder die Steuerbehörde Ihres Kantons kann Sie im Detail über dieses Thema informieren.`,
              },
            ],
          },
          {
            title: "Bezug des Guthabens: möglicher Zeitpunkt",
            contents: [
              {
                text: `Normalerweise können Sie sich das Geld der 3. Säule zum Zeitpunkt Ihrer Pensionierung oder – frühestens – fünf Jahre vor dem ordentlichen Rentenalter (65 Jahre) auszahlen lassen.

In den nachstehenden Ausnahmefällen haben Sie die Möglichkeit eines vorzeitigen Kapitalbezugs:

- Sie planen, Wohneigentum zu kaufen oder zu bauen.
- Sie verlassen die Schweiz endgültig.
- Sie beabsichtigen, sich selbstständig zu machen.
- Sie beabsichtigen, sich einer neuen selbstständigen Tätigkeit zuzuwenden.
- Sie wollen bei einer Vorsorgeeinrichtung der 2. Säule zusätzliche Beitragsjahre einkaufen.
- Sie erhalten eine Vollrente der Invalidenversicherung (IV) und das Invalidenrisiko ist nicht versichert.

Wenn Sie entscheiden, über das ordentliche Rentenalter (65 Jahre) hinaus zu arbeiten, können Sie weiterhin Beiträge einzahlen und den Bezug um maximal fünf Jahre aufschieben. 

Bei einem Bezug müssen Sie sich das gesamte Guthaben auf einmal auszahlen lassen.

Der Bezug des Vorsorgekapitals der Säule 3b ist an keine Bedingungen geknüpft und kann zu jedem beliebigen Zeitpunkt erfolgen.

Ihre Vorsorgeeinrichtung kann Sie im Detail über die Bedingungen und die Modalitäten für einen Kapitalbezug informieren.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Arbeitslosenversicherung",
    description:
      "Wenn Sie Ihre Arbeit verlieren, können Sie während einer gewissen Zeit Arbeitslosengeld beziehen. Sie müssen dafür bestimmte Bedingungen erfüllen und alles Zumutbare unternehmen, um so schnell wie möglich eine neue Stelle zu finden.",
    contents: [
      {
        infos: [
          {
            title: "Überprüfen Sie, ob die Kündigung zulässig ist",
            contents: [
              {
                text: `Wenn Sie von Ihrem Arbeitgeber die Kündigung bekommen, überprüfen Sie als Erstes, ob die Kündigung den rechtlichen Vorgaben entspricht. Prüfen Sie vor allem Folgendes: Wurde die Kündigungsfrist eingehalten? Wurde Ihnen gekündigt, währenddem Sie krankgeschrieben oder schwanger waren?`,
              },
            ],
          },
          {
            title: "Habe ich Anspruch auf Arbeitslosenentschädigung?",
            contents: [
              {
                text: `Wenn Sie Ihre Stelle verloren haben, dann haben Sie in der Schweiz Anspruch auf Arbeitslosenentschädigung. Dies gilt, sobald Sie die folgenden Voraussetzungen erfüllen:

- Sie sind ganz oder teilweise arbeitslos.
- Sie waren in den letzten 2 Jahren während mindestens 12 Monaten angestellt (mögliche Ausnahmen FAQ Punkt 2).
- Ihr Hauptwohnsitz ist in der Schweiz. Wenn nicht, informieren - Sie sich im Abschnitt «Arbeitslosigkeit bei ausländischen Staatsangehörigen sowie bei Grenzgängerinnen und Grenzgängern».
- Sie haben die obligatorische Schulzeit erfüllt und das Rentenalter der AHV noch nicht erreicht.

Ausserdem gilt Folgendes:

- Sie müssen sich beim Regionalen Arbeitsamt (RAO) anmelden
- Sie müssen bereit sein, eine Arbeit anzunehmen, die ihrem beruflichen Profil entspricht, und -Sie müssen sofort verfügbar sein.
- Sie müssen bereits während der Kündigungsfrist auf Stellensuche gehen.
- Wenn Sie einen befristeten Arbeitsvertrag haben, müssen Sie mit der Arbeitssuche drei Monate vor dem Ende des Arbeitsverhältnisses anfangen

Bewahren Sie die Nachweise für die Stellensuche (Bewerbungsschreiben, Absagebriefe usw.) sorgfältig auf. Sie müssen sie dem regionalen Arbeitsvermittlungszentrum vorweisen.`,
              },
            ],
          },
          {
            title: "Wo muss ich mich bei Arbeitslosigkeit melden?",
            contents: [
              {
                text: `Melden Sie sich arbeitslos, möglichst frühzeitig, aber spätestens am ersten Tag, für den Sie Arbeitslosenentschädigung erhalten wollen. Sie müssen sich persönlich anmelden - sei es über den eService «Anmeldung zur Arbeitsvermittlung (RAV)», sei es indem Sie beim regionalen Arbeitsvermittlungszentrum (RAV) vorbeigehen.

In den ersten 15 Tagen nach Ihrer Anmeldung lädt Sie das zuständige RAV zu einem ersten Gespräch ein.

Bitte halten Sie folgende Dokumente bereit:

- Versicherungsausweis AHV/IV oder Krankenversicherungskarte
- Identitätskarte oder Pass
- Nachweis der bereits unternommenen Arbeitsbemühungen (Bewerbungen, Antworten, …)
- Weitere Informationen, welche das RAV verlangt hat.
- Das Formular PD U2; wenn Sie Bürgerin oder Bürger eines EU- oder EFTA-Staates sind, bereits Leistungen der Arbeitslosenversicherung aus einem EU- oder EFTA-Staat beziehen und in der Schweiz eine Stelle suchen.

Wählen Sie aus den Arbeitslosenkassen in Ihrer Region eine aus. Diese wird Ihnen die Arbeitslosenentschädigung monatlich auszahlen. Sie müssen Ihrer Arbeitslosenkasse die folgenden Dokumente vorlegen:

- Das Formular «Antrag auf Arbeitslosenentschädigung»,
- Formulare «Arbeitgeberbescheinigung » für die Anstellungen der letzten zwei Jahre.
- weitere Informationen, welche die Arbeitslosenkasse verlangt hat,
- das Formular PD U1, wenn Sie aus einem EU- oder EFTA-Staat kommen.`,
              },
            ],
          },
          {
            title: "Arbeitslosengeld",
            contents: [
              {
                subtitle: "Wie viel Arbeitslosengeld bekomme ich?",
                text: `In der Regel bekommen Sie Arbeitslosengeld in der Höhe von 70 Prozent Ihres versicherten Lohns. Bei diesem handelt es sich vereinfacht gesagt um den durchschnittlichen Lohn der letzten 6 Monate – oder der letzten 12 Monate, falls dies für Sie vorteilhafter ist.

Sie erhalten 80 Prozent des versicherten Lohns, wenn eine der folgenden Voraussetzungen erfüllt ist:

- Sie haben Kinder, für die Sie sorgen und die jünger als 25 Jahre alt sind.
- Ihr versicherter Verdienst beträgt nicht mehr als 3797 Franken.
- Sie haben einen Invaliditätsgrad von mindestens 40 Prozent.
`,
              },
              {
                subtitle: "Wie lang bekomme ich Arbeitslosengeld?",
                text: `Die folgende Tabelle zeigt, wie lang Sie Anspruch auf Arbeitslosengeld haben, je nach Ihrer Situation:

Beitragszeiten      Alter/Unterhaltspflicht           Bedingungen                               Taggelder
12 bis 24           bis 25 ohne Unterhaltspflicht                                               200
12 bis <18          ab 25                                                                       2601
12 bis <18          mit Unterhaltspflicht                                                       2601
18 bis 24           ab 25                                                                       4001
18 bis 24           mit Unterhaltspflicht                                                       4001
22 bis 24           ab 55                                                                       5201
22 bis 24           ab 25                             Bezug einer Invalidenrente,               5201
                                                      die einem Invaliditätsgrad von 
                                                      mindestens 40% entspricht                 5201
22 bis 24           mit Unterhaltspflicht             Bezug einer Invalidenrente, die 
                                                      einem Invaliditätsgrad von mindestens 
                                                      40% entspricht

Beitragsbefreit                                                                                 90/1802

1 Diese Versichertenkategorien haben Anspruch auf zusätzliche 120 Taggelder, wenn sie innerhalb der letzten 4 Jahre vor Erreichen des AHV-Rentenalters arbeitslos geworden sind.

2 Personen, deren Invalidenrente die IV gekürzt oder gestrichen hat und die deshalb Arbeit suchen oder ihr Arbeitspensum erhöhen müssen, haben Anspruch auf maximal 180 Taggelder.

Quelle der Tabelle: SECO Arbeitslosigkeit - Ein Leitfaden für Versicherte
`,
              },
            ],
          },
          {
            title: "Arbeitslosigkeit bei ausländischen Staatsangehörigen sowie bei Grenzgängerinnen und Grenzgängern",
            contents: [
              {
                subtitle: "Ausländerinnen und Ausländer in der Schweiz",
                text: `Wenn Sie Ausländerin oder Ausländer sind und in der Schweiz gearbeitet haben, brauchen Sie für den Bezug von Arbeitslosenentschädigung in der Schweiz eine Aufenthalts- oder Niederlassungsbewilligung. Beantragen Sie rechtzeitig vor Ablauf eine Verlängerung.`,
              },
              {
                subtitle: "Grenzgängerinnen und Grenzgänger",
                text: `Wenn Sie Grenzgängerin oder Grenzgänger sind (Ausweis G), bekommen Sie die Arbeitslosenentschädigung in der Regel in Ihrem Wohnsitzland. Sie können für die Suche nach einer neuen Arbeitsstelle in der Schweiz aber die Dienste des regionalen Arbeitsvermittlungszentrums (RAV) in Anspruch nehmen. Dafür müssen Sie sich beim RAV in der Region melden, in der Sie Ihre letzte Arbeitsstelle in der Schweiz hatten.`,
              },
            ],
          },
          {
            title: "Selbstständigerwerbende und Arbeitslosigkeit",
            contents: [
              {
                text: `Als selbstständigerwerbende Person sind Sie nicht gegen Arbeitslosigkeit versichert. Sie haben daher keinen Anspruch auf Arbeitslosenentschädigung, wenn Sie keine Arbeit mehr haben.`,
              },
            ],
          },
          {
            title: "Überbrückungsleistungen für ältere Arbeitslose",
            contents: [
              {
                text: `Wenn Sie Ihren Arbeitsplatz verlieren, bevor Sie Ihre Altersrente beziehen können, und keine neue Stelle finden, können Sie «Überbrückungsleistungen für ältere Arbeitslose (ÜL)» erhalten. Diese Leistungen decken Ihren Lebensbedarf bis zum Erreichen des AHV-Rentenalters.

Um Anspruch auf die Überbrückungsleistungen zu haben, müssen Sie eine Reihe von Voraussetzungen erfüllen. Sie müssen insbesondere:

- frühestens im Monat, in dem sie Ihr 60. Altersjahr erreichen, ausgesteuert worden sein
- mindestens 20 Jahre in der AHV versichert gewesen sein, davon mindestens fünf Jahre nach dem 50. Geburtstag
- gearbeitet haben und dabei ein Einkommen von jährlich mindestens 75 Prozent der AHV-Höchstrente verdient haben (Stand 2024: 22 050 Franken) oder Anspruch auf Erziehungs- und Betreuungsgutschriften in Höhe dieses Betrags gehabt haben
- in der Schweiz oder in einem Mitgliedstaat der EU oder EFTA leben
- Grundausgaben haben, die Ihre anrechenbaren Einnahmen übersteigen (gesetzlich festgelegte Grenzen).

Um die Überbrückungsleistungen zu erhalten, müssen Sie bei Ihrer Wohngemeinde oder der kantonalen Vollzugsstelle einen Antrag stellen.

Sie müssen dafür das entsprechende Formular «Antrag für Überbrückungsleistungen für ältere Arbeitslose» ausfüllen. Das Formular ist online verfügbar.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Arbeitsunfähigkeit",
    description: "Wenn Sie krank sind oder einen Unfall hatten, erhalten Sie während einer gewissen Zeit weiterhin Lohn. Ausserdem darf Ihnen in dieser Zeit nicht gekündigt werden.",
    contents: [
      {
        infos: [
          {
            title: "Bei Krankheit",
            contents: [
              {
                subtitle: "Vorgehen",
                text: `Wenn Sie krank sind oder wenn Sie sich während der Schwangerschaft nicht wohl fühlen, müssen Sie so schnell wie möglich Ihren Arbeitgeber informieren.

Ein Arztzeugnis müssen Sie in der Regel erst ab dem dritten Abwesenheitstag vorlegen. Erkundigen Sie sich bei Ihrem Arbeitgeber, welche Regelung für Sie gilt.

Wenn Sie wegen Krankheit oder Schwangerschaft nur zu einem reduzierten Pensum arbeiten können, muss die Ärztin oder der Arzt auf dem Arztzeugnis die maximale Anzahl Stunden angeben, die Sie pro Tag oder pro Woche arbeiten können.`,
              },
              {
                subtitle: "Krankheit und Lohn",
                text: `Es sind zwei Fälle zu unterscheiden:

1. Ihr Arbeitgeber hat für seine Angestellten eine Krankentaggeld-Versicherung abgeschlossen. Die meisten Arbeitgeber sind so versichert. In diesem Fall bekommen Sie während 720 oder 730 Krankheitstagen innerhalb von 900 Tagen weiterhin Lohn, je nach Versicherung. Informieren Sie sich bei Ihrem Arbeitgeber. Bitte beachten Sie: Solange Sie krankgeschrieben sind, dürfen Sie nicht arbeiten. Tun Sie dies trotzdem, so wird die Versicherung Anzeige erstatten und das ausbezahlte Krankentaggeld zurückfordern.

2. Ihr Arbeitgeber hat für seine Angestellten keine Krankentaggeld-Versicherung abgeschlossen. In diesem Fall muss er Ihnen während einer bestimmten Dauer weiterhin Lohn zahlen. Im ersten Anstellungsjahr beträgt diese Dauer drei Wochen, und mit mehr Anstellungsjahren nimmt sie zu bis zu einem Maximum von vier Monaten. Die genaue Dauer der Lohnfortzahlung variiert von Region zu Region.`,
              },
              {
                subtitle: "Krankheit und Kündigung",
                text: `In der Zeit, in der Sie krankgeschrieben sind, darf Ihnen Ihr Arbeitgeber nicht kündigen. In der sogenannten Sperrfrist gilt ein Kündigungsschutz:

- während 30 Tagen im ersten Anstellungsjahr
- während 90 Tagen vom zweiten bis zum fünften Anstellungsjahr
- während 180 Tagen ab dem sechsten Anstellungsjahr

Bitte beachten Sie: In der Probezeit kann Ihr Arbeitgeber Ihnen auch dann kündigen, wenn Sie krankgeschrieben sind.

Als Arbeitnehmerin oder Arbeitnehmer können Sie Ihre Kündigung auch während einer Krankschreibung einreichen.

Wenn Sie krank werden, nachdem Sie die Kündigung bekommen wird die Kündigungsfrist während der Zeit der Krankschreibung unterbrochen. Sie läuft erst dann weiter, wenn Sie Ihre Arbeit wieder aufnehmen können.`,
              },
            ],
          },
          {
            title: "Unfall",
            contents: [
              {
                subtitle: "Vorgehen",
                text: `Bei einem Unfall müssen Sie Ihren Arbeitgeber so rasch wie möglich informieren, und zwar unabhängig davon, ob der Unfall während der Arbeitszeit oder in der Freizeit passiert ist.

Der Arbeitgeber muss umgehend seine Versicherung informieren. Diese stellt Ihnen ein Formular zu, in dem Sie und Ihre Ärztin oder Ihr Arzt Angaben zum Unfall und zu Ihrem Gesundheitszustand machen müssen.`,
              },
              {
                subtitle: "Unfall und Lohn",
                text: `In der Schweiz müssen die Arbeitgeber ihre Angestellten gegen die Folgen von Unfällen versichern.

Ab dem dritten Tag nach dem Unfall erhalten Sie ein Taggeld, das 80 Prozent Ihres Lohns entspricht.

Das Taggeld wird unabhängig davon ausgerichtet, ob der Unfall am Arbeitsplatz (Berufsunfall) oder in der Freizeit (Nichtberufsunfall) passiert ist.

Einzige Ausnahme: Wenn Sie angestellt sind und Ihre wöchentliche Arbeitszeit weniger als 8 Stunden beträgt, dann sind nur die Berufsunfälle versichert sowie die Unfälle, die auf dem Arbeitsweg passieren.

Die Taggelder werden für eine bestimmte Dauer ausbezahlt. Erkundigen Sie sich bei Ihrem Arbeitgeber über die für Sie geltenden Bedingungen.

Bitte beachten Sie: Wenn Ihre Ärztin oder Ihr Arzt Sie wegen eines Unfalls für arbeitsunfähig erklärt, müssen Sie sich daran halten. Arbeiten Sie trotzdem, so wird die Versicherung Anzeige erstatten und das ausbezahlte Taggeld zurückfordern.`,
              },
              {
                subtitle: "Unfall und Kündigung",
                text: `In der Zeit, in der Sie nach einem Unfall krankgeschrieben sind, darf Ihnen Ihr Arbeitgeber nicht kündigen. In der sogenannten Sperrfrist gilt ein Kündigungsschutz:

- während 30 Tagen im ersten Anstellungsjahr
- während 90 Tagen ab dem zweiten bis zum fünften Anstellungsjahr
- während 180 Tagen ab dem sechsten Anstellungsjahr

Bitte beachten Sie: In der Probezeit kann Ihr Arbeitgeber Ihnen auch dann kündigen, wenn Sie wegen eines Unfalls krankgeschrieben sind.

Als Arbeitnehmerin oder Arbeitnehmer können Sie Ihre Kündigung auch in der Zeit einreichen, in der Sie sich von einem Unfall erholen.

Wenn Sie einen Unfall haben, nachdem Sie die Kündigung bekommen haben, wird die Kündigungsfrist während der Zeit der Krankschreibung unterbrochen. Sie läuft erst dann weiter, wenn Sie Ihre Arbeit wieder aufnehmen können.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Arbeitsvertrag",
    description:
      "Die Arbeitnehmerin oder der Arbeitnehmer und der Arbeitgeber müssen einen Arbeitsvertrag unterschreiben, der die Arbeitsbedingungen regelt. Für bestimmte Branchen gelten spezielle Regeln, die in nationalen oder regionalen Gesamtarbeitsverträgen festgelegt sind.",
    contents: [
      {
        infos: [
          {
            title: "Einzelarbeitsvertrag",
            contents: [
              {
                text: `Wenn Sie von einem Arbeitgeber angestellt werden (bzw. wenn Sie als Arbeitgeber eine Person neu anstellen), müssen Sie einen Arbeitsvertrag unterschreiben. Darin werden die Rechte und Pflichten in Bezug auf das Arbeitsverhältnis für beide Parteien festgelegt.

Der Arbeitsvertrag wird von beiden Parteien unterschrieben. Darin müssen mindestens die folgenden Punkte enthalten sein:

- der Name der oder des Angestellten und der Name des Arbeitgebers
- das Datum, an dem das Arbeitsverhältnis beginnt
- die Funktion der oder des Angestellten
- der Lohn und allfällige Lohnzuschläge
- die wöchentliche Arbeitszeit

Bei befristeten Arbeitsverträgen muss der Arbeitgeber das Datum, an dem das Arbeitsverhältnis endet, klar angeben.

Besondere Regelungen, beispielsweise ein Konkurrenzverbot oder die Regelung der Überzeit, müssen ebenfalls im Arbeitsvertrag festgehalten werden.`,
              },
            ],
          },
          {
            title: "Gesamtarbeitsverträge",
            contents: [
              {
                text: `Ein Gesamtarbeitsvertrag (GAV) ist ein Vertrag, der zwischen Arbeitgeberverbänden und Arbeitnehmerverbänden/Gewerkschaften abgeschlossen wird. Die beiden Parteien legen die Mindestanforderungen fest, die zu beachten sind (zum Beispiel den Mindestlohn). In der Schweiz gibt es zahlreiche GAV, zum Beispiel für das Coiffeurgewerbe, für die Baubranche, für private Sicherheitsdienstleister oder für das Bäcker-, Konditoren- und Confiseurgewerbe.

Meist sind es nationale GAV, deren Bedingungen für die jeweilige Branche in der ganzen Schweiz gelten. Es gibt aber auch Firmen-GAV (zum Beispiel von Migros und von Coop) oder regionale GAV, deren Bedingungen nur für ein bestimmtes Unternehmen bzw. in einer bestimmten Region gelten.`,
              },
            ],
          },
          {
            title: "Normalarbeitsverträge",
            contents: [
              {
                text: `In Branchen, in denen es keinen Gesamtarbeitsvertrag gibt, können die Behörden des Bundes oder des Kantons einen Normalarbeitsvertrag (NAV) erlassen, in dem verbindliche Mindestlöhne festgelegt sind. Die Bedingungen des NAV können vom Arbeitgeber nur zugunsten der Angestellten abgeändert werden.

Ein NAV kommt dann zum Einsatz, wenn die branchen- oder ortsüblichen Lohnbedingungen wiederholt missachtet wurden. Mit dem NAV soll dies verhindert werden.

Ein Beispiel für einen NAV auf nationaler Ebene ist der NAV Hauswirtschaft. Dieser und Beispiele für kantonale NAV sind auf der Website des Staatssekretariats für Wirtschaft (SECO) aufgeführt.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Arbeitszeugnis",
    description:
      "Wenn Ihr Arbeitsverhältnis endet, stellt Ihnen Ihre Vorgesetzte oder Ihr Vorgesetzter normalerweise ein Arbeitszeugnis aus. Dieses ist Ihnen dann von Nutzen, wenn Sie sich auf eine neue Stelle bewerben.",
    contents: [
      {
        infos: [
          {
            title: "Inhalt des Arbeitszeugnisses",
            contents: [
              {
                text: `Im Arbeitszeugnis muss Ihre Vorgesetzte oder Ihr Vorgesetzter namentlich die folgenden Punkte aufführen:

- Beginn und Ende des Arbeitsverhältnisses
- Funktion und ausgeübte Tätigkeiten
- Stellenprozente
- Beurteilung der Qualität Ihrer Arbeit
- Beurteilung Ihres Verhaltens
- Grund für die Ausstellung des Arbeitszeugnisses (Kündigung, Wechsel der oder des Vorgesetzten, neue Funktion usw.)`,
              },
            ],
          },
          {
            title: "Form des Arbeitszeugnisses",
            contents: [
              {
                text: `Ihr Arbeitgeber muss Ihnen das Arbeitszeugnis schriftlich ausstellen.

Er muss das Arbeitsverhältnis vollständig und wahrheitsgetreu beschreiben und eine wohlwollende Beurteilung vornehmen. Wenn Sie im Arbeitszeugnis Ungenauigkeiten, Fehler oder Unwahrheiten feststellen, können Sie von Ihrer oder Ihrem Vorgesetzten verlangen, dass sie oder er den Text ändert.

Das Arbeitszeugnis darf keine unklaren Formulierungen oder Codes enthalten, die auf unterschiedliche Weise interpretiert werden könnten.

Es sollten auch nicht einzelne negative Vorfälle aufgeführt sein (zum Beispiel ein einmaliges Zuspätkommen) oder Vorfälle, die keinen direkten Einfluss auf das Arbeitsverhältnis haben.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Arbeitszeit///Überstunden und Überzeit",
    description:
      "Jede Arbeitnehmerin und jeder Arbeitnehmer muss pro Woche eine bestimmte Anzahl Stunden arbeiten. Wie viele das sind, ist im Arbeitsvertrag festgelegt. Es ist möglich, diese Schwelle zu überschreiten, wenn bestimmte Voraussetzungen erfüllt sind.",
    contents: [
      {
        infos: [
          {
            title: "Überstunden",
            contents: [
              {
                subtitle: "Was sind Überstunden?",
                text: `In Ihrem Arbeitsvertrag ist festgelegt, wie viele Stunden pro Woche Sie arbeiten müssen.

Wenn Sie mehr als die vertraglich festgelegte Anzahl Stunden arbeiten, die wöchentliche Höchstarbeitszeit jedoch nicht überschreiten, gelten diese zusätzlich geleisteten Stunden als Überstunden. Die wöchentliche Höchstarbeitszeit beträgt:

- 45 Stunden für Arbeitnehmerinnen und Arbeitnehmer in industriellen Betrieben sowie für Büropersonal, technische Angestellte und Verkaufspersonal in Grossbetrieben des Detailhandels;
- 50 Stunden für alle übrigen Arbeitnehmerinnen und Arbeitnehmer.
`,
              },
              {
                subtitle: "Welche Voraussetzungen gelten für das Leisten von Überstunden?",
                text: `Verlangt Ihr Arbeitgeber, dass Sie Überstunden leisten, oder leisten Sie von sich aus Überstunden, so müssen die folgenden Voraussetzungen erfüllt sein:

- Die Überstunden sind notwendig.
- Die Überstunden sind physisch und psychisch nicht übermässig anstrengend.
- Die Arbeitszeiten und täglichen Ruhezeiten werden eingehalten.
`,
              },
              {
                subtitle: "Wie werden Überstunden entschädigt?",
                text: `- Überstunden müssen mit einem Lohnzuschlag von 25 Prozent entschädigt werden.
- Überstunden können anstatt mit einem Lohnzuschlag aber auch durch Freizeit von mindestens gleicher Dauer ausgeglichen werden. Dies setzt jedoch Ihre Zustimmung und eine schriftliche Vereinbarung zwischen Ihnen und Ihrem Arbeitgeber voraus.
- Kadermitarbeiterinnen und -mitarbeiter haben in der Regel keinen Anspruch auf Lohnzuschlag. Dies muss jedoch in jedem Fall im Arbeitsvertrag geregelt werden. Es kann auch schriftlich vereinbart werden, dass die Überstunden ohne Zuschlag entschädigt werden oder mit einem Zuschlag von weniger als 25 Prozent.
`,
              },
            ],
          },
          {
            title: "Überzeit",
            contents: [
              {
                subtitle: "Was ist Überzeit?",
                text: `Das Gesetz sieht eine wöchentliche Höchstarbeitszeit vor:

- 45 Stunden für Arbeitnehmerinnen und Arbeitnehmer in industriellen Betrieben sowie für Büropersonal, technische Angestellte und Verkaufspersonal in Grossbetrieben des Detailhandels;
- 50 Stunden für alle übrigen Arbeitnehmerinnen und Arbeitnehmer.

Wenn Sie mehr als die gesetzlich festgelegte wöchentliche Höchstarbeitszeit arbeiten, leisten Sie Überzeit.`,
              },
              {
                subtitle: "Welche Voraussetzungen gelten für das Leisten von Überzeit?",
                text: `Mehr als die wöchentliche Höchstarbeitszeit darf geleistet werden:

- wegen Dringlichkeit der Arbeit oder ausserordentlichem Arbeitsandrang;
- für Inventaraufnahmen, Rechnungsabschlüsse und Liquidationsarbeiten;
- zur Vermeidung oder Beseitigung von Betriebsstörungen.
- Sie darf nicht mehr als zwei Stunden pro Tag betragen.
- Sie darf im Jahr nicht mehr als 170 Stunden (bei einer wöchentlichen Höchstarbeitszeit von 45 Stunden) beziehungsweise 140 Stunden (bei einer wöchentlichen Höchstarbeitszeit von 50 Stunden) betragen.`,
              },
              {
                subtitle: "Wie wird Überzeit entschädigt?",
                text: `Für Überzeitarbeit wird ein Lohnzuschlag von mindestens 25 Prozent ausgerichtet. Es kann vereinbart werden, dass die Überzeit durch Freizeit anstatt mit einem Lohnzuschlag ausgeglichen wird; die Kompensation erfolgt in diesem Fall durch Freizeit von gleicher Dauer innerhalb von 14 Wochen oder innerhalb einer Zeitspanne, die Sie mit Ihrem Arbeitgeber vereinbaren (die aber 12 Monate nicht überschreiten darf).

Für Büroangestellte und einige weitere Kategorien von Arbeitnehmerinnen und Arbeitnehmern ist für die ersten 60 Stunden Überzeitarbeit kein Zuschlag geschuldet.`,
              },
            ],
          },
          {
            title: "Bitte beachten Sie: Regeln für Jugendliche",
            contents: [
              {
                text: `Wenn Sie jünger als 18 Jahre alt sind, dürfen Sie nicht mehr Stunden arbeiten als die anderen Mitarbeiterinnen und Mitarbeiter des Betriebs. Die tägliche Arbeitszeit darf in keinem Fall mehr als neun Stunden betragen und sie muss, Pausen eingeschlossen, innerhalb von zwölf Stunden liegen.

Die in der Berufsschule verbrachten Tage gelten als Arbeitszeit.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Arbeitszeit///Kurzarbeit",
    description:
      "Befindet sich Ihre Firma vorübergehend in einer schwierigen Situation, können Sie die Arbeit im Betrieb reduzieren oder ganz einstellen, ohne Ihre Mitarbeiterinnen und Mitarbeiter zu entlassen.",
    contents: [
      {
        infos: [
          {
            title: "Was ist Kurzarbeit?",
            contents: [
              {
                text: `Mit Kurzarbeit soll in erster Linie verhindert werden, dass Sie Ihre Mitarbeiterinnen und Mitarbeiter auf Grund eines kurzen, aber unvermeidlichen Arbeitsausfalls entlassen müssen.

Die Arbeitslosenversicherung übernimmt während einer gewissen Zeit einen Teil des Lohnes Ihrer Mitarbeitenden, wenn Sie von Arbeitsunterbrüchen betroffen sind. Unter folgenden Bedingungen können Sie Kurzarbeitsentschädigung beantragen: Ihr Unternehmen unterbricht oder reduziert die Tätigkeit vorübergehend, während die Arbeitsverträge weiterlaufen. Grund für den Unterbruch sind wirtschaftliche Faktoren, von den Behörden beschlossene Massnahmen oder andere Entwicklungen, die Ihr Unternehmen nicht direkt beeinflussen kann.`,
              },
            ],
          },
          {
            title: "Kurzarbeit voranmelden: Wo, wie und wann?",
            contents: [
              {
                subtitle: "Wo und wie?",
                text: `Zuständig für die Bewilligung von Kurzarbeit ist die Amtsstelle des Kantons, in dem Ihre Firma ihren Sitz hat.

Die zuständige Behörde wird Ihnen das Formular für die Voranmeldung von Kurzarbeit zur Verfügung stellen. Füllen Sie es aus und schicken Sie es an die Behörde zurück. Sie finden alle Formulare auf travail.swiss. Sie können auch den eService auf www.job-room.ch benutzen, um das Formular für die Voranmeldung an die zuständige kantonale Behörde zu schicken.

Nota bene: Die Arbeitnehmenden müssen damit einverstanden sein, Kurzarbeit zu leisten. Der Arbeitgeber hat vorgängig das Einverständnis der Arbeitnehmenden einzuholen und anlässlich der Voranmeldung zu bestätigen.`,
              },
              {
                subtitle: "Wann anmelden?",
                text: `Sie müssen die geplante Kurzarbeit mindestens 10 Tage vor Beginn der Kurzarbeit voranmelden.

Die Anmeldefrist beträgt ausnahmsweise 3 Tage, wenn Sie nachweisen, dass die Kurzarbeit wegen plötzlich eingetretener, nicht voraussehbarer Umstände sehr kurzfristig eingeführt werden muss.

Wenn Sie sich gezwungen sehen, die Kurzarbeit über die bereits bewilligte Dauer hinaus zu verlängern, müssen Sie eine erneute Voranmeldung mindestens 10 Tage vor Ablauf der Bewilligung einreichen.`,
              },
            ],
          },
          {
            title: "Wie viel beträgt die Kurzarbeitsentschädigung?",
            contents: [
              {
                subtitle: "Entschädigung und Lohn",
                text: `- Die Kurzarbeitsentschädigung beträgt 80 Prozent des Verdienstausfalls, das heisst 80 Prozent des vorübergehenden Arbeitsausfalls.
- Für den Teil der Arbeit, für den keine Kurzarbeit eingeführt wird, wird der Lohn vom Arbeitgeber bezahlt.
- Lernende, temporäre Mitarbeiterinnen und Mitarbeiter und Personen in befristeter Anstellung erhalten keine Kurzarbeitsentschädigung. Sie erhalten ihren vollen Lohn. Falls Ihr Arbeitsvertrag befristet ist, kann Ihnen in der Regel auch nicht vorzeitig gekündigt werden.`,
              },
              {
                subtitle: "Entschädigung und Sozialversicherungen",
                text: `Kurzarbeit hat keinen Einfluss auf die Beiträge an die Sozialversicherungen wie AHV/IV/Erwerbsersatzordnung, Arbeitslosenversicherung, Unfallversicherung und Pensionskasse: Sowohl der Arbeitgeber wie auch die Arbeitnehmerinnen und Arbeitnehmer müssen weiterhin die vollen Beiträge bezahlen. Und die Arbeitnehmerinnen und Arbeitnehmer sind für seinen normalen Lohn versichert.`,
              },
            ],
          },
          {
            title: "Kurzarbeit und Kündigung",
            contents: [
              {
                text: `Kurzarbeitsentschädigung soll grundsätzlich Kündigungen vermeiden und Arbeitsverhältnisse aufrechterhalten.

Dennoch haben während der Kurzarbeitsphase sowohl der Arbeitgeber als auch die arbeitnehmende Person das Recht ein Arbeitsverhältnis zu kündigen. Unabhängig davon, wer die Kündigung ausgesprochen hat, kann der Betrieb ab Beginn der Kündigungsfrist keine Kurzarbeitsentschädigung mehr geltend machen.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Arbeitszeit///Ruhezeiten und Arbeitspausen",
    description:
      "Sie haben bei der Arbeit das Recht, Pause zu machen. Abhängig davon, wie viele Stunden Arbeit Sie an einem Tag leisten müssen, ist Ihre Pause mehr oder weniger lang. Zwischen zwei Arbeitstagen haben Sie Anspruch auf eine bestimmte Mindestanzahl Stunden Ruhezeit.",
    contents: [
      {
        infos: [
          {
            title: "Wie lange darf ich bei der Arbeit Pause machen?",
            contents: [
              {
                text: `Alle Arbeitnehmerinnen und Arbeitnehmer haben das Anrecht auf Pause. Pausen dienen in erster Linie dazu, sich auszuruhen und zu verpflegen.

Die Dauer der Pause hängt von der tatsächlichen Arbeitsdauer ab:

- 15 Minuten bei einer täglichen Arbeitszeit von mehr als fünfeinhalb Stunden,
- 30 Minuten bei einer täglichen Arbeitszeit von mehr als sieben Stunden,
- 1 Stunde bei einer täglichen Arbeitszeit von mehr als neun Stunden; in diesem Fall kann die Pause aufgeteilt werden.

Ihr Arbeitgeber kann Ihnen auch längere Pausen einräumen.

Haben Sie flexible Arbeitszeiten und liegt die tägliche Arbeitszeit zwischen weniger als sieben und mehr als neun Stunden, so bestimmt sich die Dauer der Pause nach der durchschnittlichen Wochenarbeitszeit.

Bitte beachten Sie:

Ihr Arbeitgeber kann eine Pausenregelung erlassen. Er kann beispielsweise verlangen, dass Sie Ihre Pause zu einer bestimmten Zeit oder an einem bestimmten Ort verbringen.

Raucherinnen und Raucher haben keinen Anspruch auf zusätzliche Pausen fürs Rauchen`,
              },
            ],
          },
          {
            title: "Gelten Pausen als Arbeitszeit?",
            contents: [
              {
                text: `Pausen gelten nicht als Arbeitszeit. Sie müssen daher auch nicht bezahlt werden.

Es gibt folgende Ausnahmen:

- Können Sie Ihren Arbeitsplatz während der Pause nicht verlassen, zählt die Pause zur Arbeitszeit.
- Technisch bedingte Arbeitsunterbrüche (z. B. Unterbruch des Betriebs einer Maschine) gelten nicht als Pause, da Sie sich in dieser Zeit nicht ausruhen können. Solche Unterbrüche dauern zu wenig lang, und Sie können nicht im Voraus wissen, wann Sie Ihre Arbeit wieder aufnehmen müssen.`,
              },
            ],
          },
          {
            title: "Kann ich durcharbeiten, statt Pause zu machen?",
            contents: [
              {
                text: `Pausen finden in der Regel zur Mitte der täglichen Arbeitszeit statt. Sie sind dazu da, dass sie sich erholen und verpflegen können. Auf die Pause darf daher nicht verzichtet werden, denn dies kann zu Fehlern und Unfällen führen.

Aus dem gleichen Grund dürfen Sie auch nicht durcharbeiten, um früher nach Hause gehen oder später anfangen zu können.`,
              },
            ],
          },
          {
            title: "Tägliche Ruhezeit",
            contents: [
              {
                text: `Die Pause dient der Erholung während des Arbeitstags. Die tägliche Ruhezeit hingegen ist die gesetzlich vorgeschriebene Erholungszeit nach einem Arbeitstag:

- Sie muss mindestens 11 Stunden betragen
- Sie beginnt mit dem Feierabend und hört bei Arbeitsbeginn auf

Ihr Arbeitgeber kann die tägliche Ruhezeit einmal in der Woche bis auf 8 Stunden herabsetzen. Dies ist aber nur zulässig, wenn die Dauer von 11 Stunden im Durchschnitt von zwei Wochen eingehalten wird.

Bitte beachten Sie: Für Jugendliche bis 18 Jahre muss die tägliche Ruhezeit in jedem Fall mindestens 12 Stunden betragen.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Arbeitszeit///Sonntags- und Nachtarbeit",
    description:
      "In der Schweiz sind Nachtarbeit und Sonntagsarbeit verboten. Gewisse Sektoren sind von diesem Verbot ausgenommen. Andere Sektoren können eine Bewilligung für vorübergehende oder dauernde Nacht- und Sonntagsarbeit beantragen.",
    contents: [
      {
        infos: [
          {
            title: "Nachtarbeit: Vorschriften und Bewilligungen",
            contents: [
              {
                subtitle: "Vorübergehende und dauernde Nachtarbeit",
                text: `In der Schweiz ist es per Gesetz verboten, Arbeitnehmerinnen und Arbeitnehmer zwischen 23.00 Uhr und 6.00 Uhr zu beschäftigen.

Wer als Arbeitgeber dennoch Arbeitnehmerinnen und Arbeitnehmer in dieser Zeitspanne beschäftigen möchte, braucht eine Bewilligung sowie das Einverständnis der Arbeitnehmerin oder des Arbeitnehmers.

Bei Nachtarbeit darf die tägliche Arbeitszeit für die Arbeitnehmerin oder den Arbeitnehmer neun Stunden nicht überschreiten; sie muss, mit Einschluss der Pausen, innerhalb eines Zeitraumes von zehn Stunden liegen.

Bitte beachten Sie: In der Schweiz wird zwischen vorübergehender Nachtarbeit und dauernder Nachtarbeit unterschieden.

- Man spricht von vorübergehender Nachtarbeit, wenn es sich um vorher festgelegte Einsätze handelt, die pro Einsatz nicht länger als 6 Monate dauern.
- Von dauernder Nachtarbeit spricht man, wenn diese den genannten zeitlichen Umfang überschreitet. Bitte beachten Sie, dass auch Nachtarbeit, die aus regelmässigen, sich über mehrere Jahre wiederholenden Einsätzen aus demselben Grund besteht, als dauernde Nachtarbeit gilt.`,
              },
              {
                subtitle: "Eine Bewilligung beantragen",
                text: `Wenn Sie als Arbeitgeber vorübergehende Nachtarbeit einführen möchten, müssen Sie bei der zuständigen kantonalen Behörde ein begründetes Gesuch für eine Arbeitszeitbewilligung einreichen.

Möchten Sie für eine längere Zeit Nachtarbeit einführen, so müssen Sie eine Bewilligung für dauernde Nachtarbeit einholen. Beantragen Sie ihre Arbeitszeitbewilligung via EasyGov.swiss - Der Online-Schalter für Unternehmen

Bitte beachten Sie: Verrichtet eine Arbeitnehmerin oder ein Arbeitnehmer pro Jahr Nachtarbeit während 25 Nächten oder mehr, so hat sie oder er das Anrecht, die eigene Eignung für Nachtarbeit alle zwei Jahre medizinisch untersuchen zu lassen. In gewissen Fällen ist eine solche medizinische Untersuchung obligatorisch, zum Beispiel bei Jugendlichen, die in der Nacht beschäftigt werden, oder bei Arbeitnehmerinnen und Arbeitnehmern, die unter schwierigen Bedingungen arbeiten (Extremtemperaturen, Lärm, Vibrationen, körperliche Arbeit, Alleinarbeit …). Ab 45 Jahren können die Arbeitnehmerinnen und Arbeitnehmer verlangen, dass die Untersuchung jedes Jahr durchgeführt wird.`,
              },
            ],
          },
          {
            title: "Nachtarbeit: Entschädigung",
            contents: [
              {
                subtitle: "Vorübergehende Nachtarbeit",
                text: `Arbeitnehmerinnen oder Arbeitnehmer, die weniger als 25 Nächten pro Kalenderjahr während 23.00 und 6.00 Uhr arbeiten, haben Anspruch auf einen Lohnzuschlag von mindestens 25 Prozent.`,
              },
              {
                subtitle: "Dauernde Nachtarbeit",
                text: `Arbeitnehmerinnen und Arbeitnehmer, die in 25 und mehr Nächten pro Kalenderjahr Nachtarbeit verrichten, haben Anspruch auf eine Kompensation von 10 Prozent der Zeit, während der sie Nachtarbeit geleistet haben.

Es ist nicht zulässig, diesen Zeitzuschlag durch einen Lohnzuschlag zu ersetzen, denn die Ausgleichsruhezeit dient dazu, dass die Arbeitnehmerin oder der Arbeitnehmer sich erholen und den Schlafmangel nachholen kann.

Das SECO stellt ein Merkblatt zur Verfügung, in dem die Entschädigung bei dauernder Nachtarbeit im Detail erklärt wird.`,
              },
            ],
          },
          {
            title: "Sonntagsarbeit: Vorschriften und Bewilligungen",
            contents: [
              {
                subtitle: "Vorübergehende und dauernde Sonntagsarbeit",
                text: `In der Schweiz ist Sonntagsarbeit grundsätzlich verboten. Wer als Arbeitgeber dennoch Arbeitnehmerinnen und Arbeitnehmer am Sonntag beschäftigen möchte, braucht eine Bewilligung sowie das Einverständnis der Arbeitnehmerin oder des Arbeitnehmers.

Bitte beachten Sie: In der Schweiz wird zwischen vorübergehender Sonntagsarbeit und dauernder Sonntagsarbeit unterschieden.

- Man spricht von vorübergehender Sonntagsarbeit, wenn es sich um vorher festgelegte Einsätze handelt, die nicht länger als 6 Monate dauern. Arbeit an einem gesetzlichen Feiertag gilt auch als Sonntagsarbeit.
- Von dauernder Sonntagsarbeit spricht man, wenn sie diese Grenze überschreitet. Bitte beachten Sie, dass auch Sonntagsarbeit, die aus regelmässigen, sich über mehrere Jahre wiederholenden Einsätzen aus demselben Grund besteht, als dauernde Sonntagsarbeit gilt.`,
              },
              {
                subtitle: "Eine Bewilligung beantragen",
                text: `Damit Sie als Arbeitgeber vorübergehend Arbeitnehmerinnen und Arbeitnehmer am Sonntag beschäftigen dürfen, müssen Sie bei der zuständigen kantonalen Behörde ein Gesuch für eine Arbeitszeitbewilligung einreichen. Diese übermittelt Ihnen die nötigen Informationen und die für die Einreichung des Gesuchs nötigen Formulare.

Wenn Sie eine Bewilligung für dauernde Sonntagsarbeit beantragen möchten, beantragen Sie ihre Arbeitszeitbewilligung via EasyGov.swiss - Der Online-Schalter für Unternehmen.`,
              },
            ],
          },
          {
            title: "Sonntagsarbeit: Entschädigung",
            contents: [
              {
                subtitle: "Vorübergehende Sonntagsarbeit",
                text: `Arbeitnehmerinnen und Arbeitnehmer, die bis zu sechs Sonntagen im Jahr arbeiten, haben Anspruch auf einen Lohnzuschlag von 50 Prozent und einen Zeitausgleich. Dieser variiert je nach Situation wie folgt:

- Sonntagsarbeit von einer Dauer bis zu fünf Stunden muss innerhalb von vier Wochen durch Freizeit gleicher Dauer ausgeglichen werden.
- Dauert die Sonntagsarbeit länger als fünf Stunden, so muss in der vorhergehenden oder der nachfolgenden Woche ein Ruhetag von mindestens 24 aufeinanderfolgenden Stunden gewährt werden (zusätzlich zur täglichen Ruhezeit, das heisst zur Ruhezeit zwischen zwei Arbeitstagen, die mindestens 11 Stunden betragen muss; insgesamt muss der Ausgleich also 35 Stunden betragen).`,
              },
              {
                subtitle: "Dauernde Sonntagsarbeit",
                text: `Arbeitnehmerinnen und Arbeitnehmer, die dauernde Sonntagsarbeit verrichten, haben Anspruch auf einen Zeitausgleich.

Dieser variiert je nach Situation wie folgt:

- Sonntagsarbeit von einer Dauer bis zu fünf Stunden muss innerhalb von vier Wochen durch Freizeit gleicher Dauer ausgeglichen werden.
- Dauert die Sonntagsarbeit länger als fünf Stunden, so muss in der vorhergehenden oder der nachfolgenden Woche ein Ruhetag von mindestens 24 aufeinanderfolgenden Stunden gewährt werden (zusätzlich zur täglichen Ruhezeit, das heisst zur Ruhezeit zwischen zwei Arbeitstagen, die mindestens 11 Stunden betragen muss; insgesamt muss der Ausgleich also 35 Stunden betragen).

Es ist nicht zulässig, diesen Zeitausgleich durch einen Lohnzuschlag zu ersetzen, denn die Ausgleichsruhezeit dient dazu, dass die Arbeitnehmerin oder der Arbeitnehmer sich erholen und die entgangene Sonntags- und Feiertagserholung nachholen kann.`,
              },
            ],
          },
          {
            title: "Nacht- und Sonntagsarbeit: Ausnahmen",
            contents: [
              {
                text: `In gewissen Berufen und Berufskategorien können Mitarbeiterinnen und Mitarbeiter ohne Bewilligung in der Nacht und an Sonntagen beschäftigt werden, zum Beispiel im Gesundheitswesen, im Gastgewerbe, aber auch in Kiosken, Bäckereien, Theatern und Zeitungsredaktionen.

Das SECO stellt eine aktuelle Liste der Berufskategorien zur Verfügung, für die Nacht- und Sonntagsarbeit ohne Bewilligung möglich ist.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Arbeitszeit///Ferien, Feiertage und Arbeitsabwesenheiten",
    description:
      "In der Schweiz haben alle Arbeitnehmerinnen und Arbeitnehmer das Anrecht auf mindestens 4 Wochen Ferien im Jahr. Für besondere Anlässe haben sie zudem freie Tage oder freie Stunden zugute.",
    contents: [
      {
        infos: [
          {
            title: "Ferien",
            contents: [
              {
                subtitle: "Wie viele Wochen?",
                text: `Unabhängig von Ihrem Arbeitspensum haben Sie Anrecht auf mindestens vier Wochen Ferien im Jahr.

Bis zum Alter von 20 Jahren haben Sie mindestens fünf Wochen Ferien.

Je nach Arbeitgeber (oder Gesamtarbeitsvertrag) werden Ihnen möglicherweise auch mehr Ferien gewährt.`,
              },
              {
                subtitle: "Wie lege ich meine Ferien fest?",
                text: `Bei der Frage, wann Sie Ihre Ferien beziehen, ist das Einverständnis Ihres Arbeitgebers erforderlich. Sind Ihre Ferien nicht mit der Organisation des Betriebs oder mit dessen Bedürfnissen und Interessen vereinbar, so kann Ihre Vorgesetzte oder Ihr Vorgesetzter von Ihnen verlangen, dass Sie Ihre Ferien verschieben.`,
              },
              {
                subtitle: "Ferien und Krankheit",
                text: `Ferien dienen der Erholung. Ist es Ihnen wegen Krankheit oder einem schweren Unfall nicht möglich, sich in Ihren Ferien zu erholen, haben Sie das Recht, die Ferien zu verschieben; sie müssen dazu ein Arztzeugnis vorweisen.`,
              },
              {
                subtitle: "Ferien und Kündigung",
                text: `Grundsätzlich können Sie Ferien, die Sie noch zugute haben, auch während der Kündigungsfrist beziehen. Ihr Arbeitgeber kann Ihnen den Bezug der restlichen Ferientage jedoch verweigern, wenn eine betriebliche Ausnahmesituation vorliegt.

In gewissen Fällen können Sie mit Ihrem Arbeitgeber vereinbaren, dass Ihnen die restlichen Ferientage ausbezahlt werden.`,
              },
            ],
          },
          {
            title: "Feiertage",
            contents: [
              {
                text: `Der 1. August (Bundesfeiertag) ist der einzige eidgenössische Feiertag.

Die Kantone dürfen für ihr Kantonsgebiet höchstens acht weitere Feiertage den Sonntagen gleichstellen. Die kantonalen Feiertage variieren demnach von Kanton zu Kanton.

Fällt ein Feiertag auf einen arbeitsfreien Tag (z. B. Samstag oder Sonntag), besteht kein Anspruch darauf, ihn während der Woche zu kompensieren. Fällt ein Feiertag in Ihre Ferien, zählt er nicht als Ferientag.`,
              },
            ],
          },
          {
            title: "Abwesenheiten / Urlaub",
            contents: [
              {
                text: `In gewissen Fällen können Sie der Arbeit fernbleiben, ohne die Stunden oder Tage, an denen Sie abwesend waren, später nachholen zu müssen. Das gilt zum Beispiel in folgenden Fällen:  

- Erfüllung gesetzlicher Pflichten
- Ausübung eines öffentlichen Amts (Mitglied eines Gemeindeparlaments oder einer Gemeindeexekutive usw.)
- Hochzeit
- Tod einer oder eines nahen Verwandten
- Umzug
- Geburt eigener Kinder
- Pflege einer oder eines nahen Verwandten
- Kinderpflege

Wie viele freie Stunden und Tage Ihnen in diesen Fällen zur Verfügung stehen, ist im Gesetz nicht klar geregelt. Fragen Sie Ihren Arbeitgeber, welche Regeln in Ihrem Betrieb gelten oder schauen Sie auf der Seite Freizeit und Feiertage des Staatssekretariats für Wirtschaft (Seco) nach.

Bitte beachten Sie: Kommen Sie aufgrund äusserer Umstände wie Stau, gesperrte Strassen oder Ausfall eines Flugs oder einer Zugverbindung zu spät zur Arbeit oder bleiben ihr ganz fern, so ist Ihr Arbeitgeber nicht verpflichtet, Ihnen diese Stunden zu schenken, und Sie müssen die fehlende Arbeitszeit nachholen.`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    localeId: 2,
    categoryId: 18,
    title: "Invalidenversicherung (IV)",
    description:
      "Diese schweizerische Sozial-versicherung unterstützt Personen, die aus gesundheitlichen Gründen dauerhaft nicht in der Lage sind, einer Arbeit nachzugehen. Die IV-Rente muss den täglichen Bedarf im Fall von Invalidität decken.",
    contents: [
      {
        infos: [
          {
            title: "Worum geht es?",
            contents: [
              {
                text: `Die Invalidenversicherung (IV) ist eine schweizerische Sozialversicherung, die für alle obligatorisch ist. Sie hat zum Ziel, versicherten Personen, die von einer Invalidität betroffen sind, die lebensnotwendigen Mittel zur Verfügung zu stellen – sei es mittels Eingliederungsmassnahmen, sei es mittels einer Rente.`,
              },
            ],
          },
          {
            title: "Wer hat Anspruch auf IV-Leistungen?",
            contents: [
              {
                text: `Wer in der Schweiz wohnhaft ist oder hier einer Erwerbstätigkeit nachgeht, ist obligatorisch bei der IV versichert. Um die Leistungen der IV in Anspruch nehmen zu können, müssen mehrere Voraussetzungen erfüllt sein.

Staatsangehörige von EU- oder EFTA-Staaten haben dieselben Rechte wie Schweizerinnen und Schweizer. Wenn Sie aus einem anderen Land kommen, können die Leistungen bei der Rückkehr in dieses Land gekürzt werden, ausser dieses Land hat mit der Schweiz ein Sozialversicherungsabkommen abgeschlossen.

Unter bestimmten Voraussetzungen können sich Schweizerinnen und Schweizer sowie Staatsangehörige von EU- oder EFTA-Staaten, die nicht in einem dieser Länder wohnen, freiwillig bei der IV versichern.`,
              },
            ],
          },
          {
            title: "Wie kann man IV-Leistungen beanspruchen?",
            contents: [
              {
                text: `Dazu müssen Sie mit der zuständigen IV-Stelle Kontakt aufnehmen. Wenn Sie in der Schweiz wohnhaft sind, müssen Sie die zuständige Stelle Ihres Wohnkantons kontaktieren.

Grenzgängerinnen und Grenzgänger müssen sich an die IV-Stelle des Kantons wenden, in dem sie arbeiten.

Wenn Sie im Ausland leben und arbeiten, müssen Sie sich an die IV-Stelle für Versicherte im Ausland wenden.

Um Leistungen zu beziehen, müssen Sie ein Anmeldeformular ausfüllen.

Nachdem Sie das Gesuch eingereicht haben, prüft es die IV und entscheidet, ob Sie Anspruch auf Leistungen haben und wenn ja auf welche.

Es liegt in Ihrem Interesse, mit der Anmeldung nicht zuzuwarten. Wenn Sie zu lange warten, besteht die Gefahr, dass deswegen die Leistungen gekürzt werden.`,
              },
            ],
          },
          {
            title: "Welche Leistungen erbringt die IV?",
            contents: [
              {
                subtitle: "Eingliederungsmassnahmen",
                text: `Eingliederungsmassnahmen dienen zum Erhalt oder zur dauernden und wesentlichen Verbesserung der Erwerbstätigkeit.

Um Ihnen dabei zu helfen, Ihre Anstellung zu behalten oder eine neue Arbeit zu finden, kann die IV Sie beraten oder eine Ausbildung, Arbeitsvermittlungsdienste, eine berufliche Orientierung oder Beschäftigungsmassnahmen anbieten.

Die IV kann auch für medizinische Massnahmen aufkommen und Hilfsmittel wie einen Rollstuhl oder ein Hörgerät zur Verfügung stellen.

Für Menschen mit psychischen Problemen sind Massnahmen zur Angewöhnung an den Arbeitsprozess oder zur Stabilisierung der Persönlichkeit möglich.

Wenn Sie an einer Eingliederungsmassnahme teilnehmen und keine Rente beziehen, haben Sie Anrecht auf Taggeld. Dessen Höhe ist von Ihrem letzten Lohn abhängig. Reisekosten und Kosten für die Betreuung von Kindern während der Eingliederungsmassnahme werden ebenfalls übernommen.`,
              },
              {
                subtitle: "IV-Rente",
                text: `Ist eine Eingliederung nicht möglich oder unzureichend, prüft die IV den Anspruch auf eine Invalidenrente. Um eine Rente zu beziehen, müssen Sie während einem Jahr durchschnittlich mindestens 40 Prozent arbeitsunfähig sein. Zudem muss diese Situation als irreversibel gelten.

Die Rente wird individuell berechnet. Sie hängt vom Invaliditätsgrad, dem massgeblichen Einkommen und der Anzahl Beitragsjahre ab.

Wenn Sie eine IV-Rente beziehen und Kinder haben, haben Sie zusätzlich Anspruch auf eine Rente pro Kind unter 18 Jahren (unter 25 Jahren, wenn das Kind in Ausbildung ist). Die Kinderrente beträgt 40 Prozent der IV-Rente.

Sie können auch von der Unfall- oder Militärversicherung eine Invalidenrente beziehen.`
              },
              {
                subtitle: "Hilflosenentschädigung",
                text: `Sie können Hilflosenentschädigung erhalten, wenn Sie bei alltäglichen Lebensverrichtungen wie Ankleiden, Aufstehen, Zubettgehen, Essen oder Körperpflege die Hilfe anderer Menschen benötigen.

Die Entschädigung wird zusätzlich zur IV-Rente ausgerichtet. Der Betrag hängt vom Ausmass Ihrer Einschränkung ab. Es können nur in der Schweiz wohnhafte Personen Hilflosenentschädigung beziehen.

Sie können auch von der Unfall- oder Militärversicherung Hilflosenentschädigung beziehen.`
              },
              {
                subtitle: "Assistenzbeitrag",
                text: `Wenn Sie von der IV eine Hilflosenentschädigung beziehen, zu Hause leben und eine Drittperson, die Sie unterstützt, bezahlen, kann die IV dafür einen Assistenzbeitrag leisten. Das Ziel ist, dass Sie nicht in ein Heim eintreten müssen.

Die Höhe des Assistenzbeitrags hängt vom Zeitaufwand und den Qualifikationen ab, die für die Unterstützung nötig sind.`
              }
            ],
          },
        ],
      },
    ],
  },
];

export const infoDE = [...infoZoll, ...infoArbeit];
