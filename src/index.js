import SongView from "./scripts/songView";
import Keyboard from "./scripts/keyboard";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new SongView(main);
    new Keyboard(main);
});
