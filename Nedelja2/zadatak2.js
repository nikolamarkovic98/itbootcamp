/*
zadatak2.js - Продавница

Направити променљиву која представља цену производа коју купац жели да купи
Направити променљиву која представља количину новца коју купац има
Ако купац нема довољно новца, исписати поруку: "Немате довољно новца", а затим написати тренутно стање (остаје исто)
Ако има довољно новца, исписати: "Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)
*/

let cenaProizvoda = 50;
let kolicinaNovca = 60;

if(cenaProizvoda <= kolicinaNovca){
    kolicinaNovca -= cenaProizvoda;
    console.log('Uspesno ste kupili proizvod.');
    console.log('Trenutna kolicina novca: ' + kolicinaNovca);
} else {
    console.log('Nemate dovoljno novca.')
    console.log('Trenutna kolicina novca: ' + kolicinaNovca);
}