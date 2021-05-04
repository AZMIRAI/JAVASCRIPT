function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
  // reduce를 사용해서  age 를 다 더해서 길이만큼 나누고 반환
}
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // 28
