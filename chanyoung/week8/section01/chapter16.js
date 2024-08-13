// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "범이",
  color: "black",
};

animal.age = 4; //추가
animal.name = "임범"; //수정
delete animal.color; //삭제

// 2. Method
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "노찬영",
  //메서드 - 객체의 동작을 정의하는 데 사용함
  sayHi: function () {
    console.log("안녕!");
  },
};

person.sayHi();
