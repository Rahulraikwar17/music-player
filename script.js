const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click',()=> sidebar.style.left = '0');

menuClose.addEventListener('click',()=> sidebar.style.left = '-100%');

let progress = document.getElementById("progress")
let song = document.getElementById("song")
let ctrlIcon= document.getElementById("ctrlicon")

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playpause(){
    if(ctrlIcon.classList.contains("bx-pause")){
        song.pause();
        ctrlIcon.classList.remove("bx-pause");
        ctrlIcon.classList.add("bx-play")

    }
    else{
        song.play();
        ctrlIcon.classList.remove("bx-play");
        ctrlIcon.classList.add("bx-pause")
    }
    
}

if(song.play()){
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
progress.onchange = function(){
    song.play();
    song.currentTime =  progress.value;
    ctrlIcon.classList.add("bx-pause")
    ctrlIcon.classList.remove("bx-play");
    
}