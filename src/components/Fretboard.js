import { useState, useEffect } from 'react'
import Course from './Course'

const tuningData = [
    { name: "Open C", id: "gceg", stringData: [392, 523.25, 659.25, 783.99] },
    { name: "Viola", id: "cgda", stringData: [261.63, 392, 587.33, 880] },
    { name: "Bass", id: "eadg", stringData: [329.63, 440, 587.33, 783.99] }
]

const Fretboard = ({ audioContext }) => {
    const [showSettings, setShowSettings] = useState(false);
    const [gainValue, setGainValue] = useState(0.15)

    const [selectedTuning, setSelectedTuning] = useState(tuningData[0].name)
    const [courseFrequencies, setCourseFrequencies] = useState([392, 523.25, 659.25, 783.99])

    useEffect(() => {
        console.log(selectedTuning)
        if (selectedTuning === "Open C") {
            console.log("Doing open c stuff")
            let tuning = tuningData[0]
            setCourseFrequencies(tuning.stringData)
        } else if (selectedTuning === "Viola") {
            console.log("doing Viola stuff")
            let tuning = tuningData[1]
            setCourseFrequencies(tuning.stringData)
        } else if (selectedTuning === "Bass") {
            console.log("doing Bass stuff")
            let tuning = tuningData[2]
            setCourseFrequencies(tuning.stringData)
        } else {
            console.log("no tuning selected")
        }
    }, [selectedTuning])

    function handleTuningChange(e) {
        setSelectedTuning(e.target.value)
    }

    return (
        <>
            <div className='controls'>
                <button onClick={() => setShowSettings(!showSettings)}>Toggle Settings</button>
                {showSettings && <div className='settings'>
                    <div className='gain-control'>
                        <input type="range" name="gain-control" id="gain-control" min={0} max={0.5} step={0.05} value={gainValue} onChange={e => setGainValue(e.target.value)} />
                        <p>Gain: {gainValue}</p>
                    </div>
                    <div className='tuning-control'>
                        Current tuning: {selectedTuning}
                        {tuningData.map((tuning, index) => (
                            <div key={index}>
                                <label htmlFor={tuning.id}>{tuning.name}</label>
                                <input
                                    type="radio"
                                    name="tuning"
                                    id={tuning.id}
                                    value={tuning.name}
                                    checked={selectedTuning === tuning.name}
                                    onChange={handleTuningChange} />
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
            <div className='fretboard'>
                {courseFrequencies.map((freq, index) => (
                    <div className='course' key={index}>
                        <Course
                            audioContext={audioContext}
                            gainValue={gainValue}
                            frequency={freq} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default Fretboard