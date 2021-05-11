function ask (a1,a2,a3){
let ans = prompt("a1");
if (ans == ""){
  a2();
}else {
  a3();
}
}

function a1{
// a1의 함수

}
function a2{
// a2의 함수
}

ask("" , a1, a2);
