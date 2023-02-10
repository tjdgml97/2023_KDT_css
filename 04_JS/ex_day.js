let array = ['월','화','수','목','금','일',]

for(let i=0 ;  i<array.length; i++) {

  if(new Date().getDay() === i){
    alert(array[i]);
  }

} 


// for( n of array ){
//   if(new Date().getDay() === n.index){
//     alert(array[n.index]);
//   }
// }