const resetBtn = document.querySelector('.reset');
const winningnumberSelector = document.querySelector('#numbers');

let winningnumber = 1;
let gameOver = false;

let player1 = {
    score: 0,
    button: document.querySelector('.player1'),
    display: document.querySelector('.score1'),
};
let player2 = {
    score: 0,
    button: document.querySelector('.player2'),
    display: document.querySelector('.score2'),
};

function updateScore(player, opponent) {
    if (!gameOver) {
        player.score += 1;
        if (player.score === winningnumber) {
            gameOver = true;
            player.display.classList.add("green")
            opponent.display.classList.add("red")
            player.button.disable = true;
            opponent.button.disable = true;
        }
        player.display.textContent = player.score;
    }
}


player1.button.addEventListener('click', function () { updateScore(player1, player2) });

player2.button.addEventListener('click', function () { updateScore(player2, player1) });


winningnumberSelector.addEventListener('change', function () {
    winningnumber = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset);

function reset() {
    gameOver = false;
    player1.score = 0;
    player2.score = 0;
    player1.display.textContent = 0;
    player2.display.textContent = 0;
    player1.display.classList.remove("green", 'red')
    player2.display.classList.remove("red", 'red')
    player1.button.disable = false;
    player2.button.disable = false;
}
