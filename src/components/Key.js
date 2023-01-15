import { useRef, useEffect } from 'react'

const Key = ({ audioContext, fretName, frequency, waveform }) => {

    const keyGain = useRef(audioContext.createGain()).current

    useEffect(() => {
        keyGain.connect(audioContext.destination)
    }, [])

    let attackTime = 0.03
    let sustainTime = 0.15
    let releaseTime = 0.05
    let minGain = 0
    let maxGain = 0.25

    function hertzToNote(hertz) {
        let notes = ["C", "C#Db", "D", "D#Eb", "E", "F", "F#Gb", "G", "G#Ab", "A", "A#Bb", "B"];
        let index = 12 * (Math.log(hertz / 440) / Math.log(2)) + 57;
        let octave = Math.floor(index / 12);
        let note = notes[Math.round(index) % 12] + octave;
        return note;
    }

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
        <button className={fretName} onMouseDown={handleKeyDown}>Key {hertzToNote(frequency)}</button>
    )
}

export default Key