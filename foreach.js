// question Print the sum of lucky number with forEach

arr = [6,-1,2,36,12,-3]
let n=6
let luckNo = 0
arr.forEach(basic)

function basic(a,b,c){
    if(arr.includes(n*(b+1))){
        luckNo++
    }
}
console.log(luckNo)
//  output  3
// <----------------------------->
// Multiple with 2 & change the elements of a while log
a = [1,2,3,4]
v =2
a.forEach((a,b,c)=>{
    c[b] = a*v
})
console.log(a)
// out put:  [2, 4, 6, 8]
// <----------------------------->