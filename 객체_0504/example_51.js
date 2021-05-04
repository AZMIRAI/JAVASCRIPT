function getSecondsToTomorrow() {
  let now = new Date();
  // 객체 선언
  let hour = now.getHours();
  // 시간 받기
  let minutes = now.getMinutes();
  // 분 받기
  let seconds = now.getSeconds();
  // 초 받기
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;
  return totalSecondsInADay - totalSecondsToday;
}
