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
        if(confirm("Are you sure you want to end game?")){
            this.endGame();
        }
    }

    endGame(){
        const mainMenu = document.getElementById("main-menu");
        document.getElementById("main").innerHTML = '';
        document.getElementById("game").style.display = "none";
        mainMenu.classList.toggle("hidden");
    }
}

export default Navigation