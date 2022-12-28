function isanagram(s1,s2){
    if(s1.length != s2.length){
        return false;
    }
    var count = {};
    for(let letter of s1){
        count[letter] = (count[letter] || 0) +1;
        console.log(count[letter]);
    }
    for(let item of s2){
        console.log(count[item]);
        if(!count[item]){
            return false;
        }
        count[item] = count[item] - 1;
    }
    return true;
}
var res = isanagram('hello','lleho');
console.log(res);
