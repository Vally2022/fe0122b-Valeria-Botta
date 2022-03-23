fetch("audio_player.json")
    .then(function (response) { return response.json(); })
    .then(function (audio) {
    var audioPar;
    var audioPlayer = document.querySelector("#audioPlayer");
    var bloccoAudio = document.querySelector("#audio");
    audio.forEach(function (element) {
        audioPar = document.createElement("p");
        bloccoAudio.append(audioPar);
        audioPar.innerHTML = element.titolo;
        audioPar.addEventListener("click", function () {
            audioPlayer.setAttribute("src", element.audio_url);
            console.log(audioPlayer);
        });
    });
});
fetch("video_player.json")
    .then(function (response) { return response.json(); })
    .then(function (video) {
    var videoPar;
    var videoPlayer = document.querySelector("#videoPlayer");
    var bloccoVideo = document.querySelector("#video");
    video.forEach(function (element) {
        videoPar = document.createElement("p");
        bloccoVideo.append(videoPar);
        videoPar.innerHTML = element.titolo;
        videoPar.addEventListener("click", function () {
            videoPlayer.setAttribute("src", element.audio_url);
            console.log(videoPlayer);
        });
    });
});
