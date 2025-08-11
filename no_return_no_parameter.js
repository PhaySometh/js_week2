function startGame() {
  console.log("Game started! Let’s go!");
}

startGame();

function startGame() {
  // log welcome message
  // pick random tip and log
}

startGame();
// "Welcome to Monster Quest!"
// "Tip: Upgrade your armor often"

function startGame() {
  console.log("Welcome to Monster Quest!");

  const tips = [
    "Always carry healing potions",
    "Watch out for traps",
    "Upgrade your armor often"
  ];

  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  console.log(`Tip: ${randomTip}`);
}

// Example
startGame();
// "Welcome to Monster Quest!"
// "Tip: Upgrade your armor often"
