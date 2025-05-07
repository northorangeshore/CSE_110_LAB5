// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const volume = document.getElementById("volume");
  const horn = document.getElementById("horn-select");
  const audioButton = document.querySelector("#expose > button");
  audioButton.addEventListener("click", playSound);
  horn.addEventListener("change", updateHorn);
  volume.addEventListener("input", updateVolumeImg);

  // TODO
}

function playSound(){
  const audio = new Audio(document.getElementsByClassName("hidden").src);
  const audioVal = document.getElementsByClassName("hidden");
  if(isNaN(audioVal.volume)){
    audio.volume = 0.5;
  }
  else{
    audio.volume = audioVal.volume;
  }
  if(audioVal.src==="assets/audio/party-horn.mp3"){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
    console.log("hi");
  }
  audio.play();
}

function updateHorn(){
  const hornChoice = document.getElementById("horn-select").value;
  const hornImg = document.querySelector("#expose > img");
  const audio = document.getElementsByClassName("hidden");
  hornImg.src="assets/images/"+hornChoice+".svg";
  audio.src="assets/audio/"+hornChoice+".mp3";
  // if(hornChoice=="air-horn"){
  //   hornImg.src="assets/images/air-horn.svg";
  // }
  // else if(hornChoice=="car-horn"){
  //   hornImg.src="assets/images/car-horn.svg";
  // }
  // else if(hornChoice=="party-horn"){
  //   hornImg.src="assets/images/party-horn.svg";
  // }
  // else{
  //   hornImg.src="assets/images/no-image.png";
  // }
}

function updateVolumeImg(){
  const volumeImg = document.querySelector("#volume-controls > img");
  const volumeVal = volume.value;
  const audioVal = document.getElementsByClassName("hidden");
  audioVal.volume = Number(volumeVal)/100;
  if(volumeVal==="0"){
    volumeImg.src="assets/icons/volume-level-0.svg";
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