import Game from "./game";

let instructionsContent = {
    title: ["Keyboard Hero", "Controls", "Song Highway", "Keyboard", "Score"],
    imgSrc: ["", "", "", "", ""],
    text: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."            
    ]
}

class MainMenu {
    constructor(el){
        // el = mainmenu div
        this.el = el;
        this.game = null;
        this.currInstructionsPage = 0;
        this.setup();
    }

    setup(){
        let startButton = document.querySelector(".start-button");
        let instructionsButton = document.querySelector(".instructions-button");
        let instructionsExitButton = document.querySelector(".instructions-exit-button");
        let backButton = document.querySelector(".instructions-left-button");
        let forwardButton = document.querySelector(".instructions-right-button");
        // I actually used "that"
        let that = this;
        startButton.addEventListener("click", this.startGame.bind(that));
        instructionsButton.addEventListener("click", this.displayInstructions.bind(that));
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
        this.el.classList.toggle("hidden");
        this.hideInstructions();
        game.style.display = "flex";
        main.classList.toggle("slide");
        // game.classList.toggle("reveal");
        // setTimeout(() => {
        //     let audio = document.querySelector('audio');
        //     audio.play();
        // }, 4000);
    }
    displayInstructions(){
        let instructionsPanel = document.querySelector(".instructions-panel");
        // show instructions panel
        instructionsPanel.style.display = "flex";
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
        }else if(this.currInstructionsPage === instructionsContent.title.length - 1){
            // disable forward button
            forwardButton.disabled = true;
        }else{
            // enable both buttons
            backButton.disabled = false;
            forwardButton.disabled = false;
        }
        title.innerText = instructionsContent.title[this.currInstructionsPage];
        image.src = instructionsContent.imgSrc[this.currInstructionsPage];
        text.innerText = instructionsContent.text[this.currInstructionsPage];
    }

    hideInstructions(){
        let instructionsPanel = document.querySelector(".instructions-panel");
        // hide instructions panel
        instructionsPanel.style.display = "none";
    }
}

export default MainMenu;