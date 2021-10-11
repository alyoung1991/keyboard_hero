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
        let game = document.getElementById("game");
        new Game(game);
        this.el.classList.toggle("hidden");
        game.style.display = "flex";
    }

    displayInstructions(){
        console.log(this);
    }
}

export default MainMenu;