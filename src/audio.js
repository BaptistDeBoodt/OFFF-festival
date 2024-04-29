let audio = new Audio("audio/Misfits.mp3");
let isPlaying = false;

const toggleAudio = () => {
    if (isPlaying) {
        console.log("music is playing")
        audio.pause();
    } else {
        audio.play();
        console.log("music isnt playing")
    }
    isPlaying = !isPlaying;
}

document.getElementById('button').addEventListener('click', toggleAudio);