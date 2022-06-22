# WhatType

WhatType helps you check data types in JavaScript. Yhis library returns null, function, weakmap, etc. _because we care about usage of data, not its origin_.

## Quick start

To start, run `npm install whattype --save` for your JavaScript app. Then, in the app:

```js
const whattype = require("whattype");

function yourBeautifulFunction() {
  return "Hey there!";
}

const thisIsString = "How're you doing?";
const thisIsNull = null;

whattype.isNull(thisIsNull); // true

whattype.typeOf(yourBeautifulFunction); // function
whattype.typeOf(thisIsString); // string
whattype.typeOf(thisIsNull); // null

whattype.isReferenceType(yourBeautifulFunction); // true
whattype.isReferenceType(thisIsString); // false
whattype.isPrimitiveType(thisIsNull); // true
```