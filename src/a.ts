// function greet(firstname:string){
//     console.log("hello"+firstname);
    
// }
// greet("777");
// function sum(a: number, b: number):number{
//     // Implementation goes here
//     // console.log(`${a+b}`);
//     return a+b;

    
// }

// console.log(sum(10,12)); 

//problme 3
 
// function isLegal(age:number){
//     if(age<18)
//         return false;
//     else
//     return true;

// }

// console.log(isLegal(17));
// console.log(isLegal(20));

//create a function that takes another function as input and runs it after 1 second


// function runsAfter1s(fn)
// {
//     setTimeout(fn,1000);
// }
// runsAfter1s(function()
// {
//     console.log("runs after 1 second");
// })


//with typescript 
// function runAfter1s(fn:()=>void)
// {
//     setTimeout(fn,1000);
// }

// runAfter1s(() => {
//     console.log("runs after 1 second");
// });


// //arrow function approach
// function delay1s(fn:()=>void)
// {
//     setTimeout(()=>

//     {

//         fn();
//     },5000)
// }
// delay1s(()=>console.log("hi there")
// )

// const greet=(name:string)=>
// {
//     console.log("hello" +name);
// }

// greet("summit");



interface User{
    firstName:string;
    lastName:string;
    age:number,
    email?:string;//optional using ?
};
function isLegal(user:User)
{
    if(user.age>18)
{
 return true;
}
else{
    return false;
}
}

let result=isLegal({
    firstName:"sumit",
    lastName:"chaubey",
    age:18
})
console.log(result);

