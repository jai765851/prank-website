const background = document.getElementById("background");
const audio = document.getElementById("prankAudio");
const overlay = document.getElementById("overlay");

function startPrank(){

    overlay.style.display="none";
    background.style.display="block";

    audio.play();

    document.documentElement.requestFullscreen().catch(()=>{});
}

document.addEventListener("click",startPrank,{once:true});
document.addEventListener("touchstart",startPrank,{once:true});