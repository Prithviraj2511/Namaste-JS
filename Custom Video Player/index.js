const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const resize =player.querySelector('.resize');

function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateButton(e) {
    if(this.paused==false){
        toggle.innerHTML='❚ ❚'
    }
    else{
        toggle.innerHTML='►'
    }
}

function skip() {
    video.currentTime+=parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name]=this.value;
}

function handleProgress() {
    const percent=(video.currentTime/video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}

function scrub(e){
    const scrubTime=(e.offsetX/progress.offsetWidth)*video.duration;
video.currentTime=scrubTime;
}

function resizeVideoFrame() {
    if(isSmallFrame){
        console.log('resize to big');
        player.requestFullscreen()
        isSmallFrame=false;
    }
    else{
        console.log('resize to small');
        document.exitFullscreen();
        isSmallFrame=true;
    }
}
video.addEventListener('click',togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button=>button.addEventListener('click',skip));
ranges.forEach(slider=>slider.addEventListener('change',handleRangeUpdate));
ranges.forEach(slider=>slider.addEventListener('mousemove',handleRangeUpdate));
video.addEventListener('timeupdate',handleProgress);
let mouse=false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousedown',()=>mouse=true);
progress.addEventListener('mouseup',()=>mouse=false);
progress.addEventListener('mousemove',(e)=>{
if(mouse==true){
    return scrub(e);
}
});
let isSmallFrame=true;
resize.addEventListener('click',resizeVideoFrame);