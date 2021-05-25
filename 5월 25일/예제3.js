function delay(ms) {
  // 추가 해야되는 코드
  return new Promise( resolve => setTimeout(  resolve , ms ))
}

delay(3000).then(() => alert('3초후 실행'));
