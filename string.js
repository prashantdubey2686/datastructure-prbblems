var success = 'successed';
function samevalue(s){
    var repeat = '';
    var ans = '';
    for(var i = 0; i <= s.length; i++){
        if(repeat.indexOf(s[i]) > -1){
            ans = ans + s[i];
        } else {
            repeat = repeat + s[i];
        }
    }
    return ans;

}

function hackerrankInString(s) {
    // Write your code here
    var str = 'hackerrank';
    var h = 0;
    for(var i = 0; i <= str.length; i++) {
        if(h == str.length -1) {
            break;
        }
        if(str[h] == s[i]){
            h++;
        }
    }
   if(h == str.length -1) {
        return 'YES';
    } 
    return 'NO';
}
console.log(hackerrankInString("hereiamstackerrank"));
