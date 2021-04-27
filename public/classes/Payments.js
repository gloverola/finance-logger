// Invoice Class
export class Invoice {
    constructor(r, d, a) {
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.recipient} is owed N${this.amount} for ${this.details}`;
    }
}
