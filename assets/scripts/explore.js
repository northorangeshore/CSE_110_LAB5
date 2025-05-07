// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const talkButton = document.querySelector("#explore > button");
  const selectButton = document.getElementById("voice-select");
  populateVoices();
  selectButton.addEventListener("click", populateVoices);
  talkButton.addEventListener("click", playTalk);
  // TODO
}

function populateVoices(){
  let voices = [];
  voices = window.speechSynthesis.getVoices();
  for(const voice of voices){
    const option = document.createElement("option");
    option.textContent = `${voice.name}`;
    document.getElementById("voice-select").appendChild(option);    
  }
  console.log
}

function playTalk(){
  const talkImg = document.querySelector("#explore > img");
  talkImg.src = "assets/images/smiling-open.png";
//talk
  console.log(document.getElementById("option"))
  talkImg.src = "assets/images/smiling.png";

}