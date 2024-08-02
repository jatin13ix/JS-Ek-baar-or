//The most intersting and usable LoOp

const array=["js","Cpp","ruby","python"] //passes callbackFn

// array.forEach((items)=> console.log(items))  //arrow function 

function printme(items) {
    // console.log(items);  //predefined function
     
}
array.forEach(printme)  //just pass the method 

const array2=[1,2,3,4,5,6]

array2.forEach((nums)=>{
    console.log(nums);
    
})
