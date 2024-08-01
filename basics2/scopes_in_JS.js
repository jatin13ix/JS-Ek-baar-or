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