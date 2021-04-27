let obj = new Object();

function A() {
   return obj;
 }

function B() {
   return obj;
 }

alert(new A() == new B());
