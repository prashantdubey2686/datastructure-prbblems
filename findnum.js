function pstar(n){ 
    var space = '';
    var star = '*';

for(var i = 0; i  < n; i++){

    for(j = n-i; J > 0; j++){
        space = space + space;
    }
    for(var k = 1; k <= 2*i - 1; k++){
    }
    console.log(space + star);
}
}
 pstar(7);
