function pstar(n) {
    var star = '';
    for(var i = 1; i <= n; i++){
        star = '';
        if(i == 1 || i == n) {
         for(var j = 1; j <= n; j++) {
                star = star + '*';
            }
        } else {
            star = star + '*';
            for(var k = 1; k <= n - 2; k++){
                star = star + ' ';
            }
            star = star + '*';
        }
        console.log(star + i);
    }
}
pstar(5);