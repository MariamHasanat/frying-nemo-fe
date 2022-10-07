import Input from '../input/input.component';
import './multivalue-input.css';

/**
 * 
 * @param {{
 * lable?: string
 * value: string[]
 * onChange (value: string) => void
 * }} props 
 * @returns 
 */
const Multivalue = (props) => {
    return (
        <div className='multivalue-input-group'>
            <div className='input-button-wrapper'>
                <Input
                    label={props.label}
                />
                <button
                    type='button'
                    className='nemo-button'
                    onClick={props.onChange}
                >add
                </button>
            </div>
            <ul>
                {props.value.map(item => {
                    return <li key={item}>
                        <span>{item}</span>
                        <button type='button'>&times;</button>
                    </li>;
                })}
            </ul>
        </div>
    );
};

export default Multivalue;