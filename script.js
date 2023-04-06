


// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// document.querySelector('.number').textContent = secretNumber

// document.querySelector('.check').addEventListener(
//     'click', function () {
//         const guess = Number(document.querySelector('.guess').value
//         );console.log(guess, typeof guess);

//         if (!guess) {
//             document.querySelector('.message').textContent = 'no number';

//         }
//         else if (guess === secretNumber) {
//             document.querySelector('.message').textContent = 'correct number!'

//         }

//         else if (guess > secretNumber) {
//             if (score > 0) {
//                 document.querySelector('.message').textContent = 'Higher number!'
//                 document.querySelector('.score').textContent = score
//                 score--;
//             } else {
//                 document.querySelector('.message').textContent = 'you lost'  
//             document.querySelector.apply('message').textContent=score    
//              }
//         }

//         else if (guess < secretNumber) {
//             {
//                 document.querySelector('.message').textContent = 'lower number!';
//                 score--
//                 document.querySelector('.score').textContent = score
//             }

//         }

//     })



const hiddenNo = Math.trunc(Math.random() * 20) + 1;

let gameScore = 20
let highscore = 0



document.querySelector('.check').addEventListener(
    'click', function () {
        const guess = Number(document.querySelector('.guess').value
        );

        if (!guess) {
            document.querySelector('.message').textContent = '!no value';
        }

        else

            if (guess === hiddenNo) {
                document.querySelector('.message').textContent = 'Yes, you win'

                document.querySelector('.number').textContent = hiddenNo
                document.querySelector('body').style.backgroundColor = '#505090';
                document.querySelector('.number').style.width = '40rem'
                document.querySelector('.number').style.fontSize = '10 rem'
                document.querySelector('.number').style.background = '#222';

                if (score > highscore) {
                    highscore = score;
                    document.querySelector('.highscore').textContent = highscore
                }

            }

            else if (guess > hiddenNo) {

                if (gameScore > 1) {
                    document.querySelector('.message').textContent = 'higher number'
                    gameScore--;
                    document.querySelector('.score').textContent = gameScore

                }

                else {
                    document.querySelector('.message').textContent = 'Sad..You lost!'
                    document.querySelector('.score').textContent = 0
                }


            } else


                if (guess < hiddenNo) {


                    if (gameScore > 1) {
                        document.querySelector('.message').textContent = 'Low number, try again!'
                        gameScore--;
                        document.querySelector('.score').textContent = gameScore


                    } else {

                        document.querySelector('.message').textContent = 'OOps..You lost!'
                        document.querySelector('.score').textContent = 0

                    }
                }


    });




document.querySelector('.again').addEventListener(
    'click', function () {
        document.querySelector('.score').textContent = 20;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        document.querySelector('.message').textContent = 'Start over again..!'

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').style.background = '#eee'


    }
)







