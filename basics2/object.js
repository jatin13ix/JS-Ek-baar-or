//OBJECT
//very important and interesting topic 
//object de-structure 
const course={
        coursename:"js-ek baar firse",
        courseprice:"100",
        courseteacher:"Jatin",
};
console.log(course);

const{courseteacher:xyz}=course;   //this is the simple syntax of de-structure
console.log(xyz);   