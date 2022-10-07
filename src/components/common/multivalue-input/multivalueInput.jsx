import Input from '../input/input.component';
import './multivalueInput.component.css';


/**
 * component receive values and make list of them
 * @param {{
 *  label?:string;
 *  value: string[];
 *  onChange(value : string) => void;
 * }} props 
 */
const MultivalueInput = (props) => {

    return (
        <div className='wrapper'>
            <div>
                <Input
                    label={props.label}
                />
                <button type='button' className='nemo-button'>Add</button>
            </div>
            {
                (props.value.length > 0) && (
                    <ul>
                        {props.value.map(item => {
                            return (
                                <li key={item} >
                                    {item}
                                </li>
                            );
                        })}
                    </ul>
                )
            }

        </div>
    );
};

export default MultivalueInput;