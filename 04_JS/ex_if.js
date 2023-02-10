const club = {
  isAdult : false,
  isVip : true,
  isDrunken : true,
  isMoney : false
}



if( ((club.isAdult||club.isVip)&&(!club.isDrunken))||club.isMoney){
  console.log("통과")
} else{
  console.log("돌아가")
}