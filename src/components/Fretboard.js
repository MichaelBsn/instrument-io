import { useState, useEffect } from 'react'
import Course from './Course'



const Fretboard = ({ audioContext }) => {

    const tuningData = [
        { name: "Open C", id: "gceg", stringData: [392, 523.25, 659.25, 783.99] },
        { name: "Viola", id: "cgda", stringData: [261.63, 392, 587.33, 880] },
        { name: "Bass", id: "eadg", stringData: [329.63, 440, 587.33, 783.99] },
        { name: "Guitar", id: "eadgbe", stringData: [329.63, 440, 587.33, 783.99, 987.77, 1318.51] }
    ]

    const [showSettings, setShowSettings] = useState(false);
    const [gainValue, setGainValue] = useState(0.15)

    const [selectedTuning, setSelectedTuning] = useState(tuningData[0].name)
    const [courseFrequencies, setCourseFrequencies] = useState([392, 523.25, 659.25, 783.99])

    useEffect(() => {
        let selectedTuningData = tuningData.find(tuning => tuning.name === selectedTuning)
        setCourseFrequencies(selectedTuningData.stringData)
    }, [selectedTuning])

    function handleTuningChange(e) {
        setSelectedTuning(e.target.value)
    }

    return (
        <>
            <header>
                <button onClick={() => setShowSettings(!showSettings)}>Toggle Settings</button>
            </header>

            {showSettings && <div className='settings'>
                <div className='settings-display'>
                    <p>Current tuning: {selectedTuning}</p>
                </div>
                <div className='gain-control'>
                    <p>Gain: {gainValue}</p>
                    <input type="range" name="gain-control" id="gain-control" min={0} max={0.5} step={0.05} value={gainValue} onChange={e => setGainValue(e.target.value)} />
                </div>
                <div className='tuning-control'>
                    {tuningData.map((tuning, index) => (
                        <div className='tuning-container' key={index}>


                            <label htmlFor={tuning.id}>
                                <input
                                    type="radio"
                                    name="tuning"
                                    id={tuning.id}
                                    value={tuning.name}
                                    checked={selectedTuning === tuning.name}
                                    onChange={handleTuningChange} />
                                <span>{tuning.name}</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>}

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