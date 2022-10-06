import Input from '../input/input.component';
import './multivalue-input.css';

const Multivalue = (props) => {
    return (
        <div className='multivalue-input-group'>
            <div className='input-button-wrapper'>
                <Input
                    label={props.label}
                />
                <button type='button'>add</button>
            </div>
            <ul>

            </ul>
        </div>
    );
};

export default Multivalue;