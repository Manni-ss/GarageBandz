
var screams = ["yells/angry.mp3", "yells/angst.wav","yells/frustrated.wav","yells/happy.mp3","yells/ecstatic.wav",
"yells/scared.wav","yells/pig.wav","yells/exhasterbated.mp3"];

function scream(num){
    var audio = new Audio(screams[num]);
    audio.play();
}