// we know that {0,false,NaN,null,undefined,BigInt 0n ,"" , -0} all are falsy values
//besides these all values are truthy
const emptyarray=[]

//so if we want to check condn on array then
// if(emptyarray){
//     console.log('jatin'); //its ok but not good creates issue
// }

// if(emptyarray.length===0) {
        // console.log('jatin'); //its ok

    //like this we can also check on object

    const emptyObj={

    };
    if(Object.keys(emptyObj).length===0){
            console.log(`I am empty OBj`);  // this is good practice
    }

//nullish coelescing operator [check spelling]
// so what happens is sometime we dont get direct response ,/
//  we get 2 values so to handle them we have this operator

let val1;
val1=null??10;   //Here we dont get null as output 
console.log(val1);

//it Looks like teriniary operators but they are completely different 

const age=18;                               //these are teriniary operators
console.log(age<18?"you are teen":"you are adult");


