function login(){
  let name;
  name=prompt("이름")
  if(!name){
    alert(""); return
  }
  if (name.length<2||name.length>3){
    alert("인증에 실패했습니다") ;return
  }

  let hakbun;
  hakbun=prompt("학번")
  if(!name){
    alert(""); return
  }
  if (hakbun.length<2||hakbun.length>3){
    alert("인증에 실패했습니다") ;return
  }

  console.log("${name}","${hakbun}")
}
