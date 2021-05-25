promise
  .then(f1)
  .catch(f2);
  // 이 코드에서는 f1에서 에러가 나면
  // 아래의 코드에서는 catch에서 에러가 처리됨
  promise
    .then(f1, f2);
  // 이 코드는 에러가 발생하면 이어지는체인이없다
  // 그래서 에러 처리를 못한다
