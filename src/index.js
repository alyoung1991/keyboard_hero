import SongView from "./scripts/songView";
import Keyboard from "./scripts/keyboard";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    const canvas = document.getElementById("song-canvas");
    const ctx = canvas.getContext('2d');
    canvas.width = '80%';
    canvas.height = '60%';
    canvas.style.backgroun = "black";

    const songView = new SongView(main, canvas, ctx);
    let keyboard = new Keyboard(main);
    document.addEventListener("keydown", keyboard.handleKeydown.bind(keyboard));
    document.addEventListener("keyup", keyboard.handleKeyup.bind(keyboard));
});


