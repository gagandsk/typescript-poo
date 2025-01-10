console.log(Math.PI);
console.log(Math.max(1,2,3,8,0));

class MyMath {
    static readonly PI = 3.14;

    // al utilizar '...numbers' estamos diciendo que tenemos n numeros de argumentos
    static max(...numbers: number[]){
        return numbers.reduce((max, item) => max >= item ? max: item);
    }
}

console.log('MyMath:', MyMath.PI);
const numbers = [1,2,30, 3,4,5,6,8,9];
console.log('MyMath:',MyMath.max(...numbers));
console.log('MyMath:',MyMath.max(-1, -2, -8));