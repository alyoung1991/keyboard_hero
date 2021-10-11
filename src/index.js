import SongView from "./scripts/song_view";
import Keyboard from "./scripts/keyboard";
import Score from "./scripts/score";


document.addEventListener("DOMContentLoaded", () => {
    const left = document.getElementById("left");
    const main = document.getElementById("main");
    const right = document.getElementById("right");

    const canvas = document.querySelector(".song-canvas");
    canvas.width = 800;
    canvas.height = 460;
    canvas.style.background = "black";
    const ctx = canvas.getContext('2d');

    let score = new Score(left);
    let songView = new SongView(main, canvas, ctx, score);
    let keyboard = new Keyboard(main, songView);
    
    document.addEventListener("keydown", keyboard.handleKeydown.bind(keyboard));
    document.addEventListener("keyup", keyboard.handleKeyup.bind(keyboard));
});


