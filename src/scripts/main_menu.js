import SongView from "./song_view";
import Keyboard from "./keyboard";
import Score from "./score";

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
        let gameView = document.getElementById("game-view");
        this.el.classList.toggle("hidden");
        gameView.style.display = "flex";
        const canvas = document.querySelector(".song-canvas");
        canvas.width = 800;
        canvas.height = 460;
        canvas.style.background = "black";
        const ctx = canvas.getContext('2d');
        const left = document.getElementById("left");
        const main = document.getElementById("main");
        const right = document.getElementById("right");
        let score = new Score(left);
        let songView = new SongView(main, canvas, ctx, score);
        let keyboard = new Keyboard(main, songView);
        document.addEventListener("keydown", keyboard.handleKeydown.bind(keyboard));
        document.addEventListener("keyup", keyboard.handleKeyup.bind(keyboard));
    }

    displayInstructions(){
        console.log(this);
    }
}

export default MainMenu;