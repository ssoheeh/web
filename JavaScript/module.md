**선언부 앞에 export 붙이기**
```js
// 배열 내보내기
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 상수 내보내기
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// 클래스 내보내기
export class User {
    constructor(name) {
        this.name = name;
    }
}
```

```js
// say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export {sayHi, sayBye}; // 두 함수를 내보냄
```

**import \***
```js
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```

```js
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

**import 'as'**
```js
import {sayHi as hi, sayBye as bye} from './say.js';

hi('John');
bye('John');
```

**Export 'as'**
```js
export {sayHi as hi, sayBye as bye};
```

**export default**

해당 모듈엔 개체가 하나만 있다

```js
// user.js
export default class User {
    constructor(name) {
        this.name = name;
    }
}
```

중괄호 없이 모듈 import 가능

```js
// main.js
import User from './user.js';

new User('John');
```

|named export|default export|
|:---:|:---:|
|export class User {...}|export default class User {...}|
|import {User} from ...|import User from ...|

**모듈 다시 내보내기**
`export ... from ...`
```js
export {sayHi} from './say.js';

export {default as User} from './user.js';
```

