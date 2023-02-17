const heading = document.querySelector(".class1");




const getUserChoice = function(userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    }
    else {
        console.error("invalid user input");
    }
}

const getComputerChoice = function() {
    let number = Math.floor(Math.random() * 3);
    if (number === 0) {
        return "rock";
    }
    else if (number === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

const determineWinner = function(userChoice, computerChoice) {

    if (userChoice === computerChoice) {
        return "The game was a tie";
    }

    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The computer won";
        }
        else {
            return "The user won";
        }
    }

    if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "The user won";
        }
        // if (computerChoice === "scissors") {
        //     return "The computer won";
        // }
        else {
            return "The computer won";
        }
    }

    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "The computer won";
        }
        else {
            return "The user won";
        }
    }
}

const playGame = function () {
    let userChoice = getUserChoice("scissors");
    let computerChoice = getComputerChoice();
    console.log(`UserChoice: ${userChoice} , ComputerChoice: ${computerChoice}`);
    
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);

    heading.firstElementChild.innerHTML = `<h3>User Choice: ${userChoice} , Computer Choice: ${computerChoice}</h3>`;
    heading.lastElementChild.innerHTML = `<h3>${result}</h3>`;
}
playGame();

