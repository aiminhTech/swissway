import { makeChecklist, makeChecklistItem } from "@/utils/reference-data-utils";
import type { CheckList, CheckListItem } from "../model";

export const checklistsDE: CheckList[] = [
  makeChecklist(2, "Erhalt eines Erbscheins"),
  makeChecklist(2, "Bestellung von Zivilstandsurkunden"),
  makeChecklist(2, "Erhalt eines Strafregisterauszugs"),
  makeChecklist(2, "Ersatz eines verlorenen oder gestohlenen Führerscheins"),
  makeChecklist(2, "Beantragung eines Passes oder einer Identitätskarte"),
  makeChecklist(2, "Erhalt einer Aufenthaltsbewilligung in der Schweiz"),
];

export const checklistItemsDE: CheckListItem[] = [
  // Checkliste 7: Erbschein
  makeChecklistItem(2, 7, "Besorgen Sie eine Kopie der Sterbeurkunde der verstorbenen Person beim Standesamt."),
  makeChecklistItem(2, 7, "Sammeln Sie Nachweise für Ihren Erbanspruch (z.B. Auszug aus dem Zivilstandsregister, Testament oder Erbvertrag)."),
  makeChecklistItem(2, 7, "Bestätigen Sie, dass Sie die Erbschaft nicht ausgeschlagen haben (z.B. Annahmeerklärung oder Nachweis, dass die Ausschlagungsfrist abgelaufen ist)."),
  makeChecklistItem(2, 7, "Reichen Sie Ihren Antrag bei der zuständigen Behörde ein (z.B. Notar oder Nachlassgericht)."),
  makeChecklistItem(2, 7, "Bereiten Sie Kosten vor, die von mehreren hundert bis zu einigen tausend Franken reichen können."),
  // Checkliste 8: Zivilstandsurkunden
  makeChecklistItem(2, 8, "Ermitteln Sie die Art der benötigten Urkunde (z.B. Geburt, Heirat, Tod)."),
  makeChecklistItem(2, 8, "Bestimmen Sie das richtige Standesamt (z.B. Geburts-, Heirats- oder Herkunftsort)."),
  makeChecklistItem(2, 8, "Bestellen Sie die Urkunde online oder persönlich beim Standesamt."),
  makeChecklistItem(2, 8, "Bereiten Sie CHF 30 (plus Porto) für Standardurkunden vor."),
  makeChecklistItem(2, 8, "Bei Bestellung für eine andere Person benötigen Sie eine Vollmacht und eine Kopie des Ausweises."),
  // Checkliste 9: Strafregisterauszug
  makeChecklistItem(2, 9, "Entscheiden Sie, ob Sie einen einfachen oder einen speziellen privaten Auszug benötigen."),
  makeChecklistItem(2, 9, "Bestellen Sie den Auszug bei einer Poststelle oder über die Webseite des Bundesamts für Justiz."),
  makeChecklistItem(2, 9, "Bereiten Sie CHF 17 für den Auszug vor (plus CHF 20 bei Beglaubigung)."),
  makeChecklistItem(2, 9, "Für einen speziellen Auszug benötigen Sie eine unterschriebene Bestätigung der anfragenden Organisation."),
  makeChecklistItem(2, 9, "Legen Sie beim Bestellen eine Kopie Ihres Ausweises bei."),
  // Checkliste 10: Ersatz eines verlorenen oder gestohlenen Führerscheins
  makeChecklistItem(2, 10, "Melden Sie den Diebstahl bei der Polizei, falls der Führerschein gestohlen wurde."),
  makeChecklistItem(2, 10, "Kontaktieren Sie die Führerschein- und Fahrzeugprüfstelle Ihres Kantons."),
  makeChecklistItem(2, 10, "Beantragen Sie einen Ersatzführerschein (Lieferzeit ca. 1–2 Wochen)."),
  makeChecklistItem(2, 10, "Bereiten Sie ungefähr CHF 30 für die Ersatzgebühr vor."),
  makeChecklistItem(2, 10, "Geben Sie den alten Führerschein zurück, falls Sie ihn wiederfinden."),
  // Checkliste 11: Beantragung eines Passes oder einer Identitätskarte
  makeChecklistItem(2, 11, "Beantragen Sie online oder bei Ihrem kantonalen Passbüro (oder Schweizer Botschaft im Ausland)."),
  makeChecklistItem(2, 11, "Geben Sie biometrische Daten an (Gesichtsphoto, Unterschrift und Fingerabdrücke für Pässe)."),
  makeChecklistItem(2, 11, "Bei Kindern muss ein sorgeberechtigter Elternteil den Antrag stellen und gegebenenfalls zustimmen."),
  makeChecklistItem(2, 11, "Rechnen Sie mit einer Lieferzeit von 10 Arbeitstagen (30 im Ausland)."),
  makeChecklistItem(2, 11, "Bei Dringlichkeit beantragen Sie einen Notpass bei einem Passbüro oder einer Botschaft."),
  // Checkliste 12: Erhalt einer Aufenthaltsbewilligung in der Schweiz
  makeChecklistItem(2, 12, "Bestimmen Sie die benötigte Bewilligungsart (z.B. L, B, C, abhängig von Nationalität und Zweck)."),
  makeChecklistItem(2, 12, "Kontaktieren Sie die kantonalen Migrations- oder Arbeitsämter in Ihrer Gemeinde."),
  makeChecklistItem(2, 12, "Reichen Sie einen gültigen Ausweis oder Pass und erforderliche Dokumente (z.B. Arbeitsvertrag) ein."),
  makeChecklistItem(2, 12, "Beantragen Sie eine Verlängerung 3 Monate bis 2 Wochen vor Ablauf der Bewilligung."),
  makeChecklistItem(2, 12, "Bei Verlust oder Diebstahl melden Sie dies der Polizei und beantragen Sie eine Duplikat beim Einwohneramt."),
];
