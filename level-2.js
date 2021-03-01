/*
 * 1.
 * Using the loop from question 5 above, only log the counter variable if it is an even number.
 * HINT: You can use the modulus % operator for this.
 */

// I used questing 3 in below repo as reference. That was ODD numbers so === gave me what I wanted.
// https://github.com/NoroffFEU/lesson-task-pf-module1-lesson4/blob/answers/js/script.js

for (let i = 15; i <= 25; i++) {
  if (i % 2 === 0) {
    console.log("Q1", i);
  }
}
