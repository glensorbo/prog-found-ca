/*
 * 1.
 * Declare and initialise a variable with a string value.
 */

const imageURL = "https://images.miabelle.tv/large/Kickitalt_cover_generic.jpg";

/*
 * 2.
 * Create an object variable called person and give it two properties (a key and a value) of your choice.
 */

const user = {
  email: "email@email.com",
  password: "aGreatPasswordToBeHashed",
};

/*
 * 3.
 * Create a variable called outOfStock and assign it a boolean value.
 * Create an if else statement that checks the value of outOfStock.
 * If it is true, console log "Out of stock". Otherwise log "In stock".
 */

const outOfStock = true;

if (outOfStock === true) {
  console.log("Q3: " + "Out of stock");
} else {
  console.log("Q3: " + "In stock");
}

// Had to try ternary also
outOfStock === true
  ? console.log("Q3: " + "Out of stock")
  : console.log("Q3: " + "In stock");

/*
 * 4.
 * Create an array of five numbers. Loop through the array and console log each value.
 */

const userIds = [
  "534654674574",
  "590465458636",
  "435456456836",
  "896753457648",
  "985698467946",
];

for (let i = 0; userIds.length > i; i++) {
  console.log("Q4:", userIds[i]);
}

/*
 * 5.
 * Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
 */

for (let i = 15; i <= 25; i++) {
  console.log("Q5:", i);
}

/*
 * 6.
 * Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
 */

for (let i = 15; i <= 25; i++) {
  if (i === 20) {
    console.log("Q6:", i);
  }
}

/*
 * 7.
 * Create an array of two objects. Each object must have the same three properties (with different values):
 *  1. one property with a string value
 *  2. one property with a number value
 *  3. one property with a boolean value
 * Loop through the array and console log the number value and the boolean value.
 */

const puppies = [
  {
    name: "yoshi",
    age: 5,
    washed: true,
  },
  {
    name: "marco",
    age: 6,
    washed: false,
  },
];

for (let i = 0; puppies.length > i; i++) {
  console.log("Q7:", "age:", puppies[i].age, "washed:", puppies[i].washed);
}
