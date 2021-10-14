const handleSpeek = () => {
    const speak = (msg) => {
      const sp = new SpeechSynthesisUtterance(msg);
      [sp.voice] = speechSynthesis.getVoices();
      speechSynthesis.speak(sp);
    };
    speak('My name is Amina Anika,'
    + 'you are so nice,'
    + 'code is life');
  
  }
<button onClick={()=> handleSpeek()}>Speak</button>