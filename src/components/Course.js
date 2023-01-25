import Key from './Key'

const Course = (props) => {

    let openString = props.frequency;
    let fretOne = props.frequency * Math.pow(2, 1 / 12)
    let fretTwo = props.frequency * Math.pow(2, 2 / 12)
    let fretThree = props.frequency * Math.pow(2, 3 / 12)
    let fretFour = props.frequency * Math.pow(2, 4 / 12)
    let fretFive = props.frequency * Math.pow(2, 5 / 12)

    return (
        <>
            <Key
                audioContext={props.audioContext}
                fretName={'openstring'}
                frequency={openString}
                gainValue={props.gainValue} />
            <Key
                audioContext={props.audioContext}
                fretName={'fretone'}
                frequency={fretOne}
                gainValue={props.gainValue} />
            <Key
                audioContext={props.audioContext}
                fretName={'frettwo'}
                frequency={fretTwo}
                gainValue={props.gainValue} />
            <Key
                audioContext={props.audioContext}
                fretName={'fretthree'}
                frequency={fretThree}
                gainValue={props.gainValue} />
            <Key
                audioContext={props.audioContext}
                fretName={'fretfour'}
                frequency={fretFour}
                gainValue={props.gainValue} />
            <Key
                audioContext={props.audioContext}
                fretName={'fretfive'}
                frequency={fretFive}
                gainValue={props.gainValue} />

        </>
    )
}

export default Course