export interface Forflytning {
  dyreholdId: string;
  individ: [number, number];
  produksjonsplassId: string;
}

export type Item = {
  produksjonsplassid: number;
  kommunenummer: string;
  gaardsnummer: number;
  bruksnummer: number;
  bygningsnummer: number;
  koordinater: string;
  koordinatsystem: string;
  opprettetdato: string;
  lastchanged: string;
};
