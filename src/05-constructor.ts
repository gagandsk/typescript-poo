export class MyDate {

    constructor(
        public year: number = 2000,
        public month: number = 7, 
        private day: number = 11
    ) {}

    printFormat(): string{
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }
    private addPadding(value: number){
        if(value < 10) {
            return `0${value}`; // string
        }
        return value; // number
    }

    add(amount: number, type: 'days' | 'months' | 'years'){
        if(type === 'days') {
            this.day += amount;
        }

        if(type === 'months') {
            this.month += amount;
        }

        if(type === 'years') {
            this.year += amount;
        }
    }

    getDay(){
        return this.day;
    }

    getMonth(){
        return this.month;
    }

    getYear(){
        return this.year;
    }
}

const myDate = new MyDate(1990, 1, 10);
console.log(myDate.printFormat());

const myDate2 = new MyDate();
console.log('() => ', myDate2.printFormat());

const myDate3 = new MyDate(2025);
console.log('(2025) => ', myDate3.printFormat());

const myDate4 = new MyDate(2025, 3);
console.log('(2025, 3) => ', myDate4.printFormat());