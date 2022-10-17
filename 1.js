// let multiply = function(x,y){
//     console.log(x*y);

// }


//closer example 
let multiply  = function (x){
    return function(y){
        console.log(x*y);
    }
}
let multiplyByTwo = multiply(2);
multiplyByTwo(5);

let multiplyByThree= multiply( 3);
multiplyByThree(5);

let multiplyByfour= multiply(4);
multiplyByfour(5);
// let multiplyByTwo = multiply.bind(this , 2);
// multiplyByTwo(5);

// let multiplyByTwo = multiply.bind(this , 2 , 3);
// multiplyByTwo(5);

// let multiplyByTwo = multiply.bind(this , 2);
// multiplyByTwo(3);



// let multiplyByThree = multiply.bind(this , 3);
// multiplyByThree(5);
