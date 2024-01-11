score = 0;
cross = true;

audio = new Audio('game.mp3');
audiogo = new Audio('game over.mp3');
setTimeout(() => {
    audio.play()
}, 1000);

document.onkeydown = function (e) {
    console.log("key code is : ", e.keyCode)
    if (e.keyCode == 38) {
        advik = document.querySelector('.advik');
        advik.classList.add('animateadvik');
        setTimeout(() => {
            advik.classList.remove('animateadvik')
        }, 700);
    }
    if (e.keyCode == 39) {
        advik = document.querySelector('.advik');
        advikx = parseInt(window.getComputedStyle(advik, null).getPropertyValue('left'));
        advik.style.left = advikx + 112 + "px";
    }
    if (e.keyCode == 37) {
        advik = document.querySelector('.advik');
        advikx = parseInt(window.getComputedStyle(advik, null).getPropertyValue('left'));
        advik.style.left = (advikx - 112) + "px";
    }
}
setInterval(() => {
    advik = document.querySelector('.advik');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    Ax = parseInt(window.getComputedStyle(advik, null).getPropertyValue('left'));
    Ay = parseInt(window.getComputedStyle(advik, null).getPropertyValue('top'));

    Ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    Oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetx = Math.abs(Ax - Ox);
    offsety = Math.abs(Ay - Oy);
    //console.log(offsetx,offsety)
    if (offsetx < 93 && offsety < 52) {
        gameover.innerHTML ="Game over - Reload to play again"
        obstacle.classList.remove('obstacleani')
        audiogo.play()
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetx < 145 && cross) {
        score += 1
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);

    }
}, 10);
function updatescore(score) {
    scorecount.innerHTML = "your score:" + score
}