const prompt = require("prompt-sync")()

let wins = 0
let losses = 0
let ties = 0

while(true) {
    const playerChoice = prompt("Enter rock, paper or scissor (q to quit): ")

    if (playerChoice.toLocaleLowerCase() === "q") {
        break;
    }

    if (
        playerChoice !== "rock" && 
        playerChoice !== "paper" && 
        playerChoice !== "scissor"
    ) {
        console.log("Please enter a valid choice.")
        continue
    } 

    const choices = ["rock", "paper", "scissor"]
    const randomIndex = Math.round(Math.random() * 2)
    const computerChoice = choices[randomIndex]

    console.log("Computer chose:", computerChoice)

    if (computerChoice === playerChoice) {
        console.log("Draw!")
        ties++
    } else if (
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("Won")
        wins++
    } else {
        console.log("Lost!")
        losses++
    }
}


console.log("Wins:", wins, "Losses:", losses, "Ties:", ties)