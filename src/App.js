import { useState } from 'react';
import './App.css';
import String from './components/String'
import notes from './noteDict.json'

function App() {
  const [audioContext, setAudioContext] = useState(null)

  const handleClick = () => {
    const context = new AudioContext();
    setAudioContext(context)

  }

  return (
    <div className="App">
      {audioContext ? (
        <div className='keyboard'>
          <div className='course'>
            <String
              audioContext={audioContext}
              frequency={392}
              waveform={'triangle'}
              noteName={'G4'} />
          </div>
          <div className='course'>
            <String
              audioContext={audioContext}
              frequency={523.25}
              waveform={'triangle'}
              noteName={'C5'} />
          </div>
          <div className='course'>
            <String
              audioContext={audioContext}
              frequency={659.25}
              waveform={'triangle'}
              noteName={'E5'} />
          </div>
          <div className='course'>
            <String
              audioContext={audioContext}
              frequency={783.99}
              waveform={'triangle'}
              noteName={'G5'} />
          </div>
        </div>
      ) : (
        <div className='welcome'>
          <h1>instrument-io</h1>
          <button onClick={handleClick}>Click to use device audio</button>
        </div>

      )}
    </div>
  );
}

export default App;
