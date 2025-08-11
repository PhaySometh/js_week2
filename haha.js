const helloMessage = () => {
    return (
        <>
            <h1>Hello from Arrow Function</h1>
        </>
    );
};

const calculateFinalScore = (playerName, scoresArray) => {
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
};

console.log(calculateFinalScore("Black Jamal", [30, 25, 50]));

export default helloMessage;