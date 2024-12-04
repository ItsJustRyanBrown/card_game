import cardList from cardlist.js

const turnCounter = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const turnCounterDots = document.querySelectorAll('.turn-counter-inner');

const phaseList = ["Mission", "Organization", "Battle"];

let phaseCount = 0;

let turnCount = -1;

const startButton = document.querySelector('#progress-button');
startButton.addEventListener('click', ()=>startGame());

const proceedPhaseButton = document.querySelector('#proceedPhase-button');
proceedPhaseButton.addEventListener('click', ()=>progressTurnPhase());

const cancelPhaseButton = document.querySelector('#cancelPhase-button');
cancelPhaseButton.addEventListener('click', ()=>{document.querySelector("#nextPhase-button").click()});

const startGame = () => {
    document.querySelector('#progress-button').style = "visibility:hidden; display:none;";
    document.querySelector("#nextPhase-button").style.visibility = "visible";
    document.querySelector("#nextPhase-button").style.display = "block";
    showTurnNumber ()
    showTurnPhase ()
}

const showTurnNumber = () => {
    if(turnCount < turnCounter.length){
        turnCount++;
        turnCounterDots[turnCount].classList.add("turn-active");
        for(let i=0; i < turnCounterDots.length; i++){
            if(i < turnCount){
                if(turnCounterDots[i].classList.contains("turn-active")){
                    turnCounterDots[i].classList.remove("turn-active")
                }
                if(!turnCounterDots[i].classList.contains("turn-over")){
                    turnCounterDots[i].classList.add("turn-over")
                }
            }
        }; 
    }
    
}

const showTurnPhase = () => {
    const phaseTitle = document.querySelector(".phase-title");
    phaseTitle.innerHTML = phaseList[phaseCount] + " Phase";
}

const progressTurnPhase = () => {
    phaseCount++;
    if(phaseCount == phaseList.length){
        phaseCount = 0;
        showTurnNumber();
    }
    showTurnPhase();
}