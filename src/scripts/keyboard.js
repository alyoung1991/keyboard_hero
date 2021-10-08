class Keyboard {
    constructor(el){
        this.el = el;
        this.keyboard = document.createElement("div");
        this.keyboard.className = "keyboard";
        this.keyboard.innerHTML = "<h1>Keyboard</h1>";
        this.el.appendChild(this.keyboard);
    }
}

export default Keyboard;