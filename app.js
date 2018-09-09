'use strict';

const meno = new Map();
meno.set(0, 0);
meno.set(1, 1);
function fib(n){
    if(meno.has(n)){
        return meno.get(n);
    }
    const value = fib(n-1) + fib(n-2);
    meno.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}

//指数オーダーの関数
//function fib(n){
//  if (n === 0){
//    return 0;
//  } else if(n === 1) {
//      return 1;
//  }
//  return fib(n-1) + fib(n-2);
//}
//
//const length = 40;
//for (let i = 0; i<= length; i++){
//  console.log(fib(i))
//}
