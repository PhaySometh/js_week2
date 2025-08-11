function feedAnimal(animal, food) {
  return `${animal} is eating ${food}`;
}

console.log(feedAnimal("Cat", "fish")); 
// "Cat is eating fish"

// Create a function called calculateDamage that takes two parameters: attackPower and defense. It should return the damage dealt, which is attackPower - defense.
function calculateDamage(attackPower, defense) {
  // your code here
}

console.log(calculateDamage(50, 20)); // should return 30

function calculateFinalScore(playerName, scoresArray) {
  // sum up scores using loop
  // apply bonus if needed
  // return final message
}

console.log(calculateFinalScore("Alice", [30, 25, 50])); 
// "Alice’s final score is 115"


function calculateFinalScore(playerName, scoresArray) {
  let total = 0;

  // Sum up all scores
  for (let score of scoresArray) {
    total += score;
  }

  // Apply bonus if over 100
  if (total > 100) {
    total += 10;
  }

  return `${playerName}’s final score is ${total}`;
}

// Example
console.log(calculateFinalScore("Alice", [30, 25, 50])); 
// "Alice’s final score is 115"
