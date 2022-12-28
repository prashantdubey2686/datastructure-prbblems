function getStar(n) {
    var star = '';
    for (var i = 1; i <= n; i++) {
        star = star + "*";
    }
    return star;
}
function getspace(n) {
    var space = '';
    for(var i = 1; i <=n; i++) {
        space = space + ' ';
    }
    return space;
}

function pstar(n) {
    var space = '';
    for (var i = 0; i <= n; i++) {
        var space = getspace(i);
        var star = getStar(n - i);
        console.log(space + star);
    }
}
pstar(5);