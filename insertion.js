function inssort(arr){
    for(var i = 1; i < arr.length; i++){
        var cur = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > cur; j--){
           arr[j + 1] = arr[j]
        }
        arr[j + 1] = cur;
    }
  return (arr);
}