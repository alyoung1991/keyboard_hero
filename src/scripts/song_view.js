import song from './songs/songs';
import MovingObject from './moving_object';

class SongView {
    constructor(el, canvas, ctx){
        this.el = el;
        this.songView = canvas;
        this.ctx = ctx;
        this.allNotes = this.loadSong(song);
        // this.songView = document.createElement("div");
        // this.songView.className = "song-view";
        this.el.appendChild(canvas);
        // this.setup();
    }

    // setup(){
    //     // append 2d array representing a song into the song-view element
    //     // append in reverse order since 2d array will fall bottom first
    //     let songHighway = document.createElement("div");
    //     songHighway.className = "song-highway";
    //     for(let i = test.length - 1; i >= 0; i--){
    //         let beat = document.createElement("div");
    //         beat.className = "song-beat";
    //         for(let j = 0; j < test[i].length; j++){
    //             let note = document.createElement("div");
    //             // todo give note a data-note attribute
    //             note.className = "song-note";
    //             note.innerHTML = test[i][j];
    //             beat.appendChild(note);
    //         }
    //         songHighway.appendChild(beat);
    //     }
    //     this.songView.appendChild(songHighway);
    // }

    loadSong(song){
        let allNotes = [];
        for(let i = 0; i < song.length; i++){
            for(let j = 0; j < song[i].length; j++){
                let note = new MovingObject({
                    // positions note objects just above canvas view
                    pos:[j*40 + 20, i*40 + 20 - (song.length * 40)],
                    radius: 20,
                    color: "#00FF00",
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
        }, 20);
    }

    step(){
        this.moveObjects();
        // this.checkCollisions();
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


}

export default SongView;