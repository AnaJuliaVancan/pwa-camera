window.addEventListener('load', e => {
    "use strict";//restrito a funcionar em navegadores comES6 >
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}); 

var constraints = {vdeo: {facingMode:"user"}, audio: false}

const cameraView = document.querySelector("#camera--view")
cameraOutput = document.querySelector("#camera--output")
cameraSensor = document.querySelector("#camera--sensor")
cameraTrigger = document.querySelector("#camera--trigger")

function cameraStart(){
    navigator.mediaDevices
    .getUserMedia(constrains)
    .then(function(stream){
        track = stream.getTracks()[0];
        cameraView.srcObjects = stream;
    })
    .catch(function(error) {
        console.error("Oops. Algo está errado.", error);
    });
}

cameraTrigger.onclick = function() {
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);
    cameraOutput.src = cameraSensor.toDataURL("image/webp")
};
window.addEventListener("load", cameraStart,false)