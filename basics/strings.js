console.log("abc");
//declaration of string FR
const jatin=new String("abc"); //This will give the same result as 
                                //before but have many different properties to work on 


const count=50;                                //let us take an example
console.log(jatin+count+"value"); //but this is not the right way or can say not attractive

// we should use string interpolation using ` `

console.log(`My name is ${jatin},and my value is ${count}`); //this is much proffesional