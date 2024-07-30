// function addtwo(num1,num2) {
//     return num1+num2;
// }
// const result=addtwo(2,3);
// console.log(result);             This is basic



//Now we make a function to logincheck
// function loginuser(username) {
//     if(!username) {
//         console.log("please enter a username: ");
//         return;
//     }
//     return `${username} just logged in`;  //this is the professional method 
//                                          //using string interpolation
// }  

// console.log(loginuser(""));      

//just like the function from line 10
// we can also give some default values
 function loginuser(username="jatin") {  // it is a default value so !username will never execute
    if(!username) {
        console.log("please enter a username: ");
        return;
    }
    return `${username} just logged in`;  //this is the professional method 
                                         //using string interpolation
} 
console.log(loginuser())