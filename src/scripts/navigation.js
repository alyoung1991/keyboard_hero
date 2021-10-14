class Navigation {
    constructor(el, game){
        this.el = el;
        this.game = game;
        this.setup();
    }

    setup() {
        let nav = document.createElement("div");
        let backButton = document.createElement("button");
        
        nav.className = "nav";
        backButton.classList.add("back-button");
        backButton.classList.add("zoom");
        backButton.innerHTML = '<i class="fas fa-backward"></i>';

        let that = this;
        backButton.addEventListener("click", this.handleBackButton.bind(that));
        nav.appendChild(backButton);
        this.el.appendChild(nav);
    }

    handleBackButton(){
        // if end game confirmed
        // let audio = document.querySelector('audio');
        // audio.pause();
        if(confirm("Are you sure you want to end game?")){
            this.game.endGame();
        }else{
            // audio.play();
        }
    }
}

export default Navigation