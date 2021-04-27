function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    this.value += +prompt('더할 값을 입력해주세요.', 0);
  };

}

let accumulator = new Accumulator(100);
accumulator.read();
accumulator.read();
alert(accumulator.value);
