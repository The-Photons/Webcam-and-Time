let startWebcam = document.querySelector("#start-webcam");

startWebcam.addEventListener("click", () => {
    startWebcam.innerHTML = `<video autoplay id="webcam-video"></video>`;
    startWebcam.removeAttribute("href");

    let video = document.querySelector("#webcam-video");
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true})
            .then(function (stream) {
                video.srcObject = stream;
            })
            .catch(function (error) {
                alert(`Something went wrong: ${error}`);
            });
    }
});
