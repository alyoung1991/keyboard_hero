import Game from "./game";

class MainMenu {
    constructor(el){
        // el = mainmenu div
        this.el = el;
        this.game = null;
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
        console.log("1");
        console.log(this.game);
        if(this.game){
            this.game = null;
        }
        console.log("2");
        console.log(this.game);
        // create new instance of Game
        let game = document.querySelector(".game");
        let main = document.getElementById("main");
        this.game = new Game(game);
        console.log("3");
        console.log(this.game);
        this.el.classList.toggle("hidden");
        game.style.display = "flex";
        main.classList.toggle("slide");
        // game.classList.toggle("reveal");
        // setTimeout(() => {
        //     let audio = document.querySelector('audio');
        //     audio.play();
        // }, 4000);
    }
    displayInstructions(){
        console.log(this);
    }
}

export default MainMenu;