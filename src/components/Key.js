import { useRef, useEffect } from 'react'

const Key = ({ audioContext, noteName, frequency, waveform }) => {

    const keyGain = useRef(audioContext.createGain()).current

    let attackTime = 0.05
    let sustainTime = 0.3
    let releaseTime = 0.05
    let minGain = 0
    let maxGain = 0.25

    useEffect(() => {
        keyGain.connect(audioContext.destination)
    }, [])

    function makeBeep(freq, wave) {
        const noteOsc = audioContext.createOscillator();

        noteOsc.frequency.setValueAtTime(freq, 0)
        noteOsc.type = wave

        keyGain.gain.setValueAtTime(minGain, audioContext.currentTime) //attack
        keyGain.gain.linearRampToValueAtTime(maxGain, audioContext.currentTime + attackTime) //decay
        keyGain.gain.setValueAtTime(maxGain, audioContext.currentTime + attackTime + sustainTime) //sustain
        keyGain.gain.linearRampToValueAtTime(minGain, audioContext.currentTime + attackTime + sustainTime + releaseTime) //release

        noteOsc.connect(keyGain)
        noteOsc.start();
        noteOsc.stop(audioContext.currentTime + attackTime + sustainTime + releaseTime)
    }

    const handleKeyDown = () => {
        makeBeep(frequency, waveform)
    }

    return (
        <button onMouseDown={handleKeyDown}>Key {noteName}</button>
    )
}

export default Key