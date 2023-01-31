// Given two numbers N,K followed by an array of N elements, print the array 
// after doing right shift K times (in cyclic manner).
// Input Size : 1 <= N, K <= 100000
// Sample Testcase :
// INPUT
// 3 2
// 7 2 3
// OUTPUT
// 2 3 7

let arr = [7,2,3]
let n = arr.length
let k = arr[n-1] 

for(let i = n-1; i>0; i--){
    arr[i] = arr[i-1] // 7
    arr[0]=k // k =2 inserting arr[0]= 2
}
console.log(arr)
// OUTPUT
// 2 7 3
// TimeComplexity = O(n)
// spacecomplexity = O(1)