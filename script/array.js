

let fruits = ['Banana', 'Mango', 'Apples', 'Straw Berries'];
let fruits2 = ['Sweet Apples', 'lemon', 'Oranges']
  
// accessing the third element
let thirdEle = fruits[2];
console.log(thirdEle);

// modifying element 2 to a new fruit
fruits[2] = 'Pawpaw';
let newElement = fruits[2];
console.log(newElement);

// length of the array
let len =  fruits.length;
let print = fruits;
console.log(print);
console.log(len);

// concat f1 and f2 
let concat = fruits.concat(fruits2);
let concatLen = concat.length;
console.log(concatLen);
console.log(concat);

// adding new Fruit to the array using push method n pop method to remove the last element
let newPush =  concat.push('Avocado Pear', 'berries');
let concatLen2 = concat.length
console.log(concatLen2);
console.log(concat);

//   pop
let removeEle = concat.pop();
console.log(concat);

// adding fruit(element) to the array
concat.unshift('Sugar cane')
console.log(concat);
concat.shift('')
console.log(concat);

// slice a portion of your original array
let slice = fruits.slice(fruits2);
console.log(slice);

// indexOff
let indexOf = fruits.indexOf('Mango');
console.log(indexOf);

// splice method to del 2 fruit and add new fruits
console.log(fruits);
let spliceFruit = fruits.splice(1, 2)
console.log(spliceFruit);

// splice add
// let num = [1,2,3,4,5,6,7,8,9];
//  num.splice(1, 0, 10)
// console.log(num);


// filter method
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNum = num.filter( (numEven , odd) => {
        return numEven % 2 == 0;
})
console.log(evenNum);

// map 
const doubledNum = num.map((double) => {
    return double * 2;
})

console.log(doubledNum);

// reduce 
let numReduce = [1, 2, 3, 4, 5];
 const sum = numReduce.reduce((result, cValue) => {
    return result + cValue;
}, 0)
console.log(sum);

// forEach 
concat.forEach((fruit) => {
    console.log(fruit + ' Sweet')
})

// every
const everyNum = num.every((num) => {
    return num < 15 ;
})
console.log(everyNum);

// some
const someNum = num.some((even) => {
    return even % 2 == 0;
})
console.log(someNum);

// sort 
const sortNum = num.sort((a, b) => {
    return b - a
})
console.log(sortNum);

// reverse 
let reverse = concat.reverse()
console.log(reverse);

reverse.forEach((rev) => {
    console.log(rev);
});

const findEven = num.find((even) => {
    return even % 2 === 0 ;
});
console.log(findEven);

// splice challenges

 const clearDuplicate = function spliceInput(arr){
     for(i = 0; i < arr.length; i++) {
        for(j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j, 1);
                j--;
            }
        };
     };
     return arr;
}
let arrInput = [1, 2, 1, 2, 2, 4, 5, 4];
let result = clearDuplicate(arrInput);
console.log(result);


// remove data duplications
// approach
// create a function
// iterate through the original data and compare with the same data

const doubleData = function clearNameDuplication(name){
       for(i = 0; i < name.length; i++){
        for(d = i + 1; d < name.length; d++){
            if(name[i] === name[d]){
                name.splice(d, 1);
                d--;
            };
        };
       };
      return name;
}
let nameInput = ['Abi', 'Emma', 'Esi', 'Emma', 'Abi', 'Abi', 'Nancy'];
let original = doubleData(nameInput);
console.log(original);

console.log 
  ('%cHello, World',
'color:blue;; font-size: 40px');



// todo List

let todo = [];

function remember(task){
    todo.push(task);
}

function urgentTask(task){
    todo.unshift(task);
}

function finishedTask(task){
    todo.slice(task)
}


urgentTask('learn')
remember('wash');
finishedTask('wash')
console.log(todo);


let person = "James";
console.log("Hello", person );

var petDog = "Rex";
console.log(petDog);






















