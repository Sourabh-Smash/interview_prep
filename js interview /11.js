let arr = [5, 1, 8, 4, 99,1];
console.log(arr);
for (let i = arr.length - 1; i >= 0; i--){
    for (let j = 0; j <= i - 1; j++){
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(arr);