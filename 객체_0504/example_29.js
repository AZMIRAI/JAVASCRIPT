let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name);
  //users에 맵을사용해 name 만을 추출한다
alert( names ); // John, Pete, Mary
