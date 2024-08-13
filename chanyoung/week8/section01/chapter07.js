// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;
console.log(num6); //21

let num7 = (1 + 2) * 10;
console.log(num7); //30

// 3. 복합 대입 연산자
let num8 = 10;
num8 += 20;
num8 -= 20;
num8 *= 20;
num8 /= 20;
num8 %= 20;

// 4. 증감 연산자
let num9 = 10;
++num9; //전위 연산
num9++; //후위 연산

// 5. 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not); //true false false

// 6. 비교 연산자
let comp1 = 1 === 2; //=== 으로 비교해 자료형까지 비교할 수 있다.
let comp2 = 1 !== 2;
console.log(comp1, comp2); //false true

let comp3 = 2 > 1;
let comp4 = 2 <= 1;
console.log(comp3, comp4); //true false
