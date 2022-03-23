fetch("audio_player.json")
  .then((response) => response.json())
  .then((audio) => {
    var audioPar;
    var audioPlayer: any = document.querySelector("#audioPlayer");

    var bloccoAudio = document.querySelector("#audio");
    audio.forEach((element) => {
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
  .then((response) => response.json())
  .then((video) => {
    var videoPar;
    var videoPlayer: any = document.querySelector("#videoPlayer");

    var bloccoVideo = document.querySelector("#video");
    video.forEach((element) => {
      videoPar = document.createElement("p");
      bloccoVideo.append(videoPar);
      videoPar.innerHTML = element.titolo;
      videoPar.addEventListener("click", function () {
        videoPlayer.setAttribute("src", element.audio_url);
        console.log(videoPlayer);
      });
    });
  });
