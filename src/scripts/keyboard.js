import * as Tone from 'tone';
import piano from './sounds/piano';

const KEY_NOTE_MAP = {
    "a": "C4",
    "w": "C#4",
    "s": "D4",
    "e": "D#4",
    "d": "E4",
    "f": "F4",
    "t": "F#4",
    "g": "G4",
    "y": "G#4",
    "h": "A4",
    "u": "A#4",
    "j": "B4",
    "k": "C5",
    "o": "C#5",
    "l": "D5",
    "p": "D#5",
    ";": "E5",
    "'": "F5",
    "]": "F#5",
    "Enter": "G5"
};

class Keyboard {
    constructor(el, songView){
        this.el = el;
        this.songView = songView;
        this.keyboard = document.createElement("div");
        this.keyboard.className = "keyboard";
        this.el.appendChild(this.keyboard);
        this.setup();
    }

    setup(){
        let notes = Object.values(KEY_NOTE_MAP);
        for(let i = 0; i < notes.length; i++){
            let key = document.createElement("div");
            key.className = "key";
            key.dataset.note = notes[i];
            key.innerText = notes[i];
            // key.addEventListener("click", (e) => this.playNote(e.target.dataset.note))
            this.keyboard.appendChild(key);
        }
    }

    handleKeydown(e){
        Tone.context.resume();
        // prevents playNote from executing when key is being held down.
        if(KEY_NOTE_MAP[e.key] && !e.repeat){
            // todo prevent multiple score for same note
            let validPoint = this.songView.isValidKey(e.key);
            // handles selectors which contain the '#' char (e.g C#4) by replacing the '#' with an escaped escape # string"
            let key = document.querySelector(`.key[data-note=${KEY_NOTE_MAP[e.key].replace("#", "\\#")}]`);
            if(validPoint){
                key.classList.toggle("valid-key-down");
            }else{
                key.classList.toggle("invalid-key-down");
            }
            this.playNote(KEY_NOTE_MAP[e.key]);
        }
    }

    handleKeyup(e){
        // prevents playNote from executing when key is being held down.
        if(KEY_NOTE_MAP[e.key] && !e.repeat){
            // handles selectors which contain the '#' char (e.g C#4) by replacing the '#' with an escaped escape # string"
            let key = document.querySelector(`.key[data-note=${KEY_NOTE_MAP[e.key].replace("#", "\\#")}]`);
            if(key.classList.contains("valid-key-down")){
                key.classList.toggle("valid-key-down");
            }else if(key.classList.contains("invalid-key-down")){
                key.classList.toggle("invalid-key-down");
            }
        }
    }

    playNote(note){
        piano.triggerAttackRelease(note, "8n", Tone.context.currentTime);
    }
}

export default Keyboard;