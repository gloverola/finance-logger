import { hasFormatter } from "./../interfaces/hasFormatter";
// Invoice Class
export class Invoice implements hasFormatter {
  client: string;
  details: string;
  amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes N${this.amount} for ${this.details}`;
  }
}
