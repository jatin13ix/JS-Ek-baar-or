//How memory work in Java script
// 1st. Stack (primitive)     [number, sybol,bigint,string etc..]
// 2nd. Heap  (non-primitive) [array,object,function]
let myName="jatin agrawal"
let myName2=myName
myName2="jatin kumar"

console.log(myName)    //here my name value not changed becuase 
                      // inside stack we gave the copy of the myName -primitive type
console.log(myName2)




let obj={
    name:"jatin",
    age:17,
}
console.log(obj.name);

let obj2=obj;
obj2.name="mai jatin hoon";

console.log(obj.name);   // here obj.name also changed because non-primitve
                        // directly take referrence from the heap memory not make the copy
console.log(obj2.name);