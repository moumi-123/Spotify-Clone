console.log("welcome to Spotify");

//  Initialize the Variables
let songIndex = 0;
let audioelement = new Audio('1.mp3');
let AudioElement = new Audio('1.mp3'); //new Audio element

let masterplay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myprogressbar');
console.log(myProgressbar)
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Salam-e-Ishq", filePath: "1.mp3", coverpath: "assets/images/cover1.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "2.mp3" , coverpath: "cover2.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "3.mp3" , coverpath: "cover3.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "4.mp3" , coverpath: "cover4.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "5.mp3" , coverpath: "cover5.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "6.mp3", coverpath: "cover6.jpeg"},
    {songName: "Salam-e-Ishq", filePath: "7.mp3" , coverpath: "cover7.jpeg"},
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverpath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

//  audioElement.play();

// Handle play/pause click
console.log(masterplay);
masterplay.addEventListener('click', ()=>{
    // if(audioelement.paused || audioelement.currentTime<=0){
    //     audioelement.play();
    //     masterplay.classList.remove('fa-play-circle');
    //     masterplay.classList.add('fa-pause-circle');
    //     gif.style.opacity=1;
    // }
    // else{
    //     audioelement.pause();
    //     masterplay.classList.remove('fa-pause-circle');
    //     masterplay.classList.add('fa-play-circle');
    //     gif.style.opacity=0;
    // }

    if(AudioElement.paused == true){
        changeIconToPause();
        AudioElement.play(); 
    }
    else if(AudioElement.paused == false){
        changeIconToPlay();
        AudioElement.pause(); 
    }


});

// Listen to Event

audioelement.addEventListener('timeupdated', ()=>{
    console.log('timeupdated');
    // Updated Seekbar
    progress = parseInt((audioelement.currentTime/audioelement.duration)*100)
    console.log(progress);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myProgressbar.value * audioelement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click', (e)=>{ 
//         makeAllPlays();
//         songIndex = parseInt(e.target.id);
//         e.target.classList.remove('fa-play-circle');
//         e.target.classList.add('fa-pause-circle');
//         audioelement.src = `${songIndex+1}.mp3`;
//         masterSongName.innerText = songs[songIndex].songName;
//         audioelement.currentTime = 0;
//         audioelement.play();
//         gif.style.opacity = 1;
//         masterplay.classList.remove('fa-play-circle');
//         masterplay.classList.add('fa-pause-circle');

        
//     })
// })

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=6){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    // audioelement.src = `${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    // audioelement.currentTime = 0;
    // audioelement.play();
    // masterplay.classList.remove('fa-play-circle');
    // masterplay.classList.add('fa-pause-circle');
    changeIconToPause();
    stopAudio();
    playAudio(songIndex);
    

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    // audioelement.src = `${songIndex+1}.mp3`;
    // masterSongName.innerText = songs[songIndex].songName;
    // audioelement.currentTime = 0;
    // audioelement.play();
    // masterplay.classList.remove('fa-play-circle');
    // masterplay.classList.add('fa-pause-circle');

    changeIconToPause();
    stopAudio();
    playAudio(songIndex);
})


// Function for playing audio

function playAudio(songIndex){
    AudioElement.src = `${songIndex + 1}.mp3`;
    AudioElement.play();
}

// Function for stopping audio

function stopAudio(){
    AudioElement.pause();
    AudioElement.currentTime = 0;
}

//Functions for changing master icon

function changeIconToPlay(){
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-circle-play');
}

function changeIconToPause(){
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-pause-circle');
}