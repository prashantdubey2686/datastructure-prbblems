function pstar(n) {
    var star = '';
    var space = '';
    for(var i = n; i >= 1; i--){
        star = '';
        space = '';
        for(var j = 0; j < n - i; j++){
            space = space + ' ';
        }
        for(var k = 2*i - 1; k >= 1; k--){
            star = star + '*';
        }
        console.log(space + star);

    }
}
pstar(5);