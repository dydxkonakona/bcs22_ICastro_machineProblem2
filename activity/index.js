const prompt = require('prompt-sync')({sigint: true});

console.log('Hi Welcome to the Number Guessing Game');
let hiddenNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let guessNumber, ctr = 0;
while(true) {
	ctr++;
	guessNumber = parseInt(prompt(`Guess the hidden number from 1 - 100: `));
	if(hiddenNumber > guessNumber) {
		console.log("Your guess is too low! Try again.");
	} else if(hiddenNumber < guessNumber) {
		console.log("Your guess is too high! Try again.");
	} else {
		console.log(`Congratulations! you guessed the number in ${ctr++} tries`);
		break;
	}

}

