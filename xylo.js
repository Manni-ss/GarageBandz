function play(note){
    console.log(note);

    var audio = new Audio("Notes/" + note + ".wav");
    audio.oncanplaythrough = function(){
        audio.play();
    };

}