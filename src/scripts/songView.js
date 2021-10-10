import test from './songs/songs';

class SongView {
    constructor(el){
        this.el = el;
        this.songView = document.createElement("div");
        this.songView.className = "song-view";
        this.el.appendChild(this.songView);
        this.setup();
    }

    setup(){
        // append 2d array representing a song into the song-view element
        // append in reverse order since 2d array will fall bottom first
        let songHighway = document.createElement("div");
        songHighway.className = "song-highway";
        for(let i = test.length - 1; i >= 0; i--){
            let beat = document.createElement("div");
            beat.className = "song-beat";
            for(let j = 0; j < test[i].length; j++){
                let note = document.createElement("div");
                // todo give note a data-note attribute
                note.className = "song-note";
                note.innerHTML = test[i][j];
                beat.appendChild(note);
            }
            songHighway.appendChild(beat);
        }
        this.songView.appendChild(songHighway);
    }
}

export default SongView;