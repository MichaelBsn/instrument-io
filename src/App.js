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
      {audioContext ? (
        <div className='keyboard'>
          <div className='course'>
            <Key
              audioContext={audioContext}
              noteName={'E4'}
              frequency={329.63}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'F4'}
              frequency={349.23}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'Gb4'}
              frequency={369.99}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'G4'}
              frequency={392.00}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'Ab4'}
              frequency={415.30}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'A4'}
              frequency={440.00}
              waveform={'sine'} />
          </div>
          <div className='course'>
            <Key
              audioContext={audioContext}
              noteName={'A4'}
              frequency={440.00}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'Bb4'}
              frequency={466.16}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'B4'}
              frequency={493.88}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'C5'}
              frequency={523.25}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'Db5'}
              frequency={554.37}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'D5'}
              frequency={587.33}
              waveform={'sine'} />
          </div>
          <div className='course'>
            <Key
              audioContext={audioContext}
              noteName={'D5'}
              frequency={587.33}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'Eb5'}
              frequency={622.25}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'E5'}
              frequency={659.25}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'F5'}
              frequency={698.46}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'Gb5'}
              frequency={739.99}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'G5'}
              frequency={783.99}
              waveform={'sine'} />
          </div>
          <div className='course'>
            <Key
              audioContext={audioContext}
              noteName={'G5'}
              frequency={783.99}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'Ab5'}
              frequency={830.61}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'A5'}
              frequency={880}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'Bb5'}
              frequency={932.33}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'B5'}
              frequency={987.77}
              waveform={'sine'} />
            <Key
              audioContext={audioContext}
              noteName={'C6'}
              frequency={1046.50}
              waveform={'sine'} />

          </div>

        </div>
      ) : (
        <>
          <h1>instrument-react</h1>
          <button onClick={handleClick}>Click to use device audio</button>
        </>

      )}
    </div>
  );
}

export default App;
