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
