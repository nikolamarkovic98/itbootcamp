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