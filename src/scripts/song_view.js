import song from './songs/songs';
import MovingObject from './moving_object';
import KEY_NOTE_MAP from './keys/key';

class SongView {
    constructor(el, canvas, ctx, score){
        this.el = el;
        this.ctx = ctx;
        this.songView = canvas;
        this.allNotes = this.loadSong(song);
        this.scoreObj = this.buildScoreObject();
        this.score = score;
        let pianoSvg = document.createElement("img");
        pianoSvg.className = "piano-svg";
        pianoSvg.src = "./src/assets/piano.png";
        this.el.appendChild(pianoSvg);
        this.el.appendChild(canvas);
        this.start();
    }

    loadSong(song){
        let allNotes = [];
        for(let i = 0; i < song.length; i++){
            for(let j = 0; j < song[i].length; j++){
                let note = new MovingObject({
                    // positions note objects just above canvas view
                    pos:[j*30 + 15, i*30 + 15 - (song.length * 30)],
                    radius: 15,
                    color: "#000000",
                    text: song[i][j]
                });
                note.draw(this.ctx);
                allNotes.push(note);
            }
        }
        return allNotes;
    }

    // builds score object with each key being a key char and the value being an array of "beats" the key char appears in
    buildScoreObject(){
        let score = {};
        let notes = Object.keys(KEY_NOTE_MAP);
        for(let i = 0; i < notes.length; i++){
            score[notes[i]] = [];
        }
        return score;
    }

    // begin game & falling animation
    start(){
        setTimeout(() => {
            setInterval(() => {
                this.step();
                this.draw();
            }, 20);
        }, 3000);
    }

    step(){
        this.moveObjects();
    }

    moveObjects(){
        this.allNotes.forEach((note) => {
            note.move(this.ctx);
        });
    }

    // clear canvas and draw newly positioned notes
    draw(){
        this.ctx.clearRect(0, 0, 600, 560);
        this.allNotes.forEach((note) => {
            note.draw(this.ctx);
        });
    }

    // compares keydown event handlers key pressed to the note in the valid range of the canvas
    isValidKey(key){
        for(let i = 0; i < this.allNotes.length; i++){
            let currNote = this.allNotes[i];
            // if there is a note to be played
            if(currNote.options.text != "" && currNote.options.pos[1] > 540 && currNote.options.pos[1] < 580){
                // current note pressed
                if(currNote.options.text === key){
                    // first correct note played, (uses i/20 to get row/beat the song is currently at)
                    if(!this.scoreObj[key].includes(Math.floor(i/20))){
                        this.scoreObj[key].push(Math.floor(i/20));
                        this.score.updateScore(100);
                    }
                    // all subsequent "correct" notes played
                    else{
                        this.score.updateScore(-100);
                    }
                    return true;
                }
                // wrong note played
                else{
                    this.score.updateScore(-100);
                    return false;
                }
            }
        }
        // no notes to be played
        this.score.updateScore(-100);
        return false;
    }
}

export default SongView;