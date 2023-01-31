// let arr =[15,11,654,4656]

// let count;
// let temp;
// let ans=0
// for(let i=0; i<arr.length; i++){
//     temp = arr[i].toString()
//     count = temp.length
//     if(count %2===0){
//         ans++
//     }
// //    return count
// }
// console.log(ans)


let arr =[15,11,654,4656]
let count =0;
let ans=0;
for(let i =0; i<arr.length; i++){
    temp = arr[i]
    while(temp!=0){
        temp = temp / 10
        count++;
    }
   if(count % 2===0){
        ans++
   }
// return ans
}
console.log(ans)