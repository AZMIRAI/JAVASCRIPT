// 윗 예시는 catch가 트리거 되지않음
// Try catch문이 감싸고 있기에
// 모든 동기적 에러는 암시적 try catch 에서 처리
new Promise(function(resolve, reject) {
  setTimeout(() => {
    throw new Error("에러 발생!");
  }, 1000);
}).catch(alert);
