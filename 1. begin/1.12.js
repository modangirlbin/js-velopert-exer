
// 비구조화 할당(객체구조분해) - 특정값을 객체에서 빼온다
const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};
// 1.
// function print(hero) {
//   const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
//   console.log(text);
// }

// 2.
// function print(hero) {
//   const {alias, name, actor} = hero; // const {어떤값을} = 어디에서 추출하고 싶은지
//   const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`; // hero.name 요래 안써도됨
//   console.log(text);
// }

// 3. 파라미터 사용
function print({alias, name, actor}) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}

print(ironMan);
print(captainAmerica);

// 4. 굳이 함수 내부가 아니어도 됨
const {actor} = ironMan;
console.log(actor);