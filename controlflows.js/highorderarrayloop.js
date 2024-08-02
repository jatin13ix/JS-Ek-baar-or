// //for of loop

// const array=[1,2,3,4,5]

// for (const keyOfarray of array) {  
//     console.log(keyOfarray);   //no need to initialize anything automatically knows everything

// }
const array="Hello World"
for (const element of array) {  //works for the value, 
    // console.log(element);
    
}
for(const element in array) {
    // console.log(element); //works for the key
    
}

// A Lil bit about Maps 

const map=new Map()

map.set('JA','Jatin Agrawal')
map.set('AS','ashwani Sah')
map.set('PM','Priyadarshi Maurya')
// console.log(map);

for (const [key,value] of map) { 
    // console.log(key);       //it will give us a array as it holds key value pairs
    // console.log(key,'=>',value); //
    

}
//But forof loop is not iterable for Objects :NOTE