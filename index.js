let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');
let total = 0;

let number = Math.floor(Math.random() * 7) + 1;
console.log(number);

btn.addEventListener('click', function() {
    let input = parseInt(document.getElementById('userInput').value);

    if (input === number) {
        output.innerHTML = 'You are Out!';
        output.innerHTML = `Batsman made ${input}. Total runs: ${total}`;
    } else if (input >= 1 && input <= 6) {
        total += input;
        output.innerHTML = `Batsman made ${input}. Total runs: ${total}`;
    } else {
        output.innerHTML = 'Please choose runs between 1 and 6';
    }
});
