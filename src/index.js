import SongView from "./scripts/songView";
import Keyboard from "./scripts/keyboard";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new SongView(main);
    let keyboard = new Keyboard(main);
    document.addEventListener("keydown", keyboard.handleKeypress.bind(keyboard));
});


