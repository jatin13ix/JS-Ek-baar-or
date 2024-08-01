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






