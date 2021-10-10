import SongView from "./scripts/song_view";
import Keyboard from "./scripts/keyboard";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    const canvas = document.querySelector(".song-canvas");
    canvas.width = 800;
    canvas.height = 460;
    canvas.style.background = "black";


    const ctx = canvas.getContext('2d');

    const songView = new SongView(main, canvas, ctx);
    songView.start();
    let keyboard = new Keyboard(main);
    document.addEventListener("keydown", keyboard.handleKeydown.bind(keyboard));
    document.addEventListener("keyup", keyboard.handleKeyup.bind(keyboard));
});


