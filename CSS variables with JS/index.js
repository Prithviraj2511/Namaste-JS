var allIps=document.querySelectorAll('.choices input');

function performAction() {
    var suffix=this.dataset.suffix||'';
    
    
    if(this.name=='blur'){
        document.documentElement.style.setProperty(`--${this.name}`,this.value/10+suffix);
    }
    else{
        document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
    }
}


allIps.forEach(ip => ip.addEventListener('change',performAction));
allIps.forEach(ip => ip.addEventListener('mousemove',performAction));
