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

export default function Main() {

    // start menu logic

    const [startGame, setStartGame] = useState(false);

    const handleStartGame = () => {
        setStartGame(true);
    }

    //score logic

    const [clickedIds, setClickedIds] = useState([]);
    const [score, setScore] = useState(0);

    // game logic

    const allImages = [
        char1,
        char2,
        char3,
        char4,
        char5,
        char6,
        char7,
        char8,
        char9,
        char10,
        char11,
        char12
    ];

    const [randomImages, setRandomImages] = useState([]);

    // Fisher-Yates shuffle algorithm

    const fisherYateShuffle = (array) => {
        let currentIndex = array.length;
        let randomIndex, tempValue;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            tempValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = tempValue;
        }
      return array;
    }

    useEffect(() => {
        const shuffledImages = fisherYateShuffle(allImages);

        const selectedImages = shuffledImages.slice(0, 4);

        setRandomImages(selectedImages);
    }, [])

    const handleImageClick = (imageId) => {
        if(clickedIds.includes(imageId)) {
            setScore(0);
            setClickedIds([]);
        }
        else {
            const shuffledImages = fisherYateShuffle(allImages);
            const selectedImages = shuffledImages.slice(0, 4);
            setRandomImages(selectedImages);

            setClickedIds([...clickedIds, imageId]);
            setScore(score + 1);
        }
    };

    if (startGame) {
        return (
            <div id="main">
                <Game randomImages={randomImages} handleImageClick={handleImageClick}/>
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