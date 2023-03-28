import { useState } from 'react'
import './passwd-strength.css'
import RequiredText from '../../common/required-text/required-text.component';

const StrengthBar = () => {
    const [strength, setStrength] = useState(0);
    const colors = [`gray`, `red`, `orange`, `green`]

    setTimeout(() => {
        setStrength(3);
    }, 1000);

    return <div className='strength-bar'>
        <div className='bar-container'>
            <div style={{ backgroundColor: colors[strength] }} className={`bar ${strength >= 1 ? `filled` : ``}`}></div>
        </div>
        <div className='bar-container'>
            <div style={{ backgroundColor: colors[strength] }} className={`bar ${strength >= 2 ? `filled` : ``}`}></div>
        </div>
        <div className='bar-container'>
            <div style={{ backgroundColor: colors[strength] }} className={`bar ${strength >= 3 ? `filled` : ``}`}></div>
        </div>
    </div>
}

const PasswdStrength = () => {
    return <div className="passwd-strength">
        <RequiredText className='requirement' text="hey">8 Characters</RequiredText>
        <RequiredText className='requirement' text="hey">Lowercase & Uppercase</RequiredText>
        <p className='requirement'>Special Characters</p>
        <StrengthBar></StrengthBar>
    </div>
}

export default PasswdStrength;
