let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let total = 0;
let gameOver = false;

btn.addEventListener('click', function() {
    let input = parseInt(document.getElementById('userInput').value);

    if (input >= 1 && input <= 6) {
        let botRun = Math.floor(Math.random() * 6) + 1;
        total += input;
        output.innerHTML = `You made ${input}. Bot made ${botRun}. Total runs: ${total}`;

        if (input === botRun)  {
            output.innerHTML += '<br>You\'re out!';
          gaveOver = true;
          total = 0;  
        }

        if (total === 50) {
            output.innerHTML += '<br>Hurray!....It\'s a half-century!';
        } else if (total === 100) {
            output.innerHTML += '<br>Wow...Achievement unlocked: 100 RUNS made!';
        }
    } else {
        output.innerHTML = 'Please choose runs between 1 and 6';
    }
});
