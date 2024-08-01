// function database(){
//     console.log("DB CONNECTED");
// }
// database();   //It work properly but sometimes Global expression can pollute the Scopes

//So we have immediately invoked function expressions 

(function database() {
    console.log("DB CONNECTED");
})()  //so there is one more method we have IIFE

