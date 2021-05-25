let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

// 1이 출력된다, 첫번째 줄은 호출만 고려대상이기때문에
// 두번째 resolve 는 무시되기때문
