class Score {
    constructor(el){
        this.el = el;
        this.totalPoints = 0;
        this.scoreDisplay = document.createElement("div");
        this.scoreDisplay.className = "score-display";
        this.scoreDisplay.innerText = this.totalPoints;
        this.el.appendChild(this.scoreDisplay);
    }

    updateScore(points){
        // todo
        // if points < 0, animate jiggle and red coloring
        // elseif points > 0 animate bubble and green coloring
        this.scoreDisplay.innerText = parseInt(this.scoreDisplay.innerText) + points;
    }
}

export default Score;