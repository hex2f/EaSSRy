const eassry = require('./index.js');

let var1 = "testing";
let var2 = "Neat";

let nonRendered = "I'm curently {{var1}} EaSSRy. {{var2}} huh? {{var1}}, {{custom.a}}{{custom.b}}";

console.log(
  eassry(nonRendered, {
    var1,
    var2,
    custom: {a: "how cool", b: "!"}
  })
)
