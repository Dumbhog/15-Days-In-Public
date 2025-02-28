
function game() {
    let random = Math.random()
    let possibleHands = ["Rock🪨", "Paper📃", "Scissors✂️"]
    let handLength = possibleHands.length
    let randIndex = Math.floor(random * handLength)
    let enemyHand = possibleHands[randIndex] 

    const input = prompt("please pick your hand:", "'Rock'")
    
    if (input != "Rock" && input != "Paper" && input != "Scissors") { 
        game()
    } else {
    
        if (enemyHand == "Rock") {
            if (input == "Paper") {
                // Congrats! You won the game!
            } else if (input == "Scissors") {
                // Oh no! You lost the game!
            }
        }
        if (enemyHand == "Paper") {
            if (input == "Scissors") {
                // Congrats! You won the game!
            } else if (input == "Rock") {
                // Oh no! You lost the game!
            }
        }   
        if (enemyHand == "Scissors") {
            if (input == "Rock") {
                // Congrats! You won the game!
            } else if (input == "Paper") {
                // Oh no! You lost the game!
            }
        }
    }
}
