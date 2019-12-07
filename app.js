var scores, currentPlayer, randomNumber, dice, gamePlaying, roundScore, winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        randomNumber = Math.floor( Math.random() * 6 ) + 1;
        dice.style.display = 'block';
        dice.src = 'dice-' + randomNumber + '.png';

        if (randomNumber !== 1) {
            roundScore += randomNumber;
            document.querySelector('#current-' + currentPlayer).textContent = roundScore;
        } else { 
            changePlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        scores[currentPlayer] += roundScore;
        document.querySelector('#score-' + currentPlayer).textContent = scores[currentPlayer];
        document.querySelector('#current-' + currentPlayer).textContent = 0;

        if(document.querySelector('#score-' + currentPlayer).textContent >= winningScore) {
            document.querySelector('#name-' + currentPlayer).textContent = 'Winner!';
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-'+ currentPlayer +'-panel').classList.add('winner');
            dice.style.display = 'none';
            gamePlaying = false;
        } else {
            changePlayer();

        }
    }
});


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    gamePlaying = true;
    scores = [0, 0]
    currentPlayer = 0;
    roundScore = 0;
    winningScore = 100;
    dice = document.querySelector('.dice');
    dice.style.display = 'none';
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
}

function changePlayer() {
    roundScore = 0;
    document.querySelector('#current-' + currentPlayer).textContent = 0;document.querySelector('#current-' + currentPlayer).textContent = 0;
    currentPlayer == 0 ? currentPlayer = 1 : currentPlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}
