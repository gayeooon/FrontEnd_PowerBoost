// 1. Number Type
let num1 = 24;
let num2 = 1.5;
let num3 = -10;

console.log(num1 + num2);
console.log(num2 - num3);
console.log(num1 * num3);
console.log(num1 / num2);
console.log(num1 % num2); //나머지 연산(모듈러)

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; //수치연산을 실패했을 때 결과값으로 나타남.

// 2. String Type
let myName = "노찬영";
let myLocation = "마곡나루";
let introduce = myName + myLocation;

console.log(introduce);

let introduceText = `${myName}은 ${myLocation}에 거주합니다`;

console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type
let empty = null;

// 5. Undefined Type
let none;
console.log(none);
