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
