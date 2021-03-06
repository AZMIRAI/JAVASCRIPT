function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    // array[i]와 array[j]를 바꿔치기합니다.
    // 아래 답안에선 "구조 분해 할당(destructuring assignment)"이라 불리는 문법을 사용하여
    // 원하는 것을 구현하였는데,
    // 이 문법에 대한 자세한 내용은 이후 챕터에서 다룰 예정입니다.
    // 구조 분해 할당을 사용하지 않고 작성한 코드는 아래와 같습니다.
    // let t = array[i]; array[i] = array[j]; array[j] = t
  }
}

// 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
for (let key in count) {
  alert(`${key}: ${count[key]}`);
}
