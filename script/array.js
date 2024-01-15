

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
concatLen2 = concat.length
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





