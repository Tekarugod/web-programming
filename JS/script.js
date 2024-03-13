// // let a = parseInt(prompt("enter a number")) //string
// // let b = parseInt(prompt("enter a number"))
// // let c = parseInt(prompt("enter a number"))
// // let d = parseInt(prompt("enter a number"))

// // if(a==b&&b==c&&c==d){
// //     alert(a+b+c+d);
// // }
// // else if(a==c&&b==d || a==b&&c==d){
// //     alert((a+c+b+d)*2)
// // }
// // else{
// //     alert((a+c+b+d)/2)
// // }
// const arr=[1,2,3];
// arr.push(4);
// alert(arr);
let ages = [
    0,
    16,
    5,
    4,
    19,
    11,
    10
]
let age=10
function myFunk(ages, age){
    let result = []
    for(let i = 0; i < ages.length; i++){
        if(ages[i]>age){
            result.push(ages[i])
        }
    }
    return result;
}
console.log(myFunk(ages,age));

