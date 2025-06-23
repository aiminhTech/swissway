import { makeChecklist, makeChecklistItem } from "@/utils/reference-data-utils";
import type { CheckList, CheckListItem } from "../model";

export const checklistsEN: CheckList[] = [
  makeChecklist(1, "Obtaining a Certificate of Inheritance"),
  makeChecklist(1, "Ordering Civil Status Certificates"),
  makeChecklist(1, "Obtaining a Criminal Records Extract"),
  makeChecklist(1, "Replacing a Lost or Stolen Driving Licence"),
  makeChecklist(1, "Applying for a Passport or Identity Card"),
  makeChecklist(1, "Obtaining a Residence Permit in Switzerland"),
];

export const checklistItemsEN: CheckListItem[] = [
  // Checklist 1: Certificate of Inheritance
  makeChecklistItem(1, 1, "Obtain a copy of the deceased's death certificate from the register office."),
  makeChecklistItem(1, 1, "Gather proof of your entitlement to inherit (e.g., civil status register extract, will, or contract of succession)."),
  makeChecklistItem(1, 1, "Confirm you have not renounced the inheritance (e.g., declaration of acceptance or proof the renunciation period has expired)."),
  makeChecklistItem(1, 1, "Submit your application to the competent authority (e.g., notary or probate office)."),
  makeChecklistItem(1, 1, "Prepare for costs, which may range from several hundred to a few thousand francs."),
  // Checklist 2: Civil Status Certificates
  makeChecklistItem(1, 2, "Identify the type of certificate needed (e.g., birth, marriage, death)."),
  makeChecklistItem(1, 2, "Determine the correct register office (e.g., place of birth, marriage, or origin)."),
  makeChecklistItem(1, 2, "Order the certificate online or in person at the register office."),
  makeChecklistItem(1, 2, "Prepare CHF 30 (plus postage) for standard certificates."),
  makeChecklistItem(1, 2, "If ordering for someone else, obtain their power of attorney and a copy of their ID."),
  // Checklist 3: Criminal Records Extract
  makeChecklistItem(1, 3, "Decide if you need a standard or special private extract."),
  makeChecklistItem(1, 3, "Order the extract at a post office or via the Federal Office of Justice website."),
  makeChecklistItem(1, 3, "Prepare CHF 17 for the extract (plus CHF 20 if legalisation is needed)."),
  makeChecklistItem(1, 3, "For a special extract, obtain signed confirmation from the requesting organisation."),
  makeChecklistItem(1, 3, "Provide a copy of your ID when ordering."),
  // Checklist 4: Replacing a Lost or Stolen Driving Licence
  makeChecklistItem(1, 4, "Report the theft to a police station if the licence was stolen."),
  makeChecklistItem(1, 4, "Contact your canton’s driver and vehicle licensing office."),
  makeChecklistItem(1, 4, "Apply for a replacement licence (expect delivery in 1–2 weeks)."),
  makeChecklistItem(1, 4, "Prepare approximately CHF 30 for the replacement fee."),
  makeChecklistItem(1, 4, "Return the old licence to the licensing office if found."),
  // Checklist 5: Applying for a Passport or Identity Card
  makeChecklistItem(1, 5, "Apply online or at your cantonal passport office (or Swiss embassy if abroad)."),
  makeChecklistItem(1, 5, "Provide biometric data (facial photo, signature, and fingerprints for passports)."),
  makeChecklistItem(1, 5, "For children, ensure a parent with authority applies and provides consent if needed."),
  makeChecklistItem(1, 5, "Expect delivery within 10 working days (30 if abroad)."),
  makeChecklistItem(1, 5, "If urgent, apply for a temporary passport at a passport office or embassy."),
  // Checklist 6: Obtaining a Residence Permit in Switzerland
  makeChecklistItem(1, 6, "Determine the permit type needed (e.g., L, B, C, based on nationality and purpose)."),
  makeChecklistItem(1, 6, "Contact the cantonal migration or employment authorities in your commune."),
  makeChecklistItem(1, 6, "Submit a valid ID or passport and any required documents (e.g., employment contract)."),
  makeChecklistItem(1, 6, "Apply for renewal 3 months to 2 weeks before your permit expires."),
  makeChecklistItem(1, 6, "If lost or stolen, report to the police and apply for a duplicate at the residents’ register office."),
];
