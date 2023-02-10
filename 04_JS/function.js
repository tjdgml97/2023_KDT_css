// function helloFunc(n) {
//   console.log(`${n+1}`);
// }

// // helloFunc(3);

// function returnFunc() {
//   return "return"
// }

// let str = helloFunc();
// console.log(`result:${str}`);

// let noNameFunc = function () {
//   console.log('No name')
//   return 'noname'
// }

// let str2 = noNameFunc();
// console.log(str2)


// function SayHello(name = 'friend') {
//   console.log(`hello ${name}`);
// }

// SayHello();
// SayHello("mi")


// function sum(num1, num2){
//   return Number(num1)+num2 ;
// }

// console.log(sum(3,4));

// function square(num) {
//   return num ** 2
// }

// console.log(square(10))

// 밑변과 높이 전달 - 삼각형 구하기


function triangle(side, height) {
  console.log(side*height/2)
}

function triangle(side, height) {
  let result = side*height/2 
  console.log(result)
  return result
}


triangle(2,5)
let result_1 = triangle(2,5)


circle = function (radius=3){
  return 3.14*(radius**2)
}

console.log(circle(4))

function pytha(side, height){
  console.log(Math.sqrt(side**2 + height**2))
}

pytha(3,3)
