function go() {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("h2h2");
    });
  } // 예제1과 거의 같지만 여기서 then을 사용

  function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);
    //여기는 토시하나 틀리지않음

    return new Promise(resolve => {// 여기도 조금다름
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    })
  }
