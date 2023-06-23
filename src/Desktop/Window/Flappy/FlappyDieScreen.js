import './FlappyDieScreen.css';
import FlappyButton from './FlappyButton';

export const FlappyDieScreen = ({reset_game}) => {

    return(
        <div className="FlappyDieScreen">
            <div class="FlappyDieScreen__Content">
                <h2 className="FlappyDieScreen__Header">
                    Game Over
                </h2>
                <div className="FlappyDieScreen__Details">
                    <p>You made it through <span className="score"></span> <span className="item"></span>.</p>
                </div>
                <FlappyButton on_click={reset_game}>Try Again</FlappyButton>
            </div>
        </div>
    )
}

export default FlappyDieScreen;