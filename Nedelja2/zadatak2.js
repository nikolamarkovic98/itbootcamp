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