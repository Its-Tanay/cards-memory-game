export default function ScoreBoard({score, highScore}){
    return(
        <>
            <div id="score-board">
                <div>
                    <h2>Score</h2>
                    <h2>{score}</h2>
                </div>
                <div>
                    <h2>High Score</h2>
                    <h2>{highScore}</h2>
                </div>
            </div>
        </>
    );
}