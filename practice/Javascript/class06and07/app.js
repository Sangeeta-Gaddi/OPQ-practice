let favMovie = "humanworld";

let guess = prompt("Guess the movie name or type quit");

while ((guess.toLowerCase() !== favMovie) && (guess !== "quit")) {
    guess = prompt("Wrong guess! Try again or type quit");
}

if (guess.toLowerCase() === favMovie) {
    console.log("Congrats your guess is right!");
}

//output will be on console, not on browser