![EaSSRy, Easy Server-Side Rendering for NodeJS](https://i.imgur.com/hckpYAv.png)

## Install
```
npm i eassry --save
```

## How To Use
1. Require EaSSRy
```javascript
const eassry = require('eassry');
```
2. Make some variables
```javascript
let var1 = "testing";
let var2 = "Neat";

let nonRendered = "I'm curently {{var1}} EaSSRy. {{var2}} huh? {{var1}}, {{custom.a}}{{custom.b}}";
```
3. Use eassry( string, {variables} ) to render your string.
```javascript
let rendered = eassry(nonRendered, {
    var1,
    var2,
    custom: {a: "how cool", b: "!"}
})

console.log(rendered) // -> I'm curently testing EaSSRy. Neat huh? testing, how cool!
```

It's that easy to use.

## License
```
The MIT License (MIT)

Copyright (c) 2017 Hampus Lundqvist

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
