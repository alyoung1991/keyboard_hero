import MainMenu from "./scripts/main_menu";

document.addEventListener("DOMContentLoaded", () => {
    // main menu component selectors
    const mainMenu = document.getElementById("main-menu");
    new MainMenu(mainMenu);
});


