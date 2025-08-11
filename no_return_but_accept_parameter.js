function showAnimalSound(animal) {
  console.log(`${animal} makes a sound!`);
}

showAnimalSound("Lion");

function battleLog(playerName, enemyName, damage) {
  // log attack
  // check critical hit
}

battleLog("Knight", "Dragon", 65);
// "Knight attacked Dragon for 65 damage!"
// "It was a critical hit!"

function battleLog(playerName, enemyName, damage) {
  console.log(`${playerName} attacked ${enemyName} for ${damage} damage!`);

  if (damage > 50) {
    console.log("It was a critical hit!");
  }
}

// Example
battleLog("Knight", "Dragon", 65);
// "Knight attacked Dragon for 65 damage!"
// "It was a critical hit!"
