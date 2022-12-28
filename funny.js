

function funnyString(s) {
    // Write your code here
    var reverseS = '';
    for(var i = s.length - 1; i >= 0; i--){
        reverseS = reverseS + s[i];
    }

    for(var j = 0; j <= reverseS.length - 1; j++){
       if(reverseS.charCodeAt([j]) - reverseS.charCodeAt([j +1]) != reverseS.charCodeAt([j +1]) - reverseS.charCodeAt([j + 2])){
            return j;
        }else
        {
        return 'Funnny';
        }
    }
}   
funnyString('acxz');    
