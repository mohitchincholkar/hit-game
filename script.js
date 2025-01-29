var timer = 60;
var Score = 0;
var hitrn = 0;
 
function increseSore (){
    Score +=10;
    document.querySelector("#Scoreval").textContent = Score;
}
function decreseSore (){
    Score -=10;
    document.querySelector("#Scoreval").textContent = Score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble (){var Clutter = "";
for (var i = 1;  i<=140; i++){
    var rn = Math.floor(Math.random()*10)
    Clutter += `<div id="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = Clutter;
}

function runtimer (){
   var timerint = setInterval(function (){
       if (timer > 0){
        timer--;
        document.querySelector("#timerval").textContent = timer;
       }
       else{
           clearInterval(timerint);
           document.querySelector("#pbtm").innerHTML = `<h1> Game over!<h1>`
       }
        
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increseSore ();
        makeBubble ();
        getNewHit ();                                                                                                                                                                                                                                                                   
    }
    else{
        decreseSore ();
    }
});
runtimer();
makeBubble();
getNewHit();