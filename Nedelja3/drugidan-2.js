function pizzaPrice(poluprecnik, cena){
    let povrsina = 2 * poluprecnik * Math.PI;
    return povrsina/cena;   
}

console.log(pizzaPrice(20, 10));