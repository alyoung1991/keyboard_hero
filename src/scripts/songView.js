class SongView {
    constructor(el){
        this.el = el;
        this.songView = document.createElement("div");
        this.songView.className = "song-view";
        this.songView.innerHTML = "<h1>Song View</h1>";
        this.el.appendChild(this.songView);
    }
}

export default SongView;