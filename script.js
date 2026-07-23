const overlay = document.getElementById("overlay");
const video = document.getElementById("prankVideo");
const audio = document.getElementById("prankAudio");

function startPrank(){

    overlay.style.display="none";
    video.style.display="block";

    video.currentTime=0;
    audio.currentTime=0;

    // Keep both in sync
    video.muted = true;

    Promise.all([
        video.play(),
        audio.play()
    ]).catch(err=>{
        console.log(err);
    });

    if(document.documentElement.requestFullscreen){
        document.documentElement.requestFullscreen().catch(()=>{});
    }
}

document.addEventListener("click",startPrank,{once:true});
document.addEventListener("touchstart",startPrank,{once:true});

video.addEventListener("ended",()=>{
    audio.pause();
    audio.currentTime=0;
});