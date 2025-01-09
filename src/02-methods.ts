export class MyDate {

    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat(): string{
        return `${this.day}/${this.month}/${this.year}`;
    }

    //el parametro 'type' es un 'Literal type' 
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
}

const myDate = new MyDate(2000, 1, 11);
console.log('1:', myDate.printFormat());
myDate.add(3, 'days');
console.log('add days:', myDate.printFormat());
myDate.add(5, 'months');
console.log('add months:', myDate.printFormat());
myDate.add(7, 'years');
console.log('add years:', myDate.printFormat());

console.log('-------');
console.log('day:',myDate.day);
console.log('month:',myDate.month);
console.log('year:',myDate.year);
