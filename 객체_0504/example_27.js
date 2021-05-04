function copySorted(arr) {
  return arr.slice().sort(); //slice, sort 한 값을 리턴받음
}

let arr = ["HTML", "JavaScript", "CSS"]; // arr배열선언

let sorted = copySorted(arr); // 배열 복사

alert( sorted );
alert( arr );
