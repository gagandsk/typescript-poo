export class MyDate {

    constructor(
        public _year: number = 2000,
        public _month: number = 7, 
        private _day: number = 11
    ) {}

    printFormat(): string{
        const day = this.addPadding(this._day);
        const month = this.addPadding(this._month);
        return `${day}/${month}/${this._year}`;
    }
    private addPadding(value: number){
        if(value < 10) {
            return `0${value}`; // string
        }
        return value; // number
    }

    add(amount: number, type: 'days' | 'months' | 'years'){
        if(type === 'days') {
            this._day += amount;
        }

        if(type === 'months') {
            this._month += amount;
        }

        if(type === 'years') {
            this._year += amount;
        }
    }

    get day(){
        return this._day;
    }

    get month(){
        return this._month;
    }

    get year(){
        return this._year;
    }

    get isLeapYear(): boolean{
        if (this.year % 400 === 0) return true;
        if (this.year % 100 === 0) return false;
        return this.year % 4 === 0;
    }

    // por defecto es un metodo 'void'
    set month(newMonth: number) {
        if(newMonth >= 1 && newMonth <= 12) {
            this._month = newMonth;
        } else {
            throw new Error('month out of range');
        }
    }
}

const myDate = new MyDate(1990, 1, 10);
console.log(myDate.printFormat());
myDate.month = 4;
console.log('run => ', myDate.month);
myDate.month = 14;
console.log('run error => ',  myDate.month)