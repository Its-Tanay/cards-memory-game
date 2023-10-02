import { useState } from 'react';
import StartMenu from '../components/startMenu';
import Game from '../components/game';

export default function Main() {

    const [startGame, setStartGame] = useState(false);

    const handleStartGame = () => {
        setStartGame(true);
    }

    if (startGame) {
        return (
            <div id="main">
                <Game />
            </div>
        );
    }
    else{
    return (
        <div id="main">
            <StartMenu handleClick={handleStartGame}/>
        </div>
    );}
}