score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("key code is : ", e.keyCode)
    if (e.keyCode==38){
        advik = document.querySelector('.advik');
        advik.classList.add('animateadvik');
        setTimeout(() => {
        advik.classList.remove('animateadvik')
        },700);
    }
    if (e.keyCode==39){
        advik = document.querySelector('.advik');
        advikx = parseInt(window.getComputedStyle(advik,null).getPropertyValue('left'));
        advik.style.left=advikx + 112 + "px";
    }
    if (e.keyCode==37){
        advik = document.querySelector('.advik');
        advikx = parseInt(window.getComputedStyle(advik,null).getPropertyValue('left'));
        advik.style.left= (advikx - 112) + "px";
    }
}
setInterval(() => {
    advik = document.querySelector('.advik');
    gameover = document.querySelector('.gameover');
obstacle = document.querySelector('.obstacle');

Ax = parseInt(window.getComputedStyle(advik,null).getPropertyValue('left'));
Ay =parseInt(window.getComputedStyle(advik,null).getPropertyValue('top'));

Ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
Oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

offsetx = Math.abs(Ax-Ox);
offsety = Math.abs(Ay-Oy);
//console.log(offsetx,offsety)
if(offsetx<93 && offsety<52){
    gameover.style.visiblity = 'visible';
    obstacle.classList.remove('obstacleani')
}
else if(offsetx< 145 && cross) {
    score+=1
    updatescore(score);
    cross=false;
    setTimeout(() =>{
        cross = true;
    },1000);
}
},10);
function updatescore(score){
    scorecount.innerHTML= "your score:" + score
}