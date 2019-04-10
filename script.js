function game(){
    const choose = ['rock', 'paper', 'scissors'];
    let computerScore = 0;
    let playerScore = 0;
    for( round = 0; round < 5; round++){
        let computerSelection = choose[Math.floor(Math.random()*choose.length)];
        // let playerSelection = choose[Math.floor(Math.random()*choose.length)]; // used for testing output faster, instead of having to play the game 
        let playerInput = prompt(`You may choose rock, paper, or scissors`);
        let playerSelection = playerInput.toLowerCase();
        let playRound = function(playerSelection, computerSelection){
        if(playerSelection === computerSelection){
                return `Nobody wins`;
            } else if(
                playerSelection === 'rock' && computerSelection === 'scissors' ||
                playerSelection === 'paper' && computerSelection === 'rock' ||
                playerSelection === 'scissors' && computerSelection === 'paper'
            ){
                playerScore++;
                return `Human wins`;
            } else {
                computerScore++;
                return `Computer wins.`;
            }
        }
        console.log(playRound(playerSelection, computerSelection));
    }
    if(playerScore > computerScore){
        console.log(`--Human Victory--\n${playerScore} to ${computerScore}`);
    } else if(playerScore < computerScore) {
        console.log(`--Computer Victory--\n${computerScore} to ${playerScore}`);
    } else {
        console.log(`--Everyone wins--\n${playerScore} to ${computerScore}`);
    }
} 

game();