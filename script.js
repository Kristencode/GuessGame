

const hiddenNo = Math.trunc(Math.random() * 20) + 1;
//math.ttrunc is used to generate random numbers.

let gameScore = 20
let highscore = 0
theMessage = function (DisplayMessage) {
    document.querySelector('.message').textContent = DisplayMessage
}



document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value // the 'number' is added to convert a string into a number
        );

        if (!guess) {
            theMessage('!no value') //here, if in the game there is no guess, the return message should be 'no value
        }

        if (guess === hiddenNo) {
            theMessage('You win')
            document.querySelector('.highscore').textContent = gameScore

            document.querySelector('.number').textContent = hiddenNo
            document.querySelector('body').style.backgroundColor = '#20d0d9';
            document.querySelector('.number').style.width = '40rem'
            document.querySelector('.number').style.fontSize = '10 rem'
            document.querySelector('body').style.color = '#333'
            document.querySelector('.number').style.background = '#eee';// here is when the player wins..all of
            // the above actions takes place only if player wins
        }


        else if (guess !== hiddenNo) {
            if (gameScore > 1) {
                theMessage(guess > hiddenNo ? 'Way too high!' : 'Low');
                gameScore--;
                document.querySelector('.score').textContent = gameScore

            }

            else {
                theMessage('You lost!')
                document.querySelector('.score').textContent = 0
            } //in instances where guessed number is higher than the hidden number, score reduces and when it gets to zero player loses.
        }
    });


document.querySelector('.again').addEventListener(
    'click', function () {
        document.querySelector('.score').textContent = 20;
        document.querySelector('.score').style.color = '#333';

        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.guess').value = '';
        theMessage('!Start over..');
        document.querySelector('.message').style.color = '#333';

        document.querySelector('body').style.backgroundColor = '#e7b6b6';
        document.querySelector('body').style.color = '#333';

        document.querySelector('.highscore').style.color = '#333'

        document.querySelector('.guess').style.background = '#333'


    }
)// here is the function for the again button...here the again button when clicked resets all functions back to default.







