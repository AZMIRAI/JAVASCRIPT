class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = 'HttpError';
    this.response = response;
  }
}
async function loadJson(url) {
  let response = await fetch(url);
  if (response.status == 200) {
    return response.json();
  } else {
    throw new HttpError(response);
  }
}
async function demoGithubUser() {
  let user;
  while(true) {
    let name = prompt("GitHub username을 입력하세요.", "iliakan");
    try {
      user = await loadJson(`https://api.github.com/users/${name}`);
      break; // 에러가 없으므로 반복문을 빠져나옵니다.
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        // 얼럿 창이 뜬 이후에 반복문은 계속 돕니다.
        alert("일치하는 사용자가 없습니다. 다시 입력해 주세요.");
      } else {
        // 알 수 없는 에러는 다시 던져집니다.
        throw err;
      }
    }
  }
  alert(`이름: ${user.name}.`);
  return user;
}
demoGithubUser();
