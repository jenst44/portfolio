var game = new FlappyGame();

document.addEventListener('dblclick', EAS.Util.prevent_cancel);

function reset_game(){
    document.querySelector('.platformer__popup').style.display = 'none';
    game.reset();
}