let arr1 = [4,3,5,5,5,5,5,5,5,5,5,5,6,7]
let arr2 = [3,4,5,5,5,5,5,5,5]
let newarr = [...arr1, ...arr2];
console.log(newarr)

let arr3 = [...new Set(arr1, ...arr2)]
console.log(arr3)