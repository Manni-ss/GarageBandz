var notes = ["Notes/a2.wav","Notes/b2.wav", "Notes/c2.wav", "Notes/d2.wav", "Notes/e2.wav", "Notes/f2.wav", "Notes/g2.wav"];

function sound(num){
    var audio = new Audio(notes[num]);
    audio.play();
}