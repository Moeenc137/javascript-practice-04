// // loops:

// // for-loop:

let num = "moin";

for (let i = 1; i <= 5; i++) {
  console.log(num);
}
console.log("loop has ended");

// // while loop:
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// do-while loop:

let ii = 1;
do {
  console.log("loop");
  i++;
} while (i <= 5);

//for-of loop:

let str = "javascript";
let size = 0;
for (let il of str) {
  console.log(il);
  size++;
}
console.log(size);

//for-in loop:

let student = {
  name: "Bilal",
  uni: "LUMS",
  city: "Lahore",
  age: 22,
  cgpa: 3.5,
};

for (let st in student) {
  console.log(st, student[st]);
}

// if (even % 2 === 0) {
//   console.log("the number is even");
// } else {
//   console.log("num is not even");
// }

// practice(for-loop):  sort all even values from 0-100

for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("i:", i);
  }
}

// practice : ask user for numbers until user give the right answer.

let gamenum = 25;
let asknum = prompt("Enter the number");

while (gamenum != asknum) {
  gamenum = prompt("try again");
}
console.log("Right number");
