import { CategoryId, LocaleId, type Information } from "../model";

const infoZoll: Information[] = [
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(7),
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
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(7),
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
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(7),
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(7),
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
    isEssential: 0,
  },
];

const infoDocuments: Information[] = [
  // Erbschein
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(8),
    title: "Erbschein",
    description:
      "Der Erbschein (erhalten in einem Verfahren, das dem englischen oder amerikanischen 'Grant of Probate' oder der schottischen 'Confirmation' entspricht) gibt an, wer berechtigt ist, das Vermögen einer verstorbenen Person zu erben. Dieses Dokument ist in der Regel erforderlich, um mit dem Nachlass des Verstorbenen umzugehen, beispielsweise um Geld vom Bankkonto des Verstorbenen abzuheben.",
    contents: [
      {
        infos: [
          {
            title: "Wer kann einen Erbschein beantragen?",
            contents: [
              {
                text: `Falls der Verstorbene kein Testament oder einen Erbvertrag hinterlassen hat, können die gesetzlichen Erben einen Erbschein beantragen; dies sind, je nach Fall, die Ehefrau, der Ehemann, der eingetragene Partner, Nachkommen (d.h. Kinder und deren Nachkommen) oder, falls zutreffend, Eltern und deren Kinder (d.h. die Brüder und Schwestern des Verstorbenen).

Falls ein Testament oder ein Erbvertrag vorliegt, kann der Erbschein erst nach der offiziellen Bekanntgabe des Testaments oder des Erbvertrags durch die zuständige Behörde beantragt werden.`,
              },
            ],
          },
          {
            title: "Voraussetzungen",
            contents: [
              {
                text: `Um einen Erbschein zu erhalten, müssen Sie unter anderem:

- eine Kopie der Sterbeurkunde einreichen (diese erhalten Sie vom Zivilstandsamt),

- nachweisen, dass Sie erbberechtigt sind (z.B. durch Vorlage eines Auszugs aus dem Zivilstandsregister, der Ihre familiäre oder zivilrechtliche Beziehung zum Verstorbenen zeigt, oder eine Kopie des Testaments oder Erbvertrags),

- nachweisen, dass Sie das Erbe nicht ausgeschlagen haben (d.h. durch Vorlage der Annahmeerklärung aller Erben oder

- Nachweis, dass die Frist, in der das Erbe hätte ausgeschlagen werden können, abgelaufen ist).`,
              },
            ],
          },
          {
            title: "Kosten",
            contents: [
              {
                text: `Die Kosten für die Ausstellung eines Erbscheins variieren je nach Fall; sie hängen davon ab, welche Nachforschungen erforderlich sind und wie viel Zeit die Behörde dafür aufwenden musste, um den Erbschein auszustellen. Die Kosten können mehrere hundert oder sogar einige tausend Franken betragen. Hinzu kommen die Kosten, die das Zivilstandsamt für die Ausstellung der Dokumente und die Einholung von Informationen in der Schweiz und im Ausland berechnet.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  // Zivilstandsurkunden
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(8),
    title: "Zivilstandsurkunden",
    description:
      "Die Behörden stellen verschiedene Arten von Dokumenten aus, die beispielsweise eine familiäre Beziehung oder Ihr Geburtsdatum und -ort bescheinigen. Diese Seite enthält eine Liste der Zivilstandsurkunden, die Sie bestellen können, und wo Sie diese erhalten.",
    contents: [
      {
        infos: [
          {
            title: "Wo und wie bestellen?",
            contents: [
              {
                text: "Sie können Zivilstandsurkunden direkt online oder persönlich beim zuständigen Zivilstandsamt anfordern. Das zuständige Amt variiert je nach Art des benötigten Dokuments:",
              },
              {
                text: "Geburtsauszug, Bestätigung der Geburtszeit",
                links: [
                  {
                    text: "Zivilstandsamt am Geburtsort",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?1",
                  },
                ],
              },
              {
                text: "Heimatschein (für Schweizer Bürger), Personenstandsausweis (für Schweizer Bürger)",
                links: [
                  {
                    text: "Zivilstandsamt am Heimatort",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Bestätigung des eingetragenen Zivilstands (für Ausländer)",
                links: [
                  {
                    text: "Zivilstandsamt am (vorherigen) (ständigen) Wohnort",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Familienausweis für Schweizer Bürger (ehemals Familienbüchlein)",
                links: [
                  {
                    text: `Wenn Sie Schweizer Bürger sind: Zivilstandsamt am Heimatort.`,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                  {
                    text: `Wenn Sie Ausländer sind: Zivilstandsamt am (vorherigen) Wohnort`,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Eheurkunde",
                links: [
                  {
                    text: "Zivilstandsamt, wo die Ehe geschlossen wurde",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Partnerschaftsurkunde",
                links: [
                  {
                    text: "Zivilstandsamt, wo die Partnerschaft eingetragen wurde",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Sterbeurkunde",
                links: [
                  {
                    text: "Zivilstandsamt am Sterbeort",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
            ],
          },
          {
            title: "Kosten",
            contents: [
              {
                text: "In der Schweiz kostet eine Zivilstandsurkunde CHF 30 (zuzüglich Porto). Familienausweise, andere Familienregister, Partnerschaftsurkunden und Urkunden über den eingetragenen Zivilstand kosten mehr.",
              },
            ],
          },
          {
            title: "Wer darf eine Zivilstandsurkunde bestellen und welche Bedingungen gelten?",
            contents: [
              {
                text: `- Sie dürfen alle Zivilstandsurkunden anfordern, die Sie persönlich betreffen.
- Familienbüchlein können aktualisiert, aber nicht mehr neu bestellt werden.
- Sie können eine Zivilstandsurkunde für eine andere Person anfordern, wenn Sie eine Vollmacht dieser Person und eine Kopie ihres Ausweises vorlegen können.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  // Strafregisterauszug
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(8),
    title: "Strafregisterauszug",
    description:
      "Ein potenzieller Arbeitgeber möchte möglicherweise sicherstellen, dass Sie keine kriminelle Vergangenheit haben. Ein Auszug aus dem Strafregister gibt Auskunft über eventuelle Verurteilungen.",
    contents: [
      {
        infos: [
          {
            title: "Standard-Privatauszug: Was ist das?",
            contents: [
              {
                text: `Ein standardmäßiger Privatauszug aus dem Schweizer Strafregister zeigt, ob eine Person in einem bestimmten Zeitraum (Offenlegungsfrist) wegen eines Verbrechens oder Vergehens verurteilt wurde; die Länge der Offenlegungsfrist für jede Verurteilung hängt von der verhängten Sanktion ab.

Er kann beispielsweise von einem potenziellen Arbeitgeber angefordert werden, wenn Sie eine Waffenlizenz beantragen oder wenn Sie die Schweizer Staatsbürgerschaft erwerben möchten.`,
              },
            ],
          },
          {
            title: "Bestellung des Auszugs",
            contents: [
              {
                text: "Sie können einen standardmäßigen Privatauszug bei einer Poststelle oder online über die Website des Bundesamts für Justiz bestellen.",
                links: [
                  {
                    url: "https://www.e-service.admin.ch/crex/cms/contents/strafregister/uebersicht_fr",
                  },
                ],
              },
            ],
          },
          {
            title: "Preis des Auszugs?",
            contents: [
              {
                text: `Jeder Auszug kostet CHF 17.

Falls Ihr Auszug für eine ausländische Behörde oder Botschaft gedacht ist (z.B. für einen Visumantrag), müssen Sie zusätzlich 20 Franken zahlen, um das Dokument legalisieren zu lassen.

Hier finden Sie Informationen zum Verfahren zur Legalisation des Auszugs.`,
              },
            ],
          },
          {
            title: "Spezial-Privatauszug",
            contents: [
              {
                text: `Es gibt auch einen speziellen Privatauszug, der nur Verurteilungen auflistet, die derzeit zu einem Verbot führen

- in einem bestimmten Beruf zu arbeiten oder eine bestimmte Tätigkeit auszuüben,
- Kontakt zu einer bestimmten Person oder Personen aufzunehmen oder
- einen bestimmten Ort oder Bereich zu betreten,
um Minderjährige oder andere besonders schutzbedürftige Personen zu schützen.

Sie dürfen nur dann aufgefordert werden, diesen Auszug vorzulegen, wenn Sie eine organisierte Tätigkeit ausüben möchten (z.B. als Sporttrainer oder Lehrer), die regelmäßigen Kontakt mit Minderjährigen oder anderen besonders schutzbedürftigen Personen beinhaltet.

Das Verfahren zur Bestellung eines speziellen Privatauszugs ist dasselbe wie für einen standardmäßigen Privatauszug. Die Organisation oder der Arbeitgeber, der Ihre Dienste benötigt, muss jedoch zunächst eine unterzeichnete Bestätigung ausfüllen und Ihnen zusenden, dass die Tätigkeit einen speziellen Privatauszug erfordert.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Führerschein
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(8),
    title: "Führerschein///Umtausch Ihres Führerscheins",
    description:
      "Ein Schweizer Führerschein hat kein Ablaufdatum, aber wenn Ihr Führerschein verloren geht oder gestohlen wird, müssen Sie einen neuen beantragen. Diese Webseite bietet Anweisungen, wie Sie einen Führerschein im Kreditkartenformat erhalten und Informationen auf Ihrem bestehenden Führerschein ändern können.",
    contents: [
      {
        infos: [
          {
            title: "Wann benötigen Sie einen neuen Führerschein?",
            contents: [
              {
                subtitle: "Verlust oder Diebstahl Ihres Führerscheins",
                text: `Wenn Ihr Führerschein verloren gegangen oder gestohlen wurde, müssen Sie einen neuen beantragen.`,
              },
              {
                subtitle: "Änderung der Informationen auf Ihrem Führerschein",
                text: `Wenn sich Informationen auf Ihrem Führerschein ändern, wie z.B. eine Namensänderung oder eine Änderung der Führerscheinklasse, müssen Sie einen neuen Führerschein beantragen.`,
              },
              {
                subtitle: "Fahrer mit einem blauen Papierführerschein",
                text: `Papierführerscheine haben am 1. November 2024 ihre Gültigkeit verloren. Fahrer, die noch einen blauen Papierführerschein besitzen, müssen diesen gegen einen Führerschein im Kreditkartenformat umtauschen.`,
              },
              {
                subtitle: "Fahren im Ausland",
                text: `Um in einigen Ländern zu fahren, benötigen Sie einen internationalen Führerschein.`,
              },
            ],
          },
          {
            title: "Was müssen Sie tun, wenn Ihr Führerschein verloren gegangen oder gestohlen wurde?",
            contents: [
              {
                text: `Wenn Ihr Schweizer Führerschein gestohlen wurde, müssen Sie den Diebstahl bei einer Polizeistelle melden (Website verfügbar auf Deutsch, Französisch und Italienisch).

Sie sollten dann die Fahrer- und Fahrzeugzulassungsstelle kontaktieren (Website verfügbar auf Deutsch, Französisch und Italienisch), die Ihnen einen vorläufigen Führerschein ausstellt, der Sie zum Fahren berechtigt, bis Sie Ihren neuen Führerschein erhalten.

Sobald ein neuer Führerschein ausgestellt wurde, ist der alte nicht mehr gültig. Wenn Sie Ihren verloren geglaubten oder gestohlenen Führerschein finden, senden Sie ihn bitte mit einer Erklärung an die Fahrer- und Fahrzeugzulassungsstelle.`,
              },
            ],
          },
          {
            title: "Was müssen Sie tun, um einen neuen Führerschein zu erhalten?",
            contents: [
              {
                text: `Sie müssen die Fahrer- und Fahrzeugzulassungsstelle Ihres Kantons kontaktieren (Website verfügbar auf Deutsch, Französisch und Italienisch).

Der neue Führerschein wird Ihnen innerhalb von ein bis zwei Wochen per Post zugesandt.

Die Kosten für einen neuen Führerschein variieren je nach Kanton. Ein Duplikat oder ein aktualisierter Führerschein kostet etwa CHF 30. Der Umtausch eines ausländischen Führerscheins in einen Schweizer kostet mehr als CHF 100.`,
              },
            ],
          },
          {
            title: "Fahren mit einem ausländischen Führerschein?",
            contents: [
              {
                text: `Wenn Sie in der Schweiz leben, dürfen Sie 12 Monate lang mit einem ausländischen Führerschein fahren. Danach müssen Sie einen Schweizer Führerschein besitzen.

Sie müssen Ihren ausländischen Führerschein gegen einen Schweizer Führerschein umtauschen; dies ist auch nach der 12-monatigen Frist möglich, aber Sie könnten eine Strafe zahlen müssen.`,
              },
              {
                subtitle: "Umtausch eines ausländischen Führerscheins in einen Schweizer",
                text: `Die Verfahren variieren je nachdem, welches Land den ausländischen Führerschein ausgestellt hat. In jedem Fall müssen Sie den originalen Führerschein vorlegen und einen Sehtest machen.

Wenn Sie einen Führerschein aus einem EU- oder EWR-Land (Island, Liechtenstein, Norwegen) haben, wird Ihnen ein Schweizer Führerschein ohne Fahrprüfung ausgestellt. Ihr ausländischer Führerschein wird an die ausstellende Behörde zurückgesendet.

Für einen Führerschein aus einem anderen Land müssen Sie:

- eine Fahrprüfung ablegen,
- eine zusätzliche Theorieprüfung (für Berufsfahrer) ablegen, um Ihre Fahrtauglichkeit zu bescheinigen.

Nach Abgabe Ihres ausländischen Führerscheins und Bestehen der erforderlichen Prüfungen wird Ihnen ein Schweizer Führerschein auf Probe für drei Jahre oder ein Führerschein ohne Ablaufdatum ausgestellt. Das Dokument wird Ihnen innerhalb einer von Kanton zu Kanton variierenden Frist per Post zugesandt.`,
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
    categoryId: CategoryId.make(8),
    title: "Führerschein///Internationaler Führerschein",
    description:
      "Wenn Sie im Ausland fahren möchten, benötigen Sie möglicherweise einen internationalen Führerschein. Erfahren Sie, ob Sie einen benötigen und wie Sie ihn in der Schweiz bestellen können.",
    contents: [
      {
        infos: [
          {
            title: "Was ist ein internationaler Führerschein?",
            contents: [
              {
                text: `Der internationale Führerschein ist eine internationale Version Ihres Schweizer Führerscheins, die es Ihnen erlaubt, im Ausland zu fahren. Er ist nur in Verbindung mit Ihrem Schweizer Führerschein gültig. Sie müssen beide gültigen Dokumente bei sich haben, wenn Sie im Ausland fahren.`,
              },
            ],
          },
          {
            title: "Welche Länder erfordern einen internationalen Führerschein?",
            contents: [
              {
                subtitle: "Personen mit einem Schweizer Führerschein",
                text: `Ein internationaler Führerschein wird empfohlen, wenn Sie in Ländern außerhalb der EU und der EFTA fahren. Mehrere Länder und viele Autovermietungen verlangen, dass Sie einen internationalen Führerschein haben.

Vor einer Reise ins Ausland fragen Sie Ihren Reiseveranstalter, die ausländische Vertretung Ihres Ziellandes oder einen Verkehrsverband, welche Fahrdokumente erforderlich sind.

Europäische Länder akzeptieren den Schweizer Führerschein.`,
              },
              {
                subtitle: "Personen mit einem ausländischen Führerschein",
                text: "Wenn Sie im Ausland leben, benötigen Sie einen internationalen Führerschein, um in der Schweiz zu fahren, nur wenn Ihr Führerschein die zugelassenen Fahrzeugkategorien nicht in lateinischen Buchstaben angibt. Wenn Sie in der Schweiz leben, müssen Sie Ihren ausländischen Führerschein möglicherweise gegen einen Schweizer Führerschein umtauschen.",
              },
            ],
          },
          {
            title: "Bestellen eines internationalen Führerscheins?",
            contents: [
              {
                text: `Sie können Ihren internationalen Führerschein bei der Verkehrsbehörde Ihres Kantons bestellen (Website verfügbar auf Deutsch, Französisch und Italienisch).

In einigen Kantonen können Sie auch den Automobil-Club der Schweiz oder den Touring Club Schweiz kontaktieren. Diese Vereinigungen geben Ihnen auch Informationen über die erforderlichen Dokumente.`,
              },
            ],
          },
          {
            title: "Gültigkeit und Preis",
            contents: [
              {
                text: `Der internationale Führerschein ist drei Jahre lang gültig, jedoch nicht über das Ablaufdatum Ihres Schweizer Führerscheins hinaus.

Sie können Ihren internationalen Führerschein nicht verlängern, aber Sie können einen neuen bestellen, wenn er abläuft.

Der Preis eines internationalen Führerscheins variiert je nach Kanton. Er liegt bei etwa CHF 30.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Auszug aus dem Betreibungsregister
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(8),
    title: "Auszug aus dem Betreibungsregister",
    description: "Um nachzuweisen, dass Sie Ihre Rechnungen bezahlen und keine ausstehenden Schulden haben, müssen Sie regelmäßig einen Auszug aus dem Betreibungsregister vorlegen.",
    contents: [
      {
        infos: [
          {
            title: "Was ist der Auszug und wann benötigen Sie ihn?",
            contents: [
              {
                text: `Ein Auszug aus dem Betreibungsregister gibt an, ob in den letzten 5 Jahren Betreibungsverfahren gegen Sie eröffnet wurden.

Wenn Sie beispielsweise eine Wohnung mieten möchten, wird Ihr potenzieller Vermieter oft von Ihnen einen Auszug verlangen, um herauszufinden, ob Sie Ihre Rechnungen voraussichtlich bezahlen werden. Dasselbe gilt, wenn Sie einen Bankkredit aufnehmen oder ein Auto auf Leasing kaufen möchten. Sie werden auch aufgefordert, einen Auszug vorzulegen, wenn Sie die Schweizer Staatsbürgerschaft beantragen.`,
              },
            ],
          },
          {
            title: "Wer kann einen Auszug anfordern?",
            contents: [
              {
                text: `Sie können einen Auszug im Zusammenhang mit Betreibungsverfahren anfordern, die Sie oder eine andere Person betreffen.

Um Ihren eigenen Auszug zu beantragen, müssen Sie eine Kopie eines Ausweisdokuments vorlegen.

Um einen Auszug aus dem Register in Bezug auf eine andere Person zu erhalten, benötigen Sie eine unterzeichnete Vollmacht dieser Person und eine Kopie ihres Ausweises.

Sie können auch einen Auszug aus dem Register in Bezug auf eine andere Person anfordern, ohne diese informieren zu müssen. Sie müssen jedoch nachweisen, dass Sie ein besonderes Interesse daran haben, diese Informationen zu erhalten. Zum Beispiel können Sie einen Auszug für eine Person erhalten, der Sie eine Wohnung vermieten oder Geld leihen möchten. Sie müssen Ihrem Antrag dokumentarische Nachweise Ihres Interesses (z.B. ein schriftliches Angebot für den Mietvertrag oder das Darlehen) zusammen mit einer Kopie Ihres Ausweises beifügen.`,
              },
            ],
          },
          {
            title: "Wo können Sie den Auszug anfordern?",
            contents: [
              {
                text: `Sie haben zwei Möglichkeiten, den Auszug zu beantragen:

- Füllen Sie das Online-Formular aus und senden Sie es per Post oder E-Mail an das Betreibungsamt in Ihrem Wohnkanton;
- oder beantragen Sie den Auszug persönlich am Schalter des Betreibungsamts in Ihrem Wohnkanton.`,
              },
            ],
          },
          {
            title: "Löschen eines Eintrags aus dem Register",
            contents: [
              {
                text: `Der Eintrag im Register wird automatisch 5 Jahre nach Abschluss des Betreibungsverfahrens gelöscht. Vor dieser Frist:

- können Sie direkt zu Ihren Gläubigern gehen und sie bitten, das Betreibungsverfahren aufzugeben und den Eintrag aus dem Register entfernen zu lassen, beispielsweise wenn Sie inzwischen eine Einigung erzielt oder Ihre Schulden beglichen haben;

- das Betreibungsamt korrigiert fehlerhafte Einträge direkt oder auf Ihren Antrag;

- unter bestimmten Bedingungen können Sie das Betreibungsamt bitten, eine betroffene Schuld nicht im Auszug aus dem Register aufzuführen. Das zuständige Amt informiert Sie über die zu erfüllenden Bedingungen und die damit verbundenen Kosten.`,
              },
            ],
          },
          {
            title: "Kosten",
            contents: [
              {
                text: `Ein Auszug aus dem Betreibungsregister kostet CHF 20 zuzüglich Porto.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Jagdschein
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(8),
    title: "Jagdausbildung und Jagdschein",
    description:
      "Wenn Sie in der Schweiz jagen möchten, benötigen Sie eine Jagdausbildung. Je nach Kanton müssen Sie möglicherweise auch einen Jagdschein erwerben oder Mitglied eines Jagdverbands werden.",
    contents: [
      {
        infos: [
          {
            title: "Benötige ich eine spezielle Ausbildung, um in der Schweiz zu jagen?",
            contents: [
              {
                text: `Bevor Sie jagen dürfen, müssen Sie eine Prüfung bestehen. Die Kurse werden auf kantonaler Ebene geregelt und dauern bis zu drei Jahren. Einige Kantone erkennen die Qualifikationen anderer Kantone an.

Weitere Informationen zu Jagdausbildung und Prüfungen finden Sie bei den zuständigen kantonalen Ämtern (viele Kantone haben ein Jagdaufsicht):`,
              },
            ],
          },
          {
            title: "Jagdschein oder Jagdrevier?",
            contents: [
              {
                text: `Wenn Sie die Jagdprüfung bestanden haben, können Sie in den meisten Kantonen einen Jagdschein erwerben. In anderen Kantonen müssen Sie Mitglied oder Gast eines Jagdverbands sein, um in einem ihrer Jagdreviere jagen zu dürfen. Bitte erkundigen Sie sich beim Kanton, in dem Sie jagen möchten.`,
              },
              {
                subtitle: "Welche Kantone bieten Jagdscheine an?",
                text: `In den meisten Kantonen können Sie mit einem kantonalen Jagdschein überall im Kanton jagen. Sie dürfen eine bestimmte Anzahl von Tieren schießen. Diese Zahl ist auf dem Jagdschein angegeben, ebenso wie die Gültigkeitsdauer des Scheins.

Sie dürfen nicht in föderal oder kantonal geschützten Gebieten wie Jagdverbotsgebieten oder Wasser- und Zugvogelreservaten jagen.

Kantone mit Jagdscheinen sind Bern, Uri, Schwyz, Obwalden, Nidwalden, Glarus, Zug, Freiburg, Appenzell Ausserrhoden, Appenzell Innerrhoden, Graubünden, Tessin, Waadt, Wallis, Neuenburg und Jura.`,
              },
              {
                subtitle: "Welche Kantone haben Jagdreviere?",
                text: `In einigen Kantonen verpachten die Gemeinden Jagdrechte an einen Jagdverband. Als Mitglied oder Gast dieses Jagdverbands dürfen Sie im gepachteten Gebiet jagen.

Kantonen mit Jagdrevieren: Zürich, Luzern, Solothurn, Basel-Stadt, Basel-Landschaft, Schaffhausen, St. Gallen, Aargau und Thurgau.`,
              },
            ],
          },
          {
            title: "Kann ich im Kanton Genf jagen?",
            contents: [
              {
                text: `Jagen ist im Kanton Genf nicht erlaubt. Dort regulieren staatliche Wildhüter die Wildbestände.`,
              },
            ],
          },
          {
            title: "Wie gut muss ich schießen, um jagen zu gehen?",
            contents: [
              {
                text: `Sie müssen regelmäßig nachweisen, dass Sie präzise schießen können. Andernfalls dürfen Sie nicht jagen. Die meisten Kantone verlangen, dass Sie jährlich auf einem anerkannten Jagdschützenstand schießen und Ihre Präzision unter Beweis stellen.

Weitere Informationen zu Pflichtschießen und anerkannten Schießständen erhalten Sie beim zuständigen kantonalen Amt.`,
              },
            ],
          },
          {
            title: "Wann beginnt die Jagdsaison und wann sind die Schonzeiten?",
            contents: [
              {
                text: `Die Jagdsaison dauert nicht das ganze Jahr über. Es gibt Schonzeiten, in denen Sie nicht jagen dürfen. Der Bundesgeber legt die Schonzeiten für jede Tierart fest. Die Kantone können die Jagdsaison verkürzen oder die Liste der jagdbaren Arten einschränken. Erkundigen Sie sich bei der zuständigen kantonalen Behörde, wann Sie welche Tiere jagen dürfen.`,
              },
            ],
          },
          {
            title: "Kann ich mit Jagdhunden jagen?",
            contents: [
              {
                text: `Wer an der Verwendung von Jagdhunden interessiert ist, muss Schulungskurse besuchen und Prüfungen bestehen. Kontaktieren Sie die zuständige kantonale Behörde für weitere Informationen zu den Anforderungen für die Verwendung von Jagdhunden.`,
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
    categoryId: CategoryId.make(8),
    title: "Patientenverfügung",
    description:
      "Mit einer Patientenverfügung bestimmen Sie die medizinische Behandlung, die Sie am Ende Ihres Lebens wünschen. Es gibt spezielle Formulare. Wir erklären das Verfahren und wo Sie Vorlagen finden können.",
    contents: [
      {
        infos: [
          {
            title: "Was ist eine Patientenverfügung?",
            contents: [
              {
                text: `Mit einer Patientenverfügung (manchmal auch als Vorsorgeauftrag oder Patientendekret bezeichnet) legen Sie fest, welche medizinische Behandlung Sie im Endstadium einer Krankheit oder nach einem schweren Unfall wünschen. Sie bestimmen Sie auch, welche Behandlung Sie nicht erhalten möchten.

Sie stellt sicher, dass Ihre Wünsche als Patient auch am Ende Ihres Lebens weiterhin befolgt werden, wenn Sie diese nicht mehr äußern können.

Sie müssen Sie keine Patientenverfügung erstellen. Patientenverfügungen sind persönlich und kostenlos. Sie können eine erstellen und jederzeit ändern.`,
              },
            ],
          },
          {
            title: "Verfahren und Formulare",
            contents: [
              {
                text: `Es gibt zwei Arten von Patientenverfügungen. Eine konzentriert sich auf allgemeine Punkte, während die andere festlegt, welche medizinischen Eingriffe in verschiedenen Situationen erlaubt sind. Dies ist, was Sie tun müssen:

              1. Laden Sie eine Vorlage herunter. Formulare und Muster sind bei vielen Organisationen erhältlich, wie z.B. der Schweizerischen Ärztegesellschaft FMH (Website verfügbar auf Deutsch, Französisch und Italienisch), die sowohl kurze als auch vollständige Versionen anbietet.
      2. Füllen Sie das ausgewählte Formular aus, datieren und unterschreiben Sie es.
      3. Geben Sie Ihre Patientenverfügung an einen engen Freund oder ein Familienmitglied oder an Ihren Hausarzt. Sie können ihnen auch mitteilen, wo Ihr Behandlungsteam das Dokument im Bedarfsfall finden kann.
      4. Führen Sie eine Notiz in Ihrer Brieftasche über Ihre Patientenverfügung und wo sie aufbewahrt wird.

Zögern Sie nicht, sich beim Ausfüllen des Formulars beraten zu lassen. Der Arzt, der Sie behandelt, kann Ihnen beispielsweise helfen. Wenn Entscheidungen getroffen werden müssen, hat eine klare Direktive, die Ihre Wünsche darlegt, mehr Gewicht und wirft weniger Fragen über diese Wünsche auf.

Überprüfen Sie Ihre Patientenverfügung regelmäßig und ändern Sie sie bei Bedarf. Die FMH empfiehlt, sie alle paar Jahre zu überprüfen. Vergessen Sie nicht, die neue Version zu datieren und zu unterschreiben.
`,
              },
            ],
          },
          {
            title: "Welche Bedingungen muss ich erfüllen?",
            contents: [
              {
                text: `Sie müssen nicht bei bester Gesundheit sein, aber Sie müssen geschäftsfähig sein, d.h. selbst entscheiden können.

Die Patientenverfügung muss Ihre tatsächlichen Wünsche widerspiegeln. Sie darf nicht unter Druck erstellt worden sein.

Ärzte sind nur an Patientenverfügungen gebunden, die von Hand datiert und unterschreiben wurden.`,
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
    categoryId: CategoryId.make(8),
    title: "Pass und Personalausweis///Antrag auf einen Pass oder Personalausweis",
    description:
      "Ausweisdokumente können online oder bei Ihrer kantonalen Passstelle bestellt werden. Sie können erwarten, sie innerhalb von etwa 10 Werktagen zu erhalten – bis zu 30 Werktage, wenn Sie im Ausland leben. In außergewöhnlichen und dringenden Fällen können Sie einen vorläufigen Pass beantragen.",
    contents: [
      {
        infos: [
          {
            title: "Wo kann ich ein Ausweisdokument beantragen?",
            contents: [
              {
                subtitle: "Online",
                text: `Sie können online einen Pass und/oder Personalausweis beantragen. Der folgende Link führt Sie durch den Prozess:`,
                links: [
                  {
                    text: "Online-Antrag auf Pass und/oder Personalausweis.",
                    url: "https://www.ch-ed.suisse-passantrag.admin.ch/#/antraggesuch",
                  },
                ],
              },
              {
                subtitle: "Bei Ihrer kantonalen Passstelle",
                text: `Sie sollten die Dokumente innerhalb von 10 Tagen erhalten.`,
                links: [
                  {
                    text: `Sie können einen Pass und/oder Personalausweis persönlich bei Ihrer kantonalen Passstelle bestellen oder das Büro telefonisch kontaktieren.`,
                    url: "https://www.ch-ed.schie.ch-passantragale/#!/antrag",
                  },
                  {
                    text: `Wenn Sie nur einen Personalausweis benötigen, können Sie in einigen Kantonen einen bei Ihrer Wohnsitzgemeinde bestellen.`,
                    url: "https://www.fedpol.admin.ch/fedpol/de/home/pass---identitaetskarte/pass/passstellen.html",
                  },
                ],
              },
              {
                subtitle: "Bei einer Schweizer Botschaft oder Konsulat",
                text: `Schweizer Bürger, die im Ausland leben, können entweder online einen Pass oder Personalausweis beantragen oder die Schweizer Konsulat oder Botschaft im Land, in dem sie sich aufhalten, kontaktieren.
Sie sollten die Dokumente innerhalb von 30 Werktagen erhalten.`,
                links: [
                  {
                    text: `Online einen Pass oder Personalausweis beantragen`,
                    url: "https://www.ch-ed.schie.ch-passantragale/#!/antrag",
                  },
                  {
                    text: `Schweizer Konsulat oder Botschaft`,
                    url: "https://www.eda.admin.ch/eda/de/home/vertretungen-und-reisehinweise/schweizer-vertretungen-im-ausland.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Ausweisdokumente für Ihre Kinder",
            contents: [
              {
                text: `Ab dem Tag der Geburt Ihrer Kinder können Sie für sie einen Pass und/oder Personalausweis beantragen.

Sie können jedoch nicht einfach ihre Namen zu Ihrem eigenen Ausweisdokument hinzufügen lassen.

Bitte beachten Sie: Wenn die Eltern eines Kindes nicht verheiratet sind, kann ein Vermerk in einem der Pässe der Eltern angebracht werden, der besagt, dass er oder sie die elterliche Sorge hat.`,
              },
              {
                subtitle: "Bitte beachten",
                text: `- Sie können nur ein Ausweisdokument für Ihr Kind beantragen, wenn Sie die elterliche Sorge haben.
                    - Wenn beide Eltern die elterliche Sorge haben, reicht die Unterschrift eines Elternteils aus, um ein Ausweisdokument zu beantragen.
                    - Wenn die gemeinsame elterliche Sorge schwer nachzuweisen ist (z.B. wenn die Eltern an zwei verschiedenen Adressen leben), müssen Sie auch die Zustimmung des anderen Elternteils vorlegen.
                    - Kinder ab sieben Jahren müssen ihr Ausweisdokument unterschreiben.
                    - Kinder ab 12 Jahren müssen digitale Fingerabdrücke für ihren biometrischen Pass abgeben.
                    - Sobald Ihre Kinder 18 Jahre alt werden, müssen sie ihre eigenen Ausweisdokumente beantragen.`,
              },
            ],
          },
          {
            title: "Biometrische Daten und Fotos",
            contents: [
              {
                text: `Antragsteller für Ausweisdokumente müssen biometrische Daten (Daten, die auf einem Mikrochip gespeichert sind, einschließlich eines Gesichtsfotos und einer Unterschrift – und Fingerabdrücke für Pässe – die vor Missbrauch geschützt sind) den kantonalen Behörden oder einer Schweizer Vertretung im Ausland vorlegen.

Das Foto wird in der Regel bei der Aufnahme der biometrischen Daten gemacht. Einige Kantone erlauben jedoch, dass Sie Ihr eigenes Foto verwenden. In solchen Fällen muss das Foto bestimmte Anforderungen erfüllen: Kontaktieren Sie Ihre kantonale Behörde für vollständige Details.`,
              },
            ],
          },
          {
            title: "Gültigkeit",
            contents: [
              {
                text: `Pässe und Personalausweise sind für Erwachsene 10 Jahre lang gültig und für Kinder und Jugendliche unter 18 Jahren 5 Jahre lang gültig.`,
              },
            ],
          },
          {
            title: "Abgelaufene Ausweis- und Reisedokumente",
            contents: [
              {
                subtitle: "Verlängerung Ihres Passes oder Personalausweises",
                text: `Sobald Ihr Pass oder Personalausweis abgelaufen ist, müssen Sie neue Dokumente beantragen.`,
              },
              {
                subtitle: "Reisen mit gültigen oder abgelaufenen Dokumenten",
                text: `Im Allgemeinen müssen Sie Ihre gültigen Ausweisdokumente bei Reisen mitführen. Informieren Sie sich im Voraus über die Einreisebedingungen bei der Vertretung Ihres Ziellandes in der Schweiz oder bei der Schweizer Vertretung im Ausland.

Einige Länder verlangen, dass Ihr Pass mindestens sechs Monate über das Datum hinaus gültig ist, an dem Sie planen, die USA zu verlassen.

Andere Länder erlauben Ihnen, für eine begrenzte Zeit auch nach Ablauf Ihres Passes oder Personalausweises zu reisen.`,
                links: [
                  {
                    text: "Einige Länder, einschließlich der USA, China und Australien, verlangen, dass Sie vor der Reise dorthin ein Visum beantragen",
                    url: "https://www.eda.admin.ch/eda/de/home/vertretungen-und-reisehinweise/laenderunabhaengigereiseinformationen/visum-einreise.html",
                  },
                ],
              },
              {
                subtitle: "Vorläufiger Pass",
                text: `In Fällen echter Dringlichkeit können Sie bei Ihrer kantonalen Passstelle oder bei einer Schweizer Botschaft oder Konsulat im Land, in dem Sie sich befinden, einen vorläufigen Pass beantragen.`,
              },
              {
                subtitle: "Bitte beachten",
                text: `Im Gegensatz zu einem normalen Pass ist ein vorläufiger Pass nicht biometrisch und enthält keinen Mikrochip mit Ihren Fingerabdrücken und Foto. Er wird daher nicht in allen Ländern akzeptiert: Ausländische Vertretungen in der Schweiz informieren über die Einreiseanforderungen in ihren Ländern.

Ein vorläufiger Pass ist maximal 12 Monate lang gültig.`,
              },
            ],
          },
          {
            title: "Schweizer Pass für Ausländer",
            contents: [
              {
                text: `Ausländer, die einen Schweizer Pass erhalten möchten, müssen die Schritte auf der Seite zur Einbürgerung befolgen.`,
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
    categoryId: CategoryId.make(8),
    title: "Pass und Personalausweis///Verlust oder Diebstahl von Pass oder Personalausweis",
    description: "Wenn Sie Ihre Ausweisdokumente verlieren oder sie gestohlen werden, müssen Sie eine polizeiliche Meldung machen, um einen neuen Pass oder Personalausweis zu erhalten.",
    contents: [
      {
        infos: [
          {
            title: "Polizeiliche Meldung machen",
            contents: [
              {
                subtitle: "In der Schweiz",
                text: `Wenn Ihr Pass verloren gegangen oder gestohlen wurde, müssen Sie eine Meldung bei der Polizeistelle machen. Durch die Meldung wird Ihr Pass oder Personalausweis automatisch ungültig. Auch wenn Sie Ihren Pass oder Personalausweis finden, können Sie diese nicht mehr verwenden und müssen sie der Passstelle in Ihrem Kanton aushändigen.`,
                links: [
                  {
                    text: "Polizeistelle",
                    url: "https://www.suisse-epolice.ch/home",
                  },
                  {
                    text: "Passstelle in Ihrem Kanton",
                    url: "https://www.fedpol.admin.ch/fedpol/en/home/pass---identitaetskarte/pass/passstellen.html",
                  },
                ],
              },
              {
                subtitle: "Im Ausland",
                text: `Wenn Ihre Schweizer Ausweisdokumente im Ausland verloren gehen oder gestohlen werden, müssen Sie eine Meldung bei der örtlichen Polizei machen und die Schweizer Botschaft oder Konsulat in dem Land, in dem Sie sich aufhalten, benachrichtigen. Die Botschaft oder das Konsulat wird wiederum die Polizei in der Schweiz informieren.

Sie können dann neue Ausweisdokumente bestellen oder einen Notpass erhalten, wenn Sie ihn sofort benötigen, beispielsweise um in die Schweiz zurückzukehren.`,
                links: [
                  {
                    text: "Schweizer Botschaft oder Konsulat",
                    url: "https://www.eda.admin.ch/eda/en/fdfa/representations-and-travel-advice/schweizer-vertretungen-im-ausland.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Erhalt eines neuen Passes oder Personalausweises",
            contents: [
              {
                subtitle: "In der Schweiz",
                text: `Nachdem Sie eine polizeiliche Meldung gemacht haben, können Sie eine der auf der Seite 'Bestellen eines Passes oder Personalausweises' aufgeführten Optionen wählen, um einen neuen Pass oder Personalausweis zu erhalten.`,
              },
              {
                subtitle: "Im Ausland",
                text: `Nachdem Sie eine polizeiliche Meldung gemacht haben, können Sie direkt bei der Schweizer Konsulat oder Botschaft, wo Sie die Meldung gemacht haben, einen neuen Pass oder Personalausweis beantragen oder online bestellen:

Beachten Sie, dass Sie bis zu 30 Werktage warten müssen, bevor Sie die neuen Dokumente erhalten.

In dringenden Fällen – beispielsweise, wenn Sie sonst nicht in die Schweiz zurückkehren können – können Sie einen vorläufigen Pass beantragen.`,
              },
            ],
          },
          {
            title: "Erhalt eines vorläufigen Passes",
            contents: [
              {
                text: `In Fällen der Dringlichkeit, wenn dies gerechtfertigt ist, können Sie bei Ihrer kantonalen Passstelle oder bei einer Schweizer Botschaft oder Konsulat in dem Land, in dem Sie sich befinden, einen vorläufigen Pass beantragen.`,
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
    categoryId: CategoryId.make(8),
    title: "Aufenthaltsgenehmigungen für die Schweiz",
    description: "Alle Ausländer, die länger als drei Monate in der Schweiz bleiben, müssen eine Aufenthaltsgenehmigung beantragen. Leitfaden zum Erhalt einer Genehmigung.",
    contents: [
      {
        infos: [
          {
            title: "Übersicht der Genehmigungen",
            contents: [
              {
                text: `Das Abkommen über die Freizügigkeit der Personen erleichtert es EU/EFTA-Staatsangehörigen, in die Schweiz einzureisen und dort zu bleiben. Die Regeln sind für Personen aus anderen Ländern (Drittstaaten) restriktiver. Die benötigte Genehmigung unterscheidet sich je nach Zweck und Dauer Ihres Aufenthalts.`,
              },
              {
                subtitle: "Staatsangehörige von EU-27*/EFTA**-Ländern",
                text: `- EU/EFTA L-Genehmigung (Kurzaufenthaltsgenehmigung)
- EU/EFTA B-Genehmigung (Aufenthaltsgenehmigung)
- EU/EFTA C-Genehmigung (Niederlassungsgenehmigung)
- EU/EFTA Ci-Genehmigung (Aufenthaltsgenehmigung mit Erwerbstätigkeit)
- EU/EFTA G-Genehmigung (Grenzgängergenehmigung)

*Die folgenden Länder gehören zur EU-27: Österreich, Belgien, Bulgarien, Kroatien, Zypern, Tschechische Republik, Dänemark, Estland, Finnland, Frankreich, Deutschland, Griechenland, Ungarn, Irland, Italien, Lettland, Litauen, Luxemburg, Malta, Niederlande, Polen, Portugal, Rumänien, Slowakei, Slowenien, Spanien, Schweden.

**Die folgenden Länder gehören zur EFTA: Island, Norwegen, Liechtenstein, Schweiz
`,
              },
              {
                subtitle: "Drittstaatsangehörige",
                text: `- B-Genehmigung (Aufenthaltsgenehmigung)
- C-Genehmigung (Niederlassungsgenehmigung)
- Ci-Genehmigung (Aufenthaltsgenehmigung mit Erwerbstätigkeit)
- G-Genehmigung (Grenzgängergenehmigung)
- L-Genehmigung (Kurzaufenthaltsgenehmigung)
- F-Genehmigung (für vorläufig aufgenommene Ausländer)
- N-Genehmigung (für Asylsuchende)
- S-Genehmigung (vorläufiger Status für schutzbedürftige Personen)`,
              },
            ],
          },
          {
            title: "Wie erhalte ich eine Genehmigung?",
            contents: [
              {
                text: `Wenn Sie eine Genehmigung benötigen, um in der Schweiz zu leben, kontaktieren Sie bitte die kantonalen Migrations- oder Arbeitsbehörden Ihrer Wohnsitzgemeinde.

Die Anforderungen, die Sie erfüllen müssen, hängen von Ihrer Nationalität und der Dauer und dem Zweck Ihres Aufenthalts ab. ch.ch gibt Ihnen weitere Informationen auf den Seiten 'Arbeiten in der Schweiz als Ausländer' und 'Aufenthalt in der Schweiz ohne Arbeit'.`,
              },
            ],
          },
          {
            title: "Einreichen Ihres Antrags bei Ihrer Wohnsitzgemeinde. Wenn Sie im Kanton Genf leben, kontaktieren Sie bitte den Kanton.",
            contents: [
              {
                text: `Reichen Sie Ihren Antrag zusammen mit den folgenden Dokumenten ein:

- Ihre aktuelle Genehmigung
- ein gültiger Personalausweis oder Reisepass (wenn Sie kein EU- oder EFTA-Bürger sind, muss der Ausweis oder Pass mindestens drei Monate nach Ablauf der Genehmigung gültig sein)
- Mitteilung über den Ablauf der Genehmigung, falls Sie eine von der kantonalen Migrationsbehörde erhalten haben.

Sie können die Verlängerung Ihrer Genehmigung frühestens drei Monate und spätestens zwei Wochen vor Ablauf beantragen.`,
              },
            ],
          },
          {
            title: "Meine Genehmigung wurde verloren oder gestohlen – was soll ich tun?",
            contents: [
              {
                text: `Melden Sie den Verlust Ihrer Genehmigung der Polizei; diese wird Ihnen eine Verlustanzeige ausstellen.

Sie können hier eine Polizeistelle finden.

Gehen Sie dann mit Ihrem Reisepass, einem Passfoto und der Verlustanzeige zum Einwohnerregisteramt in Ihrer Gemeinde (oder zur kantonalen Migrationsbehörde). Sie müssen für das Duplikat oder die neue Genehmigung bezahlen. Die Kosten variieren.

Wenn eine als verloren gemeldete Genehmigung später gefunden wird, müssen Sie diese beim Einwohnerregisteramt an Ihrem Wohnort annullieren lassen.`,
              },
            ],
          },
          {
            title: "Aufenthalt in der Schweiz nach Trennung, Scheidung oder dem Tod Ihres Partners",
            contents: [
              {
                text: `Wenn Sie eine Genehmigung zum Leben in der Schweiz im Rahmen der Familienzusammenführung erhalten haben, aber Sie sich von der Person, die Ihnen das Aufenthaltsrecht gewährt hat, scheiden lassen oder diese Person stirbt, müssen Sie die kantonale Migrationsbehörde informieren.

Wenn Sie eine Aufenthaltsgenehmigung (B-Genehmigung) haben, dürfen Sie unter bestimmten Bedingungen bleiben:`,
              },
              {
                subtitle: "EU/EFTA-Bürger",
                text: `Sie können eine Genehmigung auf Ihren eigenen Namen beantragen, wenn Sie arbeiten oder über ausreichende finanzielle Mittel verfügen, um Ihre finanzielle Unabhängigkeit sicherzustellen.`,
              },
              {
                subtitle: "Drittstaatsbürger",
                text: `Sie können Ihre Aufenthaltsgenehmigung verlängern lassen, wenn

- Sie mindestens drei Jahre verheiratet waren und im selben Haushalt mit Ihrem Ehepartner (Schweizer oder ausländischer Staatsangehöriger) gelebt haben,
- Sie gut in die Schweiz integriert sind (Einhaltung von Recht und Ordnung, gute mündliche Sprachkenntnisse, in Arbeit oder in Ausbildung oder Schulung),
- Sie aus wichtigen persönlichen Gründen in der Schweiz bleiben müssen (z.B. die soziale Wiedereingliederung im Herkunftsland ist ernsthaft beeinträchtigt, häusliche Gewalt).`,
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
    categoryId: CategoryId.make(8),
    title: "Beantragung einer AHV-Karte",
    description: "Wenn Sie keine AHV-Karte haben oder diese verloren haben, können Sie eine beantragen, indem Sie das Online-Formular ausfüllen und an die zuständige Behörde senden.",
    contents: [
      {
        infos: [
          {
            title: "Wenn Sie angestellt sind",
            contents: [
              {
                text: `Wenn Sie noch keine AHV-Karte erhalten haben oder diese verloren haben, können Sie das Antragsformular auf der AHV/IV-Website ausfüllen und an Ihren Arbeitgeber zurücksenden.

Sie erhalten dann eine (neue) AHV-Karte.`,
                links: [
                  {
                    text: "Das Antragsformular",
                    url: "https://www.ahv-iv.ch/de/Formulare/Formulare/Allgemeine-Verwaltungsformulare",
                  },
                ],
              },
            ],
          },
          {
            title: "Wenn Sie selbstständig oder nicht erwerbstätig sind",
            contents: [
              {
                text: `Wenn Sie noch keine AHV-Karte erhalten haben oder diese verloren haben, können Sie das Antragsformular auf der AHV/IV-Website ausfüllen und an Ihren Berufsverband oder die kantonale Ausgleichskasse, an die Sie Ihre Beiträge zahlen, zurücksenden:

Sie erhalten dann eine (neue) AHV-Karte.`,
                links: [
                  {
                    text: "Das Antragsformular",
                    url: "https://www.ahv-iv.ch/de/Formulare/Formulare/Allgemeine-Verwaltungsformulare",
                  },
                  {
                    text: "Berufsverband-Ausgleichskasse",
                    url: "https://www.ahv-iv.ch/de/Kontakte/Verbandsausgleichskassen",
                  },
                  {
                    text: "Kantonale Ausgleichskasse",
                    url: "https://www.ahv-iv.ch/de/Kontakte/Kantonale-Ausgleichskassen",
                  },
                ],
              },
            ],
          },
          {
            title: "Wenn Sie im Ausland leben",
            contents: [
              {
                text: `Wenn Sie im Ausland leben und nicht in der Schweiz arbeiten und noch nie eine AHV-Karte erhalten haben oder diese verloren haben, sollten Sie die Schweizerische Ausgleichskasse kontaktieren, die Ihnen eine ausstellen oder ersetzen kann.

Wenn Sie im Ausland leben, aber in der Schweiz arbeiten, beziehen Sie sich bitte auf die Abschnitte 'Wenn Sie angestellt sind' oder 'Wenn Sie selbstständig oder nicht erwerbstätig sind', um herauszufinden, wie Sie eine (neue) AHV-Karte erhalten können.`,
                links: [
                  {
                    text: "Schweizerische Ausgleichskasse",
                    url: "https://www.ahv-iv.ch/de/Kontakte/Schweizerische-Ausgleichskasse-SAK",
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
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(8),
    title: "Lohnbescheinigung",
    description: "Angestellte müssen keine Lohnbescheinigung anfordern. Sie erhalten dieses wichtige Dokument automatisch, damit sie ihre Steuererklärung einreichen können.",
    contents: [
      {
        infos: [
          {
            title: "Was ist eine Lohnbescheinigung?",
            contents: [
              {
                text: `Die Schweizer Lohnbescheinigung ist ein Formular, das einem Angestellten ausgehändigt wird und genau bescheinigt, was er oder sie vom Arbeitgeber bezahlt bekommen hat. Das Zertifikat listet auch alle gezahlten Beiträge, Leistungen und Zulagen auf.

Ihr Arbeitgeber ist verpflichtet, Ihnen jedes Jahr eine Lohnbescheinigung zur Verfügung zu stellen und sendet sie Ihnen in der Regel vor Ende Januar zu. Wenn Sie zu irgendeinem Zeitpunkt mehr als einen Job hatten oder während des betreffenden Jahres den Arbeitgeber gewechselt haben, erhalten Sie für jeden Job eine Bescheinigung.

Die Lohnbescheinigung ist das wichtigste Dokument, das Sie für die Ausfüllung Ihrer Steuererklärung benötigen. In mehreren Kantonen müssen Arbeitgeber eine Kopie direkt an die Steuerbehörden senden. Als Angestellter müssen Sie eine Lohnbescheinigung nur Ihrer Steuererklärung beifügen, wenn Sie für einen Arbeitgeber außerhalb Ihres Kantons arbeiten oder wenn dies von der zuständigen Steuerbehörde verlangt wird.`,
              },
            ],
          },
          {
            title: "Gibt es ein Problem mit Ihrer Bescheinigung?",
            contents: [
              {
                text: `Wenn Ihr Arbeitgeber Ihnen keine Lohnbescheinigung gesendet hat, wenn das erhaltene Dokument falsch ist oder wenn Sie es verloren haben, müssen Sie direkt beim Arbeitgeber eine neue Bescheinigung anfordern.`,
              },
            ],
          },
          {
            title: "Wie erstelle ich eine Lohnbescheinigung?",
            contents: [
              {
                text: `Wenn Sie ein Arbeitgeber sind und nicht wissen, was zu tun ist, können Sie die Anweisungen und Formulare der Eidgenössischen Steuerverwaltung verwenden, um eine Lohnbescheinigung zu erstellen. Die Vorlagen sind in verschiedenen Größen verfügbar.`,
                links: [
                  {
                    text: "Lohnbescheinigung",
                    url: "https://www.estv.admin.ch/estv/de/home/direkte-bundessteuer/lohnausweis-rentenbescheinigung.html",
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
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(8),
    title: "Verlorenes Fahrzeugausweisdokument",
    description: "Wenn Sie Ihr Fahrzeugausweisdokument verloren haben oder ändern müssen, kontaktieren Sie die Fahrer- und Fahrzeugzulassungsstelle.",
    contents: [
      {
        infos: [
          {
            title: "Verlorenes Fahrzeugausweisdokument?",
            contents: [
              {
                text: `Wenn Sie Ihr Fahrzeugausweisdokument verloren haben oder es gestohlen wurde, können Sie ein Ersatzdokument beantragen. Nur der Eigentümer des Fahrzeugs kann ein Ersatzdokument beantragen.`,
              },
              {
                subtitle: "Beantragung eines Ersatzdokuments",
                text: `Sie können ein Ersatzdokument bei der Fahrer- und Fahrzeugzulassungsstelle in Ihrem Kanton bestellen`,
                links: [
                  {
                    url: "https://asa.ch/strassenverkehrsaemter/adressen/",
                  },
                ],
              },
              {
                subtitle: "Rückgabe eines Ersatzdokuments",
                text: `Wenn Sie das originale Fahrzeugausweisdokument finden, bringen oder senden Sie das Ersatzdokument an die Fahrer- und Fahrzeugzulassungsstelle zurück.`,
              },
              {
                subtitle: "Gebühren",
                text: `Ein neues Fahrzeugausweisdokument kostet CHF 25 bis CHF 50, je nach Kanton. Für weitere Informationen kontaktieren Sie die Fahrer- und Fahrzeugzulassungsstelle in Ihrem Kanton (Website verfügbar auf Deutsch, Französisch und Italienisch).`,
              },
            ],
          },
          {
            title: "Änderungen am Fahrzeugausweisdokument",
            contents: [
              {
                text: `Benachrichtigen Sie die Fahrer- und Fahrzeugzulassungsstelle innerhalb von 14 Tagen, wenn Sie eine neue Adresse haben oder sich Ihr Name geändert hat. Ihr Fahrzeugausweisdokument wird geändert oder ersetzt.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
];

const infoFamily: Information[] = [
  // Adoption
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(9),
    title: "Adoption",
    description: "In der Schweiz können Sie als Paar oder Alleinerziehender ein Kind adoptieren. Der Adoptionsprozess kann mehrere Jahre dauern. Das Wohl des Kindes steht immer im Vordergrund.",
    contents: [
      {
        infos: [
          {
            title: "An wen kann ich mich wenden?",
            contents: [
              {
                text: `Wenn Sie in der Schweiz ein Kind adoptieren möchten, sollten Sie die zentrale Adoptionsbehörde des Kantons, in dem Sie leben, kontaktieren. Diese Behörde informiert Sie genau über das Vorgehen.

Wenn Sie ein Kind aus einem anderen Land adoptieren möchten, empfehlen wir, eine spezialisierte, vom Bund anerkannte Agentur zu kontaktieren. Diese unterstützt Sie bei dem komplexen Prozess in der Schweiz und im Adoptionsland.`,
                links: [
                  {
                    text: "Adressen der zentralen kantonalen Adoptionsbehörden und vom Bund anerkannten Agenturen",
                    url: "https://www.bj.admin.ch/bj/de/home/gesellschaft/adoption.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Grundvoraussetzungen für alle Adoptionen",
            contents: [
              {
                text: `Die zuständige kantonale Behörde prüft, ob Sie die grundlegenden Voraussetzungen für eine Adoption erfüllen, und achtet insbesondere auf folgende Punkte:

1. Der Altersunterschied zwischen Ihnen und dem zu adoptierenden Kind muss mindestens 16 und maximal 45 Jahre betragen.
2. Sie müssen in der Lage sein, dem Kind dauerhaft angemessene Pflege zu bieten und sicherzustellen, dass es eine geeignete Ausbildung erhält. Dies wird durch mehrere Treffen mit einem Fachmann für Sozialarbeit oder Psychologie überprüft, der Informationen bereitstellt, sammelt und mit Ihnen über verschiedene Aspekte der Adoption spricht.
3. Die Adoption muss im Interesse des Kindes sein. Auch die Interessen Ihrer anderen Kinder müssen berücksichtigt werden.
4. Wenn das Kind dazu in der Lage ist, muss es der Adoption zustimmen.
5. Sie müssen mindestens ein Jahr lang für die Pflege und Erziehung des Kindes verantwortlich gewesen sein.
6. Wenn die biologischen Eltern des Kindes bekannt und noch am Leben sind, müssen sie der Adoption zustimmen, es sei denn, sie sind seit langem abwesend und ihr Aufenthaltsort ist unbekannt, oder sie fehlt dauerhaft die rechtliche Handlungsfähigkeit. Die biologischen Eltern dürfen ihre Zustimmung nicht vor der sechsten Lebenswoche des Kindes geben. Sie können ihre Zustimmung in den sechs Wochen danach noch widerrufen.`,
              },
            ],
          },
          {
            title: "Wie können wir als Paar ein Kind adoptieren?",
            contents: [
              {
                text: `Wenn Sie als Paar ein Kind adoptieren möchten, müssen Sie die grundlegenden Voraussetzungen für alle Adoptionen erfüllen. Außerdem müssen Sie folgende Kriterien erfüllen:

1. Sie sind verheiratet.
2. Sie leben seit mindestens drei Jahren zusammen.
3. Sie sind beide mindestens 28 Jahre alt.
4. Sie sind in der Schweiz als wohnhaft registriert.`,
              },
            ],
          },
          {
            title: "Wie kann ich alleine ein Kind adoptieren?",
            contents: [
              {
                text: `Wenn Sie alleine ein Kind adoptieren möchten, müssen Sie die grundlegenden Voraussetzungen für alle Adoptionen erfüllen. Außerdem müssen Sie folgende Kriterien erfüllen:

1. Sie sind mindestens 28 Jahre alt.
2. Sie sind ledig.

Wenn Sie verheiratet oder in einer eingetragenen Partnerschaft sind, können Sie alleine ein Kind adoptieren, wenn:

- Sie seit mindestens drei Jahren offiziell von Ihrem Ehepartner getrennt leben,
- Ihr Partner dauerhaft die rechtliche Handlungsfähigkeit fehlt, oder
- Ihr Partner seit mindestens zwei Jahren abwesend ist und keinen festen Wohnsitz hat.`,
              },
            ],
          },
          {
            title: "Wie kann ich die Kinder meines Partners adoptieren?",
            contents: [
              {
                text: `Sie können die Kinder Ihres Partners adoptieren, wenn Sie die grundlegenden Voraussetzungen für alle Adoptionen erfüllen und Sie und Ihr Partner außerdem:

- verheiratet sind,
- in einer eingetragenen Partnerschaft leben oder
- tatsächlich im selben Haushalt leben.

Zusätzlich müssen Sie und Ihr Partner seit mindestens drei Jahren zusammenleben.`,
              },
            ],
          },
          {
            title: "Wie adoptiere ich jemanden, der 18 Jahre oder älter ist?",
            contents: [
              {
                text: `Sie können eine volljährige Person adoptieren, wenn:

1. Diese Person mindestens ein Jahr lang bei Ihnen gelebt hat, als sie noch minderjährig war;
2. Die Person ständig pflegebedürftig ist und mindestens ein Jahr lang bei Ihnen gelebt und von Ihnen versorgt wurde (auch wenn sie während dieser Zeit bereits volljährig war), oder
3. Es andere wichtige Gründe für die Adoption gibt und die Person, die Sie adoptieren möchten, mindestens ein Jahr lang bei Ihnen gelebt hat.

Die gleichen Regelungen wie für die Adoption von Minderjährigen gelten auch für die Adoption von Erwachsenen, abgesehen von der Notwendigkeit der Zustimmung der Eltern.`,
              },
            ],
          },
          {
            title: "Adoptionsurlaub",
            contents: [
              {
                text: `Unter bestimmten Bedingungen haben Sie Anspruch auf zwei Wochen Adoptionsurlaub. Dies gilt jedoch nicht, wenn Sie das Kind Ihres Ehepartners oder Partners adoptiert haben.`,
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
    categoryId: CategoryId.make(9),
    title: "Adoption///Adoptionsurlaub",
    description: "Unter bestimmten Bedingungen können Paare, die ein Kind unter 4 Jahren adoptieren, zwei Wochen bezahlten Urlaub teilen.",
    contents: [
      {
        infos: [
          {
            title: "Wer hat Anspruch auf Adoptionsurlaub?",
            contents: [
              {
                text: `Wenn Sie angestellt oder selbstständig sind, haben Sie Anspruch auf zwei Wochen bezahlten Adoptionsurlaub, wenn Sie folgende Bedingungen erfüllen:

- Sie waren in den neun Monaten vor der Adoption des Kindes bei der AHV versichert;
- Sie waren während dieses Zeitraums mindestens fünf Monate lang erwerbstätig;
- Das Kind ist unter 4 Jahren alt.

Wenn Sie zum Zeitpunkt, zu dem das Kind bei Ihnen einzieht, arbeitslos oder arbeitsunfähig sind, haben Sie keinen Anspruch auf Adoptionsentschädigung.

Es gibt keinen bezahlten Urlaub für Eltern, die das Kind ihres Ehepartners oder Partners adoptieren.`,
              },
            ],
          },
          {
            title: "Dauer des Adoptionsurlaubs und Höhe der Leistungen",
            contents: [
              {
                text: `Der Adoptionsurlaub muss innerhalb des Jahres nach der Adoption des Kindes genommen werden. Er kann in Blöcken, Wochen oder einzelnen Tagen genommen werden. Sie können entscheiden, wer von Ihnen die zwei Wochen Urlaub nimmt. Sie können ihn auch untereinander aufteilen, vorausgesetzt, Sie nehmen die Tage nicht gleichzeitig.

Die Adoptionsentschädigung entspricht 80% des durchschnittlichen Erwerbseinkommens, das vor dem Einzug des Kindes erzielt wurde, bis zu einem Maximum von CHF 220 pro Tag. Die Entschädigung wird nicht automatisch ausgezahlt. Sie müssen sie ausdrücklich bei der Bundesausgleichsstelle beantragen.`,
              },
            ],
          },
          {
            title: "Unbezahlter Urlaub",
            contents: [
              {
                text: `Es gibt kein gesetzliches Recht, den Adoptionsurlaub zu verlängern. Als Adoptiveltern können Sie Ihren Urlaub nur verlängern, wenn Ihr Arbeitgeber zustimmt.

Bitte beachten Sie:
Überprüfen Sie Ihren Versicherungsschutz, bevor Sie unbezahlten Urlaub beantragen.`,
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
    categoryId: CategoryId.make(9),
    title: "Adoption///Suche nach biologischen Eltern, Kindern oder Geschwistern",
    description:
      "Sie möchten etwas über Ihre Herkunft erfahren oder suchen nach einem Kind, das Sie zur Adoption freigegeben haben. Wann und wie dies möglich ist und welche Behörden Sie unterstützen können.",
    contents: [
      {
        infos: [
          {
            title: "An wen wenden",
            contents: [
              {
                text: `Jeder Kanton betreibt einen Informationsdienst, der adoptierten Kindern helfen kann, mehr über ihre Geschichte zu erfahren.

Kontaktieren Sie den Informationsdienst Ihres Wohnkantons oder, als nächsten Schritt, den Kanton, in dem die Adoption stattgefunden hat (Adressen am Ende der Seite; Webseite verfügbar auf Deutsch, Französisch und Italienisch).`,
              },
            ],
          },
          {
            title: "Suche nach biologischen Eltern",
            contents: [
              {
                text: `Wenn Sie adoptiert wurden, können Sie beim kantonalen Informationsdienst Unterlagen über Ihre biologischen Eltern und deren direkte Nachkommen anfordern. Sie haben das Recht, auf Ihre Adoptionsunterlagen zuzugreifen. Dies ist jedoch erst ab dem Alter von 18 Jahren möglich, außer in Fällen berechtigten Interesses (z.B. bei Verdacht auf eine Erbkrankheit).

Der kantonale Dienst wird Ihre biologischen Eltern kontaktieren und sie über Ihren Antrag informieren, vorausgesetzt, sie können erfolgreich ausfindig gemacht werden (d.h. ihre Identität erscheint in Ihren Adoptionsunterlagen). Wenn diese Informationen nicht verfügbar sind – zum Beispiel, wenn Sie ein Findelkind sind – können sie nicht kontaktiert werden.

Bei Bedarf hilft der kantonale Dienst auch dabei, ein Treffen mit Ihren biologischen Eltern zu arrangieren oder zu erleichtern, aber diese sind nicht verpflichtet, Sie zu treffen, wenn sie dies nicht wünschen, noch müssen sie Ihnen weitere Informationen geben.`,
              },
            ],
          },
          {
            title: "Suche nach biologischen Geschwistern",
            contents: [
              {
                text: `Wenn Sie adoptiert wurden und andere Kinder Ihrer biologischen Eltern finden möchten oder wenn eines Ihrer Geschwister adoptiert wurde und Sie es finden möchten, müssen alle drei der folgenden Bedingungen erfüllt sein:

- Die gesuchten leiblichen Geschwister sind nachverfolgbar. Dies ist der Fall, wenn die leiblichen Eltern Schweizer Staatsbürger waren und ihre Kinder im Schweizer Zivilstandsregister eingetragen sind.
- Die Geschwister sind 18 Jahre oder älter.
- Sie haben zugestimmt, ihre Identitäten offenzulegen.`,
              },
            ],
          },
          {
            title: "Suche nach Kindern, die zur Adoption freigegeben wurden",
            contents: [
              {
                text: `Sie können jederzeit beim kantonalen Dienst Informationen über Kinder anfordern, die Sie zur Adoption freigegeben haben. Sie haben jedoch nur dann das Recht, diese Informationen zu erhalten, wenn das adoptierte Kind zustimmt, diese Ihnen offenzulegen. Wenn das Kind minderjährig ist, muss es urteilsfähig sein und seine Adoptiveltern müssen der Offenlegung ihrer Identität zustimmen.`,
              },
            ],
          },
          {
            title: "Kosten der Recherche",
            contents: [
              {
                text: `Die Erforschung Ihrer Herkunft ist mit Verwaltungsgebühren verbunden. Diese variieren von Kanton zu Kanton, betragen aber in der Regel mehrere hundert Franken. Der Betrag hängt auch von der Art der Anfrage ab: einfacher Zugriff auf Akten, Versand von Informationen, Unterstützung durch einen Mitarbeiter des Jugendamts usw.

Sie können die zuständigen kantonalen Ämter direkt kontaktieren, um Informationen über die anfallenden Gebühren zu erhalten (Webseite verfügbar auf Deutsch, Französisch und Italienisch).`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Zivilstandsurkunden
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(9),
    title: "Bestellung von Zivilstandsurkunden",
    description:
      "Die Behörden stellen verschiedene Arten von Dokumenten aus, die beispielsweise eine familiäre Beziehung oder Ihr Geburtsdatum und -ort bescheinigen. Diese Seite enthält eine Liste der Zivilstandsurkunden, die Sie bestellen können, und wo Sie diese erhalten.",
    contents: [
      {
        infos: [
          {
            title: "Wo und wie bestellen?",
            contents: [
              {
                text: "Sie können Zivilstandsurkunden direkt online oder persönlich beim zuständigen Zivilstandsamt anfordern. Das zuständige Amt variiert je nach Art des benötigten Dokuments:",
              },
              {
                text: "Geburtsauszug, Bestätigung der Geburtszeit",
                links: [
                  {
                    text: "Zivilstandsamt am Geburtsort",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?1",
                  },
                ],
              },
              {
                text: "Heimatschein (für Schweizer Bürger), Personenstandsausweis (für Schweizer Bürger)",
                links: [
                  {
                    text: "Zivilstandsamt am Heimatort",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Bestätigung des eingetragenen Zivilstands (für Ausländer)",
                links: [
                  {
                    text: "Zivilstandsamt am (vorherigen) (ständigen) Wohnort",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Familienausweis für Schweizer Bürger (ehemals Familienbüchlein)",
                links: [
                  {
                    text: `Wenn Sie Schweizer Bürger sind: Zivilstandsamt am Heimatort.`,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                  {
                    text: `Wenn Sie Ausländer sind: Zivilstandsamt am (vorherigen) Wohnort`,
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Eheurkunde",
                links: [
                  {
                    text: "Zivilstandsamt, wo die Ehe geschlossen wurde",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Partnerschaftsurkunde",
                links: [
                  {
                    text: "Zivilstandsamt, wo die Partnerschaft eingetragen wurde",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
              {
                text: "Sterbeurkunde",
                links: [
                  {
                    text: "Zivilstandsamt am Stergeort",
                    url: "https://www.e-service.admin.ch/competency-app/wicket/bookmarkable/ch.glue.suis.competency.app.pages.HeimatortPage?0",
                  },
                ],
              },
            ],
          },
          {
            title: "Kosten",
            contents: [
              {
                text: "In der Schweiz kostet eine Zivilstandsurkunde CHF 30 (zuzüglich Porto). Familienausweise, andere Familienregister, Partnerschaftsurkunden und Urkunden über den eingetragenen Zivilstand kosten mehr.",
              },
            ],
          },
          {
            title: "Wer darf eine Zivilstandsurkunde bestellen und welche Bedingungen gelten?",
            contents: [
              {
                text: `- Sie dürfen alle Zivilstandsurkunden anfordern, die Sie persönlich betreffen.
- Familienbüchlein können aktualisiert, aber nicht mehr neu bestellt werden.
- Sie können eine Zivilstandsurkunde für eine andere Person anfordern, wenn Sie eine Vollmacht dieser Person und eine Kopie ihres Ausweises vorlegen können.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Familienzusammenführung
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(9),
    title: "Familienzusammenführung",
    description:
      "Wenn Sie in der Schweiz leben und Ihre Familie im Ausland lebt, finden Sie hier weitere Informationen über die Voraussetzungen, um Ihre Kinder, Ihren Ehepartner oder Ihre Eltern in die Schweiz zu holen.",
    contents: [
      {
        infos: [
          {
            title: "Wie kann ich Familienmitglieder in die Schweiz holen?",
            contents: [
              {
                text: `Wenn Sie in der Schweiz leben und ausländische Familienmitglieder, die woanders leben, nachholen möchten, können Sie einen Antrag auf Familienzusammenführung stellen.

Abhängig von Ihrer Nationalität und Ihrer Aufenthaltsbewilligung ist die Familienzusammenführung ein Recht oder eine Möglichkeit, die dem Ermessen der Behörden überlassen ist. Im Gegensatz zur C-Bewilligung gibt die B-Bewilligung Ihnen nicht unbedingt das Recht auf Familienzusammenführung, die jedoch von den Behörden gewährt werden kann. Asylsuchende sind nicht berechtigt.`,
              },
            ],
          },
          {
            title: "Wer kann zu Ihnen in die Schweiz kommen?",
            contents: [
              {
                text: `Sie können nicht alle Ihre Familienmitglieder in die Schweiz holen.`,
              },
              {
                subtitle: "Wenn Sie Schweizer Bürger sind",
                text: `Sie dürfen folgende Familienmitglieder in die Schweiz holen:

- Ihren Ehepartner oder eingetragenen Partner;
- Ihre unverheirateten Kinder und Enkelkinder unter 18 Jahren (und sogar unter 21 Jahren oder abhängig, wenn sie eine Aufenthaltsbewilligung aus einem EU/EFTA-Land haben);
- Ihre abhängigen Eltern und Großeltern, wenn sie eine Aufenthaltsbewilligung aus einem EU/EFTA-Land haben (es sei denn, Sie befinden sich in Ausbildung oder Schulung).`,
              },
              {
                subtitle: "Wenn Sie Bürger eines EU/EFTA-Landes sind",
                text: `Sie dürfen folgende Familienmitglieder in die Schweiz holen:

- Ihren Ehepartner oder eingetragenen Partner;
- Ihre Kinder und Enkelkinder unter 21 Jahren oder abhängig;
- Ihre abhängigen Eltern und Großeltern (es sei denn, Sie befinden sich in Ausbildung oder Schulung).`,
              },
              {
                subtitle: "Wenn Sie Bürger eines Drittstaates sind",
                text: `Sie dürfen folgende Familienmitglieder in die Schweiz holen:

- Ihren Ehepartner oder eingetragenen Partner;
- Ihre unverheirateten Kinder unter 18 Jahren.`,
              },
            ],
          },
          {
            title: "Voraussetzungen für die Familienzusammenführung in der Schweiz",
            contents: [
              {
                text: `Ihre Ehe oder eingetragene Partnerschaft muss von der Schweiz anerkannt sein. Wenn Sie Teil eines binationalen Paares sind, können Sie Ihren Partner nicht mitbringen, wenn Sie nicht offiziell verheiratet sind.

Um eine Ablehnung der Familienzusammenführung zu vermeiden, müssen Sie eine ausreichend große Unterkunft (nach Schweizer Standards) haben, um die gesamte Familie unterzubringen.

Sie dürfen nicht von Sozialhilfe abhängig sein. Wenn Sie selbstständig oder arbeitslos sind, müssen Sie auch Nachweise über ausreichende finanzielle Mittel vorlegen, um Ihre Familienmitglieder zu unterstützen.

Ihre in die Schweiz ankommenden Familienmitglieder müssen Folgendes haben:

- einen gültigen Personalausweis oder Reisepass;
- ein Visum, falls erforderlich;
- ein Zertifikat aus dem Herkunftsland, das Ihre Beziehung belegt;
- für Abhängige ein Zertifikat von den Behörden des Herkunftslandes oder des Herkunftsortes, das belegt, dass sie von Ihnen abhängig sind oder bei Ihnen gelebt haben;
- für Ihren Ehepartner ein Zertifikat über die Einschreibung in einen Sprachkurs, wenn er oder sie die im Wohnort gesprochene Landessprache nicht verstehen kann (mindestens A1-Niveau mündlich).`,
              },
            ],
          },
          {
            title: "Fristen",
            contents: [
              {
                text: `Sie haben in der Regel fünf Jahre Zeit, um die Familienzusammenführung zu beantragen, aber nur ein Jahr, wenn der Antrag Kinder über 12 Jahre alt betrifft. Dies dient dazu, dass sie schneller in die Schweizer Gesellschaft integriert werden können.

Wenn Sie vorläufig in die Schweiz aufgenommen wurden (F-Bewilligung), kann das Staatssekretariat für Migration Ihren Antrag auf Familienzusammenführung nach 18 Monaten prüfen.`,
              },
            ],
          },
          {
            title: "Wo beantragt man die Familienzusammenführung?",
            contents: [
              {
                text: `Sie müssen die folgenden kantonalen Migrationsbehörden kontaktieren.`,
                links: [
                  {
                    text: "Kantonale Migrationsbehörden",
                    url: "https://www.sem.admin.ch/sem/de/home/sem/kontakt/kantonale_behoerden/adressen_kantone_und.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Rechte und Pflichten bei der Familienzusammenführung",
            contents: [
              {
                text: `Wenn der Antrag auf Familienzusammenführung genehmigt wird, erhalten Ihre Familienmitglieder eine Aufenthaltsbewilligung (die Art der Bewilligung hängt in der Regel von Ihrem Status ab).

Mit Ausnahme Ihrer Eltern oder Großeltern haben Ihre Familienmitglieder das Recht, in der Schweiz zu arbeiten.

Nur Inhaber einer kurzfristigen Aufenthaltsbewilligung (L-Bewilligung) müssen zunächst eine Arbeitserlaubnis von der zuständigen kantonalen Behörde beantragen.

Kinder, die zu Ihnen in die Schweiz kommen, sind verpflichtet, die kostenlose Schulpflicht in der Schweiz mindestens bis zum Alter von 16 Jahren zu besuchen. Das System variiert von Kanton zu Kanton. Die Schweizerische Konferenz der kantonalen Erziehungsdirektoren bietet auf ihrer Website einen Überblick über das Schweizer Bildungssystem.

Krankenversicherung ist in der Schweiz obligatorisch und privat. Vergessen Sie nicht, für jedes Familienmitglied einen Vertrag abzuschließen.

Weitere nützliche Informationen finden Sie auf der Seite Umzug in die Schweiz.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 1,
  },
  // Tod
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(9),
    title: "Tod///Hinterbliebenenrenten",
    description: "Wenn Ihre Frau, Ihr Mann, Ihr eingetragener Partner oder ein Elternteil stirbt, haben Sie Anspruch auf eine Rente.",
    contents: [
      {
        infos: [
          {
            title: "Zweck der Rente",
            contents: [
              {
                text: `Das Schweizer Rentensystem unterstützt Hinterbliebene, um zu verhindern, dass eine Frau, ein Mann, ein eingetragener Partner oder Kinder in eine schwierige finanzielle Situation geraten, wenn ihr Partner oder Elternteil stirbt.`,
              },
            ],
          },
          {
            title: "Höhe der Rente",
            contents: [
              {
                text: `Die Höhe der Rente hängt von der Anzahl der Beitragsjahre der verstorbenen Person, dem Niveau des erzielten Einkommens und ihren Erziehungs- oder Pflegegutschriften ab.

Wenn Ihre verstorbene Frau, Ihr verstorbener Mann, Ihr eingetragener Partner oder Ihr Elternteil alle AHV-Beiträge gezahlt hat, d.h. vom 1. Januar nach dem 20. Lebensjahr bis zum Tod, haben Sie Anspruch auf eine volle Rente.

Wenn es Lücken bei den AHV-Beiträgen gibt, erhalten Sie eine niedrigere Rente.

Mit einer vollen Rente haben Sie normalerweise Anspruch auf folgende Beträge, abhängig vom Durchschnittseinkommen des Verstorbenen:`,
              },
              {
                subtitle: "Witwen- oder Witwerrente",
                text: `Minimum in CHF / Monat: 1008.-
Maximum in CHF / Monat: 2016.-`,
              },
              {
                subtitle: "Waisenrente",
                text: `Minimum in CHF / Monat: 504.-
Maximum in CHF / Monat: 1008.-`,
              },
              {
                text: `Wenn Sie bereits eine Alters- oder Invalidenrente erhalten, erhalten Sie einen Zuschlag von 20 Prozent auf Ihre AHV/IV-Rente, wenn Sie Witwe oder Witwer werden. Die Summe aus Rente und Zuschlag darf die maximale Rente nicht überschreiten.

Die AHV-Ausgleichsstelle des Verstorbenen kann Ihnen genau sagen, wie hoch die Rente in Ihrem Fall sein wird.`,
              },
            ],
          },
          {
            title: "Beantragung einer Hinterbliebenenrente",
            contents: [
              {
                text: `Sie müssen eine Hinterbliebenenrente bei der Ausgleichsstelle beantragen, an die der Verstorbene zuletzt Beiträge gezahlt hat.

Dazu müssen Sie das Rentenantragsformular einreichen, das Sie online herunterladen können.

Wenn der Verstorbene teilweise in der Schweiz und teilweise in einem oder mehreren EU- oder EFTA-Mitgliedstaaten AHV-Beiträge gezahlt hat, können Sie das Rentenantragsformular an das letzte Wohnland des Verstorbenen senden. Dadurch werden die Verfahren in den anderen Ländern automatisch ausgelöst.

Wenn Sie im Ausland leben, müssen Sie die Schweizer Ausgleichsstelle kontaktieren, um das genaue Verfahren zu erfahren.`,
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
    categoryId: CategoryId.make(9),
    title: "Tod///Was tun, wenn jemand stirbt",
    description:
      "Wenn ein Verwandter oder eine Ihnen nahestehende Person stirbt, gibt es mehrere Dinge, die Sie tun müssen: eine Sterbeurkunde besorgen, die Beerdigung organisieren und die Versicherungsgesellschaft, Bank und Vermieter des Verstorbenen benachrichtigen.",
    contents: [
      {
        infos: [
          {
            title: "Beschaffung einer Sterbeurkunde",
            contents: [
              {
                text: `Wenn eine Person in einem Krankenhaus oder Pflegeheim stirbt, stellt die Einrichtung eine Sterbeurkunde aus.

Wenn eine Person außerhalb einer Einrichtung, beispielsweise zu Hause, eines natürlichen Todes stirbt, sollten Sie den Arzt des Verstorbenen oder den Notdienst rufen. Sie bestätigen den Tod und stellen eine Sterbeurkunde aus.

Wenn eine Person durch einen Unfall oder ein Verbrechen stirbt, müssen Sie die Polizei benachrichtigen.`,
              },
            ],
          },
          {
            title: "Meldung eines Todes: wann, wie und wo",
            contents: [
              {
                text: `Wenn eine Person in einem Krankenhaus oder Pflegeheim stirbt, meldet die Einrichtung den Tod.

Wenn eine Person außerhalb einer Einrichtung stirbt, müssen die Angehörigen des Verstorbenen den Tod den zuständigen Behörden melden – in der Regel dem Zivilstandsamt am Ort, an dem die Person gestorben ist. Dies muss innerhalb von zwei Tagen schriftlich oder persönlich erfolgen, und die Angehörigen müssen eine originale ärztliche Sterbeurkunde vorlegen.

Die Angehörigen des Verstorbenen können eine dritte Partei, z.B. ein privates Bestattungsunternehmen oder das öffentliche Bestattungsamt, beauftragen, den Tod zu melden und die Formalitäten zu erledigen. Überprüfen Sie die Website Ihres Kantons oder Ihrer Gemeinde für Optionen.

Die Person, die den Tod meldet, muss folgende Dokumente vorlegen:

- Sterbeurkunde
- Familienbüchlein / Partnerschaftsurkunde des Verstorbenen
- Reisepass / Personalausweis des Verstorbenen
- Niederlassungsbewilligung / Aufenthaltsbewilligung des Verstorbenen (wenn der Verstorbene ein Ausländer ist)

Das Zivilstandsamt stellt eine schriftliche Bestätigung aus, dass der Tod gemeldet wurde, und stellt nach der Beglaubigung des Todes auf Anfrage eine Sterbeurkunde zur Verfügung. Diese Dokumente sind erforderlich, um mit der Beerdigung fortzufahren.

Hinweis: Wenn ein Ausländer, der nicht in der Schweiz wohnt, hier stirbt, muss der Tod dem Zivilstandsamt am Ort des Todes gemeldet werden. Das Zivilstandsamt kann zusätzliche Dokumente anfordern.`,
              },
            ],
          },
          {
            title: "Organisation der Beerdigung:",
            contents: [
              {
                subtitle: "Wann und wie",
                text: `Die Beerdigung kann erst stattfinden, nachdem das Zivilstandsamt bestätigt hat, dass der Tod gemeldet wurde.

In der Schweiz gibt es unterschiedliche Bestattungsbräuche und -praktiken. Sie können Informationen dazu von Ihrer Gemeinde, dem Bestattungsamt oder einem privaten Bestattungsunternehmen erhalten. Besprechen Sie praktische Aspekte wie Zeit und Ort der Beerdigung und das Verfahren.`,
              },
              {
                subtitle: "Art der Beerdigung",
                text: `In der Schweiz können Sie zwischen einer Kremation oder einer Beerdigung wählen. Informationen zu Kremationen und Bestattungsoptionen (Urnennische, Kolumbarium oder Beerdigung in einem Einzel-, Familien- oder Gemeinschaftsgrab) erhalten Sie vom Bestattungsamt oder von den Behörden in der Gemeinde des Verstorbenen.`,
              },
              {
                subtitle: "Kosten",
                text: `Viele Gemeinden bieten kostenlose Beerdigungen oder Kremationen für ihre Verstorbenen an. Wenn nicht, können Sie einen Bestatter beauftragen, die Beerdigung zu organisieren. Fordern Sie einen Kostenvoranschlag an.`,
              },
            ],
          },
          {
            title: "Wenn der Tod im Ausland eintritt",
            contents: [
              {
                text: `Wenn eine Person im Ausland stirbt, benachrichtigen in der Regel die ausländischen Behörden oder die Angehörigen des Verstorbenen die Schweizer Vertretung im Ausland (Konsulat oder Botschaft).

Sie sind dafür verantwortlich, die ausländische Sterbeurkunde an die Schweizer Botschaft oder das Konsulat weiterzuleiten, die sie dann an das Zivilstandsamt am Heimatort des Verstorbenen weiterleitet.

Wenn Sie möchten, dass die Beerdigung in der Schweiz stattfindet, unterstützt die Schweizer Botschaft oder das Konsulat Sie bei bestimmten Formalitäten für die Rückführung des Verstorbenen. Die Angehörigen des Verstorbenen sind jedoch in erster Linie für die Rückführung verantwortlich.`,
              },
            ],
          },
          {
            title: "Formalitäten nach der Beerdigung",
            contents: [
              {
                text: `Nach der Beerdigung müssen bestimmte Angelegenheiten geregelt werden. Dazu gehören:

- Kündigung der Versicherungen des Verstorbenen (Kranken-, Hausrat-, Haftpflicht- und Unfallversicherung...)
- Kündigung der Alters- und Hinterbliebenenversicherung des Verstorbenen sowie aller Lebensversicherungen und Beantragung der Hinterbliebenenrente, auf die Sie möglicherweise Anspruch haben
- Nachfrage beim Arbeitgeber des Verstorbenen, ob Sie Anspruch auf eine Hinterbliebenenrente aus der beruflichen Vorsorge (zweite Säule), auf eine Abfindung und auf die verbleibende Zahlung des Gehalts des Verstorbenen haben
- Benachrichtigung der Bank und der Post des Verstorbenen
- Kündigung von Zeitungsabonnements, öffentlichen Verkehrsabonnements und Mitgliedschaften in Vereinen und Clubs usw.
- Benachrichtigung der Steuerbehörden
- Benachrichtigung der Fahrer- und Fahrzeugzulassungsstelle, wenn der Verstorbene einen Führerschein und ein Fahrzeug auf seinen Namen registriert hatte
- Benachrichtigung des Vermieters des Verstorbenen, wenn er in einer Mietwohnung lebte. Wenn der Verstorbene alleine lebte, müssen Sie den Mietvertrag kündigen und sicherstellen, dass die Wohnung oder das Haus innerhalb der im Vertrag vorgesehenen Frist geräumt wird.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Scheidung
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(9),
    title: "Scheidung///Scheidungsverfahren",
    description:
      "In der Schweiz können Sie eine Scheidung einvernehmlich oder durch einseitigen Antrag beantragen. Die Bedingungen und die Dauer des Verfahrens können variieren, wenn einer der Ehepartner eine Scheidung ablehnt.",
    contents: [
      {
        infos: [
          {
            title: "Wo lässt man sich scheiden?",
            contents: [
              {
                text: `Um sich scheiden zu lassen, müssen Sie das zuständige kantonale Gericht an Ihrem Wohnsitz kontaktieren.`,
              },
            ],
          },
          {
            title: "Wenn Sie und Ihr Ehepartner beide mit der Scheidung einverstanden sind",
            contents: [
              {
                text: `Sie können einen gemeinsamen Antrag (auch als einvernehmliche Scheidung bekannt) einreichen, der Folgendes umfasst:

- Ein schriftliches Gesuch (Brief oder vorgefertigtes Formular), das von beiden Ehepartnern unterzeichnet ist und angibt, dass Sie sich scheiden lassen möchten. Sie müssen keine Gründe für die Scheidung angeben.
- Ein Dokument, das alle Folgen der Scheidung, auf die Sie sich geeinigt haben, spezifiziert (Vereinbarung über den Umgang mit den Folgen der Scheidung): Liquidation der Ehe, Verteilung des Pensionskassenvermögens, Sorgerecht für Kinder, Unterhaltszahlungen, Vermögensaufteilung usw.
- Das Gericht kann auch andere Dokumente anfordern.

Am Ende des Verfahrens spricht das Gericht die Scheidung aus und entscheidet über die Folgen für die beiden ehemaligen Ehepartner und die Kinder. Das Gericht übernimmt in der Regel die in der Scheidungsvereinbarung gemachten Vorschläge, es sei denn, es gibt Unstimmigkeiten (z.B. wenn ein Ehepartner in Eile unbewusst auf seine während der Ehe erworbenen Rentenansprüche verzichtet) oder wenn eine Bestimmung den Interessen der Kinder widerspricht (z.B. wenn ein Ehepartner auf den Kindesunterhalt des Ex-Partners verzichtet, um das alleinige Sorgerecht zu erhalten).`,
              },
            ],
          },
          {
            title: "Wenn einer der Ehepartner die Scheidung ablehnt",
            contents: [
              {
                text: `Sie können eine Scheidung beantragen, auch wenn Ihr Ehepartner nicht zustimmt, vorausgesetzt, Sie leben seit mindestens zwei Jahren getrennt.

In Ausnahmefällen, einschließlich häuslicher Gewalt, können Sie auch vor Ablauf der zwei Jahre eine Scheidung beantragen.

Das Gericht informiert Sie über die einzureichenden Dokumente. Am Ende des Verfahrens spricht das Gericht die Scheidung aus und entscheidet über alle Folgen, wobei es Punkte berücksichtigt, bei denen Sie und Ihr Ehepartner sich einigen konnten.`,
              },
            ],
          },
          {
            title: "Wie lange dauert das Scheidungsverfahren?",
            contents: [
              {
                text: `Die Dauer des Scheidungsverfahrens variiert. Wenn Sie und Ihr Ehepartner sich über alle Folgen der Scheidung einig sind, dauert das Verfahren in der Regel drei bis vier Monate. Wenn Sie jedoch über eine oder mehrere Folgen der Scheidung streiten, kann das Verfahren bis zu mehreren Jahren dauern.`,
              },
            ],
          },
          {
            title: "Scheidungskosten und finanzielle Unterstützung",
            contents: [
              {
                text: `Die Kosten einer Scheidung umfassen insbesondere die Gerichtskosten (von CHF 1.000 bis CHF 4.000, je nach Kanton) und die Anwaltskosten, wenn Sie einen Anwalt beauftragen (von einigen hundert Franken bis zu mehreren tausend, je nach Komplexität des Verfahrens).

Wenn Sie in finanziellen Schwierigkeiten sind, können Sie beim Staat kostenlose oder teilweise kostenlose Rechtshilfe beantragen. In diesem Fall übernimmt der Staat ganz oder teilweise die Gerichtskosten und die Kosten für einen Anwalt, wenn Sie einen benötigen.

Fragen Sie das zuständige Gericht nach den Möglichkeiten, Rechtshilfe zu erhalten.`,
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
    categoryId: CategoryId.make(9),
    title: "Scheidung///Auswirkungen der Scheidung",
    description: "Eine Scheidung hat zahlreiche Auswirkungen auf Ihr persönliches, familiäres und finanzielles Leben und das Ihrer Kinder.",
    contents: [
      {
        infos: [
          {
            title: "Nachname der ehemaligen Ehepartner",
            contents: [
              {
                text: `Nach der Scheidung können Sie jederzeit das Zivilstandsamt an Ihrem Wohnsitz kontaktieren (Webseite verfügbar auf Deutsch, Französisch und Italienisch), um Ihren Nachnamen wieder auf den Namen zu ändern, den Sie vor der Ehe hatten. Wenn Sie sich dafür entscheiden, stellen Sie sicher, dass Sie Ihren Namen in Ihren offiziellen Dokumenten ändern, insbesondere in Ihrem Reisepass, Personalausweis und Führerschein.

Bitte beachten Sie: Ihr Ex-Ehepartner kann Sie nicht zwingen, Ihren Nachnamen zu ändern. Die Scheidung hat keine Auswirkungen auf die Nachnamen Ihrer Kinder.`,
              },
            ],
          },
          {
            title: "Elterliche Verantwortung und Sorgerecht",
            contents: [
              {
                text: `Die gemeinsame elterliche Verantwortung ist auch bei einer Scheidung die Regel. Das Scheidungsgericht gewährt nur dann einem Elternteil das alleinige Sorgerecht, wenn dies zum Wohl des Kindes erforderlich ist.

Selbst wenn Sie die gemeinsame elterliche Verantwortung haben, bedeutet dies nicht, dass Sie beide automatisch auch (abwechselndes) Sorgerecht für Ihre Kinder haben. Weitere Informationen zur elterlichen Verantwortung und zum Sorgerecht finden Sie auf unserer Seite zur elterlichen Verantwortung.`,
              },
            ],
          },
          {
            title: "Auflösung des Güterstands und Auswirkungen auf die berufliche Vorsorge",
            contents: [
              {
                text: `Eine der Auswirkungen der Scheidung ist die Teilung von Vermögen und Schulden zwischen den beiden ehemaligen Ehepartnern (auch als Auflösung des Güterstands bekannt). Die Teilung von Vermögen und Schulden hängt vom während der Ehe bestehenden Güterstand ab.

Die während der Ehe angesparten Vermögenswerte der beruflichen Vorsorge werden ebenfalls zwischen den Ehepartnern aufgeteilt (Webseite verfügbar auf Deutsch, Französisch und Italienisch).

Fragen Sie einen Anwalt oder Ihre AHV-Ausgleichsstelle (1. Säule) nach weiteren Informationen zur Abwicklung des Güterstands und zur Teilung Ihrer Vermögenswerte der beruflichen Vorsorge (2. Säule).`,
              },
            ],
          },
          {
            title: "Unterhaltszahlungen für Ex-Ehepartner und Kinder",
            contents: [
              {
                subtitle: "Unterhaltszahlungen für Ex-Ehepartner",
                text: `Nach einer Scheidung müssen die beiden Ex-Ehepartner grundsätzlich jeweils selbst für ihren Unterhalt aufkommen.

Je nach Ihrem Alter, der Dauer der Ehe, der Aufgabenverteilung während der Ehe (z.B. wenn einer der beiden Ehepartner die Arbeit aufgegeben hat, um sich um die Kinder zu kümmern) und vor allem der finanziellen Situation beider Parteien kann jedoch einer der beiden zumindest für einige Zeit Unterhaltszahlungen leisten müssen.

Sie können sich direkt mit Ihrem Ex-Ehepartner auf die Höhe der Zahlung einigen. Andernfalls entscheidet das Gericht.

Bitte beachten Sie: Wenn Sie wieder heiraten, verlieren Sie das Recht auf Unterhaltszahlungen.`,
              },
              {
                subtitle: "Kindesunterhalt",
                text: `Eltern haben die Pflicht, ihre Kinder bis zur Volljährigkeit oder bis zum Abschluss ihrer Ausbildung zu unterstützen. Eltern leisten gemeinsam Kindesunterhalt, jeder entsprechend seiner Möglichkeiten.

Die beiden Ex-Ehepartner können sich über Unterhaltszahlungen einigen. Die endgültige Entscheidung trifft jedoch ein Gericht, das die Bedürfnisse der Kinder und die finanzielle Situation jedes Ehepartners berücksichtigt.`,
              },
            ],
          },
          {
            title: "Was tun, wenn ein Ex-Ehepartner keinen Kindesunterhalt zahlt?",
            contents: [
              {
                text: `Wenn ein Ex-Ehepartner den vom Scheidungsgericht festgelegten Kindesunterhalt nicht zahlt, können Sie einen Anwalt kontaktieren oder Ihren Kanton um Hilfe bitten, um den Ex-Ehepartner zur Erfüllung seiner Verpflichtungen zu zwingen. Jeder Kanton hat eine oder mehrere spezialisierte Inkassostellen, die Ihnen helfen können, das Ihnen geschuldete Geld zurückzufordern. Diese Hilfe ist kostenlos, zumindest was den Kindesunterhalt betrifft.

Unter bestimmten Bedingungen können die Kantone auch Kindesunterhaltszahlungen (ganz oder teilweise) vorstrecken. Dies ist beispielsweise der Fall, wenn der Elternteil, der das Sorgerecht für die Kinder hat, ein zu niedriges Einkommen hat, um sie alleine zu unterstützen.

Kontaktieren Sie Ihre Wohnsitzgemeinde für Informationen über die Möglichkeiten, einen Vorschuss auf Unterhaltszahlungen und finanzielle Unterstützung in Ihrem Kanton zu erhalten.`,
              },
            ],
          },
          {
            title: "Aufenthaltsrecht für Ausländer",
            contents: [
              {
                text: `Wenn Sie eine C-Bewilligung haben, können Sie auch nach einer Scheidung in der Schweiz bleiben.

Wenn Ihnen eine B-Bewilligung zum Zweck der Familienzusammenführung gewährt wurde, dürfen Sie nur unter bestimmten Bedingungen in der Schweiz bleiben. Weitere Informationen finden Sie in unserem Text zu Aufenthaltsbewilligungen in der Schweiz.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Erbschaft
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(9),
    title: "Erbschaft///Schenkungssteuer",
    description: "Die meisten Kantone und einige Gemeinden erheben eine Schenkungssteuer. Auf Bundesebene gibt es jedoch keine Schenkungssteuer.",
    contents: [
      {
        infos: [
          {
            title: "Besteuerbare Schenkungen",
            contents: [
              {
                text: `Die meisten Kantone erheben eine Schenkungssteuer. Ziel dieser Steuer ist es, zu verhindern, dass Steuerzahler andere Steuerarten, insbesondere die Erbschaftssteuer, umgehen, indem sie ihr Vermögen verschenken.

Eine Schenkungssteuer wird beispielsweise auf folgende Dinge erhoben:

- Geldgeschenke über einen bestimmten Wert
- Schenkungen von Immobilien
- Schenkungen von Wertgegenständen, wie Kunstwerken
- Unentgeltliche Übertragungen von Versicherungsleistungen, die während der Lebenszeit des Versicherungsnehmers fällig werden
- Vorschüsse auf Erbschaften
- Abtretungen oder Verzichte auf Rechte (z.B. Nutzungsrechte).`,
              },
            ],
          },
          {
            title: "Wer muss Schenkungssteuer zahlen?",
            contents: [
              {
                text: `Die Schenkungssteuer muss von der Person gezahlt werden, die eine Schenkung erhält.

Normalerweise müssen Ehepartner, eingetragene Partner und deren Nachkommen (Kinder und Enkelkinder) keine Steuer auf Schenkungen untereinander zahlen. Schenkungen an Stiefkinder und Pflegekinder sind ebenfalls steuerbefreit, aber nur in den Kantonen, in denen sie denselben Status wie biologische Kinder haben.`,
              },
            ],
          },
          {
            title: "Wann müssen Schenkungen deklariert werden?",
            contents: [
              {
                text: `In den meisten Kantonen müssen Sie die Schenkung innerhalb einer bestimmten Frist unaufgefordert der kantonalen Steuerverwaltung melden.`,
              },
            ],
          },
          {
            title: "Wie wird die Schenkungssteuer berechnet?",
            contents: [
              {
                text: `Der Steuersatz und damit die Steuer hängen in der Regel ab von:

- dem Wert des als Schenkung erhaltenen Vermögens
- und/oder dem Grad der Verwandtschaft zwischen der Person, die die Schenkung macht, und der Person, die die Schenkung erhält: Je enger die Verwandtschaft, desto niedriger der Steuersatz.`,
              },
            ],
          },
          {
            title: "Abzug des Wertes von Schenkungen in Ihrer Steuererklärung",
            contents: [
              {
                text: `Wenn Sie eine Schenkung an eine gemeinnützige Organisation machen, können Sie in bestimmten Fällen den gesamten oder einen Teil des gespendeten Betrags in Ihrer Steuererklärung abziehen. Weitere Informationen dazu finden Sie in den Informationen zur Steuererklärung.`,
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
    categoryId: CategoryId.make(9),
    title: "Erbschaft///Erbschein",
    description:
      "Der Erbschein (erhalten in einem Verfahren, das dem englischen oder amerikanischen 'Grant of Probate' oder der schottischen 'Confirmation' entspricht) gibt an, wer berechtigt ist, das Vermögen einer verstorbenen Person zu erben. Dieses Dokument ist in der Regel erforderlich, um mit dem Nachlass des Verstorbenen umzugehen, beispielsweise um Geld vom Bankkonto des Verstorbenen abzuheben.",
    contents: [
      {
        infos: [
          {
            title: "Wer kann einen Erbschein beantragen?",
            contents: [
              {
                text: `- Falls der Verstorbene kein Testament oder einen Erbvertrag hinterlassen hat, können die gesetzlichen Erben einen Erbschein beantragen; dies sind, je nach Fall, die Ehefrau, der Ehemann, der eingetragene Partner, Nachkommen (d.h. Kinder und deren Nachkommen) oder, falls zutreffend, Eltern und deren Kinder (d.h. die Brüder und Schwestern des Verstorbenen).
- Falls ein Testament oder ein Erbvertrag vorliegt, kann der Erbschein erst nach der offiziellen Bekanntgabe des Testaments oder des Erbvertrags durch die zuständige Behörde beantragt werden.`,
              },
            ],
          },
          {
            title: "Ausstellende Behörde",
            contents: [
              {
                text: `Die Behörde, die den Erbschein ausstellt, variiert von Kanton zu Kanton.`,
              },
            ],
          },
          {
            title: "Voraussetzungen",
            contents: [
              {
                text: `Um einen Erbschein zu erhalten, müssen Sie unter anderem:

- eine Kopie der Sterbeurkunde einreichen (diese erhalten Sie vom Zivilstandsamt),
- nachweisen, dass Sie erbberechtigt sind (z.B. durch Vorlage eines Auszugs aus dem Zivilstandsregister, der Ihre familiäre oder zivilrechtliche Beziehung zum Verstorbenen zeigt, oder eine Kopie des Testaments oder Erbvertrags),
- nachweisen, dass Sie das Erbe nicht ausgeschlagen haben (d.h. durch Vorlage der Annahmeerklärung aller Erben oder
- Nachweis, dass die Frist, in der das Erbe hätte ausgeschlagen werden können, abgelaufen ist).`,
              },
            ],
          },
          {
            title: "Kosten",
            contents: [
              {
                text: `Die Kosten für die Ausstellung eines Erbscheins variieren je nach Fall; sie hängen davon ab, welche Nachforschungen erforderlich sind und wie viel Zeit die Behörde dafür aufwenden musste, um den Erbschein auszustellen. Die Kosten können mehrere hundert oder sogar einige tausend Franken betragen. Hinzu kommen die Kosten, die das Zivilstandsamt für die Ausstellung der Dokumente und die Einholung von Informationen in der Schweiz und im Ausland berechnet.`,
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
    categoryId: CategoryId.make(9),
    title: "Erbschaft///Erbschaftssteuer",
    description:
      "Alle Kantone außer Obwalden und Schwyz erheben eine Erbschaftssteuer. Die Höhe der Steuer und wer sie zahlen muss, variiert von Kanton zu Kanton. Auf Bundesebene gibt es keine Erbschaftssteuer.",
    contents: [
      {
        infos: [
          {
            title: "Wer muss Erbschaftssteuer zahlen?",
            contents: [
              {
                text: `Die Erbschaftssteuer ist von denjenigen zu zahlen, die erben, d.h. den Erben des Verstorbenen.

Normalerweise sind Ehepartner, eingetragene Partner und deren Nachkommen (Kinder und Enkelkinder) von der Steuer befreit. Stiefkinder und Pflegekinder sind ebenfalls steuerbefreit, aber nur in den Kantonen, in denen sie denselben Status wie biologische Kinder haben.`,
              },
            ],
          },
          {
            title: "Wie wird die Erbschaftssteuer berechnet?",
            contents: [
              {
                text: `Die Erbschaftssteuer wird auf Basis des Wertes des geerbten Vermögens berechnet. Schenkungen von persönlichen Gegenständen und Haushaltsgegenständen werden in den meisten Kantonen nicht besteuert.

Der Steuersatz und damit die zu zahlende Steuer hängen in der Regel ab von:

- dem Wert des geerbten Vermögens.
- und/oder dem Grad der familiären Beziehung zwischen dem Erben und dem Verstorbenen: Je enger die Verwandtschaft, desto niedriger der Steuersatz. Erben, die nicht mit dem Verstorbenen verwandt sind, zahlen einen deutlich höheren Steuerbetrag als verwandte Erben.`,
              },
            ],
          },
          {
            title: "Besteuerung von Erbschaften aus dem Ausland",
            contents: [
              {
                text: `Wenn der Verstorbene im Ausland lebte oder ein Erbe im Ausland lebt und auch wenn das geerbte Vermögen im Ausland befindlich ist, stellt sich die Frage, welches Recht auf den Erbschaftsprozess anwendbar ist. Es besteht ein reales Risiko, in mehr als einem Land Steuern auf dieselbe Erbschaft zahlen zu müssen.

Um diese Art der Doppelbesteuerung zu vermeiden, hat die Schweiz mit einer Reihe von Ländern Abkommen geschlossen.`,
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
    categoryId: CategoryId.make(9),
    title: "Erbschaft///Ausschlagung einer Erbschaft",
    description: "Wenn Sie befürchten, Schulden von jemandem zu erben, der gestorben ist, oder wenn Sie einfach nichts von jemandem erben möchten, können Sie eine Erbschaft ausschlagen.",
    contents: [
      {
        infos: [
          {
            title: "Ausschlagung einer Erbschaft",
            contents: [
              {
                text: "Wenn Sie eine Erbschaft nicht annehmen möchten, müssen Sie die zuständige Behörde am letzten Wohnsitz des Verstorbenen innerhalb von drei Monaten per Einschreiben benachrichtigen.\n\nIn diesem Fall geht Ihr Erbanteil an Ihre gesetzlichen Erben, die wiederum drei Monate Zeit haben, ihn auszuschlagen. Wenn alle Erben ihre Erbschaft ausschlagen, wird sie vom Konkursamt im letzten Wohnkanton des Verstorbenen liquidiert. Die verfügbaren Vermögenswerte werden anschließend verwendet, um die Schulden des Verstorbenen zu begleichen.\n\nSie können Ihren Erbanteil auch ausschlagen, wenn die Person, deren Vermögen Sie erben sollen, noch lebt. Dafür müssen Sie einen Erbvertrag mit der betreffenden Person abschließen.",
              },
            ],
          },
          {
            title: "Ermittlung des Wertes einer Erbschaft",
            contents: [
              {
                text: "Sie können Informationen über die finanzielle Situation einer verstorbenen Person beispielsweise aus ihrer letzten Steuererklärung, aus ihren Kontoauszügen oder einem Auszug aus dem Betreibungsregister erhalten. Diese Informationen erhalten Sie normalerweise durch Vorlage eines Erbscheins.\n\nWenn Sie nicht sicher sind, wie groß der Nachlass ist, können Sie die zuständige Behörde bitten, ein öffentliches Inventar zu erstellen.",
              },
            ],
          },
          {
            title: "Öffentliches Inventar",
            contents: [
              {
                text: "In einem öffentlichen Inventar erstellt die Behörde eine öffentlich zugängliche Liste der Vermögenswerte und Schulden, die den Nachlass ausmachen. Um dies zu veranlassen, müssen Sie innerhalb eines Monats nach Kenntnis des Todes der betreffenden Person das Inventar bei der für Erbschaftsangelegenheiten zuständigen Behörde am letzten Wohnsitz des Verstorbenen beantragen.\n\nDie Behörde führt die erforderlichen Nachforschungen durch und erstellt das Inventar. Je nach den Vermögenswerten des Nachlasses und den finanziellen Umständen des Verstorbenen können diese Nachforschungen mehrere Monate dauern.\n\nDas Inventar gibt Ihnen einen vollständigen Überblick über die Vermögenswerte, die den Nachlass ausmachen. Dies ermöglicht Ihnen und den anderen Erben, individuell zu entscheiden, ob Sie Ihre jeweiligen Erbschaften annehmen oder nicht.",
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
    title: "Erbschaft///Nachfolge: Wer erbt was?",
    description:
      "In der Schweiz ist das Recht klar, wer Ihre Erben sein werden. In einem Testament oder Erbvertrag können Sie jedoch beeinflussen, wie zumindest ein Teil Ihres Nachlasses verteilt wird.",
    contents: [
      {
        infos: [
          {
            title: "Ich habe kein Testament oder einen Erbvertrag erstellt: Wer erbt von mir?",
            contents: [
              {
                subtitle: "Der Nachlass geht an Ihre gesetzlichen Erben",
                text: "Wenn Sie kein Testament (sogenannte „Intestaterbfolge“) oder einen Erbvertrag erstellt haben, wird Ihr Nachlass unter Ihren gesetzlichen Erben aufgeteilt, d.h. den Personen, die das Gesetz als berechtigt ansieht, Ihre Vermögenswerte zu erben. Ihre gesetzlichen Erben sind Ihr Ehepartner oder Partner (Ehemann, Ehefrau oder eingetragener Partner) und Ihre nächsten Verwandten (Ihre Kinder oder, wenn Sie keine Kinder haben, Ihre Eltern oder sogar Ihre Großeltern). Sie erben in einer festgelegten Reihenfolge gemäß ihren gesetzlichen Erbrechten.\n\n- Wenn Sie Kinder haben: Ihr Nachlass wird zwischen Ihrem Ehepartner oder Partner (Ehemann, Ehefrau oder eingetragener Partner) und Ihren Kindern (oder, wenn diese vor Ihnen sterben, deren Kinder, falls vorhanden) aufgeteilt.\n- Wenn Sie keine Kinder haben: Ihr Nachlass wird zwischen Ihrem Ehepartner oder Partner und Ihren Eltern (oder Ihren Geschwistern, wenn Ihre Eltern bereits gestorben sind) aufgeteilt.\n- Wenn Sie keine Verwandten haben – weder auf der Seite Ihrer Eltern (z.B. Brüder oder Schwestern) noch auf der Seite Ihrer Großeltern (deren Brüder und Schwestern oder deren Nachkommen) – geht Ihr gesamter Nachlass an Ihren Ehepartner oder Partner.\n- Wenn Sie nicht verheiratet sind oder in einer eingetragenen Partnerschaft leben und keine Verwandten haben, geht Ihr Nachlass an den Kanton oder die Gemeinde Ihres letzten Wohnsitzes.\n\nBitte beachten Sie: Wenn Ihr Partner nicht mit Ihnen verheiratet ist oder in einer eingetragenen Partnerschaft mit Ihnen lebt, ist er oder sie nicht Ihr gesetzlicher Erbe. Wenn Sie möchten, dass Ihr Partner von Ihnen erbt, müssen Sie dies ausdrücklich in Ihrem Testament oder in einem Erbvertrag festlegen.",
              },
              {
                subtitle: "Wie viel gesetzliche Erben bei Intestaterbfolge erhalten: ihre gesetzlichen Erbrechte",
                text: "Wenn Sie verheiratet sind oder in einer eingetragenen Partnerschaft leben, Kinder haben, geht Ihr Nachlass:\n- 50% an Ihre Kinder (möglicherweise Enkelkinder)\n- 50% an Ihren Ehepartner oder Partner\n\nWenn Sie verheiratet sind oder in einer eingetragenen Partnerschaft leben, keine Kinder haben, geht Ihr Nachlass:\n- 75% an Ihren Ehepartner oder Partner\n- 25% an Ihre Verwandten und deren Nachkommen (Eltern, Brüder, Schwestern, Enkelkinder usw.)\n\nSie sind weder verheiratet noch in einer eingetragenen Partnerschaft, haben Kinder, geht Ihr Nachlass:\n- 100% an Ihre Kinder (oder, wenn einige von ihnen vor Ihnen sterben, an deren Nachkommen)\n\nSie sind weder verheiratet noch in einer eingetragenen Partnerschaft, haben keine Kinder, geht Ihr Nachlass:\n- 100% an Ihre Eltern oder deren Nachkommen\n- 100% an Ihre Großeltern, wenn Sie keine Eltern oder deren Nachkommen mehr haben\n- 100% an die Gemeinde oder den Kanton, wenn Sie keine Kinder, Eltern oder Geschwister haben\n\nBeispiel: Ihr Nachlass beläuft sich auf CHF 100.000. Sie haben kein Testament oder einen Erbvertrag erstellt:\n\na) Sie haben einen Ehemann, einen Sohn, einen Bruder und eine Mutter.\n- Ihr Ehemann erbt CHF 50.000.\n- Ihr Sohn erbt CHF 50.000.\n\nb) Sie haben eine Ehefrau und einen Bruder.\n- Ihre Ehefrau erbt CHF 75.000.\n- Ihr Bruder erbt CHF 25.000.\n\nc) Sie haben einen Sohn und drei Schwestern.\n- Ihr Sohn erbt CHF 100.000.",
              },
            ],
          },
          {
            title: "Sie haben ein Testament oder einen Erbvertrag erstellt: Wer erbt was?",
            contents: [
              {
                subtitle: "Wahlfreiheit",
                text: "Durch die Erstellung eines Testaments oder eines Erbvertrags können Sie über Ihre Erben und die Verteilung Ihres Nachlasses entscheiden, jedoch nur innerhalb der gesetzlichen Grenzen. Zum Beispiel können Sie:\n\n- Einen oder mehrere gesetzliche Erben gegenüber anderen bevorzugen, z.B. mehr Ihrem Ehepartner oder eingetragenen Partner als Ihren Kindern hinterlassen.\n- Zusätzlich zu den gesetzlich vorgesehenen Erben andere Erben bestimmen, z.B. für Ihren Partner.",
              },
              {
                subtitle: "Grenzen Ihrer Wahlfreiheit",
                text: "Einige Ihrer gesetzlichen Erben können nicht vollständig vom Erbe ausgeschlossen werden. Dies sind:\n\n- Ihr Ehepartner oder eingetragener Partner\n- Ihre Kinder oder, wenn Ihre Kinder vor Ihnen gestorben sind, deren Nachkommen (Kinder und möglicherweise deren Kinder)\n\nSelbst wenn Sie nicht möchten, dass sie etwas erhalten, haben diese Erben Anspruch auf die Hälfte ihres Anteils am Nachlass, bekannt als ihr gesetzlicher Pflichtteil. Dies gilt nicht für Ihre Brüder, Schwestern oder Cousins. Sie können diese durch die Festlegung in Ihrem Testament, dass Ihre Vermögenswerte an andere gehen, vom Erbe ausschließen.\n\nErben, die einen gesetzlichen Pflichtteil haben, können entscheiden, ihn nicht anzunehmen:\n\n- durch Ausschlagung der Erbschaft\n- durch Nichtanfechtung eines Testaments, das ihnen ihren gesetzlichen Pflichtteil nicht gibt; oder\n- durch Abschluss eines Erbvertrags mit Ihnen zu Ihren Lebzeiten, in dem sie auf ihren gesetzlichen Pflichtteil verzichten\n\nKontaktieren Sie einen Anwalt oder Notar, um mehr darüber zu erfahren.",
              },
              {
                subtitle: "Was Sie in Ihrem Testament frei verfügen können",
                text: "In Ihrem Testament können Sie nur über einen bestimmten Teil Ihres Nachlasses frei verfügen; dieser Teil ist bekannt als der frei verfügbare Teil. Die Höhe des frei verfügbaren Teils hängt davon ab, wer Ihre gesetzlichen Erben zum Zeitpunkt Ihres Todes sind. Wenn Sie keinen Partner oder Nachkommen (Kinder oder Enkelkinder) haben, können Sie über Ihr Vermögen nach Belieben verfügen. Wenn Sie gesetzliche Erben haben, ist die Freiheit, über Ihr Vermögen zu verfügen, begrenzt, und was ihre gesetzlichen Erbrechte gewesen wären, wenn Sie kein Testament gemacht hätten.",
              },
            ],
          },
          {
            title: "Erbschaftssteuern",
            contents: [
              {
                text: "Die meisten Kantone erheben eine Erbschaftssteuer. Ehemänner, Ehefrauen und eingetragene Partner sind oft von dieser Steuer befreit.",
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
];

const infoArbeit: Information[] = [
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 1,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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
    isEssential: 0,
  },
  {
    localeId: LocaleId.make(2),
    categoryId: CategoryId.make(12),
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

Sie können auch von der Unfall- oder Militärversicherung eine Invalidenrente beziehen.`,
              },
              {
                subtitle: "Hilflosenentschädigung",
                text: `Sie können Hilflosenentschädigung erhalten, wenn Sie bei alltäglichen Lebensverrichtungen wie Ankleiden, Aufstehen, Zubettgehen, Essen oder Körperpflege die Hilfe anderer Menschen benötigen.

Die Entschädigung wird zusätzlich zur IV-Rente ausgerichtet. Der Betrag hängt vom Ausmass Ihrer Einschränkung ab. Es können nur in der Schweiz wohnhafte Personen Hilflosenentschädigung beziehen.

Sie können auch von der Unfall- oder Militärversicherung Hilflosenentschädigung beziehen.`,
              },
              {
                subtitle: "Assistenzbeitrag",
                text: `Wenn Sie von der IV eine Hilflosenentschädigung beziehen, zu Hause leben und eine Drittperson, die Sie unterstützt, bezahlen, kann die IV dafür einen Assistenzbeitrag leisten. Das Ziel ist, dass Sie nicht in ein Heim eintreten müssen.

Die Höhe des Assistenzbeitrags hängt vom Zeitaufwand und den Qualifikationen ab, die für die Unterstützung nötig sind.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
];

const infoGesundheit: Information[] = [
  // Krankenversicherung
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(11),
    title: "Krankenversicherung///Kosten der Krankenversicherung",
    description:
      "Die Kosten der Krankenversicherung sind für viele ein bedeutender Budgetposten. Wenn Sie ein geringes Einkommen haben, zahlen Sie eine reduzierte Prämie. Sie können auch durch die Wahl der Franchise und der Selbstbehaltskosten sparen.",
    contents: [
      {
        infos: [
          {
            title: "Ihre Kosten",
            contents: [
              {
                subtitle: "Prämien",
                text: `Ihre Krankenversicherungsprämie ist ein Beitrag, den Sie monatlich an Ihre Krankenkasse zahlen müssen.

Die Höhe dieser Prämie hängt von der Krankenkasse ab, bei der Sie versichert sind. Weitere Faktoren sind Ihr Versicherungsmodell, die gewählte Franchise und Ihr Wohnort. Prämien sind für Kinder und junge Erwachsene unter 25 Jahren niedriger.`,
              },
              {
                subtitle: "Franchise",
                text: `Die Franchise ist der Betrag, den Sie jährlich aus eigener Tasche für Ihre gesundheitsbezogenen Kosten zahlen müssen. Die Krankenkasse übernimmt die Kosten erst, wenn diese Franchise aufgebraucht ist.

Beispiel: Sie haben eine Franchise von CHF 300 gewählt und müssen ein- oder zweimal im Jahr zum Arzt. Ihr Arzt berechnet Ihnen CHF 200 pro Termin. Sie zahlen die gesamte erste Rechnung und CHF 100 der zweiten selbst. Ihre Krankenkasse übernimmt CHF 100 der zweiten Rechnung, abzüglich der Selbstbeteiligung von CHF 10, die Sie ebenfalls zahlen müssen (siehe nächster Abschnitt). Sie übernimmt auch alle weiteren Arztrechnungen, die Sie im selben Jahr haben.

Die niedrigste Franchise für Erwachsene beträgt CHF 300, die höchste CHF 2.500. Für Kinder gelten Franchisen zwischen CHF 0 und CHF 600.`,
              },
              {
                subtitle: "Selbstbeteiligung",
                text: `Nachdem die Franchise aufgebraucht ist, zahlen Sie weiterhin zehn Prozent Ihrer Gesundheitskosten. Diese Selbstbeteiligung ist jedoch auf CHF 700 pro Jahr begrenzt (CHF 350 für Kinder). Ihr jährlicher Anteil an Ihren Gesundheitskosten ist daher auf die gewählte Franchise plus CHF 700 begrenzt.`,
              },
              {
                subtitle: "Spitalbeitrag",
                text: `Sie müssen den Spitalbeitrag zahlen, wenn Sie stationär im Spital aufgenommen werden. Dieser beträgt CHF 15 pro Tag. Die Begründung ist, dass Sie im Spital Kosten sparen, die Sie zu Hause hätten, wie zum Beispiel für Lebensmittel und Strom. Kinder, junge Erwachsene in Ausbildung und schwangere Frauen zahlen keinen Spitalbeitrag.`,
              },
            ],
          },
          {
            title: "Prämienverbilligung",
            contents: [
              {
                text: `Personen mit geringem Einkommen oder vielen Kindern können Anspruch auf eine Subventionierung ihrer Prämien durch ihren Kanton haben. Viele Kantone informieren die Betroffenen automatisch. In anderen müssen Sie die Reduktion jedes Jahr selbst beantragen. Für Details kontaktieren Sie bitte die zuständige Stelle in Ihrem Kanton (Webseite verfügbar auf Deutsch, Französisch und Italienisch).`,
                links: [
                  {
                    text: "Zuständige Stelle in Ihrem Kanton",
                    url: "https://www.priminfo.admin.ch/de/versicherungen/verbilligung",
                  },
                ],
              },
            ],
          },
          {
            title: "Sparen bei den Prämien",
            contents: [
              {
                text: `Es gibt mehrere Möglichkeiten, bei Ihren Prämien zu sparen (Webseite verfügbar auf Deutsch, Französisch und Italienisch):

- Wählen Sie eine Krankenkasse mit niedrigen Prämien
- Wählen Sie ein Hausarztmodell oder ein anderes Versicherungsmodell mit niedriger Prämie
- Wählen Sie eine hohe Franchise und zahlen Sie dafür niedrigere Prämien
- Wenn Sie mehr als acht Stunden pro Woche angestellt sind, sind Sie durch die obligatorische Unfallversicherung abgedeckt. Sie müssen keinen zusätzlichen Unfallschutz in Ihrer obligatorischen Krankenversicherung einschließen`,
                links: [
                  {
                    text: "Möglichkeiten, bei Ihren Prämien zu sparen",
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
    categoryId: CategoryId.make(11),
    title: "Krankenversicherung///Leistungen der Krankenversicherung",
    description:
      "Alle Krankenkassen müssen im Rahmen der Grundversicherung die gleichen Leistungen übernehmen. Wenn Sie schwanger sind, müssen Sie in der Regel keine Franchise zahlen. Aber was passiert, wenn Sie im Ausland krank werden?",
    contents: [
      {
        infos: [
          {
            title: "Leistungen der Grundversicherung",
            contents: [
              {
                subtitle: "Alle Versicherer zahlen die gleichen Grundleistungen",
                text: `Ihre Krankenkasse übernimmt die Kosten für Untersuchungen und Behandlungen, wenn Sie krank sind. Sie übernimmt auch bestimmte präventive Maßnahmen, um Ihre Gesundheit zu erhalten. Impfungen und Vorsorgeuntersuchungen sind zwei Beispiele dafür. Gemäß dem Krankenversicherungsgesetz (KVG) müssen alle Krankenkassen die gleichen Leistungen der Grundversicherung übernehmen.

Ihr Arzt muss Sie vor Beginn einer Behandlung informieren, wenn die Grundversicherung diese nicht übernimmt. Im Zweifelsfall lohnt es sich, bei Ihrer Krankenkasse nachzufragen. Umfassende Informationen zu den Leistungen der Grundversicherung erhalten Sie beim Bundesamt für Gesundheit.`,
              },
              {
                subtitle: "Einschränkungen beim Hausarztmodell",
                text: `Wenn Sie sich für das Hausarztmodell oder ein anderes prämienreduzierendes Modell entschieden haben, müssen Sie die Regeln dieses Modells bei der Inanspruchnahme medizinischer Versorgung beachten. Beim Hausarztmodell müssen Sie beispielsweise fast immer zuerst Ihren Hausarzt aufsuchen.`,
              },
            ],
          },
          {
            title: "Leistungen der Zusatzversicherung",
            contents: [
              {
                text: `Wenn Sie zusätzliche Leistungen abdecken möchten, können Sie eine Zusatzversicherung abschließen. Diese zusätzlichen Leistungen können komplementäre Medizin wie Osteopathie oder kieferorthopädische Behandlungen für Kinder umfassen. Andere Zusatzversicherungen bieten Ihnen mehr Komfort im Spital oder garantieren Ihnen eine freie Arztwahl.`,
              },
            ],
          },
          {
            title: "Leistungen während der Schwangerschaft",
            contents: [
              {
                subtitle: "Franchise während der Schwangerschaft",
                text: `Wenn Sie schwanger sind, müssen Sie keine Kostenbeteiligung für spezifisch schwangerschaftsbezogene Gesundheitskosten zahlen. Das bedeutet, dass Sie keine Franchise, keine Selbstbeteiligung und keinen Spitalbeitrag zahlen. Ab der 13. Schwangerschaftswoche und bis acht Wochen nach der Geburt zahlen Sie auch für allgemeine medizinische Leistungen sowie für Gesundheitsleistungen im Krankheitsfall nichts.`,
              },
              {
                subtitle: "Leistungen für die Mutter",
                text: `Die Krankenkasse übernimmt die Kosten für die Geburt, die Nachkontrolle, die Kosten bei Komplikationen, Stillberatung und einen Teil der Kosten für Geburtsvorbereitungskurse, sofern diese von einer Hebamme geleitet werden. Es spielt keine Rolle, ob das Baby im Spital, in einem Geburtshaus oder zu Hause geboren wird. Wenn das Spital oder Geburtshaus Ihrer Wahl nicht auf der Liste der zugelassenen Spitäler Ihres Kantons steht, sollten Sie vorab bei Ihrer Krankenkasse nachfragen, ob sie die Kosten übernimmt.`,
              },
              {
                subtitle: "Leistungen für Vorsorgeuntersuchungen",
                text: `Die Grundversicherung übernimmt folgende Vorsorgeuntersuchungen:

- Zwei Ultraschalluntersuchungen (mehr, wenn die Schwangerschaft als risikoreich eingestuft wird)
- Ersttrimester-Screening zur Bestimmung des Risikos für Trisomien 21, 18 und 13
- Bei hohem Risiko im Ersttrimester-Test: nicht-invasives pränatales Testing (NIPT) und bei Bedarf Amniozentese und Chorionzottenbiopsie.

Hinzu kommen regelmäßige Untersuchungen bei Ihrem Frauenarzt/Gynäkologen, die in einigen Fällen auch von einer Hebamme durchgeführt werden können.`,
              },
              {
                subtitle: "Leistungen für das Baby",
                text: `Die Krankenkasse der Mutter übernimmt alle Kosten für den Spitalaufenthalt des Babys. Wenn das Neugeborene krank ist und eine Spitalbehandlung benötigt, wird dies von der Krankenversicherung des Kindes abgedeckt. Sie müssen einen Anteil dieser Kosten in Form der Selbstbeteiligung zahlen.`,
              },
            ],
          },
          {
            title: "Leistungen der Krankenversicherung im Ausland",
            contents: [
              {
                text: `Wenn Sie im Urlaub im Ausland krank werden, übernimmt Ihre Krankenkasse die Kosten für Ihre Notfallbehandlung. Der Umfang der Deckung hängt vom Land ab, in dem Sie sich befinden.`,
              },
              {
                subtitle: "Krankenversicherung im Ausland – EU",
                text: `In der EU, Norwegen, Island und Liechtenstein haben Sie Anspruch auf die gleichen Leistungen wie die Einheimischen. Wichtig ist, dass Ihre Krankenversicherungskarte auch als europäische Krankenversicherungskarte dient. Nehmen Sie sie immer mit in den Urlaub. Ihre Krankenkasse kann Ihnen ein vorläufiges Ersatzdokument ausstellen, wenn Sie Ihre Krankenversicherungskarte nicht dabei haben.`,
              },
              {
                subtitle: "Krankenversicherung im Ausland – weltweit",
                text: `Außerhalb der EU- und EFTA-Länder übernimmt Ihre Krankenkasse die Kosten für Ihre Notfallbehandlung nur bis zu einem bestimmten Betrag. Sie müssen möglicherweise einen Teil dieser Kosten selbst tragen, insbesondere wenn Sie stationär behandelt werden. Sie können eine geeignete Zusatzversicherung abschließen, wenn Sie eine höhere Deckung wünschen. Dies kann beispielsweise vor Reisen in die USA oder Kanada sinnvoll sein, da Behandlungen in beiden Ländern teuer sind.`,
              },
              {
                subtitle: "Selbstbeteiligung",
                text: `Es gibt medizinische Leistungen im Ausland, die Ihre Schweizer Krankenkasse nicht übernimmt. Dazu gehören beispielsweise Wahleingriffe und im Ausland gekaufte Medikamente. Es gibt auch Fälle, in denen Ihr Schweizer Arzt Sie für eine Behandlung ins Ausland schickt. Sie sollten dann im Voraus mit Ihrer Krankenkasse klären, ob sie die Kosten übernimmt. Versicherungen übernehmen oft die Kosten, wenn die Behandlung in der Schweiz nicht verfügbar ist.`,
              },
            ],
          },
          {
            title: "Streitigkeiten mit Ihrer Krankenkasse",
            contents: [
              {
                text: `Im Falle eines Konflikts mit Ihrer Krankenkasse können Sie sich an die Ombudsstelle Krankenversicherung wenden (Webseite verfügbar auf Deutsch, Französisch und Italienisch). Sie versucht, eine Einigung zwischen Ihnen und Ihrer Krankenkasse zu erreichen. Der Dienst ist kostenlos, unparteiisch und unabhängig. Bitte beachten Sie, dass Sie die Ombudsstelle nicht kontaktieren können, wenn ein Anwalt oder eine Sozialstelle Ihre Interessen vertritt oder wenn Sie eine Rechtsschutzversicherung haben.`,
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
    categoryId: CategoryId.make(11),
    title: "Krankenversicherung///Abschluss, Wechsel und Kündigung der Krankenversicherung",
    description:
      "Sie können Ihre Krankenkasse Ende jedes Jahres wechseln. Senden Sie die Kündigung Ihrer aktuellen Krankenversicherung bis spätestens Ende November. Neugeborene sollten bald nach der Geburt angemeldet werden.",
    contents: [
      {
        infos: [
          {
            title: "Wer braucht eine Krankenversicherung?",
            contents: [
              {
                text: `Wenn Sie in der Schweiz leben, müssen Sie bei einer Schweizer Krankenkasse versichert sein.`,
              },
              {
                subtitle: "Krankenversicherung für Babys, Zuzug aus dem Ausland",
                text: `Wenn Sie gerade in die Schweiz gezogen sind, haben Sie drei Monate Zeit, eine Krankenversicherung abzuschließen. Die gleiche Frist gilt für Neugeborene. Sie oder Ihr Baby sind während dieser drei Monate bereits versichert.`,
              },
              {
                subtitle: "Wer braucht keine Krankenversicherung?",
                text: `Ausländische Rentner, Studenten und Diplomaten müssen nicht unbedingt eine Krankenversicherung abschließen. Die zuständige Stelle in Ihrem Kanton oder Ihrer Gemeinde genehmigt etwaige Ausnahmen.`,
              },
              {
                subtitle: "Grenzgänger und Krankenversicherung",
                text: `Als Grenzgänger haben Sie die Wahl, eine Krankenversicherung in der Schweiz, wo Sie arbeiten, oder im Ausland, wo Sie wohnen, abzuschließen.

Wenn Sie keine Schweizer Krankenversicherung abschließen möchten, müssen Sie innerhalb von drei Monaten nach Arbeitsbeginn eine Befreiung bei der zuständigen kantonalen Behörde beantragen.`,
              },
            ],
          },
          {
            title: "Wechsel der Krankenkasse",
            contents: [
              {
                subtitle: "Freie Wahl der Krankenkasse",
                text: `Die Liste der zugelassenen Krankenkassen umfasst alle Versicherer. Sie können jede Krankenkasse wählen, die in der Region Ihres Wohnorts tätig ist. Melden Sie sich einfach an, da sie verpflichtet sind, jedem die Grundversicherung anzubieten.

Es ist auch gut zu wissen, dass ein Kind eine andere Krankenkasse als die Eltern haben kann.`,
              },
              {
                subtitle: "Kündigung der Krankenversicherung zum Jahresende",
                text: `Sie können Ihre Krankenkasse in der Regel zum Jahresende wechseln. Dazu müssen Sie Ihre Grundversicherung schriftlich kündigen. Ihr Schreiben muss bis spätestens 30. November bei Ihrer aktuellen Krankenkasse eingehen.

Ihre aktuelle Krankenkasse informiert Sie bis Ende Oktober über Ihre Prämie für das nächste Jahr. Dies geschieht rechtzeitig, damit Sie kündigen können, wenn Sie mit der Prämie nicht einverstanden sind. Dieser Prämienrechner (Webseite verfügbar auf Deutsch, Französisch und Italienisch) kann nützlich sein, wenn Sie die Angebote verschiedener Krankenkassen vergleichen möchten.

Wenn Sie eine Franchise von CHF 300 im «Standard»-Versicherungsmodell haben, können Sie Ihre Grundversicherung auch zum Ende Juni kündigen. Es gilt eine Kündigungsfrist von drei Monaten.`,
                links: [
                  {
                    text: "Prämienrechner",
                    url: "https://www.priminfo.admin.ch/de/praemienrechner",
                  },
                ],
              },
              {
                subtitle: "Wechsel des Versicherungsmodells",
                text: `Sie können Ihr Versicherungsmodell ebenfalls zum Jahresende wechseln. Dazu muss Ihr Schreiben bis Ende November bei Ihrer Krankenkasse eingehen. Neben dem Standardmodell könnten folgende Versicherungsmodelle mit niedrigeren Prämien für Sie interessant sein (Webseite verfügbar auf Deutsch, Französisch und Italienisch):

- Hausarztmodell: Sie müssen (fast) immer zuerst Ihren Hausarzt aufsuchen. Dieser überweist Sie bei Bedarf an einen Spezialisten.
- HMO-Modell: Sie müssen (fast) immer zuerst einen Arzt in Ihrer gewählten Gruppenpraxis (Health Maintenance Organisation) aufsuchen. Dieser überweist Sie bei Bedarf an einen Spezialisten.
- Telmed: Vor (fast) jedem Arztbesuch müssen Sie eine bestimmte Nummer für eine erste medizinische Beratung per Telefon anrufen.`,
                links: [
                  {
                    text: "Versicherungsmodelle",
                    url: "https://www.priminfo.admin.ch/de/sparen/grundversicherung",
                  },
                ],
              },
            ],
          },
          {
            title: "Zusatzversicherung",
            contents: [
              {
                subtitle: "Krankenkassen müssen Sie nicht akzeptieren",
                text: `In der Regel müssen Sie einen Gesundheitsfragebogen ausfüllen, bevor eine Krankenkasse Ihnen eine Zusatzversicherung genehmigt. Ihre Antworten bestimmen die Bedingungen der Annahme. Die Krankenkasse kann Ihren Antrag auf eine Zusatzversicherung auch vollständig ablehnen.

Füllen Sie den Fragebogen wahrheitsgemäß aus. Wenn Sie falsche Angaben machen, kann Ihre Krankenkasse später die Zahlung Ihrer Rechnung verweigern oder Sie vollständig von der Deckung ausschließen.`,
              },
              {
                subtitle: "Am besten vor der Geburt anmelden",
                text: `Wenn Sie eine Zusatzversicherung für Ihr neugeborenes Baby abschließen möchten, ist der beste Zeitpunkt, es vor der Geburt anzumelden. Die meisten Krankenkassen akzeptieren das ungeborene Kind ohne Bedingungen oder Gesundheitsfragebogen.

Eltern versichern ihre Kinder oft für Zahnbehandlungen (Kieferorthopädie). Dies ist ebenfalls frühzeitig abzuschließen. Ab einem bestimmten Alter verlangen die Versicherer eine Untersuchung, bevor sie das Kind akzeptieren.`,
              },
              {
                subtitle: "In der Regel ein Paket",
                text: `Zusatzversicherungen werden oft nur als Paket angeboten. Prüfen Sie, dass Sie nicht dieselben Leistungen doppelt versichern, insbesondere bei Reiseversicherungen. In vielen Fällen sind Sie bereits versichert – zum Beispiel über Ihre Kreditkarte oder ein Produkt mit integriertem Reiseschutz.`,
              },
              {
                subtitle: "Kündigung kann knifflig sein",
                text: `Wollen Sie Ihre Zusatzversicherung wirklich nicht mehr? Überlegen Sie genau, bevor Sie kündigen. Nach der Kündigung muss die Krankenkasse Sie nicht wieder aufnehmen. Informieren Sie sich auch über die geltenden Kündigungsfristen. Die benötigten Informationen finden Sie in Ihrem Versicherungsvertrag oder fragen Sie einfach Ihre Krankenkasse.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Medikamente und Betäubungsmittel
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(11),
    title: "Medikamente und Betäubungsmittel///Cannabis",
    description:
      "Cannabis ist in der Schweiz ein verbotenes Betäubungsmittel. Cannabisprodukte sind nur erlaubt, wenn sie weniger als ein Prozent des Wirkstoffs THC enthalten. Dennoch müssen einige Regeln beachtet werden.",
    contents: [
      {
        infos: [
          {
            title: "Wann ist Cannabis ein illegales Betäubungsmittel?",
            contents: [
              {
                text: `Cannabis wird oft illegal als Marihuana/Weed (getrocknete Cannabispflanzen) oder Haschisch (Cannabisharz) gehandelt. Diese verbotenen Substanzen enthalten Tetrahydrocannabinol (THC).

THC hat eine berauschende Wirkung und kann gesundheitsschädlich sein.

Der entscheidende Faktor für die Einstufung als verbotenes Betäubungsmittel ist der THC-Gehalt eines Cannabisprodukts. Wenn der THC-Gehalt ein Prozent übersteigt, ist das Produkt verboten.

Wenn Sie beim Konsum von Cannabis erwischt werden, kann Ihnen eine Ordnungsbusse von 100 Franken auferlegt werden.`,
              },
              {
                subtitle: "Was wird toleriert?",
                text: `Wenn Sie mit einer geringen Menge Cannabis (nicht mehr als 10 Gramm) für den Eigenkonsum erwischt werden, wird keine Busse verhängt. Wenn Sie zudem bis zu 10 Gramm an einen Erwachsenen weitergeben (ohne zu verkaufen), z.B. beim Teilen von Joints, wird ebenfalls keine Busse verhängt.`,
              },
            ],
          },
          {
            title: "Wann dürfen Sie Cannabis verwenden?",
            contents: [
              {
                text: `Cannabisprodukte sind erlaubt, wenn sie weniger als ein Prozent THC enthalten. Beispiele sind Hanfblüten, Duftöle, Salben und Tropfen, die eingenommen werden.

Sie dürfen auch privat Hanf anbauen, vorausgesetzt, der THC-Gehalt der Cannabissorte liegt unter einem Prozent.

Zusätzlich können Cannabisnutzer im Rahmen wissenschaftlicher Pilotversuche unter strengen Bedingungen legal Cannabisprodukte erhalten.`,
              },
              {
                subtitle: "Regeln für THC-armes Cannabis und CBD",
                text: `Auch bei THC-armen Cannabisprodukten müssen insbesondere Lieferanten eine Reihe von Vorschriften einhalten. Die Regeln gelten auch für den nicht berauschenden Wirkstoff Cannabidiol (CBD). Der Bund hat ein Merkblatt zu Produkten mit CBD erstellt, das sich vor allem an Lieferanten richtet.`,
              },
              {
                subtitle: "Probleme mit legalem Cannabis",
                text: `Auch legales Cannabis mit einem Gesamt-THC-Gehalt von weniger als einem Prozent kann rechtliche Probleme verursachen.

- Im Ausland: In einigen anderen Ländern, einschließlich Nachbarländern der Schweiz, gelten strengere Gesetze und niedrigere maximale THC-Grenzwerte. Das bedeutet, dass Cannabisprodukte, die in der Schweiz legal sind, im Ausland verboten sein können. Erkundigen Sie sich direkt bei den Behörden der betroffenen Länder, wenn Sie Cannabis oder verwandte Produkte ins Ausland mitnehmen möchten.

- Beim Fahren: Sie dürfen nicht fahren, wenn Sie THC in Ihrem Blut haben. Auch der Konsum von legalem Cannabis kann zu einem messbaren THC-Gehalt im Blut führen. Sie sollten daher nach dem Konsum von Cannabis oder verwandten Produkten nicht fahren.`,
              },
            ],
          },
          {
            title: "Sind cannabisbasierte Medikamente erlaubt?",
            contents: [
              {
                text: `Cannabisbasierte Medikamente („medizinisches Cannabis“) sind erlaubt, sofern sie von einem Arzt verschrieben werden. Sie können medizinisches Cannabis verschrieben bekommen, wenn Sie unter starken chronischen Schmerzen oder Muskelkrämpfen leiden. In der Regel müssen Sie medizinisches Cannabis jedoch selbst bezahlen. Die obligatorische Krankenversicherung übernimmt die Kosten nur in Ausnahmefällen.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Schutz vor Zecken
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(11),
    title: "Schutz vor Zecken",
    description:
      "Zecken sind in der Schweiz weit verbreitet. Zeckenstiche können gefährlich sein und Borreliose oder Meningitis verursachen. Schützen Sie sich, Ihre Kinder und Haustiere, wenn Sie sich im Freien aufhalten.",
    contents: [
      {
        infos: [
          {
            title: "Zecken in der Schweiz: Wo sind sie? Zu welcher Jahreszeit muss man auf sie achten?",
            contents: [
              {
                text: `Mit Ausnahme der Kantone Genf und Tessin gilt die gesamte Schweiz als Risikogebiet. Die Karte des Bundesamts für Gesundheit (BAG) zeigt detailliert, wo Zecken vorkommen.

Sie leben in Wäldern des Mittellands im Unterholz, an Waldrändern, auf Lichtungen und auch in der Nähe von Flüssen und in Parks in der Nähe von Wäldern bis zu einer Höhe von etwa 1.500 Metern über Meer.

Zecken werden aktiv, sobald es draußen warm und feucht wird, daher ist es besonders wichtig, sich von März bis November im Freien zu schützen.`,
              },
            ],
          },
          {
            title: "Zeckenstiche: Wie können Sie sich schützen?",
            contents: [
              {
                text: `Beachten Sie Folgendes, wenn Sie sich in einem Risikogebiet aufhalten:

- Tragen Sie Kleidung, die den gesamten Körper bedeckt.
- Zecken leben am Boden, daher sind Kinder aufgrund ihrer Größe anfälliger und sollten etwas tragen, das den Kopf bedeckt.
- Verwenden Sie ein Anti-Zecken-Spray auf Schuhen und Körperteilen, die mit Gras und Büschen in Kontakt kommen.
- Schützen Sie Ihren Hund oder Ihre Katze mit einem Anti-Zecken-Produkt. Bleiben Sie auf breiten Wegen und vermeiden Sie den Kontakt mit Gras und Büschen.
- Überprüfen Sie regelmäßig Ihre Kleidung und unbedeckte Körperstellen; helle Kleidung erleichtert das Auffinden von Zecken.
- Überprüfen Sie zu Hause Körper und Kleidung auf Zecken. Überprüfen Sie besonders sorgfältig die Köpfe von Kindern und auch Haustiere. Zecken können überall am Körper Blut saugen: Sie bevorzugen warme, feuchte und dünne Hautstellen wie Kniekehlen, Leistengegend, Innenseiten der Oberschenkel, Gesäß, Nacken und Achseln. Bei Kindern sitzen Zecken manchmal sogar am Haaransatz.

Bitte beachten Sie: Wenn Sie in einem Risikogebiet leben, kann eine Impfung gegen Meningitis (FSME) sinnvoll sein. Besprechen Sie dies mit Ihrem Arzt oder Apotheker.`,
              },
            ],
          },
          {
            title: "Was tun, wenn Sie von einer Zecke gestochen wurden?",
            contents: [
              {
                text: `Zeckenstiche bleiben oft unbemerkt, da die Zecken beim Stechen ein Betäubungsmittel abgeben. Aus diesem Grund schmerzt oder juckt die Stichstelle selten, was der Zecke freien Raum zum Blutsaugen gibt. Zecken fallen von der Stichstelle von selbst ab, sobald sie genug Blut gesaugt haben. Zeckenstiche sind nicht immer erkennbar und hinterlassen oft nur einen kleinen dunklen Punkt.`,
              },
              {
                subtitle: "Zecken schnell und richtig entfernen",
                text: `Entfernen Sie Zecken so schnell wie möglich mit einer feinen Pinzette oder einer Zeckenpinzette (erhältlich in Apotheken). Fassen Sie die Zecke so nah wie möglich an der Haut, um ein Quetschen der Zecke zu vermeiden, und drehen Sie die Pinzette langsam, während Sie ziehen, um die Zecke zu entfernen. Desinfizieren Sie die Stichstelle und notieren Sie das Datum.

Detaillierte Anweisungen mit Fotos und Videos finden Sie in der Zecken-App.`,
                links: [
                  {
                    text: "Zecken-App",
                    url: "https://www.zhaw.ch/de/lsfm/ueber-uns/aktuell-medien/medienmitteilungen/detailansicht/event-news/neue-praeventions-app-schuetzt-vor-zecken",
                  },
                ],
              },
              {
                subtitle: "Wann müssen Sie einen Arzt aufsuchen?",
                text: `Nicht jeder Zeckenstich ist gefährlich. Das erste Anzeichen einer Infektion kann eine Verfärbung der betroffenen Hautstelle sein. Eine Rötung der Haut bedeutet jedoch nicht unbedingt eine Infektion mit einem Krankheitserreger, und das Fehlen einer Rötung bedeutet nicht zwangsläufig, dass keine Infektion vorliegt.

Ein Arztbesuch zur Entfernung einer Zecke ist nicht erforderlich, und der Kopf der Zecke muss nicht unbedingt entfernt werden, außer um eine Infektion zu vermeiden. In folgenden Fällen wird jedoch ein Arztbesuch empfohlen:

- Der Kopf der Zecke steckt fest und die Stelle hat sich entzündet. Manchmal reißt der Kopf beim Entfernen ab. Dies ist normalerweise kein Problem; nur selten entwickelt sich eine Infektion.
- Die Stichstelle entzündet sich.
- Es tritt ein sich ausbreitender Ausschlag auf. Ein kreisförmiger Ausschlag erscheint einige Tage nach dem Zeckenstich und breitet sich weiter aus. Dies deutet auf Borreliose hin.
- Sie haben 5 bis 14 Tage nach dem Entfernen der Zecke Fieber, Kopfschmerzen oder Gliederschmerzen und fühlen sich erschöpft. Diese Symptome sind typisch für FSME und Borreliose.`,
              },
            ],
          },
          {
            title: "Krankheiten, die durch Zecken übertragen werden",
            contents: [
              {
                text: `In der Schweiz übertragen Zecken drei Hauptkrankheiten:

Borreliose wird durch Bakterien verursacht. Sie ist die häufigste durch Zecken übertragene Krankheit in der Schweiz. Ein häufiges Zeichen für Borreliose ist der sich ausbreitende Ausschlag, der 1 bis 30 Tage nach einem Zeckenstich auftreten kann. Ein häufiges Symptom der Borreliose ist „Erythema migrans“, eine Rötung der Haut, die zwischen 1 und 30 Tagen nach dem Stich und in der Nähe der Stichstelle auftreten kann. Borreliose kann mit Antibiotika behandelt werden, kann aber nicht durch Impfung verhindert werden.

Meningitis, auch bekannt unter der Abkürzung FSME, steht für Frühsommer-Meningoenzephalitis. FSME ist eine Entzündung des Gehirns und seiner Hüllen. Wenn eine Zecke das Virus überträgt, kann dies zu einer schweren Erkrankung führen. FSME kann nicht mit Antibiotika behandelt werden, aber durch Impfung verhindert werden.

Tularämie (Hasenpest) ist eine bakterielle Infektion. In der Schweiz werden etwa die Hälfte der Fälle durch Zeckenstiche verursacht. Obwohl noch relativ selten, hat die Anzahl der Tularämie-Fälle in den letzten Jahren zugenommen. Die Anzeichen und Symptome sind vielfältig und erinnern an Grippe oder Hautgeschwüre. Tularämie kann mit Antibiotika behandelt werden, kann aber nicht durch Impfung verhindert werden.`,
              },
            ],
          },
          {
            title: "Impfung gegen Meningitis (FSME)",
            contents: [
              {
                text: `Das Bundesamt für Gesundheit (BAG) empfiehlt die Impfung für alle Erwachsenen und Kinder (in der Regel über drei Jahre alt), die in Risikogebieten leben oder sich vorübergehend dort aufhalten. In der Schweiz gilt dies für alle Kantone außer dem Kanton Tessin.

Die Impfung kostet etwa CHF 120 und ist in Arztpraxen oder bestimmten Apotheken erhältlich.

Die Kosten der Impfung werden von der obligatorischen Krankenversicherung übernommen. Wenn Sie beruflich exponiert sind (Arbeit in Wäldern, am Waldrand usw.), übernimmt der Arbeitgeber die Kosten. Sie können auf der Website des Schweizer Apothekerverbands überprüfen, ob die Impfung in einer Apotheke in Ihrem Kanton verfügbar ist (Webseite verfügbar auf Deutsch, Französisch und Italienisch). Die Impfung in Apotheken wird nur erstattet, wenn sie von einem Arzt verschrieben wurde. Wenn Sie sich aus Vorsorge impfen lassen, tragen Sie die Kosten selbst.

Die ideale Zeit für die Impfung ist der Winter, aber sie kann das ganze Jahr über durchgeführt werden. Für den vollständigen Impfschutz sind drei Impfdosen erforderlich. Die ersten beiden Impfungen werden in der Regel im Abstand von einem Monat verabreicht. Die dritte Impfung, die einen Langzeitschutz von mindestens 10 Jahren gewährleistet, erfolgt nach 5 bis 12 Monaten, je nach Impfstoff. Das BAG empfiehlt alle 10 Jahre eine Auffrischung.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Impfungen
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(11),
    title: "Impfungen",
    description:
      "Durch Impfungen schützen Sie sich und andere. Viele Impfungen werden für (fast) alle empfohlen. Es kann auch sinnvoll sein, sich gegen Grippe und andere Krankheiten impfen zu lassen.",
    contents: [
      {
        infos: [
          {
            title: "Warum sich impfen lassen?",
            contents: [
              {
                text: `Wenn Sie sich gegen eine Krankheit impfen lassen, erkranken Sie in der Regel nicht mehr an dieser Krankheit. Zudem übertragen Sie den Erreger selten auf andere. Wenn genügend Menschen geimpft sind, wird eine Krankheit selten oder verschwindet sogar vollständig.

Bestimmte Impfungen schützen hauptsächlich vor schweren Komplikationen der Krankheit; die Krankheit kann dennoch übertragen werden, ist aber seltener.`,
              },
            ],
          },
          {
            title: "Wie funktionieren Impfstoffe?",
            contents: [
              {
                text: `Ein Impfstoff gelangt durch eine Injektion in den Blutkreislauf, als orale Impfung durch den Mund oder als Nasenspray in den Körper. Der Impfstoff ermöglicht es dem Körper, für den Ernstfall zu üben: Er simuliert eine Invasion schädlicher Bakterien oder Viren durch harmlose Erreger (oder Erregerbestandteile). Das Immunsystem wird dadurch aktiviert, trainiert und optimal darauf vorbereitet, diese Erreger abzuwehren. Wenn der Körper später tatsächlich mit gesundheitsgefährdenden Bakterien oder Viren in Kontakt kommt, kann er diese gezielt bekämpfen und schnell abwehren, bevor schwerwiegende Komplikationen auftreten.`,
              },
            ],
          },
          {
            title: "Sind Impfstoffe gefährlich?",
            contents: [
              {
                text: `Alle Impfstoffe werden gründlich getestet, bevor sie zugelassen werden. Das Gesundheitsrisiko durch Impfungen ist äußerst gering, und schwere Nebenwirkungen treten sehr selten auf. Das bedeutet, dass eine Impfung für Sie viel weniger gefährlich ist als die Erkrankung selbst.

Manche Menschen können aus gesundheitlichen Gründen nicht geimpft werden. Wenn Sie Bedenken haben, sollten Sie mit Ihrem Arzt darüber sprechen.`,
              },
            ],
          },
          {
            title: "Welche Impfungen werden empfohlen?",
            contents: [
              {
                text: `Der Bund empfiehlt eine Vielzahl von Impfungen.`,
              },
              {
                subtitle: "Welche Impfungen werden für Kinder empfohlen?",
                text: `Das Bundesamt für Gesundheit empfiehlt etwa ein Dutzend Impfungen für Säuglinge und Kinder. Je nach Sicherheitsbedarf und Status des Kindes sind weitere Impfungen ratsam. Weitere Details finden Sie auf der Seite Impfungen für Säuglinge und Kinder (nicht auf Englisch). Ihr Arzt kann Sie ebenfalls beraten.

Die Kosten der empfohlenen Impfungen und bestimmter anderer Impfungen werden von Ihrer Krankenversicherung übernommen, vorbehaltlich Ihrer Franchise und Selbstbeteiligung.`,
              },
              {
                subtitle: "Welche Impfungen werden für Jugendliche empfohlen?",
                text: `Kinder zwischen 11 und 15 Jahren sollten für bestimmte Krankheiten eine Wiederholungs- oder Auffrischimpfung erhalten. Bestimmte andere Impfungen sollten zum ersten Mal verabreicht werden. Der Grund dafür ist, dass Jugendliche eher bestimmte Krankheiten bekommen oder schwerere Formen einer Krankheit erleiden können, wenn sie infiziert werden. Der Schwerpunkt liegt auf der Impfung gegen humane Papillomaviren (HPV), die Gebärmutterhalskrebs und andere Krebsarten verursachen können. Die Impfung gegen Hepatitis B wird für alle Jugendlichen empfohlen, die diese Impfung als Säugling nicht erhalten haben. Jugendliche, die als Kind keine Windpocken hatten, sollten sich auch gegen diese Krankheit impfen lassen. Je nach Situation können weitere Impfungen nützlich sein. Weitere Details finden Sie auf der Seite Impfungen für Jugendliche (nicht auf Englisch).`,
              },
              {
                subtitle: "Welche Impfungen werden für Erwachsene empfohlen?",
                text: `Auch als Erwachsener sollten Sie Ihre Impfungen regelmäßig auffrischen. Insbesondere wird empfohlen, Auffrischimpfungen für Diphtherie, Keuchhusten und Tetanus zu erhalten. Sie können auch wichtige Impfungen nachholen, die Sie verpasst haben, insbesondere gegen Masern, Mumps und Röteln.

Wenn Sie einer Risikogruppe angehören, werden weitere Impfungen empfohlen. Weitere Details finden Sie auf der Seite Impfungen für Erwachsene (nicht auf Englisch).`,
              },
            ],
          },
          {
            title: "Coronavirus: Impfung",
            contents: [
              {
                text: `Die COVID-19-Impfung wird im Herbst/Winter für Personen mit besonders hohem Risiko empfohlen.

Die neuesten detaillierten Informationen finden Sie unter COVID-19: Impfung.`,
                links: [
                  {
                    text: "COVID-19: Impfung",
                    url: "https://www.bag.admin.ch/bag/en/home/krankheiten/krankheiten-im-ueberblick/coronavirus/covid-19.html#1916431492",
                  },
                ],
              },
            ],
          },
          {
            title: "Impfung gegen Grippe",
            contents: [
              {
                text: `Grippe kann für Säuglinge, ältere Menschen (65 Jahre und älter), schwangere Frauen und Menschen mit chronischen Erkrankungen schwerwiegend sein. Der beste Schutz ist die Grippeimpfung. Der Bund empfiehlt daher die Grippeimpfung für alle Personen in den genannten Risikogruppen (außer für Säuglinge bis sechs Monate) und für diejenigen, die in engem Kontakt mit ihnen stehen. Ob es für Sie sinnvoll ist, sich impfen zu lassen, können Sie unter Grippeimpfungs-Check herausfinden.

Da Grippeviren sich ständig verändern, sollten Sie sich jeden Herbst erneut impfen lassen. Idealerweise sollten Sie die Impfung zwischen Mitte Oktober und dem Beginn der Grippesaison, die normalerweise im Januar beginnt, erhalten. Jedes Jahr im November findet ein nationaler Grippeimpfungstag statt. Selbst wenn Sie sich im Dezember oder später impfen lassen, hat Ihr Immunsystem noch genügend Zeit, einen Schutz aufzubauen. In den letzten Jahrzehnten begann die saisonale Grippeepidemie in der Regel irgendwann zwischen Dezember und März.`,
              },
            ],
          },
          {
            title: "Zecken: FSME-Impfung",
            contents: [
              {
                text: `Sie können sich durch eine FSME-Impfung gegen Meningitis und Enzephalitis (auch bekannt als Frühsommer-Meningoenzephalitis, FSME) schützen. Diese Viruskrankheit wird durch den Stich einer infizierten Zecke übertragen.

Die Zeckenimpfung wird für alle Personen über drei Jahre empfohlen, die sich in Risikogebieten aufhalten. Kinder können ab einem Jahr geimpft werden, wenn sie regelmäßig dem Risiko von Stichen durch infizierte Zecken ausgesetzt sind. Die gesamte Schweiz gilt als Risikogebiet, außer dem Kanton Tessin. Der Impfstoff schützt nur die geimpfte Person, da FSME nicht von Mensch zu Mensch übertragen werden kann.

Bitte beachten Sie: Der Zeckenimpfstoff schützt NICHT vor Borreliose, die ebenfalls durch Zecken übertragen wird. Borreliose kann jedoch mit Antibiotika behandelt werden.`,
              },
            ],
          },
          {
            title: "Impfungen und Reisen, Schutz vor Malaria",
            contents: [
              {
                text: `Sie sollten spätestens vier Wochen vor einer Reise klären, was Sie benötigen. Welche Impfungen sind notwendig und sollten Sie sich vor Malaria schützen? Informationen finden Sie unter www.healthytravel.ch. Wenn Sie in ein Land oder eine Region mit erhöhtem Gesundheitsrisiko reisen, sollten Sie sich von einem Arzt über die erforderlichen Vorsichtsmaßnahmen und Medikamente beraten lassen.

Hinweis: In einigen Ländern sind bestimmte Impfungen obligatorisch.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
];

const infoForeignNationals: Information[] = [
  // Einreise und Aufenthalt in der Schweiz
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(10),
    title: "Einreise und Aufenthalt in der Schweiz///Asylantragstellung in der Schweiz",
    description: "Die Schweiz kann Personen, die verfolgt werden, Asyl gewähren. Hier finden Sie Informationen, wie Sie einen Antrag stellen können.",
    contents: [
      {
        infos: [
          {
            title: "Wer kann in der Schweiz Asyl beantragen?",
            contents: [
              {
                text: `Sie können in der Schweiz Asyl beantragen, wenn Sie in Ihrem Heimatland (oder im letzten Wohnsitzland) aufgrund Ihrer Rasse, Religion, Nationalität, politischen Überzeugungen oder Zugehörigkeit zu einer bestimmten sozialen Gruppe verfolgt werden oder wenn Sie um Ihre Freiheit fürchten.`,
              },
            ],
          },
          {
            title: "Wo kann ein Asylantrag gestellt werden?",
            contents: [
              {
                text: `Sie können einen Asylantrag mündlich oder schriftlich an einer offenen Grenzübergangsstelle, am Zollkontrollpunkt eines Schweizer Flughafens oder in einem der Bundesasylzentren des Staatssekretariats für Migration (SEM) stellen. Ein Asylantrag kann nicht aus dem Ausland gestellt werden. Sie können jedoch bei einer Schweizer Botschaft oder einem Konsulat ein humanitäres Visum beantragen, um in die Schweiz einzureisen. Dieses wird jedoch nur gewährt, wenn eine direkte, ernsthafte und konkrete Bedrohung für Ihr Leben oder Ihre körperliche Unversehrtheit besteht. Eine Krise oder ein Konflikt in Ihrem Land ist kein ausreichender Grund, und die Chancen, ein humanitäres Visum zu erhalten, sind gering.`,
                links: [
                  {
                    text: "Bundesasylzentren des Staatssekretariats für Migration (SEM)",
                    url: "https://www.sem.admin.ch/sem/en/home/asyl/adressen.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Was Sie beachten müssen",
            contents: [
              {
                text: `Es gibt keine formellen rechtlichen Voraussetzungen für einen Asylantrag. Um Asyl gewährt zu bekommen, müssen Sie die Gründe für Ihre Flucht erläutern und, wenn möglich, Beweise vorlegen.`,
              },
              {
                subtitle: "Mehrfache Anträge in verschiedenen Ländern",
                text: `Die Schweiz ist Unterzeichnerin des Dublin-Abkommens, das verhindern soll, dass eine Person in mehreren EU/EFTA-Staaten* Asyl beantragt. Nach diesem Abkommen ist nur ein Land für die Prüfung eines Asylantrags zuständig. Wenn Sie bereits in einem anderen Dublin-Land einen Asylantrag gestellt haben, werden Sie in dieses Land zurückgeschickt.

(*EFTA-Staaten: Island, Liechtenstein, Norwegen, Schweiz)`,
              },
              {
                subtitle: "Gefährdung der Sicherheit",
                text: `Asylsuchende, die Straftaten begehen oder die Sicherheit der Schweiz gefährden, erhalten kein Asyl. Sofern keine gegenteiligen Gründe vorliegen, wird ihr Antrag abgelehnt, und sie müssen das Land verlassen.`,
              },
              {
                subtitle: "Asylverfahren",
                text: `Das Staatssekretariat für Migration (SEM) beschreibt auf seiner Website das Asylverfahren im Detail sowie die Anforderungen, die Sie erfüllen müssen, um den Flüchtlingsstatus zu erhalten. Wenn Sie mit der Entscheidung des SEM nicht einverstanden sind, können Sie Beschwerde einlegen.

In der Regel findet das gesamte Asylverfahren in einem Bundesasylzentrum statt. Weitere Informationen zu den Zentren, in denen Asylsuchende auch untergebracht sind, finden Sie auf der SEM-Webseite mit FAQs zu den Bundesasylzentren (auf Französisch, Deutsch und Italienisch).`,
                links: [
                  {
                    text: "Asylverfahren",
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
    categoryId: CategoryId.make(10),
    title: "Einreise und Aufenthalt in der Schweiz///Leben in der Schweiz ohne Erwerbstätigkeit",
    description:
      "Ausländische Staatsangehörige wie Studierende, Rentner oder Personen mit privatem Vermögen können sich ohne Erwerbstätigkeit in der Schweiz niederlassen. Sie müssen jedoch je nach Nationalität bestimmte Kriterien erfüllen.",
    contents: [
      {
        infos: [
          {
            title: "Bürger von EU/EFTA-Ländern",
            contents: [
              {
                text: `Sie können sich ohne Erwerbstätigkeit in der Schweiz niederlassen, wenn:

- Sie über ausreichende finanzielle Mittel verfügen, um sich selbst zu unterhalten, und nicht auf Sozialhilfe angewiesen sind,
- Sie eine ausreichende Unfall- und Krankenversicherung haben,
- Sie studieren möchten und einen Nachweis über die Zulassung zu einer Bildungseinrichtung (Immatrikulationsbescheinigung) vorlegen können.
Sie dürfen sich bis zu 90 Tage innerhalb eines Zeitraums von sechs Monaten ohne Bewilligung in der Schweiz aufhalten. Für längere Aufenthalte müssen Sie sich bei den zuständigen kantonalen Migrations- und Arbeitsmarktbehörden als nicht erwerbstätige Person registrieren lassen.

Die EU/EFTA-Aufenthaltsbewilligung ist fünf Jahre lang gültig und wird automatisch verlängert, wenn Sie die Kriterien weiterhin erfüllen. Studierende erhalten entweder eine Aufenthaltsbewilligung für die Dauer ihres Studiums oder eine einjährige Bewilligung mit jährlicher Verlängerung bis zum Abschluss ihres Studiums.`,
              },
            ],
          },
          {
            title: "Britische Staatsangehörige",
            contents: [
              {
                text: `Seit dem 1. Januar 2021 gelten britische Staatsangehörige nicht mehr als EU-Bürger und unterliegen den folgenden Regelungen.

Wenn Sie vor 2021 bereits Aufenthaltsrechte in der Schweiz hatten, profitieren Sie möglicherweise von Sonderregelungen im Rahmen des Abkommens zwischen der Schweiz und dem Vereinigten Königreich über erworbene Rechte.

Weitere Informationen zu den Bedingungen für britische Staatsangehörige finden Sie auf der SEM-Webseite über das Vereinigte Königreich und im folgenden Abschnitt (Bürger von Nicht-EU/EFTA-Ländern).`,
              },
            ],
          },
          {
            title: "Bürger von Nicht-EU/EFTA-Ländern",
            contents: [
              {
                text: `Wenn Sie sich ohne Erwerbstätigkeit in der Schweiz niederlassen möchten, müssen Sie vor Ihrer Ankunft in der Schweiz eine Aufenthaltsbewilligung bei den kantonalen Migrations- und Arbeitsmarktbehörden beantragen. Je nach Ihrer Nationalität müssen Sie auch ein Visum bei der zuständigen Schweizer Vertretung im Ausland beantragen.

Wenn Sie kein Visum benötigen und nicht in der Schweiz arbeiten, können Sie bis zu drei Monate ohne Bewilligung bleiben. Mit diesem Rechner können Sie prüfen, ob Ihr Aufenthalt die Kurzzeitgrenze überschreitet.

Wie Bürger von EU/EFTA-Ländern müssen Sie:

- über ausreichende finanzielle Mittel verfügen, um sich selbst zu unterhalten, und nicht auf Sozialhilfe angewiesen sein,
- eine ausreichende Unfall- und Krankenversicherung haben.

Studierende müssen zusätzlich die folgenden Dokumente mit ihrem Antrag auf eine Aufenthaltsbewilligung einreichen:

- einen persönlichen Studienplan, der das Ziel des Studiums angibt,
- einen Nachweis über die Zulassung zu einer anerkannten Bildungseinrichtung (Immatrikulationsbescheinigung),
- einen Lebenslauf,
- eine Bestätigung, dass Sie die Schweiz nach Abschluss des Studiums verlassen werden.`,
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
    categoryId: CategoryId.make(10),
    title: "Einreise und Aufenthalt in der Schweiz///Visa für ausländische Staatsangehörige",
    description:
      "Einige ausländische Staatsangehörige dürfen ohne Visum nicht in die Schweiz einreisen. Einige Bürger von Nicht-EU-Ländern, die in der Schweiz leben, benötigen ein Visum, um ins Ausland zu reisen. Hier erfahren Sie, ob dies auf Sie zutrifft und wie Sie ein Visum erhalten können.",
    contents: [
      {
        infos: [
          {
            title: "Wer benötigt ein Visum?",
            contents: [
              {
                text: `Bürger von EU- und EFTA-Mitgliedstaaten (Island, Liechtenstein, Norwegen, Schweiz) benötigen kein Visum, um in die Schweiz einzureisen.

Wenn Sie aus einem anderen Land kommen, hängt es von Ihrer Nationalität ab, ob Sie ein Visum benötigen. Die Webseite des Staatssekretariats für Migration bietet Ihnen eine Übersicht über die Ausweis- und Visabestimmungen nach Nationalität.

Die Schweiz gehört zum Schengen-Raum*. Wenn Sie ein Visum besitzen, das von einem Schengen-Mitgliedstaat ausgestellt wurde, benötigen Sie in der Regel kein zusätzliches Touristenvisum, um in die Schweiz oder einen anderen Schengen-Staat einzureisen. Ihr Aufenthalt darf 90 Tage innerhalb eines Zeitraums von 180 Tagen nicht überschreiten. Mit diesem Rechner können Sie prüfen, ob Ihr Aufenthalt die Kurzzeitgrenze überschreitet.

Wenn Sie eine der folgenden Schweizer Aufenthaltsbewilligungen besitzen, benötigen Sie kein Visum, um für maximal 90 Tage innerhalb eines 180-Tage-Zeitraums in die Schweiz oder einen anderen Schengen-Staat einzureisen, unabhängig von Ihrer Nationalität:

- Bewilligung B (Aufenthaltsbewilligung)
- Bewilligung C (Niederlassungsbewilligung)
- Bewilligung L (Kurzzeitaufenthaltsbewilligung)
- Bewilligung Ci (Aufenthaltsbewilligung mit Erwerbstätigkeit)
- Bewilligung G (Grenzgängerbewilligung)
- Bewilligung S (für schutzbedürftige Personen)
- Legitimationskarte, ausgestellt vom Eidgenössischen Departement für auswärtige Angelegenheiten

*Die 29 Schengen-Mitgliedstaaten sind:
Österreich, Belgien, Bulgarien, Kroatien, Tschechische Republik, Dänemark, Estland, Finnland, Frankreich, Griechenland, Deutschland, Ungarn, Island, Italien, Lettland, Liechtenstein, Litauen, Luxemburg, Malta, Niederlande, Norwegen, Polen, Portugal, Rumänien, Slowakei, Slowenien, Spanien, Schweden, Schweiz.`,
              },
            ],
          },
          {
            title: "Wie kann ich ein Visum erhalten?",
            contents: [
              {
                subtitle: "Formular ausfüllen",
                text: `Es gibt zwei Arten von Visumantragsformularen:

Schengen-Visum für bis zu 90 Tage (Typ C): Dieses Visum gilt für Aufenthalte von bis zu 90 Tagen, beispielsweise für touristische Zwecke, zum Studium oder zur Teilnahme an kulturellen oder sportlichen Veranstaltungen. Es ist für Reisen im gesamten Schengen-Raum gültig.

Wenn Sie in der Schweiz arbeiten möchten, müssen Sie zusätzlich eine Arbeitserlaubnis beantragen.

Langzeitvisum für mehr als 90 Tage (Typ D): Wenn Sie länger als 90 Tage bleiben möchten, müssen Sie ein Visum vom Typ D beantragen.`,
              },
              {
                subtitle: "Einreichen eines Visumantrags",
                text: `Sie müssen Ihren Visumantrag bei einem Schweizer Konsulat oder einer Botschaft einreichen, idealerweise mindestens zwei Monate, jedoch nicht länger als sechs Monate vor Ihrer Reise.

In bestimmten Fällen können Sie Ihren Antrag über das Online-Visasystem einreichen.

Um von der Schweiz aus ins Ausland zu reisen, müssen Sie Ihren Visumantrag bei dem Konsulat oder der Botschaft des entsprechenden Landes in der Schweiz einreichen.`,
              },
              {
                subtitle: "Zusätzliche Dokumente",
                text: `Je nach Herkunftsland kann das Schweizer Konsulat oder die Botschaft, bei der Sie Ihren Visumantrag einreichen, zusätzliche Dokumente verlangen, auch wenn Sie nur ein Touristenvisum beantragen. Zu den Dokumenten können gehören:

1. Einladungsschreiben:
Das Schreiben muss auf Deutsch, Französisch oder Italienisch verfasst sein und bestätigen, dass Ihr Schweizer Gastgeber (Privatperson oder Unternehmen) Sie erwartet. Es muss Angaben zur Dauer und zum Grund Ihres Aufenthalts, Ihre persönlichen Daten (Vorname(n), Nachname, Geburtsdatum, Nationalität) sowie die persönlichen Daten Ihres Gastgebers enthalten. Das Schreiben muss datiert und von Ihrem Gastgeber unterschrieben sein. Weitere Informationen zum Einladungsschreiben finden Sie im SEM-Merkblatt.

2. Garantieerklärung:
Wenn das Schweizer Konsulat oder die Botschaft Zweifel an Ihren ausreichenden finanziellen Mitteln für Ihren Aufenthalt in der Schweiz hat, müssen Sie möglicherweise eine Garantieerklärung einreichen, bevor Ihnen ein Visum erteilt wird. In dieser Erklärung muss Ihr Gastgeber bestätigen, dass er für nicht gedeckte Kosten bis zu einem Höchstbetrag von CHF 30.000 aufkommt. Ihr Gastgeber muss die Erklärung unterzeichnen und sie bei der Gemeindebehörde seines Wohnsitzes oder bei der kantonalen Migrationsbehörde hinterlegen. Weitere Informationen zur Garantieerklärung finden Sie auf der SEM-Webseite.

3. Reisekrankenversicherung:
Für ein Kurzzeitvisum (maximal 90 Tage) müssen Sie nachweisen, dass Sie eine Reisekrankenversicherung haben, die Kosten bis zu EUR 30.000 abdeckt. Die Versicherungspolice muss bei einer Versicherungsgesellschaft abgeschlossen sein, die von dem Konsulat oder der Botschaft anerkannt wird, das Ihren Visumantrag bearbeitet.`,
              },
            ],
          },
          {
            title: "Wie viel kostet ein Visum?",
            contents: [
              {
                text: `Ein Visum für Erwachsene kostet EUR 90.
- Ein Visum für ein Kind (6 bis 12 Jahre) kostet EUR 45.
- Visa für Kinder unter 6 Jahren sind kostenfrei.
- In bestimmten Fällen können die Kosten für ein Visum reduziert oder ganz aufgehoben werden.`,
              },
            ],
          },
          {
            title: "Was tun, wenn Sie Ihr Reisedokument verlieren?",
            contents: [
              {
                text: `Wenn Sie Ihr Reisedokument verlieren, müssen Sie den Verlust unverzüglich der nächstgelegenen Polizeistelle (Webseite auf Deutsch, Französisch und Italienisch) an Ihrem Aufenthaltsort melden. Sie können das Verfahren beschleunigen, indem Sie eine Kopie Ihres Reisedokuments vorlegen.

Ein Merkblatt beschreibt, was zu tun ist, wenn Sie Ihr Reisedokument in der Schweiz verlieren und wie Sie Ihr Visum ersetzen können.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  // Leben in der Schweiz
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(10),
    title: "Leben in der Schweiz///Immobilienerwerb",
    description: "Nicht alle ausländischen Staatsangehörigen können in der Schweiz frei Immobilien erwerben. Einige benötigen eine Bewilligung, um Eigentümer eines Hauses oder Grundstücks zu werden.",
    contents: [
      {
        infos: [
          {
            title: "Wer benötigt eine Bewilligung?",
            contents: [
              {
                subtitle: "Warum ist eine Bewilligung erforderlich?",
                text: `Die Bewilligungspflicht für den Immobilienerwerb soll verhindern, dass Schweizer Boden in ausländische Hände fällt. Nicht alle ausländischen Staatsangehörigen benötigen eine Bewilligung. Dies hängt von ihrer Nationalität und/oder ihrem Aufenthaltsstatus in der Schweiz ab.`,
              },
            ],
          },
          {
            title: "Benötigen Sie eine Bewilligung?",
            contents: [
              {
                subtitle: "Staatsangehörige von EU/EFTA-Staaten, die in der Schweiz leben",
                text: `Sie haben die gleichen Rechte wie Schweizer Bürger, Immobilien zu erwerben; Sie benötigen keine Bewilligung, um ein Haus oder Grundstück zu kaufen.`,
              },
              {
                subtitle: "Britische Staatsangehörige mit Wohnsitz in der Schweiz",
                text: `Wenn Sie unter das Abkommen über erworbene Bürgerrechte fallen, benötigen Sie keine Bewilligung, um ein Haus oder Grundstück zu kaufen. Wenn Sie sich über Ihren Status nicht sicher sind, wenden Sie sich an die zuständige Behörde im Kanton, in dem sich die Immobilie befindet.

Falls Sie nicht unter das Abkommen über erworbene Bürgerrechte fallen, unterliegen Sie den Bedingungen, die für Nicht-EU/EFTA-Bürger mit Wohnsitz in der Schweiz gelten.`,
                links: [
                  {
                    text: "Abkommen über erworbene Bürgerrechte",
                    url: "https://www.fedlex.admin.ch/eli/cc/2020/1059/fr",
                  },
                ],
              },
              {
                subtitle: "Nicht-EU/EFTA-Staatsangehörige mit Wohnsitz in der Schweiz",
                text: `Sie benötigen eine Bewilligung, um folgende Arten von Immobilien zu erwerben:

- ein Ferienhaus (das zeitweise vermietet werden darf),
- Wohneinheiten in einem Aparthotel,
- ein Zweitwohnsitz (der nicht vermietet werden darf).

Sie benötigen keine Bewilligung, um Ihre Hauptwohnung und Bauland zu kaufen, wenn Sie die folgenden Bedingungen erfüllen:

- Sie haben eine gültige Aufenthaltsbewilligung (in der Regel eine B-Bewilligung; für C-Bewilligungsinhaber gelten andere Regeln, siehe unten),
- Sie wohnen selbst in der Wohnung und vermieten sie nicht,
- Sie planen, Ihr Haus zu bauen, und können innerhalb eines Jahres nach Erwerb des Grundstücks mit dem Bau beginnen.`,
              },
              {
                subtitle: "Inhaber einer C-Bewilligung",
                text: `Wenn Sie eine Niederlassungsbewilligung (C-Bewilligung) haben, haben Sie die gleichen Rechte wie Schweizer Bürger, Immobilien zu erwerben. Sie benötigen keine Bewilligung, um ein Haus oder Grundstück zu kaufen.`,
              },
              {
                subtitle: "Grenzgänger",
                text: `Wenn Sie ein ausländischer Staatsangehöriger eines EU/EFTA-Landes sind und als Grenzgänger in der Schweiz arbeiten (G-Bewilligung), können Sie ohne Bewilligung einen Zweitwohnsitz in der Region kaufen, in der Sie arbeiten. Sie dürfen diese Immobilie jedoch nicht vermieten, solange Sie als Grenzgänger in der Region arbeiten.`,
              },
              {
                subtitle: "Andere ausländische Staatsangehörige, die im Ausland leben",
                text: `Abgesehen von Grenzgängern benötigen ausländische Staatsangehörige, die außerhalb der Schweiz leben, eine Bewilligung, um Immobilien zu kaufen.

Diese Regel gilt auch für britische Staatsangehörige, die unter das Abkommen über erworbene Bürgerrechte fallen.`,
                links: [
                  {
                    text: "Abkommen über erworbene Bürgerrechte",
                    url: "https://www.fedlex.admin.ch/eli/cc/2020/1059/fr",
                  },
                ],
              },
            ],
          },
          {
            title: "Was müssen Sie tun?",
            contents: [
              {
                text: `Wenn Sie eine Bewilligung benötigen oder glauben, dass Sie eine benötigen, um eine Immobilie zu kaufen, müssen Sie die zuständige Behörde im Kanton kontaktieren, in dem sich die Immobilie befindet.

Eine Liste dieser Behörden finden Sie am Ende der Richtlinien, die Sie auf der Webseite des Bundesamts für Justiz zum Thema Immobilienerwerb durch Personen im Ausland herunterladen können. Wenn Sie mit der Entscheidung der kantonalen Behörde nicht zufrieden sind, haben Sie ein Beschwerderecht.

Die Bedingungen für die Erteilung einer Bewilligung zum Immobilienerwerb variieren je nach Kanton und Art der Immobilie. Die Bewilligung wird für eine bestimmte Nutzung erteilt, und die Immobilie darf nicht für einen anderen Zweck genutzt werden.
Sofern keine Ausnahme gewährt wird, ist die Bewilligung drei Jahre lang gültig.`,
                links: [
                  {
                    text: "Immobilienerwerb durch Personen im Ausland",
                    url: "https://www.bj.admin.ch/bj/en/home/wirtschaft/grundstueckerwerb.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Einschränkungen für Ferienwohnungen",
            contents: [
              {
                text: `In der Schweiz ist die Anzahl der Ferienwohnungen oder Einheiten in Aparthotels, die an ausländische Staatsangehörige verkauft werden dürfen, durch eine nationale Quote (derzeit 1.500 pro Jahr) begrenzt, die zwischen den Kantonen aufgeteilt wird.

In einigen Kantonen, wie Genf und Zürich, ist der Verkauf dieser Art von Immobilien an ausländische Staatsangehörige überhaupt nicht möglich. Eine Liste der Quoten pro Kanton finden Sie im Anhang der Verordnung über den Erwerb von Grundstücken durch Personen im Ausland (Webseite auf Deutsch, Französisch und Italienisch).

Wenn Sie im Ausland leben, dürfen Sie nur einen Zweitwohnsitz in einem Ort kaufen, mit dem Sie außergewöhnlich enge, schutzwürdige Bindungen haben. Die Kantone interpretieren diese gesetzliche Anforderung nicht immer einheitlich.

In jedem Fall müssen Sie eine Reihe von Bedingungen erfüllen:

- Die Immobilie muss sich in einem touristischen Gebiet befinden.
- Die Wohnfläche darf 200 m² nicht überschreiten, und die Grundstücksfläche ist auf 1.000 m² begrenzt.
- Sie dürfen die Immobilie nicht ganzjährig vermieten; nur zeitweise, wenn es sich um ein Ferienhaus handelt, und gar nicht, wenn es sich um einen Zweitwohnsitz handelt.
- Sie dürfen in der Schweiz nicht mehr als ein Ferienhaus oder einen Zweitwohnsitz besitzen.

Wie Schweizer Bürger dürfen auch ausländische Staatsangehörige keinen Zweitwohnsitz in einer Gemeinde bauen, in der bereits mehr als 20 % der Immobilien Zweitwohnsitze sind.`,
              },
            ],
          },
          {
            title: "Immobilien für berufliche Nutzung",
            contents: [
              {
                text: `Keine Kategorie von ausländischen Staatsangehörigen benötigt eine Bewilligung, um Immobilien für berufliche, gewerbliche oder industrielle Zwecke zu erwerben (mit Ausnahme von Immobilien, die für Bau, Handel oder Vermietung vorgesehen sind).`,
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
    categoryId: CategoryId.make(10),
    title: "Leben in der Schweiz///Krankenversicherung abschließen",
    description:
      "Sie können Ihre Krankenkasse Ende jedes Jahres wechseln. Senden Sie die Kündigung Ihrer aktuellen Krankenversicherung bis spätestens Ende November. Neugeborene sollten bald nach der Geburt angemeldet werden.",
    contents: [
      {
        infos: [
          {
            title: "Wer benötigt eine Krankenversicherung?",
            contents: [
              {
                text: `Wenn Sie in der Schweiz leben, müssen Sie bei einer Schweizer Krankenkasse versichert sein.`,
              },
              {
                subtitle: "Krankenversicherung für Babys, Zuzug aus dem Ausland",
                text: `Wenn Sie gerade in die Schweiz gezogen sind, haben Sie drei Monate Zeit, eine Krankenversicherung abzuschließen. Die gleiche Frist gilt für Neugeborene. Sie oder Ihr Baby sind während dieser drei Monate bereits versichert.`,
              },
              {
                subtitle: "Wer benötigt keine Krankenversicherung?",
                text: `Ausländische Rentner, Studierende und Diplomaten müssen nicht zwingend eine Krankenversicherung abschließen. Die zuständige Behörde in Ihrem Kanton oder Ihrer Gemeinde genehmigt etwaige Ausnahmen.`,
                links: [
                  {
                    text: "Zuständige Behörde in Ihrem Kanton",
                    url: "https://www.kvg.org/wp-content/uploads/website_kantonale-stellen_10_2023_en.pdf",
                  },
                ],
              },
              {
                subtitle: "Grenzgänger und Krankenversicherung",
                text: `Als Grenzgänger haben Sie die Wahl, eine Krankenversicherung in der Schweiz, wo Sie arbeiten, oder im Ausland, wo Sie wohnen, abzuschließen.

Wenn Sie keine Schweizer Krankenversicherung abschließen möchten, müssen Sie innerhalb von drei Monaten nach Arbeitsbeginn eine Befreiung bei der zuständigen kantonalen Behörde beantragen.`,
                links: [
                  {
                    text: "Kantonale Behörde",
                    url: "https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung/krankenversicherung-versicherte-mit-wohnsitz-im-ausland/versicherungspflicht/grenzgaengerinnen-ch.html",
                  },
                ],
              },
            ],
          },
          {
            title: "Wechsel der Krankenkasse",
            contents: [
              {
                subtitle: "Freie Wahl der Krankenkasse",
                text: `Die Liste der zugelassenen Krankenkassen umfasst alle Versicherer. Sie können jede Krankenkasse wählen, die in der Region Ihres Wohnorts tätig ist. Melden Sie sich einfach an, da sie verpflichtet sind, jedem die Grundversicherung anzubieten.

Es ist auch gut zu wissen, dass ein Kind eine andere Krankenkasse als die Eltern haben kann.`,
                links: [
                  {
                    text: "Freie Wahl der Krankenkasse",
                    url: "https://www.bag.admin.ch/bag/en/home/versicherungen/krankenversicherung/krankenversicherung-versicherer-aufsicht/verzeichnisse-krankenundrueckversicherer.html",
                  },
                ],
              },
              {
                subtitle: "Kündigung der Krankenversicherung zum Jahresende",
                text: `Sie können Ihre Krankenkasse in der Regel zum Jahresende wechseln. Dazu müssen Sie Ihre Grundversicherung schriftlich kündigen. Ihr Schreiben muss bis spätestens 30. November bei Ihrer aktuellen Krankenkasse eingehen.

Ihre aktuelle Krankenkasse informiert Sie bis Ende Oktober über Ihre Prämie für das nächste Jahr. Dies geschieht rechtzeitig, damit Sie kündigen können, wenn Sie mit der Prämie nicht einverstanden sind. Dieser Prämienrechner (Webseite auf Deutsch, Französisch und Italienisch) kann nützlich sein, wenn Sie die Angebote verschiedener Krankenkassen vergleichen möchten.

Wenn Sie eine Franchise von CHF 300 im «Standard»-Versicherungsmodell haben, können Sie Ihre Grundversicherung auch zum Ende Juni kündigen. Es gilt eine Kündigungsfrist von drei Monaten.`,
                links: [
                  {
                    text: "Prämienrechner",
                    url: "https://www.priminfo.admin.ch/de/praemien",
                  },
                ],
              },
              {
                subtitle: "Wechsel des Versicherungsmodells",
                text: `Sie können Ihr Versicherungsmodell ebenfalls zum Jahresende wechseln. Dazu muss Ihr Schreiben bis Ende November bei Ihrer Krankenkasse eingehen. Neben dem Standardmodell könnten folgende Versicherungsmodelle mit niedrigeren Prämien für Sie interessant sein (Webseite auf Deutsch, Französisch und Italienisch):

Hausarztmodell: Sie müssen (fast) immer zuerst Ihren Hausarzt aufsuchen. Dieser überweist Sie bei Bedarf an einen Spezialisten.
HMO-Modell: Sie müssen (fast) immer zuerst einen Arzt in Ihrer gewählten Gruppenpraxis (Health Maintenance Organisation) aufsuchen. Dieser überweist Sie bei Bedarf an einen Spezialisten.
Telmed: Vor (fast) jedem Arztbesuch müssen Sie eine bestimmte Nummer für eine erste medizinische Beratung per Telefon anrufen.`,
                links: [
                  {
                    text: "Versicherungsmodelle mit niedrigeren Prämien",
                    url: "https://www.priminfo.admin.ch/de/versicherungen/grundversicherung#modelle",
                  },
                ],
              },
            ],
          },
          {
            title: "Zusatzversicherung",
            contents: [
              {
                subtitle: "Krankenkassen müssen Sie nicht akzeptieren",
                text: `In der Regel müssen Sie einen Gesundheitsfragebogen ausfüllen, bevor eine Krankenkasse Ihnen eine Zusatzversicherung genehmigt. Ihre Antworten bestimmen die Bedingungen der Annahme. Die Krankenkasse kann Ihren Antrag auf eine Zusatzversicherung auch vollständig ablehnen.

Füllen Sie den Fragebogen wahrheitsgemäß aus. Wenn Sie falsche Angaben machen, kann Ihre Krankenkasse später die Zahlung Ihrer Rechnung verweigern oder Sie vollständig von der Deckung ausschließen.`,
              },
              {
                subtitle: "Am besten vor der Geburt anmelden",
                text: `Wenn Sie eine Zusatzversicherung für Ihr neugeborenes Baby abschließen möchten, ist der beste Zeitpunkt, es vor der Geburt anzumelden. Die meisten Krankenkassen akzeptieren das ungeborene Kind ohne Bedingungen oder Gesundheitsfragebogen.

Eltern versichern ihre Kinder oft für Zahnbehandlungen (Kieferorthopädie). Dies ist ebenfalls frühzeitig abzuschließen. Ab einem bestimmten Alter verlangen die Versicherer eine Untersuchung, bevor sie das Kind akzeptieren.`,
              },
              {
                subtitle: "In der Regel ein Paket",
                text: `Zusatzversicherungen werden oft nur als Paket angeboten. Prüfen Sie, dass Sie nicht dieselben Leistungen doppelt versichern, insbesondere bei Reiseversicherungen. In vielen Fällen sind Sie bereits versichert – zum Beispiel über Ihre Kreditkarte oder ein Produkt mit integriertem Reiseschutz.`,
              },
              {
                subtitle: "Kündigung kann knifflig sein",
                text: `Wollen Sie Ihre Zusatzversicherung wirklich nicht mehr? Überlegen Sie genau, bevor Sie kündigen. Nach der Kündigung muss die Krankenkasse Sie nicht wieder aufnehmen. Informieren Sie sich auch über die geltenden Kündigungsfristen. Die benötigten Informationen finden Sie in Ihrem Versicherungsvertrag oder fragen Sie einfach Ihre Krankenkasse.`,
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
    categoryId: CategoryId.make(10),
    title: "Leben in der Schweiz///Quellensteuer",
    description: "Die Quellensteuer wird direkt von Ihrem Lohn abgezogen. In der Schweiz betrifft diese Form der Besteuerung hauptsächlich ausländische Einwohner, die keine C-Bewilligung besitzen.",
    contents: [
      {
        infos: [
          {
            title: "Wer zahlt Quellensteuer?",
            contents: [
              {
                text: `Alle ausländischen Arbeitnehmer mit Wohnsitz in der Schweiz – mit Ausnahme derjenigen, die eine Niederlassungsbewilligung (C-Bewilligung) besitzen, und derjenigen, die mit einem Schweizer Ehepartner verheiratet sind oder deren Ehepartner eine Niederlassungsbewilligung (C-Bewilligung) besitzt.
Personen mit Wohnsitz im Ausland, die Einkommen aus einer in der Schweiz ausgeübten Tätigkeit beziehen (z.B. Grenzgänger, Wochenaufenthalter, Dozenten, professionelle Sportler, Künstler).
Andere Steuerpflichtige reichen eine Steuererklärung ein und werden nach dem üblichen Steuerverfahren besteuert.`,
              },
            ],
          },
          {
            title: "Wie wird die Quellensteuer abgezogen?",
            contents: [
              {
                text: `Ihr Arbeitgeber – oder Ihre Versicherung oder Pensionskasse – zieht die Quellensteuer jeden Monat von Ihrem Lohn (oder Ihren Leistungen) ab und überweist das Geld an die kantonalen Steuerbehörden. Die Quellensteuer deckt Ihre Bundes-, kantonalen und kommunalen Einkommenssteuern ab. Das bedeutet, dass Sie keine Steuererklärung einreichen müssen.`,
              },
            ],
          },
        ],
      },
    ],
    isEssential: 0,
  },
  //Entry and stay in Switzerland
  {
    localeId: LocaleId.make(1),
    categoryId: CategoryId.make(10),
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
    categoryId: CategoryId.make(10),
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
    categoryId: CategoryId.make(10),
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
    categoryId: CategoryId.make(10),
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
    categoryId: CategoryId.make(10),
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
    categoryId: CategoryId.make(10),
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
    categoryId: CategoryId.make(10),
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
    categoryId: CategoryId.make(10),
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

export const infoDE = [...infoZoll, ...infoArbeit, ...infoDocuments, ...infoGesundheit, ...infoFamily, ...infoForeignNationals];
