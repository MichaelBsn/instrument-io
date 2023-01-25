import { useState } from 'react';
import './App.css';
import Fretboard from './components/Fretboard';

function App() {
  const [audioContext, setAudioContext] = useState(null)



  const handleClick = () => {
    const context = new AudioContext();
    setAudioContext(context)
  }

  return (
    <div className="App">
      {audioContext ? (
        <>
          <Fretboard audioContext={audioContext} />
        </>
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
