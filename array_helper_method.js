/* ---------------------------------------------- */
// Ⅰ. forEach

const colors = ["red", "blue", "green"];

// 배열의 요소를 순환 및 출력 (인덱스 중심)

// 1. 전통적인  for문
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 2. 순회문으로서의 for문
for (let color of colors) {
  console.log(color);
}

// 3. forEach helper method
colors.forEach((color) => {
  console.log(color);
});

/* ---------------------------------------------- */
// Ⅱ. filter()

const numbers = [-20, -15, 5, 10];
const positiveNumbers1 = [];
numbers.forEach((number) => {
  if (number > 0) {
    positiveNumbers1.push(number);
  }
});
console.log(positiveNumbers1);

const positiveNumbers2 = numbers.filter((number) => {
  return number > 0;
});
console.log(positiveNumbers2);

/* ---------------------------------------------- */
// Ⅲ. map()
// -> 순회를 하며, 내부의 모든 요소에 동일한 작업을 해야하는 경우
// -> 숫자배열 <-> 글자배열, 동일한 데이터를 적용해야 하는 경우

const inputs = ["1", "5", "3", "6"];
const numberInputs = inputs.map((input) => parseInt(input));
console.log(numberInputs);

let result = 0;
numberInputs.forEach((num) => (result += num));
console.log(result);

/* ---------------------------------------------- */
// Ⅳ. reduce()
// -> 순회를 하며, 내부의 모든 요소를 하나의 값으로 환원해야 하는 경우

numberInputs.reduce((a, b) => {
  console.log("a : " + a + " b : " + b);
  // a : 누적값 , b : 현재값
  return a + b;
});

let sum = numberInputs.reduce((a, b) => a + b);
console.log(sum);
