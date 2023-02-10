// for(let i =2; i<=9; i+=1 ) {
//   for( let j=1; j<=9 ; j+=1) {
//     console.log(`${i}*${j}=${i*j}`)
//   }
// }


let sum = 0; 

for(let i=0 ; i<=100; i+=1) {


  if(i%2===0||i%5===0) {
    console.log("배수:",i)
    sum+=i;
  }
}

console.log("result : ",sum)