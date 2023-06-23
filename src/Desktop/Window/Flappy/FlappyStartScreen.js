import './FlappyStartScreen.css';
import FlappyButton from './FlappyButton';

export const FlappyStartScreen = ({start_game}) => {

    return(
        <div className="FlappyStartScreen">
            <div class="FlappyStartScreen__Content">
                <h2 class="FlappyStartScreen__Header">
                    How to play
                </h2>
                <div class="FlappyStartScreen__Details">
                    <p>
                        Help Flappy Cat fly through the pipes! Tap (or click on desktop) to jump higher. Don’t let Flappy Cat fall!
                    </p>
                </div>
                <FlappyButton on_click={start_game}>
                    Start
                </FlappyButton>
                <div className="FlappyStartScreen__AboutGame">
                    <h3>About this game:</h3>
                    <p>This game was created from scratch using Canvas, and Javascript</p>
                </div>

            </div>
        </div>   
    )
}

export default FlappyStartScreen;