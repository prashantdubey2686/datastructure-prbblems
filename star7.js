function pstar(n) {
    var star = '';
    for (var i = 1; i <= n; i++) {
        star = '';
        if (i == 1) {
            star = '*';
        } else if (i == n) {
            for (var j = 1; j <= n; j++) {
                star = star + '*';
            }
        } else {
            var space = '';
            for (var k = 0; k <= i - 2; k++) {
                space = space + ' ';
            }
            star = '*' + space + '*';
        }
        console.log(star);
    }

}
pstar(5);