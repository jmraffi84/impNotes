arr=[1,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1]

    
let  count=0;
let maxCount=0;

for(let i=0; i<arr.length; i++){

   
  if(arr[i]===1){
      count++;
  }else{
      maxCount = Math.max(maxCount,count)
      count = 0;
      
  }

}
console.log( Math.max(maxCount,count))