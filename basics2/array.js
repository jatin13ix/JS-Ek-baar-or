const pogo= ["bheem", "chutki", "raju"]
const disney = ["dora", "kenechi" , "shizuka"]

// const all_Stars =pogo.push(disney);
// pogo.push(disney);
// console.log(pogo);  // not the right way ,it merges a whole array as element

// const all_Stars=pogo.concat(disney)
// console.log(all_Stars);      //its okay , creates problem when come more than 2 array

const all_Stars=[...disney,...pogo]  // best way for this
console.log(all_Stars);