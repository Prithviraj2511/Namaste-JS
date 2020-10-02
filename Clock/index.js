var secHand=document.querySelector('.sec-hand');
var minHand=document.querySelector('.min-hand');
var hrHand=document.querySelector('.hr-hand');
function tick(){
    var currentTime=new Date();
    var sec=currentTime.getSeconds();
    var min=currentTime.getMinutes();
    var hr=currentTime.getHours();
    var secangle=(sec/60)*360+90;
    var minangle=(min/60)*360+90;
    var hrangle=(hr/24)*360+90;
    secHand.style.transform=`rotate(${secangle}deg)`;
    minHand.style.transform=`rotate(${minangle}deg)`;
    hrHand.style.transform=`rotate(${hrangle}deg)`;
}
setInterval(tick,1000);
