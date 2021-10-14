import Score from "./score";
import SongView from "./song_view";
import Keyboard from "./keyboard";
import Navigation from "./navigation";

class Game {
    constructor(el){
        this.el = el;
        this.navigation = this.addNavigation();
        this.score = this.addScore();
        this.songView = this.addSongView();
        let main = document.getElementById("main");
        this.keyboard = new Keyboard(main, this.songView);
        this.keydown = null;
        this.keyup = null;
        this.changeVolume = null;
        this.addListeners();
    }

    addNavigation(){
        let main = document.getElementById("main");
        let nav = new Navigation(main, this);
        return nav;
    }
    
    addScore(){
        let main = document.getElementById("main");
        let score = new Score(main);
        return score;
    }

    addSongView(){
        let main = document.getElementById("main");
        let canvas = document.createElement("canvas");
        canvas.className = "song-canvas";
        canvas.width = 600;
        canvas.height = 560;
        canvas.style.background = "black";
        const ctx = canvas.getContext('2d');
        let songView = new SongView(main, canvas, ctx, this.score, this);
        return songView;
    }

    addListeners(){
        this.keydown = this.keyboard.handleKeydown.bind(this.keyboard);
        this.keyup = this.keyboard.handleKeyup.bind(this.keyboard);
        this.changeVolume = this.keyboard.changeVolume.bind(this.keyboard);
        let volume = document.querySelector(".volume-slider");

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
        volume.addEventListener("input", this.changeVolume);
    }

    endGame(){
        const mainMenu = document.getElementById("main-menu");
        let main = document.getElementById("main");
        let game = document.querySelector(".game");
        document.removeEventListener("keydown", this.keydown);
        document.removeEventListener("keyup", this.keyup);
        main.classList.toggle("slide");
        main.classList.add("slide-out-top");
        this.songView.removeCanvas();
        this.songView = null;
        this.navigation = null;
        this.score = null;
        this.keyboard = null;
        this.el = null;
        setTimeout(() => {
            main.innerHTML = '';
            game.style.display = "none";
            main.classList.toggle("hidden");
            mainMenu.classList.toggle("hidden");
            mainMenu.classList.remove("slide-out-right");
            mainMenu.classList.add("slide-left");
        }, 1000);
    }
}

export default Game;