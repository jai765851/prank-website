function playAudio() {
    const audio = document.getElementById("prankAudio");

    audio.play()
        .then(() => console.log("Playing"))
        .catch(err => console.error(err));
}