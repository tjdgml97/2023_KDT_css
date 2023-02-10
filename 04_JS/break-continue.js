// 짝수일때 , 15면 멈춤

for( let i=0; i<20; i++) {
  if(i%2 === 1) continue;
  console.log(`${i}`)

  if(i===16 )break;
}
