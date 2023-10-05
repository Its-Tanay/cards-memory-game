import { useState, useEffect } from 'react';
import StartMenu from '../components/startMenu';
import Game from '../components/game';
import char1 from "../assets/characters/char1.png";
import char2 from "../assets/characters/char2.png";
import char3 from "../assets/characters/char3.png";
import char4 from "../assets/characters/char4.png";
import char5 from "../assets/characters/char5.png";
import char6 from "../assets/characters/char6.png";
import char7 from "../assets/characters/char7.png";
import char8 from "../assets/characters/char8.png";
import char9 from "../assets/characters/char9.png";
import char10 from "../assets/characters/char10.png";
import char11 from "../assets/characters/char11.png";
import char12 from "../assets/characters/char12.png";
import ScoreBoard from '../components/scoreboard';

export default function Main() {

    const [startGame, setStartGame] = useState(false);
    const [randomChar, setRandomChar] = useState([]);
    const [clicked, setClicked] = useState([]);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const characters = [
        { id: 1, image: char1 },
        { id: 2, image: char2 },
        { id: 3, image: char3 },
        { id: 4, image: char4 },
        { id: 5, image: char5 },
        { id: 6, image: char6 },
        { id: 7, image: char7 },
        { id: 8, image: char8 },
        { id: 9, image: char9 },
        { id: 10, image: char10 },
        { id: 11, image: char11 },
        { id: 12, image: char12 },
      ];

    const FisherYatesShuffle = (array) => {
        let i = array.length;
        while (i--) {
            const ri = Math.floor(Math.random() * (i + 1));
            [array[i], array[ri]] = [array[ri], array[i]];
        }
        return array;
    }

    useEffect(() => {
        const shuffled = FisherYatesShuffle(characters);

        const selected = shuffled.slice(0, 4);

        console.log(selected);

        setRandomChar(selected);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [score])

    const handleImageClick = (e) => {
        if(clicked.includes(e)){
            setClicked([]);
            setScore(0);
        }
        else{
            setClicked([...clicked, e]);
            setScore(score + 1);

            if (score + 1 > highScore) {
                setHighScore(score + 1); 
                localStorage.setItem('highScore', score + 1); 
            }
        }
    }

    useEffect(() => {
        console.log(clicked);
    })

    useEffect(() => {
        const savedHighScore = localStorage.getItem('highScore');
        if (savedHighScore) {
            setHighScore(Number(savedHighScore));
        }
    }, []);    

    const handleStartGame = () => {
        setStartGame(true);
    }

    if (startGame) {
        return (
            <div id="main">
                <Game random={randomChar} handleImageClick={handleImageClick}/>
                <ScoreBoard score={score} highScore={highScore}/>
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