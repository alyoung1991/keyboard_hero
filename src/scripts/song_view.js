import * as Tone from 'tone';
import song from './songs/songs';
import piano from './sounds/piano';
import MovingObject from './moving_object';
import KEY_NOTE_MAP from './keys/key';

class SongView {
    constructor(el, canvas, ctx, score, game){
        this.el = el;
        this.ctx = ctx;
        this.songView = canvas;
        this.allNotes = this.loadSong(song);
        this.scoreObj = this.buildScoreObject();
        this.score = score;
        this.game = game;
        let pianoSvg = document.createElement("img");
        pianoSvg.className = "piano-svg";
        pianoSvg.src = "./src/assets/piano.png";
        this.el.appendChild(pianoSvg);
        this.el.appendChild(canvas);
        this.interval = null;
        piano.triggerAttackRelease("F4", "8n", Tone.context.currentTime + 1);
        piano.triggerAttackRelease("F4", "8n", Tone.context.currentTime + 2);
        piano.triggerAttackRelease("F4", "8n", Tone.context.currentTime + 3);
        piano.triggerAttackRelease("F5", "8n", Tone.context.currentTime + 4);
        setTimeout(() => {
            this.start();
        }, /*song.startDelay +*/ 4000);
    }

    loadSong(song){
        let allNotes = [];
        // hard coding the x coordinates for each note as black keys made implementing this difficult
        let xCoord = [52.585, 75.17, 97.755, 120.34, 
                    165.51, 188.095, 210.68, 233.265, 
                    255, 278.435, 301.02, 323.605, 
                    368.775, 391.36, 413.945, 436.53, 
                    459.115, 504.285, 526.87, 549.455];
        for(let i = 0; i < song.notes.length; i++){
            for(let j = 0; j < song.notes[i].length; j++){
                let note = new MovingObject({
                    // positions note objects just above canvas view
                    pos:[xCoord[j], i*20 + 10 - (song.notes.length * 20)],
                    radius: 10,
                    color: "#000000",
                    text: song.notes[i][j]
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
            this.game.endGame();
        }, song.length + 3000);
        this.interval = setInterval(() => {
                this.step();
                this.draw();
            }, song.tempo);
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

    // counts how many notes have passed bottom border of canvas
    countNotesPassed(){

    }

    // todo: handle multiple notes on one beat
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

    removeCanvas(){
        this.ctx = null;
        this.songView = null;
        clearInterval(this.interval);
    }
}

export default SongView;