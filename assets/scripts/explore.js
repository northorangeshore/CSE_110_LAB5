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
    option.setAttribute("data-name", voice.name);
    document.getElementById("voice-select").appendChild(option);    
  }
}

function playTalk(){
  const talkImg = document.querySelector("#explore > img");
  const speakThis = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
  const selectedVoiceIndex = document.getElementById("voice-select").selectedIndex;
  let voices = [];
  voices = window.speechSynthesis.getVoices();
  const selectedVoice = voices[selectedVoiceIndex-1];
  speakThis.voice = selectedVoice;
  console.log(speakThis.voice);

  talkImg.src = "assets/images/smiling-open.png";
  window.speechSynthesis.speak(speakThis);
  talkImg.src = "assets/images/smiling.png";

}