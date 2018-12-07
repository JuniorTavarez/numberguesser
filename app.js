let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');


minNum.textContent = min
maxNum.textContent = max

guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)

    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number bettwen ${min} and ${max}`, 'red')
    }
    if (guess === winningNum){
        guessInput.disabled = true
        guessInput.style.borderColor = 'green'
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green')
    }
})

function setMessage(msg, color){
    message.textContent = msg
    message.style.color = color
}