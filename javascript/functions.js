arrowfunc = (stud) => {
    console.log(stud)
}
arrowfunc(["CSE","IT","AIML"]);
//eg1



arrowfunc1 = (stud) => {
    console.log(stud[0])
}
arrowfunc1(["CSE","IT","AIML"]);
//eg2


arrowfunc2 = (stud) => {
    console.log(stud[2])
}
arrowfunc2(["CSE","IT","AIML"]);
//eg3
//destruction operator
var marks =[89,73,84]
var [m1,m2,m3] = marks
console.log(m1,m2,m3)
//ternary operator

a=10
out = (a%2 == 0) ? "even": "odd"
console.log(a,"is",out)

//Spread operator

arr1 = [10,20,30]
arr2 = [40,50,60]
arr3 = [...arr1,...arr2]
console.log(arr3)

//Rest operator
function restOPEx(...args){
    console.log(args)
}
restOPEx("CSE","IT","AIML",10,20,30)

//Scope
var a = 5;
const p = 3.14
console.log("o",a);
console.log("o",p);
{
    let a = 54;
    let b=64;
    var c=31;
    console.log("b",a);
    console.log("b",b);
    console.log("b",c);
}
    console.log("o",a);
    console.log("o",p);
    console.log("o",c);
