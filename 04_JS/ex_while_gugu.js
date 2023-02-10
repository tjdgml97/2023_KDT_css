let i=2;
let j=1; 

console.log("while 구구단")

while(i<10){
  console.log(`${i}단`)
  j=1;
  while(j<=9){
    console.log(`${i}*${j}=${i*j}`)
    j++;
  }
  i++;
}