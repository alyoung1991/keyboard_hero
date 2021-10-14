class Score {
    constructor(el){
        this.el = el;
        this.totalPoints = 0;
        this.scoreDisplay = document.createElement("div");
        this.scoreDisplay.className = "score-display";
        this.scoreDisplay.innerHTML = this.totalPoints;
        this.el.appendChild(this.scoreDisplay);
    }

    updateScore(points){
        // animations for points gained/lossed (Need two duplicate animations to handle the same animations being executed in rapid successtion)
        if(points === 100){
            if(this.scoreDisplay.classList.contains("win-point1")){
                this.scoreDisplay.classList.remove("lose-point1");
                this.scoreDisplay.classList.remove("lose-point2");
                this.scoreDisplay.classList.remove("win-point1");
                this.scoreDisplay.classList.add("win-point2");
            }else if(this.scoreDisplay.classList.contains("win-point2")){
                this.scoreDisplay.classList.remove("lose-point1");
                this.scoreDisplay.classList.remove("lose-point2");
                this.scoreDisplay.classList.remove("win-point2");
                this.scoreDisplay.classList.add("win-point1");
            }else{
                this.scoreDisplay.classList.remove("lose-point1");
                this.scoreDisplay.classList.remove("lose-point2");
                this.scoreDisplay.classList.add("win-point1");
            }
        }else if(points === -100){
            if(this.scoreDisplay.classList.contains("lose-point1")){
                this.scoreDisplay.classList.remove("win-point1");
                this.scoreDisplay.classList.remove("win-point2");
                this.scoreDisplay.classList.remove("lose-point1");
                this.scoreDisplay.classList.add("lose-point2");
            }else if(this.scoreDisplay.classList.contains("lose-point2")){
                this.scoreDisplay.classList.remove("win-point1");
                this.scoreDisplay.classList.remove("win-point2");
                this.scoreDisplay.classList.remove("lose-point2");
                this.scoreDisplay.classList.add("lose-point1");
            }else{
                this.scoreDisplay.classList.remove("win-point1");
                this.scoreDisplay.classList.remove("win-point2");
                this.scoreDisplay.classList.add("lose-point1");
            }
        }
        // elseif points > 0 animate bubble and green coloring
        this.scoreDisplay.innerText = parseInt(this.scoreDisplay.innerText) + points;
    }
}

export default Score;