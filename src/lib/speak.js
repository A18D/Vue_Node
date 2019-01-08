import {isKyr} from './str';

export let speakTitleTask = idTagTextContent => {
    let elem = document.getElementById (idTagTextContent);
    if (!elem) return;
    let valueTitleText = elem.textContent;
    if (!valueTitleText) return;
  
    if (window.speechSynthesis && window.speechSynthesis != 'undefined') {
      let mytimer = setInterval (() => {
        let voices = speechSynthesis.getVoices ();
  
        if (voices.length !== 0) {
          let msg = new SpeechSynthesisUtterance ();
  
          if (isKyr (valueTitleText)) {
            let ruVoice = voices.filter (voice => {
              return voice.lang == 'ru-RU';
            });
  
            if (ruVoice.length !== 0) {
              msg.voice = ruVoice[0];
              msg.voiceURI = ruVoice[0].voiceURI;
            }
          }
  
          msg.text = valueTitleText;
          speechSynthesis.speak (msg);
        }
  
        clearInterval (mytimer);
      }, 1000);
    }
  }