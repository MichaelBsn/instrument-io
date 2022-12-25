import { useState, useRef, useEffect } from 'react'

const Key = ({ audioContext, noteName, frequency, waveform }) => {

    const keyGain = useRef(audioContext.createGain()).current

    useEffect(() => {
        keyGain.gain.setValueAtTime(0.05, 0)
        keyGain.connect(audioContext.destination)
    }, [])

    function makeBeep(freq, wave) {
        const noteOsc = audioContext.createOscillator();
        noteOsc.frequency.setValueAtTime(freq, 0)
        noteOsc.type = wave
        noteOsc.connect(keyGain)
        noteOsc.start();
        noteOsc.stop(audioContext.currentTime + 0.25)
    }

    const handleKeyPress = () => {
        makeBeep(frequency, waveform)
    }

    return (
        <button onClick={handleKeyPress}>Key {noteName}</button>
    )
}

export default Key