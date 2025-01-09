export class MyDate {

    year: number;
    month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat(): string{
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${this.year}`;
    }

    //solo se puede acceder a este metodo internamente, desde fuera no va a ser possible
    private addPadding(value: number){
        if(value < 10) {
            return `0${value}`; // string
        }
        return value; // number
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

const myDate = new MyDate(2000, 1, 10);
console.log(myDate.printFormat());
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getYear());
//myDate.addPadding(); //no nos dejará acceder porque es un metodo de tipo 'private'