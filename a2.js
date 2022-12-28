var str = '';
for(var i = 1; i <= 100; i++){
    str = str + i +"  ";
    if(i % 10 == 0){
        console.log(str);
        str = "  ";
    }
}