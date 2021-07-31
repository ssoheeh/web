# JavaScript ES6
* The let keyword
> allows to seclare a variable with block scope.
* The const keyword
> allows to declare a constant
* Arrow Functions
> allows a short syntax for writing function expressions
> don't need the `function` keyword, the `return` keyword, and the **curly brackets**.

**export**
```js
// exchange.js

const dollarToWonRate = 1177.1;
const euroToWonRate = 1298.3;
const yenToWonRate = 10.8;
const cynToWonRate = 169.7;

// 첫 번째 export 방법

export function dollarToWonFn(dollar) {
    return dollar * dollarToWonRate;
};

// 두 번째  export 방법

const euroToWonFn = (euro) => {
    return euro * euroToWonRate;
};

export { euroToWonFn };

// default 키워드를 사용하여 export

const yenToWonFn = (yen) => {
    return yen * yenToWonRate;
};

const cynToWonFn = (cyn) => {
    return cyn * cynToWonRate;
};

export default {yenToWonFn, cynToWonRate};
```

**import** 
```js
// calculate.js

// 첫 번째 import 방법 : Destructuring

import { dollarToWonFn } from './exchange.js';

console.log(dollarToWonFn(10)); //11771

// 두 번째 import 방법 : Alias

import * as currency from './exchange.js';

console.log(currency.euroToWonFn(10)); // 12983

// export default를 import 하는 방법

import JpAndCn from './exchange.js';

console.log(JpAndCn.yenToWonFn(1000)); //10800
console.log(JpAndCn.cynToWonFn(100)); // 16790

const { yenToWonFn, cynToWonFn } = JpAndCn;

console.log(yenToWonFn(1000));
console.log(cynToWonFn(100));
```