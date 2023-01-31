
// question Print the sum of lucky number
n = 6
arr = [6,-1,2,36,12,-3]

let luckNo = 0
let index =1
for(let i of arr){
 if(arr.includes(n*index)){
    luckNo += arr[i]
 }
}
console.log(luckNo)

// question to print the lucky no in array

// n = 6
// arr = [6,-1,2,36,12,-3]

// let luckNo = []
// let index =1
// for(let i of arr){
//  if(arr.includes(n*index)){
//     luckNo.push(arr[i])
//  }
// }
// console.log(luckNo)