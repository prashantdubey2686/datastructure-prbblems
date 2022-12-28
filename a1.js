function ifcharexist(c , s){
    for(var i = 0; i < s.length; i++){
       if(c == s[i]){
            return true;
       }
    }
    return false;
}

function stringcopr(s1 ,s2){
    var count = 0;
    var s1Freq = freq(s1);
    var s2Freq = freq(s2);
    for(var i = 0; i < 26; i++) {
        count = count + Math.abs(s1Freq[i] - s2Freq[i]);
    }
    return count;
}

function freq(s) {
    var arr = new Array(26);
    arr.fill(0);
    for(var i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt(0) - 97]++;
    }
    return arr;
}

stringcopr("absdjkvuahdakejfnfauhdsaavasdlkj", "djfladfhiawasdkjvalskufhafablsdkashlahdfa");