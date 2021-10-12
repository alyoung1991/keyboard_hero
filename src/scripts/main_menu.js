import Game from "./game";

class MainMenu {
    constructor(el){
        this.el = el;
        this.setup();
    }

    setup(){
        let startButton = document.querySelector(".start-button");
        let instructionsButton = document.querySelector(".instructions-button");
        // I actually used "that"
        let that = this;
        startButton.addEventListener("click", this.startGame.bind(that));
        instructionsButton.addEventListener("click", this.displayInstructions.bind(that));
    }

    // setup code for creating a new score, canvas, and keyboard class instances
    startGame(){
        // create new instance of Game
        let game = document.querySelector(".game");
        let main = document.getElementById("main");
        new Game(game);
        this.el.classList.toggle("hidden");
        main.classList.toggle("slide");
        game.classList.toggle("reveal");
    }

    displayInstructions(){
        console.log(this);
    }
}

export default MainMenu;