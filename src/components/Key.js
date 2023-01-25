import { useRef, useEffect, useState } from 'react'

const Key = ({ audioContext, gainValue = 0.25, fretName, frequency }) => {

    const keyGain = useRef(audioContext.createGain()).current
    const [keyGainValue, setKeyGainValue] = useState(0.25)

    useEffect(() => {
        keyGain.connect(audioContext.destination)
    }, [])

    useEffect(() => {
        setKeyGainValue(gainValue)
    }, [gainValue])

    function hertzToNote(hertz) {
        let notes = ["C", "C#Db", "D", "D#Eb", "E", "F", "F#Gb", "G", "G#Ab", "A", "A#Bb", "B"];
        let index = 12 * (Math.log(hertz / 440) / Math.log(2)) + 57;
        let octave = Math.floor(index / 12);
        let note = notes[Math.round(index) % 12] + octave;
        return note;
    }

    //not using this function right now but its handy to keep around
    function noteToHertz(note) {
        let notes = { "C": 16.35, "C#": 17.32, "D": 18.35, "D#": 19.45, "E": 20.60, "F": 21.83, "F#": 23.12, "G": 24.50, "G#": 25.96, "A": 27.50, "A#": 29.14, "B": 30.87 };
        let noteName = note.slice(0, -1);
        let octave = parseInt(note.slice(-1));
        let hertz = notes[noteName] * Math.pow(2, octave - 4);
        return hertz;
    }

    function makeBeep(freq, wave) {
        let attackTime = 0.03
        let sustainTime = 0.15
        let releaseTime = 0.05
        let minGain = 0

        const noteOsc = audioContext.createOscillator();

        noteOsc.frequency.setValueAtTime(freq, 0)
        noteOsc.type = wave

        keyGain.gain.setValueAtTime(minGain, audioContext.currentTime) //attack
        keyGain.gain.linearRampToValueAtTime(keyGainValue, audioContext.currentTime + attackTime) //decay
        keyGain.gain.setValueAtTime(keyGainValue, audioContext.currentTime + attackTime + sustainTime) //sustain
        keyGain.gain.linearRampToValueAtTime(minGain, audioContext.currentTime + attackTime + sustainTime + releaseTime) //release

        noteOsc.connect(keyGain)
        noteOsc.start();
        noteOsc.stop(audioContext.currentTime + attackTime + sustainTime + releaseTime)
    }

    const handleKeyDown = () => {
        makeBeep(frequency, "triangle")
        makeBeep(frequency, "sine")
    }

    return (
        <button className={fretName} onMouseDown={handleKeyDown}>{hertzToNote(frequency)}</button>
    )
}

export default Key