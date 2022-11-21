// Add js here.

//Page Load
const videoElement = document.querySelector(".video");
videoElement.autoplay = false;
videoElement.loop = true;
videoElement.load();

//Play Button
const playButton = document.getElementById("play");
playButton.onclick = function () {
    videoElement.play();
};

//Pause Button
const pauseButton = document.getElementById("pause");
pauseButton.onclick = function () {
    videoElement.pause();
};

const speeds = [0.5, 1, 2];

//Slow Down
const slowerButton = document.getElementById("slower");
slowerButton.onclick = function () {
    if (speeds.indexOf(videoElement.playbackRate) > 0){
        videoElement.playbackRate = speeds[speeds.indexOf(videoElement.playbackRate) - 1];
    }
    else {
        alert("Video is at slowest speed!");
    }
};

//Speed Up
const fasterButton = document.getElementById("faster");
fasterButton.onclick = function () {
    if (speeds.indexOf(videoElement.playbackRate) < 2){
        videoElement.playbackRate = speeds[speeds.indexOf(videoElement.playbackRate) + 1];
    }
    else {
        alert("Video is at fastest speed!");
    }
};

//Skip Ahead
const skipAheadButton = document.getElementById("skip");
skipAheadButton.onclick = function () {
    videoElement.currentTime = videoElement.ended ? 0 : videoElement.currentTime+15;
};

const volumeSlider = document.getElementById("slider");
const volumeLabel = document.getElementById("volume");

//Mute
const muteButton = document.getElementById("mute");
muteButton.onclick = function () {
    if (!videoElement.muted){
        videoElement.muted = true;
        //videoElement.volume = 0;
        muteButton.textContent = "Unmute";
        //volumeLabel.textContent = 0;
        //volumeSlider.value = 0;
    }
    
    else {
        videoElement.muted = false;
        //videoElement.volume = 1;
        muteButton.textContent = "Mute";
        //volumeLabel.textContent = 100;
        //volumeSlider.value = 100;
    }
};

//Volume Slider
volumeSlider.addEventListener("change", function(e) {
    videoElement.volume = e.currentTarget.value / 100;
    volumeLabel.textContent = e.currentTarget.value;
})




