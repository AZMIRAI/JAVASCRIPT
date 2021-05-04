function Calculator() {
  this.methods = {
    "-": (a, b) => a - b, // - 가 들어오면 a-b 값을 리턴
    "+": (a, b) => a + b // + 가 들어오면 a+b 값을 리턴
  };
  this.calculate = function(str) {
    let split = str.split(' '),
      a = +split[0], //첫번째 배열을 a로 지정
      op = split[1], // 두번째 배열을 op로 지정
      b = +split[2]; // 세번째 배열을 b로 지정
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      //만약 위 배열의 셋중 하나라도 NaN이면
      return NaN; //NaN값 리턴
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
