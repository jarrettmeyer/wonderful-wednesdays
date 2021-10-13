import * as d3 from "d3";

export interface UnparsedCSVDatum {
  adm_ace_arb: 0 | 1 | "NA";
  adm_anticoag: "Yes" | "No" | "NA";
  adm_creat: number | "NA";
  adm_crp: number | "NA";
  adm_ddimer_new: number | "NA";
  adm_ferritin: number | "NA";
  adm_ldh: number | "NA";
  adm_neutrotolymphorate: number | "NA";
  adm_procalcitonin: string;
  age: number;
  bmi: number | "NA";
  comorb_cvd: "Yes" | "No" | "NA";
  comorb_cvd_hypertension: "Yes" | "No" | "NA";
  comorb_dm: "Yes" | "No" | "NA";
  comorb_pulm_dis: "Yes" | "No" | "NA";
  ct_sevscore_total: number | "NA";
  ftime: number;
  immunocompromised: 0 | 1 | "NA";
  mews: number | "NA";
  sex: "female" | "male";
  status: 0 | 1 | 2;
  sympt_duration: number | "NA";
  sympt_dyspnea: 0 | 1 | "NA";
  sympt_fever: 0 | 1 | "NA";
  sympt_sevscore_total: number | "NA";
  xray_new: "Done, susp" | "Done, not susp" | "Not done";
}

export interface ParsedCSVDatum {
  admAceArb: boolean | null;
  admAnticoag: boolean | null;
  admCreat: number | null;
  admCrp: number | null;
  admDdimerNew: number | null;
  adm_Ferritin: number | null;
  admLdh: number | null;
  admNeutrotolymphorate: number | null;
  admProcalcitonin: string;
  age: number;
  bmi: number | null;
  comorbCvd: boolean | null;
  comorbCvdHypertension: boolean | null;
  comorbDm: boolean | null;
  comorbPulmSis: boolean | null;
  ctSevscoreTotal: number | null;
  ftime: number;
  immunocompromised: boolean | null;
  mews: number | null;
  sex: "female" | "male";
  status: 0 | 1 | 2;
  symptDuration: number | null;
  symptDyspnea: boolean | null;
  symptFever: boolean | null;
  symptSevscoreTotal: number | null;
  xrayNew: "Done, susp" | "Done, not susp" | "Not done";
}

export default class CSVReader {
  source = "./data/journal.pone.0249231.s004.csv";
  unparsedData = [];

  async read(): Promise<UnparsedCSVDatum[]> {
    this.unparsedData = await d3.csv(this.source, d3.autoType);
    return this.unparsedData;
  }
}
