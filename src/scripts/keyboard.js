import * as Tone from 'tone';

const KEYS =  [ "a",   "w",  "s",   "e",  "d",  "f",   "t",  "g",   "y",  "h",   "u",  "j",  "k",   "o",  "l",   "p",  ";"];
const NOTES = ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5"];

class Keyboard {
    constructor(el){
        this.el = el;
        this.keyboard = document.createElement("div");
        this.keyboard.className = "keyboard";
        this.el.appendChild(this.keyboard);
        this.setup();
    }

    setup(){
        for(let i = 0; i < NOTES.length; i++){
            let key = document.createElement("div");
            key.className = "key";
            key.dataset.note = NOTES[i];
            key.innerText = NOTES[i];
            key.addEventListener("click", (e) => this.playNote(e.target.dataset.note))
            this.keyboard.appendChild(key);
        }
    }

    handleKeypress(e){
        // prevents playNote from executing when key is being held down.
        if(KEYS.includes(e.key) && !e.repeat){
            this.playNote(NOTES[KEYS.indexOf(e.key)]);
        }
    }

    playNote(note){
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
            const now = Tone.now();
            sampler.triggerAttackRelease(note, "8n", now);
        })
    }
}

export default Keyboard;