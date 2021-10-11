import SongView from "./scripts/song_view";
import Keyboard from "./scripts/keyboard";


document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    const canvas = document.querySelector(".song-canvas");
    canvas.width = 800;
    canvas.height = 460;
    canvas.style.background = "black";


    const ctx = canvas.getContext('2d');

    let songView = new SongView(main, canvas, ctx);
    let keyboard = new Keyboard(main, songView);
    document.addEventListener("keydown", keyboard.handleKeydown.bind(keyboard));
    document.addEventListener("keyup", keyboard.handleKeyup.bind(keyboard));
});


