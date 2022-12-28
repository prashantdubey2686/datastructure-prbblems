function findMedian(arr) {
    // Write your code here
    var len = Math.floor(arr.length/2) +1;
    for(var i = 1; i < arr.length; i++){
        var value = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > value; j--){
            arr[j + 1] = arr[j]
         }
         arr[j + 1] = value;
        
    }
    console.log(arr);
}
findMedian([2,1,4,3,2,6,3]);