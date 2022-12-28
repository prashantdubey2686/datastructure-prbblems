function bsort (a, n){
    for(var round = 0; round <= n - 1; round++){
        for(var i = 0; i <= n -1 - round; i++){
            if(a[i] > a[a + 1]){
                var t = a[i];
                a[i] = a[i + 1];
                a[i + 1] = t;
            }
        }
    }
    return a;
}bsort([34,15,29,8],4);
console.log(a);
