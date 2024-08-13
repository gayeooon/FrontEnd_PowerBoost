// 함수 선언
function greeting() {
  console.log("안녕하세요!");
}

greeting();

function getArea(width, height) {
  let area = width * height;

  return area;
}

let area1 = getArea(10, 20);
console.log(area1); //200
let area2 = getArea(30, 20);
console.log(area2); //600
