function min (){
  if (arguments.length<2){
    alert("오류");
    return;
  }
  let min = Infinity;
  for (let nun of arguments){
    min = min > num ? num : min ;
  }
  return min;
}
