function pstar(n){
    var starcount = 1;
    var spacecount = n - 1;
    for(var i = 1; i <= n; i++){
        var star = ' ';
        var space = '';
        for(var j = 1; j <= spacecount; j++){
          space = space + ' ';
        }
        for(var k = 1; k <= 2*i-1; k++){
            star = star + '*';
        }
        console.log(space + star);
        spacecount--;
    }
}
pstar(5);