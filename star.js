function pstar(n) {
    var star = '';
    for(var i = 1; i <= n; i++) {
        star = ''
        for(var j = 1; j <= i; j++) {
            star = star + '*';
        }
        console.log(star);
    }
}
pstar(5);


