export default function ScoreBoard({score, highScore}){
    return(
        <>
            <div id="score-board">
                <div id="score">
                    <h2>Score</h2>
                    <h2 className="green-text">{score}</h2>
                </div>
                <div id="highscore">
                    <h2>Highest Score</h2>
                    <h2 className="green-text">{highScore}</h2>
                </div>
            </div>
        </>
    );
}