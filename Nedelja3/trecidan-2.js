function lifeSupply(numPerMonth, age){
    return (100-age)*(12*numPerMonth);
}

console.log(lifeSupply(10, 26));