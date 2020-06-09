// 1. images 배열안에 있는 정보(height, width)를 곱해 넓이를 구하여 areas 배열에 저장하세요.

const images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 },
];

const areas = [];

images.forEach((image) => areas.push(image.height * image.width));
console.log(areas);

// 2. 아래 함수에서 for 를 forEach 로 바꾸세요.
function handlePosts() {
  const posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" },
  ];

  /* for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);
    console.log(posts[i].id);
    console.log(posts[i].title);
  } */

  posts.forEach((post) => {
    console.log(post);
    console.log(post.id);
    console.log(post.title);
  });
}

handlePosts();

// 3. 숫자가 담긴 배열로 각 숫자들의 제곱근이 들어있는 새로운 배열 roots를 만드세요.
const newNumbers = [4, 9, 16];

let roots = [];
// forEach 사용
/* newNumbers.forEach((number) => roots.push(Math.sqrt(number)));
console.log(roots); */

// map 사용
roots = newNumbers.map((number) => Math.sqrt(number));
console.log(roots);

// 4. 속도(distance/time)를 저장하는 배열 speeds 를 만드세요.
const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];
// 방법 1. forEach
const speeds = [];
trips.forEach((item) => speeds.push(item.distance / item.time));
console.log(speeds);

// 방법 2. map
const mapResult = trips.map((item) => item.distance / item.time);
console.log(mapResult);

// 5. numbers 배열중 50보다 큰 값들만 모은 배열 filteredNumbers 을 만드세요.
const numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

const filteredNumbers = numbers.filter((item) => {
  return item > 50;
});
console.log(filteredNumbers);

// 6. 배열에 담긴 중복된 이름을 {'이름': 수} 형태의 object로 반환하세요. (map)
const names = ["harry", "jason", "tak", "tak", "justin"];
let result = {};
result = names.reduce((prev, curr) => {
  prev[curr] = (prev[curr] || 0) + 1;
  return prev;
}, {});
console.log(JSON.stringify(result));

// 7. people에서 admin 권한을 가진 요소를 찾으세요. (find)
const people = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true },
];

// find의 반환형 : 배열의 요소
const result1 = people.find((person) => {
  return person.admin === true;
});
console.log(result1);

// 8. accounts에서 잔액이 24,000인 사람을 찾으세요. (find)
const accounts = [
  { name: "justin", balance: 1200 },
  { name: "harry", balance: 50000 },
  { name: "jason", balance: 24000 },
];

const result2 = accounts.find((account) => {
  return account.balance === 24000;
});
console.log(result2);

// 9. requests 배열에서 status가 pending인 요청이 있는지 확인하세요. (some)
const requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" },
];

const hasPending = requests.some((request) => {
  return request.status === "pending";
});
console.log(hasPending);

// 10. users 배열에서 모두가 submmited 인지 여부를 hasSubmitted 에 저장하세요. (every)
const users = [
  { id: 21, submmited: true },
  { id: 33, submmited: false },
  { id: 712, submmited: true },
];

const hasSubmitted = users.every((user) => {
  return user.submmited === "submmited";
});
console.log(hasSubmitted);
