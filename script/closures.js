
// closures

function sayHello(name){
    return function(){
        console.log('hello ' + name)
    };
}

let abi = sayHello('Abigail');
let abu = sayHello('Abu');
let beth = sayHello('Beth');

abi();
abu();
beth();



function multiplier(factor = 5){
    return number =>  number * factor;    
}

let a = multiplier();
let b = multiplier();
console.log(a(3));
console.log(b(5));

function min(num1, num2){
    return Math.min(num1, 2);
}

console.log(min(1));


function counter(){
    let count = 0;

    return function(){
        count++ ;
        return count;
    } 
     
}
const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());


function createPerson(initialName){
   function print(message){
    console.log(message)
   }

return (
    {
       getName: function(){
             console.log(initialName);
         },

       setName: function(value){
             initialName = value;
         }
    }
)
   
}

const person = createPerson('Emess');
console.log(person.getName());

person.setName('Emelia');
console.log(person.getName());

function curry(func){

return sum = (a,b,c) => a + b + c;

}

