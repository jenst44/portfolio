import './FlappyButton.css';

export const FlappyButton = ({children, on_click}) => {

    return(
        <button onClick={on_click} class="FlappyButton">
            {children}
        </button>
    )
}

export default FlappyButton;