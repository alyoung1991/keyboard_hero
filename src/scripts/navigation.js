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
        backButton.className = "back-button";
        backButton.innerHTML = '<i class="fas fa-backward"></i>';

        let that = this;
        backButton.addEventListener("click", this.handleBackButton.bind(that));
        nav.appendChild(backButton);
        this.el.appendChild(nav);
    }

    handleBackButton(){
        // if end game confirmed
        let audio = document.querySelector('audio');
        audio.pause();
        if(confirm("Are you sure you want to end game?")){
            this.game.endGame();
        }else{
            audio.play();
        }
    }

    // endGame(){
    //     const mainMenu = document.getElementById("main-menu");
    //     let main = document.getElementById("main");
    //     let game = document.querySelector(".game");
    //     document.removeEventListener("keydown", keyboard.handleKeydown.bind(keyboard));
    //     document.removeEventListener("keyup", keyboard.handleKeyup.bind(keyboard));
    //     main.classList.toggle("slide");
    //     main.classList.toggle("hidden");
    //     game.style.display = "none";
    //     main.innerHTML = '';
    //     mainMenu.classList.toggle("hidden");
    // }
}

export default Navigation