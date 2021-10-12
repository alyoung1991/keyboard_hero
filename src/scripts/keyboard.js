import * as Tone from 'tone';
import piano from './sounds/piano';
import KEY_NOTE_MAP from './keys/key';

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
        let leftBorder = document.createElement("div");
        let rightBorder = document.createElement("div");
        leftBorder.className = "keyboard-border";
        rightBorder.className = "keyboard-border";
        this.keyboard.appendChild(leftBorder);
        for(let i = 0; i < notes.length; i++){
            let key = document.createElement("div");
            key.className = "key";
            key.dataset.note = notes[i];
            // display note letter on keys without the scale number
            key.innerText = notes[i].replace(/[0-9]/g, '');
            // key.addEventListener("click", (e) => this.playNote(e.target.dataset.note))
            this.keyboard.appendChild(key);
        }
        this.keyboard.appendChild(rightBorder);
    }

    handleKeydown(e){
        Tone.context.resume();
        // prevents playNote from executing when key is being held down.
        if(KEY_NOTE_MAP[e.key] && !e.repeat){
            // todo 
            // prevent multiple score for same note
            let validPoint = this.songView.isValidKey(e.key);
            // handles selectors which contain the '#' char (e.g C#4) by replacing the '#' with an escaped escape # string"
            let key = document.querySelector(`.key[data-note=${KEY_NOTE_MAP[e.key].replace("#", "\\#")}]`);
            // toggles green/red key styling based on presence of *-key-down class
            if(validPoint){
                key.classList.add("valid-key-down");
            }else{
                key.classList.add("invalid-key-down");
            }
            this.playNote(KEY_NOTE_MAP[e.key]);
        }
    }

    handleKeyup(e){
        // prevents playNote from executing when key is being held down.
        if(KEY_NOTE_MAP[e.key] && !e.repeat){
            // handles selectors which contain the '#' char (e.g C#4) by replacing the '#' with an escaped escape # string"
            let key = document.querySelector(`.key[data-note=${KEY_NOTE_MAP[e.key].replace("#", "\\#")}]`);
            // removes green/red key styling
            key.classList.remove("valid-key-down", "invalid-key-down");
        }
    }

    playNote(note){
        // play sound at pitch
        piano.triggerAttackRelease(note, "8n", Tone.context.currentTime);
    }
}

export default Keyboard;