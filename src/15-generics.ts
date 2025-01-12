import { Dog } from "./08-inheritance";

/*
function getValue(value: unknown) {
    return value;
}

function getValue2(value: string | number) {
    return value;
}
*/

function getValue<T>(value: T) {
    const array: T[] = [value];
    return value;
}
getValue<number>(12).toFixed();
getValue<string>('12').toLocaleLowerCase();
getValue<number[]>([1,2,2,2,2]).forEach;
const fifi = new Dog('fifi', 'vegeta');
getValue<Dog>(fifi).move;
//Promise<boolean>
//axios.get<string[]>