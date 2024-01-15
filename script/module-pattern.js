
const counter = (function(){
      
    // private stuff
    let count = 0;
    function print(message){
       console.log(message + ' ---' + count);
    }
    
    // return objects
    return {
        // value: count,

        get: function(){
            return count;
        },

        set: function(value){
            count = value;
        },

        increment: function(){
            count++;
            print('Increment: ');
        },

        reset: function(){
            print('before reset: ')
            count = 0;
            print('after reset: ')
        },

    }
}());

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());       
console.log(counter.increment());       

 
// console.log(counter.value);
console.log(counter.set(70));
console.log(counter.get(700));

console.log(counter.reset());
// console.log(counter.reset());
