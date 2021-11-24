import Game from "./game";

let instructionsContent = {
    title: ["Keyboard Hero", "Controls", "Song Highway", "Keyboard", "Score"],
    imgSrc: ["#", "keyboard.png", "songhighway.png", "pianokeys.png", "score.png"],
    text: [
        "Keyboard Hero is a web application inspired by the Guitar Hero frachise. The game allows the user to use their computer's keyboard as a musical keyboard.",
        "Controls for the game are the top and middle character keys on your computer's keyboard ('w through ]' and 'a through return').",
        "As notes fall down the canvas, your goal is to press the correct key at the moment the note reaches the bottom of the canvas!",
        "When you play a note correctly, the key you played will highlight green, and when you play a note incorrectly, the key will highlight red.",
        "Scoring in Keyboard hero is simple, play the correct note at the correct time, you get points. Play the wrong note at any time, you lose points!"            
    ]
}

class MainMenu {
    constructor(el){
        // el = mainmenu div
        this.el = el;
        this.game = null;
        this.currInstructionsPage = 0;
        this.startButton = document.querySelector(".start-button");
        this.instructionsButton = document.querySelector(".instructions-button");
        this.instructionsPanel = document.querySelector(".instructions-panel");
        this.setup();
    }

    setup(){
        let instructionsExitButton = document.querySelector(".instructions-exit-button");
        let backButton = document.querySelector(".instructions-left-button");
        let forwardButton = document.querySelector(".instructions-right-button");
        // I actually used "that"
        let that = this;
        this.startButton.addEventListener("click", this.startGame.bind(that));
        this.instructionsButton.addEventListener("click", this.displayInstructions.bind(that));
        instructionsExitButton.addEventListener("click", this.hideInstructions.bind(that));
        backButton.addEventListener("click", this.updateInstructionsContent.bind(that));
        forwardButton.addEventListener("click", this.updateInstructionsContent.bind(that));
    }

    // setup code for creating a new score, canvas, and keyboard class instances
    startGame(){
        if(this.game){
            this.game = null;
        }
        // create new instance of Game
        let game = document.querySelector(".game");
        let main = document.getElementById("main");
        this.game = new Game(game);
        this.hideInstructions();
        this.el.classList.remove("slide-left");
        this.el.classList.add("slide-out-right");
        main.classList.remove("slide-out-top");
        setTimeout(() => {
            this.el.classList.toggle("hidden");
            main.classList.toggle("slide");
            game.style.display = "flex";
        }, 1000);
        // game.classList.toggle("reveal");
        // setTimeout(() => {
        //     let audio = document.querySelector('audio');
        //     audio.play();
        // }, 4000);
    }
    displayInstructions(){
        // show instructions panel
        this.currInstructionsPage = 0;
        let title = document.querySelector(".instructions-title");
        let image = document.querySelector(".instructions-image");
        let text = document.querySelector(".instructions-text");
        let backButton = document.querySelector(".instructions-left-button");
        let forwardButton = document.querySelector(".instructions-right-button");
        title.innerText = instructionsContent.title[this.currInstructionsPage];
        image.src = "#";
        text.innerText = instructionsContent.text[this.currInstructionsPage];
        backButton.disabled = true;
        backButton.style.visibility = "hidden";
        forwardButton.disabled = false;
        forwardButton.style.visibility = "visible";

        this.instructionsPanel.style.display = "flex";
        this.startButton.classList.toggle("hidden");
        this.instructionsButton.classList.toggle("hidden");
    }

    updateInstructionsContent(e){
        if(e.target.className.includes("left")){
            if(this.currInstructionsPage > 0){
                this.currInstructionsPage--;
            }
        }else{
            if(this.currInstructionsPage < 4){
                this.currInstructionsPage++;
            }
        }
        let backButton = document.querySelector(".instructions-left-button");
        let forwardButton = document.querySelector(".instructions-right-button");
        let title = document.querySelector(".instructions-title");
        let image = document.querySelector(".instructions-image");
        let text = document.querySelector(".instructions-text");
        if(this.currInstructionsPage === 0){
            // disable back button
            backButton.disabled = true;
            backButton.style.visibility = "hidden";
        }else if(this.currInstructionsPage === instructionsContent.title.length - 1){
            // disable forward button
            forwardButton.disabled = true;
            forwardButton.style.visibility = "hidden";
        }else{
            // enable both buttons
            backButton.disabled = false;
            backButton.style.visibility = "visible";
            forwardButton.disabled = false;
            forwardButton.style.visibility = "visible";
        }
        title.innerText = instructionsContent.title[this.currInstructionsPage];
        if(this.currInstructionsPage === 0){
            image.src = "#";
        }else{
            image.src = "./src/assets/" + instructionsContent.imgSrc[this.currInstructionsPage];
        }
        text.innerText = instructionsContent.text[this.currInstructionsPage];
    }

    hideInstructions(){
        // hide instructions panel
        this.startButton.classList.remove("hidden");
        this.instructionsButton.classList.remove("hidden");
        this.instructionsPanel.style.display = "none";
    }
}

export default MainMenu;