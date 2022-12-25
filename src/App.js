import { useState } from 'react';
import './App.css';
import Key from './components/Key'

function App() {
  const [audioContext, setAudioContext] = useState(null)

  const handleClick = () => {
    const context = new AudioContext();
    setAudioContext(context)
  }

  return (
    <div className="App">
      <h1>instrument-react</h1>
      {audioContext ? (
        <div className='keyboard'>
          <Key
            audioContext={audioContext}
            noteName={'C5'}
            frequency={523.25}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'Db5'}
            frequency={554.37}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'D5'}
            frequency={587.33}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'Eb5'}
            frequency={622.25}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'E5'}
            frequency={659.25}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'F5'}
            frequency={698.46}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'Gb5'}
            frequency={739.99}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'G5'}
            frequency={783.99}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'Ab5'}
            frequency={830.61}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'A5'}
            frequency={880}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'Bb5'}
            frequency={932.33}
            waveform={'triangle'} />
          <Key
            audioContext={audioContext}
            noteName={'B5'}
            frequency={987.77}
            waveform={'triangle'} />
        </div>
      ) : (
        <button onClick={handleClick}>Click to use device audio</button>
      )}
    </div>
  );
}

export default App;
