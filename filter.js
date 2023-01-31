// 1. filter will take a parameter
// 2 .it can change the length of array
// 3. it will check the condition
// 4. it will take one element at a time
// 5. if the return is true the condition will be considered
// 6 . it will not do manipulation

a = [1,2,3,4,5,6,7,8,9]

aa = a.filter((val)=>{
   return val%2
   
})
console.log(aa)

// output : [1, 3, 5, 7, 9] ---.> // 5. if the return is true the condition will be considered

a = [1,2,3,4]
aa = a.filter((val)=>{
   return val*2
   
})
console.log(aa)
// output: [1, 2, 3, 4] ---> // 6 . it will not do manipulation

// question leap year

a = [1100, 1400, 1500,2000,2016,2020,2040,3000]

aa = a.filter((a)=>{
   if(a%4 ==0 && a%100!=0 || a%100==0 && a%400==0){
      return a
   }
})
console.log(aa)
// output :  [2000, 2016, 2020, 2040] --> // 2 .it can change the length of array

// <-------------DS---------->

// output : 7

// console.log(count)
// QUES 2:





// console.log(g)