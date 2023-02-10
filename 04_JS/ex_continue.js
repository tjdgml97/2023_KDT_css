let sum = 0;

for(let i=1; i<=1000; i++){
  if(i%2===1) continue;
  sum+=i;
  console.log(`짝수는 : ${i}`)
}
console.log(sum)