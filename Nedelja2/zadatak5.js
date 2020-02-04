/*
zadatak5.js

Сачувати у променљиве цену и пречник пице
Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
Исписати тај резултат у конзолу
*/

const cena = 10;
const precnik = 50;

let povrsina = 2 * (precnik/2) * Math.PI;
console.log('Cena: ' + povrsina/cena);