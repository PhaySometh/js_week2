// Normal
function jump(animal) {
  return `${animal} jumps high!`;
}

// Arrow
const jumpArrow = (animal) => `${animal} jumps high!`;

console.log(jumpArrow("Kangaroo"));

function greet(player = "Guest") {
  return `Hello, ${player}! Welcome to the game.`;
}

console.log(greet("Alex")); // "Hello, Alex!..."
console.log(greet()); // "Hello, Guest!..."

// TODO: Write your arrow function here

// Test the function
console.log(powerAttack());           // "Hero dealt 10 damage!"
console.log(powerAttack("Knight"));   // "Knight dealt 10 damage!"
console.log(powerAttack("Mage", 25)); // "Mage dealt 25 damage!"

const powerAttack = (player = "Hero", damage = 10) => {
  return `${player} dealt ${damage} damage!`;
};

// Test the function
console.log(powerAttack());           // "Hero dealt 10 damage!"
console.log(powerAttack("Knight"));   // "Knight dealt 10 damage!"
console.log(powerAttack("Mage", 25)); // "Mage dealt 25 damage!"
