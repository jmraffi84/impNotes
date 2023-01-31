a = [1,2,3,4,5,6,7,8,9]

aa = a.map((val)=>{
    if(val%2==0){
        return val = 5
    }else{
        return val = 10
    }
   
})
console.log(aa)

data = [
    {"name" : "Magesg", "Profession": "developer"},
    {"name" : "Ram" , "Profession" : "doctor"},
    {"name" : "Sita", "Profession" : "CA"}
]

aa = data.map((val)=>{
    value = val.name + " is a" + val.Profession
    return value
})
console.log(aa)