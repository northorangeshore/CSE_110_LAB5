// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const volume = document.getElementById("volume")
  volume.addEventListener("input", updateVolumeImg);

  // TODO
}

function updateVolumeImg(){
  const volumeImg = document.querySelector("#volume-controls > img");
  const volumeVal = volume.value;
  console.log(volumeImg.src);
  if(volumeVal==="0"){
    volumeImg.src="assets/icons/volume-level-0.svg";
    console.log(volumeImg.src);
  }
  else if(volumeVal<=33){
    volumeImg.src="assets/icons/volume-level-1.svg";
  }
  else if(volumeVal <=67){
    volumeImg.src="assets/icons/volume-level-2.svg";
  }
  else{
    volumeImg.src="assets/icons/volume-level-3.svg";
  }
}