const prompt = require("prompt-sync")()

let wins = 0
let losses = 0
let ties = 0

const choice = prompt("Enter rock, paper or scissor: ")
if (choice !== "rock" && choice !== "paper" && choice !== "scissor") {
    console.log("Please enter a valid choice.")
} 

const choices = ["rock", "paper", "scissor"]
const randomIndex = Math.round(Math.random() * 2)
const computerChoice = choices[randomIndex]

console.log(computerChoice)