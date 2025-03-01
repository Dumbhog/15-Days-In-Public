
function game() {
    let random = Math.random()
    let possibleHands = ["Rock🪨", "Paper📃", "Scissors✂️"]
    let handLength = possibleHands.length
    let randIndex = Math.floor(random * handLength)
    let enemyHand = possibleHands[randIndex] 

    const input = prompt("please pick your hand:", "'Rock'")
    
    if (input != "Rock" && input != "Paper" && input != "Scissors") { 
        return game()
    } else {
    
        if (enemyHand == "Rock") {
            if (input == "Paper") {
                console.log("Congrats! You won the game!")
            } else if (input == "Scissors") {
                console.log("Oh no! You lost the game!")
            }
        }
        if (enemyHand == "Paper") {
            if (input == "Scissors") {
                console.log("Congrats! You won the game!")
            } else if (input == "Rock") {
                console.log("Oh no! You lost the game!")
            }
        }   
        if (enemyHand == "Scissors") {
            if (input == "Rock") {
                console.log("Congrats! You won the game!")
            } else if (input == "Paper") {
                console.log("Oh no! You lost the game!")
            }
        }
    }
}
