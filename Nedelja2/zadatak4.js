/*
zadatak4.js

Исписати првих 1000 бројева дељивих са 5
*/

let num = 0;
let i = 5;

while(true){
    if(i % 5 == 0){
        console.log(i)
        num += 1;
    }
    if(num == 1000)
        break;
    i++;
}