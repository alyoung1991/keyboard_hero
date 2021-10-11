import song from './songs/songs';
import MovingObject from './moving_object';


class SongView {
    constructor(el, canvas, ctx){
        this.el = el;
        this.songView = canvas;
        this.ctx = ctx;
        this.allNotes = this.loadSong(song);
        this.el.appendChild(canvas);
        this.start();
    }

    loadSong(song){
        let allNotes = [];
        for(let i = 0; i < song.length; i++){
            for(let j = 0; j < song[i].length; j++){
                let note = new MovingObject({
                    // positions note objects just above canvas view
                    pos:[j*40 + 20, i*40 + 20 - (song.length * 40)],
                    radius: 20,
                    color: "#000000",
                    text: song[i][j]
                });
                note.draw(this.ctx);
                allNotes.push(note);
            }
        }
        return allNotes;
    }

    start(){
        setInterval(() => {
            this.step();
            this.draw();
        }, 10);
    }

    step(){
        this.moveObjects();
    }

    moveObjects(){
        this.allNotes.forEach((note) => {
            note.move(this.ctx);
        });
    }

    draw(){
        this.ctx.clearRect(0, 0, 800, 460);
        this.allNotes.forEach((note) => {
            note.draw(this.ctx);
        });
    }

    // compares keydown event handlers key pressed to the note in the valid range of the canvas
    isValidKey(key){
        for(let i = 0; i < this.allNotes.length; i++){
            let currNote = this.allNotes[i];
            // if there is a note to be played
            if(currNote.options.text != "" && currNote.options.pos[1] > 440 && currNote.options.pos[1] < 480){
                if(currNote.options.text === key){
                    return true;
                }else{
                    return false;
                }
            }
        }
        return false;
    }
}

export default SongView;