function unique(arr) {
  let result = [];
  // 빈 배열을 만든다
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
      // 포함하지않으면 리설트에 str을 삽입한다
    }
  }
  return result;
  // 리설트를 반환한다
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
alert( unique(strings) ); // Hare, Krishna, :-O
