import * as Tone from 'tone';

class Keyboard {
    constructor(el){
        this.el = el;
        this.keyboard = document.createElement("div");
        this.keyboard.className = "keyboard";
        this.keyboard.innerHTML = "<h1>Keyboard</h1>";
        this.el.appendChild(this.keyboard);
        this.keyboard.addEventListener("click", this.playCMajor);
    }

    playCMajor(){
        const sampler = new Tone.Sampler({
            urls: {
                "C3": "C3.mp3",
                "D#3": "Ds3.mp3",
                "F#3": "Fs3.mp3",
                "A3": "A3.mp3",
                "C4": "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                "A4": "A4.mp3",
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination();

        Tone.loaded().then(() => {
            sampler.triggerAttackRelease(["C#4", "F4", "G#4"], 4);
        })
    }
}

export default Keyboard;