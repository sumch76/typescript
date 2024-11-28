"use strict";
// function greet(firstname:string){
//     console.log("hello"+firstname);
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let result = isLegal({
    firstName: "sumit",
    lastName: "chaubey",
    age: 18
});
console.log(result);
