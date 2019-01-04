function fibonacci(number, memo) {
        if (number == 0 || number == 1) return number;    
        if (memo[number] === 0) {
            memo[number] = fibonacci(number - 1, memo) + fibonacci(number - 2, memo);
        }
        console.log(memo[number]);
        return memo[number];
}

var memo = [];
memo[0] = 0;
console.log(fibonacci(5),memo);
console.log(fibonacci(10),memo);

var fibonacciselfref = (function() {
    var memo = {};
  
    function f(n) {
      var value;
  
      if (n in memo) {
        value = memo[n];
      } else {
        if (n === 0 || n === 1)
          value = n;
        else
          value = f(n - 1) + f(n - 2);
  
        memo[n] = value;
      }
  
      return value;
    }
  
    return f;
  })();

console.log(fibonacciselfref(5));
console.log(fibonacciselfref(10));

// A bit clearer version of memoization with stringified cache


function memo(func){
    var cache = {};
      return function(){
        var key = JSON.stringify(arguments);
        if (cache[key]){
          return cache[key];
        }
        else{
          val = func.apply(null, arguments);
          cache[key] = val;
          return val; 
        }
    }
}

var fib = memo(function(n) {
    if (n < 2){
      return 1;
    }else{
     //We'll console.log a loader every time we have to recurse
      console.log("loading...");
      return fib(n-2) + fib(n-1);
    }
 });

