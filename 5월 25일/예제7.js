async function loadJson(url) {
  // 이 함수는 async함수
  let response = await fetch(url);
  // 이 함수안의 then은 전부 await로
  if (response.status == 200) {
     return response.json();
  }
  throw new Error(response.status);
}
loadJson('no-such-user.json')
  .catch(alert);
  // 여기서 던져진 에러는 catch에서 처리됨
  // loadJson호출하는 코드는 async함수 내부가 아님
