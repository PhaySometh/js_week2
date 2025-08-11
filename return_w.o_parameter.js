function getRandomAnimal() {
  const animals = ["Tiger", "Dog", "Eagle"];
  return animals[Math.floor(Math.random() * animals.length)];
}

console.log(getRandomAnimal());

function spawnRandomMonster() {
  // pick random monster
  // pick random level
  // return message
}

console.log(spawnRandomMonster());
// "A Level 3 Dragon has appeared!"

function spawnRandomMonster() {
  const monsters = ["Goblin", "Orc", "Dragon", "Slime"];
  const randomMonster = monsters[Math.floor(Math.random() * monsters.length)];

  const randomLevel = Math.floor(Math.random() * 5) + 1;

  return `A Level ${randomLevel} ${randomMonster} has appeared!`;
}

// Example
console.log(spawnRandomMonster());
// "A Level 3 Dragon has appeared!"

