// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;

// 3. typeof 연산자
// -> 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";
var7 = true;

let t1 = typeof var7;
console.log(t1); //boolean

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
let var8 = 10;
// 요구사항: 변수 res에 var8의 값이 짝수라면 "짝", 홀수라면 "홀"이 출력되도록 하라
let res = var8 % 2 === 0 ? "짝수" : "홀수";
