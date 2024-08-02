const myobj={
    js:'Javascript',
    cpp:'c++',
    rb:'ruby',
}
//Now forin loop is a good practice to iterate with Objects

for (const key in myobj) {
    // console.log(key);  //But it just give me the key so what to do
    
}
for(const key in myobj) {
    // console.log(myobj[key]); //this will give values
    
}
for(const key in myobj) {
    // console.log(`Full of ${key} is ${myobj[key]}`); //you can get access to both from this
    
}


