import Score from "./score";
import SongView from "./song_view";
import Keyboard from "./keyboard";

class Game {
    constructor(el){
        this.el = el;
        this.score = this.addScore();
        this.songView = this.addSongView();
        this.keyboard = this.addKeyboard();
    }

    addScore(){
        let left = document.getElementById("left");
        let score = new Score(left);
        return score;
    }

    addSongView(){
        let main = document.getElementById("main");
        const canvas = document.querySelector(".song-canvas");
        canvas.width = 800;
        canvas.height = 460;
        canvas.style.background = "black";
        const ctx = canvas.getContext('2d');
        let songView = new SongView(main, canvas, ctx, this.score);
        return songView;
    }

    addKeyboard(){
        let main = document.getElementById("main");
        let keyboard = new Keyboard(main, this.songView);
        document.addEventListener("keydown", keyboard.handleKeydown.bind(keyboard));
        document.addEventListener("keyup", keyboard.handleKeyup.bind(keyboard));
        return keyboard;
    }
}

export default Game;