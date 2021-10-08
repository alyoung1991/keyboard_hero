# keyboard_hero

Background

  A Guitar Hero inspired game which allows the user to use their computer's keyboard as a musical keyboard. The application will have a game mode in which users can play a song at its original tempo, 
  The application will keep track of the user's score dependent on whether the user plays the correct node at the correct time.  

  Visually, the application will have two main sections: a “song visualization” section, and a “keyboard” section. The “song visualization” section will display a scrolling panel which shows 
  the user which notes are coming up in the song. The “keyboard” section will have a visualization of a real musical keyboard, displaying the corresponding computer key characters on each piano key.
  The application will rely mainly on the Javascript Web Audio API for handling musical notes, as well as event handlers (vanillaJS or jQuery) to listen for user keypress input.


Functionality & MVPs

  In Keyboard Hero, users will be able to:

    Use their computer's keyboard as a musical keyboard
    Play the piano/keyboard portion of a song at its original tempo
    View their current score dependent on  whether the user plays the correct node at the correct time
    View the upcoming notes to be played in a vertically scrolling view

  In addition, this project will include:

    An instructions page which defines which keyboard keys correspond to the piano keys
    An overall explanation of how gameplay will function (Scoring, increasing/decreasing score)

Wireframes

<img width="764" alt="Screen Shot 2021-10-08 at 12 57 08 AM" src="https://user-images.githubusercontent.com/26657117/136500784-79a78023-b287-45ad-89a6-fb9b6aa5101b.png">


Technologies, Libraries, APIs
  Web Audio API
  jQuery/Vanilla JS event listeners
  CSS Styling
  Webpack (project bundling)

Implementation Timeline

  Friday Afternoon & Weekend: Submit final proposal, establish project skeloton, encorporate webpack files for bundling, and Complete Keyboard functionality to support key press event listeners.
  Monday: Incorporate scrolling music score component(Utilizing a 2d array/grid), and create sample 2d arrays to represent a few songs.
  Tuesday: Establish game scoring logic, metronome functionality, and build game menus/navigation
  Wednesday: Add CSS Styling across entire application
  Thursday Morning: Add final touches, optimize performance, and resolve any errors that may exist.

Bonus Features (Optional)
  Practice and Jam session Modes
  Keyboard effects
