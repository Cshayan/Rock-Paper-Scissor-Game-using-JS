const game = () => {

    var pScore = 0;
    var cScore = 0;

    function startGame() {
        const startPlayButton = document.querySelector('.btn-success');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        startPlayButton.addEventListener('click', function () {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.add('fadeIn');
        });
    }

    function playGame() {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        var computerOptions = ['rock', 'paper', 'scissor'];

        // reset the animation after it ends each time
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })
        });

        // going through the options clicked by the player
        options.forEach(option => {
            option.addEventListener('click', function () {
                // Generate a random computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                const playerChoice = this.className;

                // Update the score and display the message once the animation ends
                setTimeout(function () {
                    // call compareHands
                    compareHands(playerChoice, computerChoice);

                    // Update the images based on what we click and what computer generates
                    playerHand.src = `Images/${playerChoice}.png`;
                    computerHand.src = `Images/${computerChoice}.png`;
                }, 2000);

                // Add animation
                playerHand.style.animation = 'shakePlayerHand 2s ease';
                computerHand.style.animation = 'shakeComputerHand 2s ease';
            })
        });
    }

    function updateScore() {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    function compareHands(playerChoice, computerChoice) {
        const winner = document.querySelector('.winner');
        // Check for tie
        if (playerChoice === computerChoice) {
            winner.textContent = " Wooh! It's a tie.";
            return;
        }
        // Check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissor') {
                winner.textContent = " Congrats! You won.";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = " Opps! You lost this time.";
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = " Congrats! You won.";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = " Opps! You lost this time.";
                cScore++;
                updateScore();
                return;
            }
        }
        // Check for scissor
        if (playerChoice === 'scissor') {
            if (computerChoice === 'paper') {
                winner.textContent = " Congrats! You won.";
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = " Opps! You lost this time.";
                cScore++;
                updateScore();
                return;
            }
        }
    }

    // call the functions
    startGame();
    playGame();
}

// start the game
game();