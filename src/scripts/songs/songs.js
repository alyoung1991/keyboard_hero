const notes = [
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","f","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","","","","l","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","j","","","","","","","",""],
    ["","","","","","","","","","","","j","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","s","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","s","","","","","","","","","","","","","","","","",""],
    ["","","","","","f","","","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","f","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","","","","l","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","j","","","","","","","",""],
    ["","","","","","","","","","","","j","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","s","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","s","","","","","","","","","","","","","","","","",""],
    ["","","","","","f","","","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","f","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","","","","l","","","","",""],
    ["","","","","","","","","","","","","k","","","","","","",""],
    ["","","","","","","","","","","","j","","","","","","","",""],
    ["","","","","","","","","","","","j","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","g","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","s","","","","","","","","","","","","","","","","",""],
    ["","","","","","","","","","","","","","","","","","","",""],
    ["","","s","","","","","","","","","","","","","","","","",""],
    ["","","","","","f","","","","","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""],
    ["","","","","","","","","","h","","","","","","","","","",""]
];

let song = {
    notes: notes,
    tempo: 16.999,
    scale: ""
};

export default song;