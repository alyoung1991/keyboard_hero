class Navigation {
    constructor(el, game){
        this.el = el;
        this.game = game;
        this.setup();
    }

    setup() {
        let nav = document.createElement("div");
        let backButton = document.createElement("button");
        let body = document.querySelector("body");
        
        nav.className = "nav";
        backButton.classList.add("back-button");
        backButton.classList.add("zoom");
        backButton.innerHTML = '<i class="fas fa-backward"></i>';

        // pause modal elements
        let pauseModalContainer = document.createElement("div");
        let pauseModal = document.createElement("div");
        pauseModalContainer.className = "pause-modal-container";
        pauseModal.className = "pause-modal";

        // pause modal content container
        let pauseModalContentContainer = document.createElement("div");
        pauseModalContentContainer.className = "pause-modal-content-container";

        // pause modal content
        let pauseModalMessage = document.createElement("div");
        pauseModalMessage.className = "pause-modal-message";
        pauseModalMessage.innerText = "Return to main menu?";

        let pauseModalButtonsContainer = document.createElement("div");
        pauseModalButtonsContainer.className = "pause-modal-buttons-container";
        let mainMenuButton = document.createElement("button");
        mainMenuButton.className = "pause-modal-main-menu-button";
        mainMenuButton.innerText = "Main Menu";
        let resumeButton = document.createElement("button");
        resumeButton.className = "pause-modal-resume-button";
        resumeButton.innerText = "Resume";

        pauseModalButtonsContainer.appendChild(mainMenuButton);
        pauseModalButtonsContainer.appendChild(resumeButton);
        
        pauseModalContentContainer.appendChild(pauseModalMessage);
        pauseModalContentContainer.appendChild(pauseModalButtonsContainer);

        pauseModal.appendChild(pauseModalContentContainer);
        
        pauseModalContainer.appendChild(pauseModal);


        let that = this;
        backButton.addEventListener("click", this.handleBackButton.bind(that));
        nav.appendChild(backButton);
        this.el.appendChild(nav);
        body.appendChild(pauseModalContainer);
    }

    handleBackButton(){
        let pauseModalContainer = document.querySelector(".pause-modal-container");
        pauseModalContainer.style.visibility = 'visible';
    }
}

export default Navigation