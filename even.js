var arr = [];
var even = [];
var odd = [];
for(var i = 1; i <= 100; i++){
    if(i % 2 == 0){
    even = even + i + " ";
    }else{
        odd.push(i);
    }

};console.log(even)
console.log(odd);

function findeven(arr){
    if(arr[i] % 2 ==0){
        even = even +arr[i];

    }
}findeven(arr);