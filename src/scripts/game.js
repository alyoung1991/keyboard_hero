import Score from "./score";
import SongView from "./song_view";
import Keyboard from "./keyboard";
import Navigation from "./navigation";

class Game {
    constructor(el){
        this.el = el;
        this.main = document.getElementById("main");
        this.volume = this.addVolume();
        this.score = this.addScore();
        this.songView = this.addSongView();
        this.navigation = this.addNavigation();
        this.keyboard = new Keyboard(this.main, this.songView);
        this.keydown = null;
        this.keyup = null;
        this.changeVolume = null;
        this.addListeners();
    }

    addVolume(){
        let volumeContainer = document.createElement("div");
        volumeContainer.className = "volume-container";
        let lowerVolumeIcon = document.createElement("i");
        let raiseVolumeIcon = document.createElement("i");
        lowerVolumeIcon.className = "fas fa-volume-down";
        raiseVolumeIcon.className = "fas fa-volume-up";
        volumeContainer.appendChild(lowerVolumeIcon);
        let volumeSlider = document.createElement("input");
        volumeSlider.setAttribute("type", "range");
        volumeSlider.setAttribute("min", 0);
        volumeSlider.setAttribute("max", 200);
        volumeSlider.setAttribute("value", 100);
        volumeSlider.className = "volume-slider";
        volumeContainer.appendChild(volumeSlider);
        volumeContainer.appendChild(raiseVolumeIcon);
        this.main.appendChild(volumeContainer);
        return volumeSlider;
    }

    addNavigation(){
        let nav = new Navigation(this.main, this, this.songView);
        return nav;
    }
    
    addScore(){
        let score = new Score(this.main);
        return score;
    }

    addSongView(){
        let canvas = document.createElement("canvas");
        canvas.className = "song-canvas";
        canvas.width = 600;
        canvas.height = 560;
        canvas.style.background = "black";
        const ctx = canvas.getContext('2d');
        let songView = new SongView(this.main, canvas, ctx, this.score, this);
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
        let game = document.querySelector(".game");
        document.removeEventListener("keydown", this.keydown);
        document.removeEventListener("keyup", this.keyup);
        this.main.classList.toggle("slide");
        this.main.classList.add("slide-out-top");
        this.songView?.removeCanvas();
        this.songView = null;
        this.volume = null;
        this.navigation = null;
        this.score = null;
        this.keyboard = null;
        this.el = null;
        setTimeout(() => {
            this.main.innerHTML = '';
            game.style.display = "none";
            this.main.classList.toggle("hidden");
            mainMenu.classList.toggle("hidden");
            mainMenu.classList.remove("slide-out-right");
            mainMenu.classList.add("slide-left");
        }, 1000);
    }
}

export default Game;