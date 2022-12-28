function rec(x){
    if(x == 0){
        return 0;
    }

    return x + rec(x - 1);
}
console.log(rec(3));
