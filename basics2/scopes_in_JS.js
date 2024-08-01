//study about scope level and minin hoisting 
function one() {
    const username="jatin";
    function two() {
        const website="github"
        console.log(username);
    }
     two();  //if we have declared this two() outside or at the place of one() then its a error    
   
}
one()       //if we do not call one()here then nothing will show on screen 



//suppose i have 2 funtions 

// function addone(num) {
//     return num+1;
// }
// console.log(addone(5));      //here it will give clear answer 6

// const addtwo=function (num) {
//     return num+2;
// }
// console.log(addtwo(5))          //here it will give clear answer 7




//**********interesting thing is************** // 

console.log(addone(5));  //it will also work properly

function addone(num) {  
    return num+1;
}
     
console.log(addtwo(5))       //it will create issue 

const addtwo= function (num) {
    return num+2;
}
  

//this is something we can say hoisting but its basic .. like how do we store in js





