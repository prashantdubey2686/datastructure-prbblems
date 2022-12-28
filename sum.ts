function VeryBigSum(ar: any[]) {

    // Write your code here
    var sum = 0;
    for(var i = 0; i < ar.length; i++){
        sum = sum + ar[i];
    }
    return sum;
}

var arr = [5, 4, 0, 8, 2];
console.log(VeryBigSum(arr));