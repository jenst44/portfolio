import './Flappy.css';
import {useEffect} from 'react'
import FlappyGame from './Flappy/FlappyGame';
import FlappyStartScreen from './Flappy/FlappyStartScreen';
import FlappyDieScreen from './Flappy/FlappyDieScreen';


export const Flappy = () => {

    let game;

    useEffect(() => {
        game = new FlappyGame("#flappy-game-container");
    }, []);


    let reset_game = () => {
        document.querySelector('.FlappyDieScreen').style.display = 'none';
        game.reset();
    }

    let start_game = () => {
        document.querySelector('.FlappyStartScreen').style.display = 'none';
        game.reset();
    }

    return(
        <div className="Flappy">
            <div className="Flappy__Info platformer__info">
                Score:&nbsp;<div className="Flappy__Score platformer__info__score__value"></div>
            </div>
            <FlappyStartScreen start_game={start_game}></FlappyStartScreen>
            <FlappyDieScreen reset_game={reset_game}></FlappyDieScreen>
            <canvas className="Flappy__Game" id="flappy-game-container"></canvas>
        </div>
        
    )
}

export default Flappy;