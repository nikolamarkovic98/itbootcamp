function hello(niz){
    for(let i = 0; i < niz.length; i++)
        if(niz[i]%5==0)
            console.log(niz[i]);
}

hello([5, 2, 10, 3, 6, 1, 8, 15]);