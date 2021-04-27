function sumInput() {

  let numbers = [];

  let flag = 1;
  while (flag>0) {

    let value = prompt("숫자를 입력하세요", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+(value));
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());
