// 2D array count
a=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
let sum =0;
for (let i of a){
    for(let j of i){
        sum = sum + j
    }
}
console.log(sum)
// Out Put: 45