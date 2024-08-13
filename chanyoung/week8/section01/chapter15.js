// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (주로 사용함)

// 2. 객체 프로퍼티 (객체 속성)
let person = {
  name: "노찬영",
  age: 24,
  hobby: "헬스",
  job: "FE Developer",
  extra: {},
  "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근(점 표기법, 괄호 표기법)
let name = person.name;
console.log(name);
console.log(name1); //존재하지 않는 값에 접근하면 undefined 가 출력된다.

let age = person["age"];
let property = "hobby";
let hobby = person[property];
console.log(hobby); //헬스

// 3.2 새로운 프로퍼티 추가
person.job = "FE Developer";
person["favorite food"] = "떡볶이";

// 3.3 프로퍼티 수정
person.job = "student";
person["favorite food"] = "피자";

// 3.4 프로퍼티 삭제
delete person.job;
delete person["favorite food"];

console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인
let result1 = "name" in person;
console.log(result1); //true
let result2 = "cat" in person;
console.log(result2); //false

