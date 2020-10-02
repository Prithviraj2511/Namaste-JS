window.addEventListener('keydown',playSound);

function playSound (e) {
    var audio=document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
    var key=document.querySelector(`div[data-key="${e.key.toLowerCase()}"]`);
    if(audio==null){
        return;
    }
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing'); 
}

function removeTransition(e){
    if(e.propertyName!=="transform")return;
    this.classList.remove('playing');
}

var tabs=document.querySelectorAll('.tab');
tabs.forEach( tab=> tab.addEventListener('transitionend',removeTransition));