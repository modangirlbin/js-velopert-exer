const object = { a: 1, b: 2};

// a,b를 바깥으로 꺼냄
// const { a, b } = object;
// console.log(a); //1
// console.log(b); //2

// 함수의 파라미터로도 사용할수 있다 
function print(a, b){
  console.log(a);
  console.log(b);
}
print(object); //1,2

// 기본값 설정
// const object = {a: 1};
// const { a, b =2 } = object;
// console.log(a); //1
// console.log(b); //2