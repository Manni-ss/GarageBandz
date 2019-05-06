function play(note){
    console.log(note);

    var audio = new Audio("NotesXylo/" + note + ".wav");
    audio.oncanplaythrough = function(){
        audio.play();
    };

}