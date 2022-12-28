function isPalindrom(s) {
    var firstIndex = 0;
    var lastIndex = s.length - 1;
    while(firstIndex < lastIndex){
        if(s[firstIndex] != s[lastIndex]){
            return false;
        }
        firstIndex++; lastIndex--;
    }
    return true;
} 
console.log(isPalindrom('abab'));
console.log(isPalindrom('aba'));
console.log(isPalindrom('ababa'));