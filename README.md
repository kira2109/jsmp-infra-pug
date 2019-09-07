# jsmp-infra-pug
<p>This package is aimed to help you with creating unique arrays and unique strings.</p>

<h1>Installation</h1>

```console
npm i jsmp-infra-pug
```

<h1>Usage</h1>

### getUniqueValuesArray (array, type = 'number', reverse = false)
```console
// array - initial array
// type - output array elements type
// reverse - output array elements order
```

### getUniqueString (string, length = string.length, reverse = false)
```console
// string - initial string
// length - output string length
// reverse - output string characters order
```

<h2>Getting unique array examples</h2>

>By default the method returns unique values array with type 'number'.

```js
const uniqueArrayHandler = require('./index').getUniqueValuesArray;

const initialArray = [1,'string', 1, 0, undefined, 2, 1];
const outputArray = uniqueArrayHandler(initialArray);
// [ 1, 0, 2 ]
```

>Get unique values array with specified type 

```js
const uniqueArrayHandler = require('./index').getUniqueValuesArray;

const initialArray = [1,'string', 1, 0, undefined, 2, 1];
const outputArray = uniqueArrayHandler(initialArray, 'string');
// [ 'string' ]
```

>Get unique values array with reversed order

```js
const uniqueArrayHandler = require('./index').getUniqueValuesArray;

const initialArray = [1,'string', 1, 0, undefined, 2, 1];
const outputArray = uniqueArrayHandler(initialArray, 'number', true);
// [ 2, 0, 1 ]
```

<h2>Getting unique string examples</h2>

>By default the method returns a unique characters string

```js
const uniqueStringHandler = require('./index').getUniqueString;

const initialString = 'awesome javascript';
const outputString = uniqueStringHandler(initialString);

// 'awesom jvcript'
```

>Get unique characters string set length

```js
const uniqueStringHandler = require('./index').getUniqueString;

const initialString = 'awesome javascript';
const outputString = uniqueStringHandler(initialString, 5);

// 'aweso'
```

>Get unique characters string set length and reversed order

```js
const uniqueStringHandler = require('./index').getUniqueString;

const initialString = 'awesome javascript';
const outputString = uniqueStringHandler(initialString, 5, true);

// 'osewa'
```
