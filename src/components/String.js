import { useRef, useEffect } from 'react'
import Key from './Key'

const String = ({ audioContext, frequency }) => {



    let openString = frequency;
    let fretOne = frequency * Math.pow(2, 1 / 12)
    let fretTwo = frequency * Math.pow(2, 2 / 12)
    let fretThree = frequency * Math.pow(2, 3 / 12)
    let fretFour = frequency * Math.pow(2, 4 / 12)
    let fretFive = frequency * Math.pow(2, 5 / 12)

    return (
        <>
            <Key
                audioContext={audioContext}
                fretName={'openstring'}
                frequency={openString}
                waveform={'sine'} />
            <Key
                audioContext={audioContext}
                fretName={'fretone'}
                frequency={fretOne}
                waveform={'sine'} />
            <Key
                audioContext={audioContext}
                fretName={'frettwo'}
                frequency={fretTwo}
                waveform={'sine'} />
            <Key
                audioContext={audioContext}
                fretName={'fretthree'}
                frequency={fretThree}
                waveform={'sine'} />
            <Key
                audioContext={audioContext}
                fretName={'fretfour'}
                frequency={fretFour}
                waveform={'sine'} />
            <Key
                audioContext={audioContext}
                fretName={'fretfive'}
                frequency={fretFive}
                waveform={'sine'} />

        </>
    )
}

export default String