function pstar(n){
    var star = '';
    for(var i = 0; i < n; i++){
        star = '';
        for(var j = n - i; j >= 1; j--){
            star = star + '*';
        }
        console.log(star);
    }
}
pstar(5);